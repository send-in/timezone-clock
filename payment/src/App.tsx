// #region imports
import { useEffect, useState } from "react"

import {
    Button,
    Information
} from "@/base"

import {
    LoginButton,
    PurchaseButton
} from "@/components"

import { Logo } from "@/icons"
import { getProfile, IAccount } from "@/lib"
// #endregion

const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState<IAccount | null>(null)

    useEffect(() => {
        (async () => {
            const res = await getProfile()
            if (res.success)
                setAccount(res.data)

            setLoading(false)
        })()
    }, [])

    if (loading)
        return null

    return (
        <main className="
            h-full w-full bg-bluewash
            flex flex-col items-center rounded-xl
            justify-center p-6
        ">
            <article
                className="
                    bg-white rounded-3xl shadow-sm border
                    border-grey-100 w-full max-w-xl
                    p-8 flex flex-col gap-8 mb-10
                "
            >
                <aside className="
                    flex items-center gap-3
                ">
                    <Logo
                        size={42}
                        className="fill-blue-100"
                    />

                    <div>
                        <h1 className="
                            text-3xl font-semibold
                            text-charcoal-100
                        ">
                            Timezone for LinkedIn
                        </h1>

                        <p className="
                            text-grey-300
                        ">
                            Know the local time of every LinkedIn connection.
                        </p>
                    </div>
                </aside>

                <section className="
                    grid gap-2
                    text-charcoal-100
                ">
                    <p>🕒 &ensp;Live Local Time</p>
                    <p>🌎 &ensp;Automatic Timezone Detection</p>
                    <p>📋 &ensp;Free 10+ Professional Templates</p>
                </section>

                <Information 
                    description="Your support helps us build powerful automation tools."
                />

                <section className="space-y-6 w-full">
                    <aside className="space-y-2">
                        <p className="
                            flex items-center gap-2
                            text-sm font-medium
                            text-charcoal-100
                        ">
                            <span>
                                {
                                    account
                                        ? "✅"
                                        : "Step 1"
                                }
                            </span>

                            Connect LinkedIn
                        </p>

                        <LoginButton 
                            isAccount={Boolean(account)}
                        />
                    </aside>

                    <aside className="space-y-2">
                        <p className="
                            flex items-center gap-2
                            text-sm font-medium
                            text-charcoal-100
                        ">
                            <span>
                                {
                                    account?.plan === "pro"
                                        ? "✅"
                                        : "Step 2"
                                }
                            </span>

                            Unlock Timezone for LinkedIn
                        </p>

                        <PurchaseButton
                            isPro={account?.plan === "pro"}
                            onSuccess={() =>
                                window.location.reload()
                            }
                        />
                    </aside>

                    {
                        account?.plan === "pro" &&
                        <aside className="space-y-2">
                            <p className="
                                flex items-center gap-2
                                text-sm font-medium
                                text-charcoal-100
                            ">
                                <span>Step 3</span>

                                Continue to Linkedin
                            </p>

                            <a  href="https://www.linkedin.com/in/visshon/">
                                <Button 
                                    fullWidth
                                    variant="purple-200"
                                >
                                    You're Pro 🎉
                                </Button>
                            </a>
                        </aside>
                    }
                </section>
            </article>

             <section className="
                absolute bottom-10 px-12
                w-full flex justify-between
                items-end text-grey-200
            ">
                <aside>
                    <p>
                        {new Date().getFullYear()}{" "} 
                        © SendIn
                    </p>
                    <p></p>
                    <a
                        className="text-grey-300 hover:text-blue-200 smooth" 
                        href="mailto:vshon447@gmail.com">
                        vshon447@gmail.com
                    </a>
                </aside>


                <div>
                    Made with &thinsp; 💙 &thinsp; at 
                    <a
                        className="text-blue-100 hover:text-blue-200 smooth ml-2" 
                        href="https://www.opusco.dev">
                        OpusCo
                    </a>
                </div>
            </section>

        </main>
    )
}

export default Dashboard