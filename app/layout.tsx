import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1117",
};

export const metadata: Metadata = {
  title: "Anjali Patel",
  description: "AI and Space Systems Research | Project Associate at PDEU (ISRO-funded)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Sidebar />
          <main className="content">
            <div className="content-inner">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
