import { BASE_URL } from "@/lib/constants";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get("title");

    const fontData = await fetch(
      new URL("../../../assets/fonts/kaisei-tokumin-bold.ttf", import.meta.url),
    )
      .then((res) => res.arrayBuffer())
      .catch((e) => {
        console.error(e);
        return null;
      });

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundImage: `url(${BASE_URL}/images/background.png)`,
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: "flex",
              fontSize: 130,
              fontFamily: "Kaisei Tokumin",
              letterSpacing: "-0.05em",
              fontStyle: "normal",
              color: "white",
              lineHeight: "120px",
              whiteSpace: "pre-wrap",
            }}
          >
            {postTitle}
          </div>
        </div>
      ),
      {
        width: 1768,
        height: 1024,
        fonts: fontData
          ? [
              {
                name: "Kaisei Tokumin",
                data: fontData,
                style: "normal",
              },
            ]
          : undefined,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
