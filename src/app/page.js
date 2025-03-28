"use client";

import dynamic from "next/dynamic"; // Dynamically import Map to prevent SSR issues
import { useEffect, useState } from "react";

const Map = dynamic(() => import("@/components/Map"), { ssr: false }); // Ensure Map is only rendered on the client

export default function Home() {
  const [coordinates, setCoordinates] = useState([0, 0]); // Default coordinates (center of the world map: latitude 0, longitude 0)
  const [ipDetails, setIPDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch IP details
  const fetchIPDetails = async (ip = "") => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/ipify?ip=${ip}`);
      if (!response.ok) {
        throw new Error("Failed to fetch IP details. Please try again.");
      }
      const data = await response.json();

      setIPDetails([
        { id: 1, name: "IP Address", value: data.ip },
        {
          id: 2,
          name: "Location",
          value: `${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
        },
        { id: 3, name: "Timezone", value: `UTC ${data.location.timezone}` },
        { id: 4, name: "ISP", value: data.isp },
      ]);

      // Update map coordinates
      setCoordinates([data.location.lat, data.location.lng]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's IP address first, then fetch IP details
  useEffect(() => {
    const fetchUserIP = async () => {
      try {
        // const res = await fetch("https://api64.ipify.org?format=json");
        // Fetches IPv6 addresses; however, using this may cause the IP address to overflow in the <dd> tag due to its length.
        const res = await fetch("https://api.ipify.org?format=json"); // Use ipify.org to get the user's public IP
        const data = await res.json();
        await fetchIPDetails(data.ip);
      } catch {
        setError("Failed to detect user's IP address.");
      }
    };

    fetchUserIP();
  }, []);

  // Handle form submission
  const handleSearch = (event) => {
    event.preventDefault();
    const ip = event.target.elements.ip.value.trim();
    if (ip) fetchIPDetails(ip);
  };

  return (
    <>
      <header className="min-h-[18.75rem] bg-[url('/backgrounds/pattern-bg-mobile.png')] bg-cover bg-center bg-no-repeat lg:min-h-[17.5rem] lg:bg-[url('/backgrounds/pattern-bg-desktop.png')]">
        <div className="wrapper | grid gap-7 pt-[1.625rem] lg:pt-[1.875rem]">
          <h1 className="text-center text-[1.625rem] font-medium -tracking-[.01em] text-white lg:text-[2rem]">
            IP Address Tracker
          </h1>
          <form
            onSubmit={handleSearch}
            className="mx-auto flex w-full max-w-[34.6875rem]"
          >
            <input
              type="search"
              name="ip"
              placeholder="Search for any IP address or domain"
              className="w-full cursor-pointer rounded-l-2xl bg-white px-6 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-r-2xl bg-black px-6 py-[1.375rem] transition-all hover:bg-gray-800"
            >
              <img
                src="/icons/icon-arrow.svg"
                alt="Search"
                width="11"
                height="14"
                className="min-w-fit"
              />
            </button>
          </form>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="wrapper | absolute inset-x-0 top-0 z-20 -translate-y-1/2">
            <h2 className="sr-only">IP details</h2>
            <dl className="mx-auto grid max-w-[69.375rem] gap-6 rounded-2xl bg-white p-6 shadow-lg lg:grid-cols-4 lg:gap-0 lg:p-0">
              {error ? (
                <div className="text-center lg:col-span-5 lg:p-6">{error}</div>
              ) : loading ? (
                <div className="text-center lg:col-span-5 lg:p-6">
                  Loading...
                </div>
              ) : (
                ipDetails.map((detail) => (
                  <div
                    key={detail.id}
                    className="grid gap-1.5 text-center lg:relative lg:content-start lg:gap-4 lg:px-8 lg:py-9 lg:text-left lg:not-first:before:absolute lg:not-first:before:inset-y-10.5 lg:not-first:before:left-0 lg:not-first:before:w-px lg:not-first:before:bg-gray-400 lg:not-first:before:content-['']"
                  >
                    <dt className="text-[0.625rem] font-bold tracking-[0.16em] text-gray-400 uppercase lg:text-xs/[normal] lg:font-medium">
                      {detail.name}
                    </dt>
                    <dd className="line-clamp-1 text-xl/[normal] font-medium lg:line-clamp-2 lg:text-2xl/[normal] lg:tracking-[0.03em]">
                      {detail.value}
                    </dd>
                  </div>
                ))
              )}
            </dl>
          </div>
          {/* Pass the coordinates dynamically to the Map component */}
          <Map center={coordinates} zoom={13} />
        </section>
      </main>
    </>
  );
}
