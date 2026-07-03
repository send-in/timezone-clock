// #region Imports
import {
    useState,
    useEffect
} from "react"

import { isAuthorized } from "@/lib"
// #endregion

export const useAuthorized = () => {
    const [authorized, setAuthorized] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            const {success} = await isAuthorized()
            setAuthorized(!!success)
        })()
    }, [chrome.cookies])

    return {
        authorized
    }
}
