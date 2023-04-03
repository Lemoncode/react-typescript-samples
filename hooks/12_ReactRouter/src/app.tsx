import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageA } from "./pages/pageA";
import { PageB } from "./pages/pageB";

/**
 * not use Switch (V6)
 * @returns 
 */
export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageA />} />
                    <Route path="/pageB" element={<PageB />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};