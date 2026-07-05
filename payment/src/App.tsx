// #region imports
import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom"

import { Footer } from "@/components"

import { 
    Dashboard,
    Privacy,
    Terms
} from "@/pages"
// #endregion


const App = () => {
    return (
        <>
            <BrowserRouter>
                <main className="
                    h-full w-full bg-bluewash
                    flex flex-col items-center rounded-xl
                    justify-center p-6

                    max-mobile:h-max
                    max-mobile:gap-12
                ">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/privacy-policy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                    </Routes>
                    <Footer/>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App