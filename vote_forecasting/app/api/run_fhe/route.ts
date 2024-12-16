import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Extract the JSON body from the incoming request
    const requestData = await req.json();

    // Forward the parsed JSON body to the backend
    const response = await fetch(`${process.env.API_URL}/run_fhe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(requestData), // Stringify the parsed JSON object before sending
    });

    // Parse the JSON response from the backend
    const data = await response.json();

    // Return the response data as JSON with a 200 status
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
