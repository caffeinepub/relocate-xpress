import { useEffect, useState } from "react";

export function useHashRouter() {
  const [hash, setHash] = useState(
    () => window.location.hash.replace("#", "") || "/",
  );

  useEffect(() => {
    const handler = () => {
      setHash(window.location.hash.replace("#", "") || "/");
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return hash;
}

export function navigate(path: string) {
  window.location.hash = path;
}
