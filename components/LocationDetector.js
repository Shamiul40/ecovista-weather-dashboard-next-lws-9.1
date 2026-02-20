import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LocationDetector() {
  const [location, setLocation] = useState(false);
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLocation(true);
  }, []);

  return <div></div>;
}
