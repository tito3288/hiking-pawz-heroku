import React from "react";
import { productArray } from "../../productArray";
import FooterPage from "../../components/FooterPage";
import NavbarComp from "../../components/NavbarComp";
import ItemComp from "../../components/ItemComp";
import { motion } from "framer-motion";
import ScrollToTop from "../../components/ScrollToTop";

const Col8 = () => {
  const product8 = productArray.find((value) => {
    return value.id === "price_1MlNonL8hk1dUwiAsshp2AK9";
  });

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
      <ItemComp id={product8.id} />
      <FooterPage></FooterPage>
    </motion.div>
  );
};

export default Col8;
