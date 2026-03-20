import { ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WHATSAPP_URL =
  "https://wa.me/916296982596?text=Hi%20MoveX,%20I%20want%20a%20moving%20quote";

export default function IntercityMovingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.085 0.024 252)" }}
    >
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <a
          href="#/"
          data-ocid="intercity_moving.back.button"
          className="footer-service-link inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <div
          className="rounded-2xl p-8 md:p-10 mb-8"
          style={{
            background: "oklch(0.10 0.03 252 / 0.8)",
            border: "1px solid oklch(0.22 0.04 252)",
            borderLeft: "4px solid oklch(0.82 0.11 82)",
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.82 0.11 82)" }}
          >
            MoveX Service
          </p>
          <h1
            className="text-3xl md:text-4xl font-black mb-4 leading-tight"
            style={{ color: "oklch(0.97 0.008 252)" }}
          >
            Intercity Moving &mdash;{" "}
            <span style={{ color: "oklch(0.88 0.12 82)" }}>
              Across India, Door to Door
            </span>
          </h1>
          <p
            className="text-base mb-8"
            style={{ color: "oklch(0.62 0.02 252)" }}
          >
            MoveX connects major cities with a controlled relocation network.
          </p>

          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.82 0.11 82 / 0.7)" }}
          >
            What you get
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Route optimization for faster delivery",
              "Secure packaging for long-distance moves",
              "Continuous tracking and updates",
              "Reliable delivery timelines",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                  style={{
                    background: "oklch(0.82 0.11 82 / 0.15)",
                    border: "1px solid oklch(0.82 0.11 82 / 0.4)",
                    color: "oklch(0.88 0.12 82)",
                  }}
                >
                  &#10003;
                </span>
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.85 0.01 252)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="intercity_moving.whatsapp.primary_button"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide"
          >
            <MessageCircle className="w-4 h-4" />
            Get a Free Quote on WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
