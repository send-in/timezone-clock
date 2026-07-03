// #region imports
import madaRegular from "@fontsource/mada/400.css?inline"
import madaMedium from "@fontsource/mada/500.css?inline"
import madaSemibold from "@fontsource/mada/600.css?inline"
import madaBold from "@fontsource/mada/700.css?inline"
import globalCss from "@/globals.css?inline"

import { 
    createRoot, 
    type Root 
} from "react-dom/client"

import { 
    inferTimezone, 
    parseProfile,
} from "@/lib"

import { 
    CurrentTimePill,
    TimezonePill
} from "@/widgets"
// #endregion

const SHADOW_CSS = [
    globalCss, 
    madaRegular, 
    madaMedium, 
    madaSemibold, 
    madaBold
].join("\n")
.replace(/:root/g, ":host")

const HOST_ID = "sendin-pill-host"
let root: Root | null = null

const startObserver = () => {
    const observer = new MutationObserver(() => {
        if (document.getElementById(HOST_ID))
            return
    
        const messageLinks = Array.from(
            document.querySelectorAll<HTMLAnchorElement>(
                'a[href*="/messaging/compose/"]'
            )
        )
    
        const connectLinks = Array.from(
            document.querySelectorAll<HTMLAnchorElement>(
                'a[href*="/preload/custom-invite"]'
            )
        )
    
        const followLinks = Array.from(
            document.querySelectorAll<HTMLButtonElement>(
                'button[aria-label*="Follow"]'
            )
        )
    
        const links = 
            connectLinks.length > 0 ? 
                connectLinks : 
                messageLinks.length > 0 ? 
                    messageLinks : 
                    followLinks
    
        if (links.length < 2) 
            return
    
        const linkContainer = links.at(1)
        .closest<HTMLElement>("[data-display-contents='true']")
        
        const actions = 
            linkContainer?.parentElement?.parentElement?.parentElement
            
        const { location } = parseProfile()
        const timezone = inferTimezone(location)
    
        if(actions && timezone){
            const host = document.createElement("div")
            host.id = HOST_ID
        
            host.setAttribute("data-display-contents", "true")
            host.style.marginTop = "10px"
            actions.append(host)
        
            const shadow = host.attachShadow({ mode: "open" })
            const style = document.createElement("style")
            style.textContent = SHADOW_CSS
            shadow.appendChild(style)
        
            const mountPoint = document.createElement("div")
        
            mountPoint.style.display = "flex"
            mountPoint.style.alignItems = "center"
            mountPoint.style.gap = "8px"
            shadow.appendChild(mountPoint)
        
            root?.unmount()
            root = createRoot(mountPoint)
        
            root.render(
                <>
                    <CurrentTimePill timezone={timezone}/>
                    <TimezonePill timezone={timezone}/>
                </>
            )
        }
    
    })
    
    observer.observe(
        document, {
            attributes: false, 
            characterData: false,
    
            childList: true, 
            subtree:true
        }
    )
}

(async () => {
    const {isAuthorized} = await chrome?.runtime?.sendMessage({ 
        action: "IS_AUTHORISED",
    })

    if (!isAuthorized){
        await chrome?.runtime?.sendMessage({ 
            action: "OPEN_POPUP",
        })
        return
    }

    startObserver()
})()