// #region imports
import { 
    isAuthorized
} from "@/lib"
// #endregion

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "OPEN_POPUP") {
        chrome.action.openPopup()
    }
})

chrome.runtime.onMessage.addListener(async(message, _, sendResponse) => {
    if (message.action === "IS_AUTHORISED") {
        const {success} = await isAuthorized()
        sendResponse({isAuthorized: success})
    }
})