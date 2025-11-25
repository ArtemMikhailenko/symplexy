import HeroSection from "@/components/HeroSection";
import BrandsCarousel from "@/components/BrandsCarousel";
import PopularNeuralNetworks from "@/components/PopularNeuralNetworks";
import NumbersSection from "@/components/NumbersSection";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Brands Carousel */}
      <BrandsCarousel />

      {/* Popular Neural Networks Section */}
      <PopularNeuralNetworks />

      {/* Numbers Section */}
      <NumbersSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <FAQSection />

      {/* Blog Section */}
      <BlogSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Form & Footer - Shared Background */}
      <div
        className="relative bg-[#08142c]"
        style={{
          backgroundImage: "url(/images/footer-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
