import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/lib/common/redux/StoreProvider";

export const metadata: Metadata = {
  title: "Feya Tech WMS",
  description: "Warehouse Management System for Feya Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
