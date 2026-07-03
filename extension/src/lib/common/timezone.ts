import cityData from "@/cities.json"
import countryData from "@/countries.json"

interface CityEntry {
    city: string
    country: string // ISO2
    timezone: string
}

interface CountryEntry {
    name: string
    timezone: string
}

type CountryMap = Record<string, CountryEntry>

const cities = cityData as CityEntry[]
const countries = countryData as CountryMap

// ---------------------------------------------------------------------------
// Common aliases / nicknames that don't match official country.json names
// exactly. Map straight to ISO2 codes that exist in country.json.
// ---------------------------------------------------------------------------
const COUNTRY_ALIASES: Record<string, string> = {
    "uk": "GB",
    "u.k.": "GB",
    "great britain": "GB",
    "britain": "GB",
    "england": "GB",
    "scotland": "GB",
    "wales": "GB",
    "northern ireland": "GB",
    "usa": "US",
    "u.s.a.": "US",
    "u.s.": "US",
    "us": "US",
    "united states of america": "US",
    "south korea": "KR",
    "north korea": "KP",
    "russia": "RU",
    "vietnam": "VN",
    "uae": "AE",
    "united arab emirates": "AE",
    "czech republic": "CZ",
    "czechia": "CZ",
    "ivory coast": "CI",
    "netherlands": "NL",
    "holland": "NL",
}

// ---------------------------------------------------------------------------
// String normalization helpers
// ---------------------------------------------------------------------------
function normalizeString(str: string): string {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // strip diacritics
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
}

function normalizeCity(city: string): string {
    return city
        .replace(/^Greater\s+/i, "")
        .replace(/\s+Metropolitan Area$/i, "")
        .replace(/\s+Metro Area$/i, "")
        .replace(/\s+Area$/i, "")
        .trim()
}

// ---------------------------------------------------------------------------
// Build indices once at module load
// ---------------------------------------------------------------------------

// countryCode (uppercase) -> timezone
const countryTimezoneIndex = new Map<string, string>()
// normalized country name -> countryCode
const countryNameIndex = new Map<string, string>()
// set of valid ISO2 codes (uppercase) for quick membership checks
const countryCodeSet = new Set<string>()

for (const [code, entry] of Object.entries(countries)) {
    const upperCode = code.toUpperCase()
    countryCodeSet.add(upperCode)
    countryTimezoneIndex.set(upperCode, entry.timezone)
    countryNameIndex.set(normalizeString(entry.name), upperCode)
}

// normalized alias -> countryCode (only keep aliases pointing at known codes)
const countryAliasIndex = new Map<string, string>()
for (const [alias, code] of Object.entries(COUNTRY_ALIASES)) {
    const upperCode = code.toUpperCase()
    if (countryCodeSet.has(upperCode))
        countryAliasIndex.set(normalizeString(alias), upperCode)
}

// "COUNTRYCODE|normalizedcity" -> timezone
const cityCountryIndex = new Map<string, string>()
// normalized city -> array of matching entries (for country-less lookups)
const cityIndex = new Map<string, CityEntry[]>()

for (const entry of cities) {
    const cityKey = normalizeString(entry.city)
    const countryKey = entry.country.toUpperCase()

    cityCountryIndex.set(`${countryKey}|${cityKey}`, entry.timezone)

    const existing = cityIndex.get(cityKey)
    if (existing) {
        existing.push(entry)
    } else {
        cityIndex.set(cityKey, [entry])
    }
}

// ---------------------------------------------------------------------------
// Country resolution
// ---------------------------------------------------------------------------
function resolveCountryCode(token: string): string | undefined {
    const raw = token.trim()

    // Already a bare ISO2 code
    if (/^[A-Za-z]{2}$/.test(raw)) {
        const upper = raw.toUpperCase()
        if (countryCodeSet.has(upper))
            return upper
    }

    const normalized = normalizeString(raw)

    const alias = countryAliasIndex.get(normalized)
    if (alias)
        return alias

    const byName = countryNameIndex.get(normalized)
    if (byName)
        return byName

    return undefined
}

// ---------------------------------------------------------------------------
// City resolution
// ---------------------------------------------------------------------------
function lookupCityInCountry(rawPart: string, countryCode: string): string | undefined {
    const cityKey = normalizeString(normalizeCity(rawPart))
    return cityCountryIndex.get(`${countryCode}|${cityKey}`)
}

function lookupCityAnywhere(rawPart: string, preferredCountry?: string): string | undefined {
    const cityKey = normalizeString(normalizeCity(rawPart))
    const matches = cityIndex.get(cityKey)

    if (!matches || matches.length === 0)
        return undefined

    if (preferredCountry) {
        const preferred = matches.find(m => m.country.toUpperCase() === preferredCountry)
        if (preferred)
            return preferred.timezone
    }

    return matches[0].timezone
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------
export function inferTimezone(location: string): string | undefined {
    const parts = location
        .split(",")
        ?.map(part => part.trim())
        ?.filter(Boolean)

    if (parts.length === 0)
        return undefined

    // 1. Find a country among the parts, scanning from the end first
    //    ("City, Region, Country" is the most common shape).
    let countryCode: string | undefined
    let countryPartIndex = -1

    for (let i = parts.length - 1; i >= 0; i--) {
        const code = resolveCountryCode(parts[i])
        if (code) {
            countryCode = code
            countryPartIndex = i
            break
        }
    }

    const remainingParts = parts.filter((_, idx) => idx !== countryPartIndex)

    // 2. If we have a country, try every remaining part as a city name,
    //    scoped strictly to that country.
    if (countryCode) {
        for (const part of remainingParts) {
            const tz = lookupCityInCountry(part, countryCode)
            if (tz)
                return tz
        }
    }

    // 3. Try every remaining part as a city name globally (any country),
    //    preferring the resolved country if there's ambiguity.
    for (const part of remainingParts) {
        const tz = lookupCityAnywhere(part, countryCode)
        if (tz)
            return tz
    }

    // 4. As a last resort, try the country part itself as a city name too
    //    (handles inputs like "Mexico" meaning Mexico City, or where the
    //    "country" part was actually misclassified).
    if (countryPartIndex !== -1) {
        const tz = lookupCityAnywhere(parts[countryPartIndex], countryCode)
        if (tz)
            return tz
    }

    // 5. Fall back to the country's own timezone.
    if (countryCode) {
        const tz = countryTimezoneIndex.get(countryCode)
        if (tz)
            return tz
    }

    return undefined
}