import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionProvider } from "./common/sessionContext";
import { LoginComponent } from "./pages/login.component";
import { LoginContainer } from "./pages/login.container";
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
                    {/* <Route path="/" element={<SessionProvider />} /> */}
                    <Route path="/" element={<LoginContainer />} />
                    <Route path="/pageB" element={<PageB />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};