import App from "./App";
import { useHashRouter } from "./hooks/useHashRouter";
import HomeRelocationPage from "./pages/HomeRelocationPage";
import IntercityMovingPage from "./pages/IntercityMovingPage";
import OfficeRelocationPage from "./pages/OfficeRelocationPage";
import VehicleTransportationPage from "./pages/VehicleTransportationPage";

export default function AppRouter() {
  const route = useHashRouter();

  if (route === "/home-relocation") return <HomeRelocationPage />;
  if (route === "/office-relocation") return <OfficeRelocationPage />;
  if (route === "/intercity-moving") return <IntercityMovingPage />;
  if (route === "/vehicle-transportation") return <VehicleTransportationPage />;

  return <App />;
}
