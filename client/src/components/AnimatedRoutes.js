import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ItemPage from "../pages/collars/ItemPage";
import Col2 from "../pages/collars/Col2";
import Col3 from "../pages/collars/Col3";
import Col4 from "../pages/collars/Col4";
import Col5 from "../pages/collars/Col5";
import Col6 from "../pages/collars/Col6";
import Col7 from "../pages/collars/Col7";
import Col8 from "../pages/collars/Col8";
import Col9 from "../pages/collars/Col9";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Contact-Us";
import LandingPage from "../pages/LandingPage";
import ExchangesReturns from "../pages/Exchanges-Returns";
import { AnimatePresence } from "framer-motion";
import SuccessContact from "./SuccessContact";
import SuccessSubscription from "./SuccessSubscription";
import WarrantyPolicies from "../pages/WarrantyPolicies";
import SubscriptionComp from "./SubscriptionComp";
import Success from "./Success";
import Cancel from "./Cancel";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<LandingPage />} />
        <Route path="ItemPage" element={<ItemPage />} />
        <Route path="Col2" element={<Col2 />} />
        <Route path="Col3" element={<Col3 />} />
        <Route path="Col4" element={<Col4 />} />
        <Route path="Col5" element={<Col5 />} />
        <Route path="Col6" element={<Col6 />} />
        <Route path="Col7" element={<Col7 />} />
        <Route path="Col8" element={<Col8 />} />
        <Route path="Col9" element={<Col9 />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Contact-Us" element={<ContactUs />} />
        <Route path="Exchanges-Returns" element={<ExchangesReturns />} />
        <Route path="WarrantyPolicies" element={<WarrantyPolicies />} />
        <Route path="SuccessContact" element={<SuccessContact />} />
        <Route path="SuccessSubscription" element={<SuccessSubscription />} />
        <Route path="SubscriptionComp" element={<SubscriptionComp />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Cancel" element={<Cancel />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
