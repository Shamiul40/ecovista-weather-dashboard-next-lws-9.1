"use client";


import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LocationDetector() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);

        setLoading(false);

        router.push(`/current?${params.toString()}`);
      });
    }
  }, [router, searchParams]);

  return (
    <div className="flex flex-col  justify-center items-center w-full h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            alt="image"
            src="/network.gif"
            height={500}
            width={500}
            className="border rounded-md my-4"
          />

          <p className="text-3xl ">Detecting Location here .. ..  ....      </p>
        </>
      )}
    </div>
  );
}
