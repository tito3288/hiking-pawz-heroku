import React from "react";
import ItemComp from "../../components/ItemComp";
import FooterPage from "../../components/FooterPage";
import { productArray } from "../../productArray";
import NavbarComp from "../../components/NavbarComp";
import { motion } from "framer-motion";
import ScrollToTop from "../../components/ScrollToTop";

const ItemPage = () => {
  const product1 = productArray.find(
    (value) => value.id === "price_1MlNlwL8hk1dUwiAbNSMfmDn"
  );

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1, type: "spring", bounce: 0.5 },
      }}
      style={{
        backgroundColor: "#121212",
        backgroundImage: "url(./backgrounds/dark-leather.png)",
        height: "100%",
      }}
    >
      <ScrollToTop />
      <NavbarComp />
      <ItemComp id={product1.id} />
      <FooterPage></FooterPage>
    </motion.div>
  );
};

export default ItemPage;
