import React from "react"
import { Route, Routes} from "react-router-dom"
import { Home } from "./Home"
import { Order } from "./Order"
import { About } from "./About"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Order" element={<Order />} />
                <Route exact path="/About" element={<About />} />
            </Routes>
        </>
    )
}