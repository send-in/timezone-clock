export const Privacy = () => {
    return (
        <article
            className="
                w-full max-w-4xl
                rounded-3xl border border-grey-100
                bg-white shadow-sm
                p-10 space-y-8
                
                max-mobile:rounded-2xl
                max-mobile:p-6
                max-mobile:space-y-6
            "
        >
            <header className="space-y-2">
                <h1
                    className="
                        text-4xl font-semibold text-charcoal-100
                        max-mobile:text-3xl
                    "
                >
                    Privacy Policy
                </h1>

                <p className="text-grey-300">
                    Effective Date: July 2026
                </p>
            </header>

            <section
                className="
                    space-y-4
                    text-charcoal-100
                    leading-7

                    max-mobile:text-sm
                    max-mobile:leading-6
                "
            >
                <p>
                    Timezone Clock respects your privacy and is committed to
                    protecting your personal information. This Privacy Policy
                    explains what information we collect, how it is used, and
                    how it is protected.
                </p>

                <p>
                    We collect basic account information provided through
                    LinkedIn authentication, including your name, email
                    address, and LinkedIn account identifier. If you purchase
                    the Extension, payments are securely processed by
                    Razorpay. We only store information required to verify
                    your purchase, such as payment status and transaction
                    identifiers. We never store your card details or banking
                    information.
                </p>

                <p>
                    The Extension reads LinkedIn page content solely to detect
                    locations and display local times. This information is
                    processed only to provide the Extension's functionality
                    and is not sold or shared with third parties.
                </p>

                <p>
                    We use the <strong>sendin_access</strong> cookie to
                    securely authenticate your account, maintain your session,
                    and verify your premium access.
                </p>

                <p>
                    We do not sell or rent your personal information.
                    Information is shared only when required to provide our
                    services, process payments, or comply with legal
                    obligations.
                </p>

                <p>
                    If you have any questions, please contact{" "}
                    <a
                        href="mailto:magnum@opusco.dev"
                        className="text-blue-100 hover:text-blue-200"
                    >
                        magnum@opusco.dev
                    </a>.
                </p>
            </section>
        </article>
    )
}