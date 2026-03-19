import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveOpsHowItWorks from "./components/LiveOpsHowItWorks";
import MovePlan from "./components/MovePlan";

const queryClient = new QueryClient();

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [homeSize, setHomeSize] = useState("2BHK");
  const [fromLocation, setFromLocation] = useState("Whitefield");
  const [toLocation, setToLocation] = useState("Indiranagar");

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-h-screen bg-background font-inter"
        style={{ background: "oklch(0.085 0.024 252)" }}
      >
        <Header onBookNow={() => setBookingOpen(true)} />
        <main>
          <Hero
            homeSize={homeSize}
            setHomeSize={setHomeSize}
            fromLocation={fromLocation}
            setFromLocation={setFromLocation}
            toLocation={toLocation}
            setToLocation={setToLocation}
            onBookSlot={() => setBookingOpen(true)}
          />
          <MovePlan
            homeSize={homeSize}
            fromLocation={fromLocation}
            toLocation={toLocation}
          />
          <LiveOpsHowItWorks />
          <Guarantee onBookSlot={() => setBookingOpen(true)} />
        </main>
        <Footer />
        <BookingModal
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
