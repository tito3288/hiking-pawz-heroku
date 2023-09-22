import React from "react";
import ProductComp from "../components/ProductComp";
import NavbarComp from "../components/NavbarComp";
import CarouselComp from "../components/CarouselComp";
import FooterPage from "../components/FooterPage";
import ProductDesc from "../components/ProductDesc";
import MissionCom from "../components/MissionCom";
import SubscriptionComp from "../components/SubscriptionComp";
import { motion } from "framer-motion";
import Video from "../components/Video";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1, type: "spring", bounce: 0.5 },
      }}
    >
      <div
        style={{
          backgroundColor: "#121212",
          backgroundImage: "url(./backgrounds/hiking-background.png)",
        }}
      >
        <NavbarComp />
        <CarouselComp />
        <MissionCom />
        <ProductDesc />
        <ProductComp />
        <Video />
        <SubscriptionComp />
        <FooterPage />
      </div>
    </motion.div>
  );
};

export default LandingPage;
