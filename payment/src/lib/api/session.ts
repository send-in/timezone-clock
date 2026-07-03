// #region imports
import { _POST } from "@/lib/api"
import { _AUTH_URL } from "@/constants"
// #endregion

export const login = () => {
    window.location.href = `${_AUTH_URL}/linkedin`
}

export const logout = async () => {
    await _POST(
        `${_AUTH_URL}/logout`,
        {},
        { withAuth: true },
    )

    window.location.href = "/"
}