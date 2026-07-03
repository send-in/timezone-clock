"use client"

// #region imports
import { useState } from "react"

import { Button } from "@/base"
import { Linkedin } from "@/icons"
import { login } from "@/lib"
// #endregion

export const LoginButton = ({ isAccount = false }: {
    isAccount?: boolean
}) => {
    const [loading, setLoading] = useState(false)

    return (
        <Button
            fullWidth
            variant="neutral"
            startIcon={<Linkedin />}
            loading={loading}
            loadingText="Redirecting"
            disabled={isAccount}
            onClick={() => {
                setLoading(true)
                login()
            }}
        >
            Continue with LinkedIn
        </Button>
    )
}