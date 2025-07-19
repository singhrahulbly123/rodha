// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SuccessStories from "../components/SuccessStories";
import WhyChoose from "../components/WhyChoose";
import StatsSection from "../components/StatsSection";
import MockPrograms from "../components/MockPrograms";
import ComparisonTable from "../components/ComparisonTable";
import ScoreCard from "../components/ScoreCard";
import Faculty from "../components/Faculty";
import Testimonials from "../components/Testimonials";
import CatMockBanner from "../components/CatMockBanner";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SuccessStories />
      <WhyChoose />
      <StatsSection />
      <MockPrograms />
      <ComparisonTable />
      <ScoreCard />
      <Faculty />
      <Testimonials />
      <CatMockBanner />
      <ContactForm />
      <Footer />
    </>
  );
}
