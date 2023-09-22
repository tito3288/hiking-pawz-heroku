import React from "react";
import { productArray } from "../../productArray";
import FooterPage from "../../components/FooterPage";
import NavbarComp from "../../components/NavbarComp";
import ItemComp from "../../components/ItemComp";
import { motion } from "framer-motion";
import ScrollToTop from "../../components/ScrollToTop";

const Col7 = () => {
  const product7 = productArray.find((value) => {
    return value.id === "price_1MlNoXL8hk1dUwiAyAnAgwpf";
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
      <ItemComp id={product7.id} />
      <FooterPage></FooterPage>
    </motion.div>
  );
};

export default Col7;
