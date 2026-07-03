// #region imports
import { _PAYMENTS_URL } from "@/constants"

import { 
    _DELETE,
    _GET, 
    _POST 
} from "@/lib/api"
// #endregion

interface IOrder {
    orderId: string
    amount: number
    currency: string
}

export const createPayment = async () => {
    const res = await _POST<IOrder>(
        `${_PAYMENTS_URL}`, {},
        { withAuth: true },
    )

    if (
        res.success &&
        res.data
    ) {
        return {
            success: true,
            data: {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: res.data.amount,
                currency: res.data.currency,
                order_id: res.data.orderId,
                name: "Timezone Clock",
                theme: { color: "#4285F4" },
            },
        }
    }

    return {
        success: false,
        error: res.error,
    }
}

export const pollPayment = async (
    orderId: string,
    maxAttempts = 15,
    intervalMs = 2000,
) => {
    for (let i = 0; i < maxAttempts; i++) {
        const res = await _GET<{status: string}>(
            `${_PAYMENTS_URL}/${orderId}`,{},
            { withAuth: true },
        )

        console.log(res)

        if (
            res.success &&
            res.data?.status === "succeeded"
        )
            return res

        await new Promise( r => setTimeout(
            r, 
            intervalMs
        ))
    }

    return {
        success: false,
        error: "Payment processing timed out",
    }
}

export const cancelSubscription = async () => {
    const res = await _DELETE(
        `${_PAYMENTS_URL}`, {},
        { withAuth: true },
    )

    if (res.success) {
        return {
            success: true,
            data: res.data,
        }
    }

    return {
        success: false,
        error: res.error,
    }
}