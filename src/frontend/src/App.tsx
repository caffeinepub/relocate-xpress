import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import FadeIn from "./components/FadeIn";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ItemSelectorSection from "./components/ItemSelectorSection";
import LiveOpsHowItWorks from "./components/LiveOpsHowItWorks";
import MovePlan from "./components/MovePlan";
import NationalTrustBar from "./components/NationalTrustBar";
import OurSystem from "./components/OurSystem";
import WhyTrustMoveX from "./components/WhyTrustMoveX";
import { calcPrice, calcTimeLabel, getDistance } from "./lib/relocateEngine";

const queryClient = new QueryClient();

export const WHATSAPP_URL =
  "https://wa.me/916296982596?text=Hi%20MoveX%2C%20I%20want%20a%20moving%20quote.%20Pickup%3A%20__%20Drop%3A%20__%20Home%20size%3A%20__";

export function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
}

export default function App() {
  const [homeSize, setHomeSize] = useState("2BHK");
  const [fromLocation, setFromLocation] = useState("Bangalore");
  const [toLocation, setToLocation] = useState("Mumbai");

  const dynamicPrice = calcPrice(fromLocation, toLocation, homeSize);
  const dynamicTimeLabel = calcTimeLabel(getDistance(fromLocation, toLocation));

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-h-screen bg-background font-inter pb-20 md:pb-0"
        style={{ background: "oklch(0.085 0.024 252)" }}
      >
        <Header />
        <main>
          <Hero
            homeSize={homeSize}
            setHomeSize={setHomeSize}
            fromLocation={fromLocation}
            setFromLocation={setFromLocation}
            toLocation={toLocation}
            setToLocation={setToLocation}
            onBookSlot={openWhatsApp}
            dynamicPrice={dynamicPrice}
            dynamicTimeLabel={dynamicTimeLabel}
          />
          <FadeIn>
            <NationalTrustBar />
          </FadeIn>
          <FadeIn>
            <WhyTrustMoveX />
          </FadeIn>
          <FadeIn>
            <MovePlan
              homeSize={homeSize}
              fromLocation={fromLocation}
              toLocation={toLocation}
              dynamicPrice={dynamicPrice}
              dynamicTimeLabel={dynamicTimeLabel}
            />
          </FadeIn>
          <FadeIn>
            <LiveOpsHowItWorks />
          </FadeIn>
          <FadeIn>
            <OurSystem />
          </FadeIn>
          <FadeIn>
            <ItemSelectorSection />
          </FadeIn>
          <FadeIn>
            <Guarantee onBookSlot={openWhatsApp} />
          </FadeIn>
        </main>
        <FadeIn>
          <Footer />
        </FadeIn>
      </div>
      <FloatingWhatsApp />
      <Toaster />
    </QueryClientProvider>
  );
}
