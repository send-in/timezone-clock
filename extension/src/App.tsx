// #region imports
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom"

import {
    LoginForm,
    Protected,
    TemplateForm,
} from "@/components"
// #endregion

const DashboardPage = () => {
    return (
        <HashRouter>
            <article
                className="
                    h-full flex text-grey-200 text-base
                    justify-between p-2 gap-4
                "
            >
                <Routes>
                    <Route path="/login"
                        element={
                           <LoginForm/>
                        }
                    />

                    <Route element={<Protected/>}>
                        <Route path="/"
                            element={
                                <TemplateForm/>
                            }
                        />
                    </Route>
                </Routes>
            </article>
        </HashRouter>
    )
}

export default DashboardPage