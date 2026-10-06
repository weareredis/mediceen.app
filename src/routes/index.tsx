import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { JourneySection } from "@/components/sections/JourneySection";
import { FinalMomentSection } from "@/components/sections/FinalMomentSection";

const title = "Mediceen - MECEE-BL Medical Entrance Prep";
const description =
  "The Mediceen app is a CEE preparation app and a MECEE-BL preparation app. MCQs, spaced review, flashcards, and a MECEE-BL mock test app for Nepal's medical entrance exam.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mediceen.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://mediceen.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "Mediceen",
          applicationCategory: "EducationalApplication",
          operatingSystem: "iOS, Android",
          description,
          url: "https://mediceen.app/",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <JourneySection />
      <FinalMomentSection />
    </main>
  );
}
