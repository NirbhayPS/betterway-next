import { gilroyBlack, gilroyBold, gilroySemibold } from "@/assets/fonts/fonts";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyBold.variable} ${gilroySemibold.variable} ${gilroyBlack.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
