import { ROUTES } from "./routes";
import { Route, Routes } from "react-router-dom";

import {
    // public
    HomePage,
    ContactUs,
    NotFoundPage,
} from "../pages";


function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.HOME} element={<ContactUs />} />
            <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
