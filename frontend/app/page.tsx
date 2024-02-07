"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "./navbar";
import { PageWrapper } from "./page-wrapper";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl mb-4">Home Page</h1>
          <Link href="/about">Go to About</Link>
        </div>
      </PageWrapper>
    </>
  );
};

export default HomePage;
