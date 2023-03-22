import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginComponent } from "./pages/login.component";
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
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/pageB" element={<PageB />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};