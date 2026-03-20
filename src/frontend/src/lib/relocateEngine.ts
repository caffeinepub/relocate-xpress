export const CITIES = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Nagpur",
  "Surat",
  "Kochi",
  "Bhopal",
  "Indore",
  "Vizag",
  "Coimbatore",
  "Vadodara",
  "Patna",
];

const DISTANCE_MAP: Record<string, number> = {
  "Bangalore|Mumbai": 980,
  "Bangalore|Delhi": 2200,
  "Bangalore|Chennai": 350,
  "Bangalore|Hyderabad": 570,
  "Bangalore|Pune": 840,
  "Bangalore|Kolkata": 1870,
  "Bangalore|Ahmedabad": 1300,
  "Bangalore|Jaipur": 1950,
  "Bangalore|Kochi": 560,
  "Bangalore|Coimbatore": 250,
  "Bangalore|Vizag": 870,
  "Bangalore|Nagpur": 1000,
  "Mumbai|Delhi": 1400,
  "Mumbai|Chennai": 1330,
  "Mumbai|Hyderabad": 710,
  "Mumbai|Pune": 150,
  "Mumbai|Kolkata": 2000,
  "Mumbai|Ahmedabad": 530,
  "Mumbai|Jaipur": 1150,
  "Mumbai|Lucknow": 1350,
  "Mumbai|Nagpur": 870,
  "Delhi|Chennai": 2180,
  "Delhi|Hyderabad": 1570,
  "Delhi|Kolkata": 1480,
  "Delhi|Jaipur": 270,
  "Delhi|Lucknow": 550,
  "Delhi|Chandigarh": 250,
  "Delhi|Ahmedabad": 940,
  "Delhi|Bhopal": 780,
  "Delhi|Patna": 1000,
  "Chennai|Hyderabad": 630,
  "Chennai|Kolkata": 1660,
  "Chennai|Kochi": 680,
  "Chennai|Coimbatore": 490,
  "Chennai|Vizag": 790,
  "Chennai|Pune": 1160,
  "Hyderabad|Pune": 560,
  "Hyderabad|Kolkata": 1500,
  "Hyderabad|Nagpur": 500,
  "Kolkata|Patna": 580,
  "Kolkata|Lucknow": 990,
  "Kolkata|Bhopal": 1480,
  "Ahmedabad|Jaipur": 670,
  "Ahmedabad|Vadodara": 110,
  "Ahmedabad|Indore": 560,
  "Indore|Bhopal": 190,
  "Lucknow|Patna": 530,
  "Jaipur|Chandigarh": 490,
};

export function getDistance(from: string, to: string): number {
  if (from === to) return 0;
  const key1 = `${from}|${to}`;
  const key2 = `${to}|${from}`;
  return DISTANCE_MAP[key1] ?? DISTANCE_MAP[key2] ?? 600;
}

export function calcPrice(from: string, to: string, homeSize: string): number {
  const distance = getDistance(from, to);
  const sizeAddon = homeSize === "2BHK" ? 2000 : homeSize === "3BHK" ? 4000 : 0;
  return 3000 + distance * 12 + sizeAddon;
}

export function calcTimeLabel(distance: number): string {
  if (distance <= 50) return "4–6 Hours";
  if (distance <= 300) return "6–12 Hours";
  if (distance <= 800) return "12–24 Hours";
  return "1–3 Days";
}
