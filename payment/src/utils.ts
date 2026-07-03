type ClassValue = string | number | boolean | undefined | null | ClassValue[]

export const cn = (...inputs: ClassValue[]): string => {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export type IClassValue = string | number | boolean | undefined | null | IClassValue[]

export const capitalize = (
    str: string
) => {

    if (
        !str ||
        typeof str !== "string"
    )
        return ""

    const res = str
        .split(/[-_]/g)
        .join(" ")

    return (
        res.charAt(0)
            .toUpperCase() +
        res.slice(1)
    )
}