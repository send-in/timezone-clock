import { useLocation } from "react-router-dom"

export const Footer = () => {
    const { pathname } = useLocation()

    return (
        <footer className="
            absolute bottom-10 px-12
            w-full flex justify-between
            items-end text-grey-200
        ">
            <a
                className="text-grey-300 hover:text-blue-200 smooth" 
                href="mailto:magnum@opusco.dev">
                magnum@opusco.dev
            </a>

            <section 
                data-path={pathname}
                className="space-x-4 text-sm group"
            >
                <a
                    href="/"
                    className="
                        text-blue-100 hover:text-blue-200 
                        smooth group-data-[path=/]:text-blue-200 
                    " 
                >
                    Subscribe
                </a>

                <a
                    href="/privacy-policy"
                    className="
                        hover:text-charcoal-200 smooth
                        group-data-[path=/privacy-policy]:text-black
                    " 
                >
                    Privacy Policy
                </a>

                <a
                    href="/terms"
                    className="
                        hover:text-charcoal-200 smooth
                        group-data-[path=/terms]:text-black
                    " 
                >
                    Terms Conditions
                </a>
            </section>

            <section>
                <p>
                    {new Date().getFullYear()}{" "} 
                    © OpusCo
                </p>
                <aside>
                    Made with &thinsp; 💙 &thinsp; at 
                    <a
                        className="text-blue-100 hover:text-blue-200 smooth ml-2" 
                        href="https://www.opusco.dev">
                        OpusCo
                    </a>
                </aside>
            </section>
        </footer>
    )
}