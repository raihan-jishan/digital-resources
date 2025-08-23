import { Montserrat } from "next/font/google";
import "./globals.css";
import "./font.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

// ✅ Corrected subset value
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "digital-resources",
  description: "a modern world modern service website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="icon"
          href="https://thumbs2.imgbox.com/c7/82/LsVK37xH_t.png"
          sizes="any"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
