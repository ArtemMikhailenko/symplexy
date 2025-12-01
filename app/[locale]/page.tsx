import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import BrandsCarousel from "@/components/BrandsCarousel";

// Lazy load components below the fold
const PopularNeuralNetworks = dynamic(() => import("@/components/PopularNeuralNetworks"), {
  loading: () => <div className="h-[600px]" />,
});
const NumbersSection = dynamic(() => import("@/components/NumbersSection"), {
  loading: () => <div className="h-[400px]" />,
});
const ForWhomSection = dynamic(() => import("@/components/ForWhomSection"), {
  loading: () => <div className="h-[636px]" />,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="h-[600px]" />,
});
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-[500px]" />,
});
const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  loading: () => <div className="h-[600px]" />,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="h-[400px]" />,
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <div className="h-[500px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-[300px]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Brands Carousel */}
      <BrandsCarousel />

      {/* Popular Neural Networks Section */}
      <PopularNeuralNetworks />

      {/* Numbers Section */}
      <NumbersSection />

      {/* For Whom Section */}
      <ForWhomSection />

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
