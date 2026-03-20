import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ItemSelectorSection from "./components/ItemSelectorSection";
import LiveOpsHowItWorks from "./components/LiveOpsHowItWorks";
import MovePlan from "./components/MovePlan";

const queryClient = new QueryClient();

export const WHATSAPP_URL =
  "https://wa.me/917090913336?text=Hi%20Relocate%20Xpress,%20I%20want%20a%20moving%20quote";

export function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
}

export default function App() {
  const [homeSize, setHomeSize] = useState("2BHK");
  const [fromLocation, setFromLocation] = useState("Whitefield");
  const [toLocation, setToLocation] = useState("Indiranagar");

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-h-screen bg-background font-inter"
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
          />
          <MovePlan
            homeSize={homeSize}
            fromLocation={fromLocation}
            toLocation={toLocation}
          />
          <LiveOpsHowItWorks />
          <ItemSelectorSection />
          <Guarantee onBookSlot={openWhatsApp} />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
