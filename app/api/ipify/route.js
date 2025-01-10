import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const ip = searchParams.get("ip") || "";

  const apiKey = process.env.IPIFY_API_KEY; // Use your server-side-only key
  const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${ip ? `&ipAddress=${ip}` : ""}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from IPify API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
