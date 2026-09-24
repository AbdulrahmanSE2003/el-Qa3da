// app/api/card-image/route.tsx

import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get("text") ?? ""
  const category = searchParams.get("category") ?? ""
  const id = searchParams.get("id") ?? "01"

  const fontBold = await readFile(
    path.join(process.cwd(), "public/fonts/Cairo-Bold.ttf")
  )
  const fontBlack = await readFile(
    path.join(process.cwd(), "public/fonts/Cairo-ExtraBold.ttf")
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#EDE8DF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          fontFamily: "Cairo",
        }}
      >
        {/* الكارد */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#F5F0E8",
            border: "4px solid #0F0D0A",
            boxShadow: "10px 10px 0px #0F0D0A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "48px 40px",
            position: "relative",
          }}
        >
          {/* Inner border */}
          <div
            style={{
              position: "absolute",
              inset: "20px",
              border: "1px solid rgba(15,13,10,0.15)",
              display: "flex",
            }}
          />

          {/* Corner ID top right */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              fontFamily: "Cairo",
              fontWeight: 700,
              fontSize: "18px",
              color: "#af5308",
            }}
          >
            {id.padStart(2, "0")}
          </div>

          {/* Corner ID bottom left rotated */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              fontFamily: "Cairo",
              fontWeight: 700,
              fontSize: "18px",
              color: "#af5308",
              transform: "rotate(180deg)",
            }}
          >
            {id.padStart(2, "0")}
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ fontSize: "14px", color: "#af5308" }}>✦ ❖ ✦</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(175,83,8,0.4)",
                background: "rgba(175,83,8,0.08)",
                borderRadius: "999px",
                padding: "6px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "Cairo",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#af5308",
                  letterSpacing: "0.1em",
                }}
              >
                الموضوع
              </span>
              {category && (
                <>
                  <span style={{ color: "rgba(175,83,8,0.4)" }}>·</span>
                  <span
                    style={{
                      fontFamily: "Cairo",
                      fontSize: "13px",
                      color: "rgba(175,83,8,0.7)",
                    }}
                  >
                    {category}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Main text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              direction: "rtl",
              padding: "0 24px",
            }}
          >
            <p
              style={{
                fontFamily: "Cairo",
                fontWeight: 800,
                fontSize: "38px",
                lineHeight: 1.8,
                color: "#0F0D0A",
                margin: 0,
                textAlign: "center",
              }}
            >
              {text}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "1px",
                background: "rgba(175,83,8,0.3)",
              }}
            />
            <span
              style={{
                fontFamily: "Cairo",
                fontSize: "13px",
                color: "#C8BFB0",
                letterSpacing: "0.1em",
              }}
            >
              القعدة
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1920,
      fonts: [
        { name: "Cairo", data: fontBold, weight: 700 },
        { name: "Cairo", data: fontBlack, weight: 800 },
      ],
    }
  )
}