"use client"

// #region imports
import confetti from "canvas-confetti"

import {
    useCallback,
    useEffect,
    useState,
} from "react"

import { Button } from "@/base"

import {
    createPayment,
    loadRazorPay,
    pollPayment,
} from "@/lib"
// #endregion

interface IPurchaseButton {
    onSuccess?: () => void,
    isPro?: boolean
    isAccount?: boolean
}

export const PurchaseButton = ({
    onSuccess,
    isPro = false,
    isAccount = false,
}: IPurchaseButton) => {
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)
    const [processing, setProcessing] = useState(false)

    const handlePurchase = useCallback(async () => {
        setLoading(true)

        try {
            const loaded = await loadRazorPay()

            if (!loaded) {
                setError(
                    "Failed to load Razorpay",
                )
                return
            }

            const {
                success,
                data: options,
                error,
            } = await createPayment()

            if (!success || !options) {
                setError(
                    error ??
                    "Failed to create order",
                )
                return
            }

            const orderId =
                options.order_id

            new (window as any).Razorpay({
                ...options,

                description:
                    "Timezone for LinkedIn",

                handler: async () => {
                    setProcessing(true)

                    const payment =
                        await pollPayment(
                            orderId,
                        )

                    setProcessing(false)

                    if (payment.success){
                        confetti({
                            particleCount: 150,
                            spread: 80,
                            origin: {
                                y: 0.6,
                            },
                        })
                        onSuccess?.()
                    }
                    else
                        setError(
                            payment.error ??
                            "Payment failed",
                        )
                },
            }).open()
        } catch (e) {
            console.error(e)

            setError(
                "Something went wrong",
            )
        } finally {
            setLoading(false)
        }
    }, [onSuccess])

    useEffect(() => {
        if (!error)
            return

        const timer = setTimeout(
            () => setError(undefined),
            3000,
        )

        return () =>
            clearTimeout(timer)
    }, [error])

    return (
        <>
            {
                error &&
                <p className="
                    text-red-500
                    text-sm
                ">
                    {error}
                </p>
            }

            {
                processing &&
                <p className="
                    text-grey-300
                    text-sm
                ">
                    Processing payment...
                </p>
            }

            <Button
                variant="primary"
                fullWidth
                onClick={handlePurchase}
                disabled={isPro || !isAccount}
                loading={
                    loading ||
                    processing
                }
                loadingText={
                    processing
                        ? "Processing"
                        : "Purchasing"
                }
            >
                Buy Lifetime • $1.99
            </Button>
        </>
    )
}