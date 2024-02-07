"use client";

// pages/about.js
import React from "react";
import Link from "next/link";
import { Navbar } from "../navbar";
import { PageWrapper } from "../page-wrapper";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl mb-4 font-mono">About Page</h1>
          <Link href="/">Go to Home</Link>
        </div>
      </PageWrapper>
    </>
  );
};

export default AboutPage;
