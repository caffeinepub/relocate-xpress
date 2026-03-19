import { useQuery } from "@tanstack/react-query";
import type { Pricing, Truck } from "../backend.d";
import { useActor } from "./useActor";

export function useGetEstimate(homeSize: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Pricing>({
    queryKey: ["estimate", homeSize],
    queryFn: async () => {
      if (!actor) {
        // Return default fallback data
        const defaults: Record<string, Pricing> = {
          "1BHK": { cost: BigInt(6500), time: BigInt(4), teamSize: BigInt(3) },
          "2BHK": { cost: BigInt(8500), time: BigInt(6), teamSize: BigInt(4) },
          "3BHK": { cost: BigInt(12500), time: BigInt(8), teamSize: BigInt(6) },
        };
        return defaults[homeSize] ?? defaults["2BHK"];
      }
      return actor.getEstimate(homeSize);
    },
    enabled: !isFetching,
    placeholderData: {
      cost: BigInt(8500),
      time: BigInt(6),
      teamSize: BigInt(4),
    },
  });
}

export function useGetLiveOperations() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<Truck>>({
    queryKey: ["liveOperations"],
    queryFn: async () => {
      if (!actor) {
        return [
          {
            number: BigInt(21),
            location: "Whitefield",
            status: "active" as any,
          },
          {
            number: BigInt(8),
            location: "Electronic City",
            status: "inTransit" as any,
          },
          {
            number: BigInt(14),
            location: "Indiranagar",
            status: "completed" as any,
          },
          {
            number: BigInt(3),
            location: "Koramangala",
            status: "active" as any,
          },
          {
            number: BigInt(17),
            location: "HSR Layout",
            status: "inTransit" as any,
          },
        ];
      }
      return actor.getAllTruckStatuses();
    },
    enabled: !isFetching,
    refetchInterval: 8000,
    placeholderData: [
      { number: BigInt(21), location: "Whitefield", status: "active" as any },
      {
        number: BigInt(8),
        location: "Electronic City",
        status: "inTransit" as any,
      },
      {
        number: BigInt(14),
        location: "Indiranagar",
        status: "completed" as any,
      },
    ],
  });
}
