import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Distribution from "./components/Distribution";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Portfolio />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <Distribution />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
