// Home.tsx
import React from 'react';
import { Element } from 'react-scroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { FeaturedMenu } from './components/FeaturedMenu';
import { ChefPreview } from './components/ChefPreview';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SchemaMarkup } from './components/SchemaMarkup';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup />
      <Navbar />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="features">
        <Features />
      </Element>

      <Element name="menu">
        <FeaturedMenu />
      </Element>

      <Element name="chefs">
        <ChefPreview />
      </Element>

      <Element name="plans">
        <SubscriptionPlans />
      </Element>

      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Element name="blog">
        <Blog />
      </Element>

      <Element name="faq">
        <FAQ />
      </Element>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;
