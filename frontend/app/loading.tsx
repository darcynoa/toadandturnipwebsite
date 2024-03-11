"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "../components/page-wrapper";

const Preloader = () => {
  return (
    <>
      <PageWrapper>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50"
        >
          <div className="text-2xl">Loading...</div>
        </motion.div>
      </PageWrapper>
    </>
  );
};

export default Preloader;
