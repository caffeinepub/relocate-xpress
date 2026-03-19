import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const OPTIONS = [
  {
    icon: Calendar,
    label: "Book Online",
    sub: "Fill the form — 30 sec",
    primary: true,
  },
  { icon: Phone, label: "Call Now", sub: "+91 800 123 4567", primary: false },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sub: "Chat with an expert",
    primary: false,
  },
];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const handleBook = () => {
    toast.success("Slot reserved! Our team will call you within 5 minutes.");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        data-ocid="booking.dialog"
        className="max-w-md"
        style={{
          background: "oklch(0.11 0.03 252)",
          border: "1px solid oklch(0.22 0.04 252)",
          borderRadius: "1.25rem",
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-foreground">
            Lock Your Slot
          </DialogTitle>
          <DialogDescription style={{ color: "oklch(0.55 0.02 252)" }}>
            Choose how you'd like to proceed
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-2">
          {OPTIONS.map(({ icon: Icon, label, sub, primary }) => (
            <button
              key={label}
              type="button"
              data-ocid={`booking.${label.toLowerCase().replace(/ /g, "_")}.button`}
              onClick={handleBook}
              className="w-full flex items-center gap-4 rounded-xl px-5 py-4 transition-all hover:-translate-y-0.5"
              style={{
                background: primary
                  ? "linear-gradient(135deg, oklch(0.82 0.11 82), oklch(0.88 0.12 82))"
                  : "oklch(0.15 0.04 252)",
                border: primary ? "none" : "1px solid oklch(0.22 0.04 252)",
                color: primary
                  ? "oklch(0.085 0.024 252)"
                  : "oklch(0.97 0.008 252)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: primary
                    ? "oklch(0 0 0 / 0.15)"
                    : "oklch(0.82 0.11 82 / 0.1)",
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{
                    color: primary
                      ? "oklch(0.085 0.024 252)"
                      : "oklch(0.82 0.11 82)",
                  }}
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">{label}</p>
                <p className="text-xs opacity-70">{sub}</p>
              </div>
            </button>
          ))}
        </div>

        <p
          className="text-center text-xs mt-3"
          style={{ color: "oklch(0.38 0.02 252)" }}
        >
          No payment required to book. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
}
