"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { PageWrapper } from "../components/page-wrapper";

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl mb-4 font-serif">Home Page</h1>
          <Link href="/about">Go to Aboot</Link>
        </div>
      </PageWrapper>
    </>
  );
};

export default HomePage;
