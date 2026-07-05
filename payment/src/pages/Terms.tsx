export const Terms = () => {
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
                    Terms &amp; Conditions
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
                    By purchasing or using Timezone Clock, you are granted a
                    non-exclusive, non-transferable license to use the
                    Extension for personal or business purposes. You may not
                    copy, redistribute, resell, modify, or reverse engineer
                    the Extension without prior written permission.
                </p>

                <p>
                    Timezone Clock is designed to provide accurate timezone
                    detection across supported LinkedIn pages. While AI
                    improves location recognition, some websites, profiles,
                    or edge cases may not always be detected or displayed
                    correctly. The Extension is provided on a best-effort
                    basis, and perfect accuracy cannot be guaranteed.
                </p>

                <p>
                    We may release updates, bug fixes, and improvements to
                    maintain compatibility and enhance functionality. We
                    reserve the right to modify these Terms or discontinue
                    features at any time. Continued use of the Extension
                    constitutes acceptance of the latest version of these
                    Terms.
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