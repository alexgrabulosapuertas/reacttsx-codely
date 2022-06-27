import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { CardDetail } from "./CardDetail";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path=":id" element={<CardDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}