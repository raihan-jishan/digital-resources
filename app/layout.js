import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export const metadata = {
  title: "digital-resources",
  description: "a modern world modern service website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link
        rel="icon"
        href={"https://thumbs2.imgbox.com/c7/82/LsVK37xH_t.png"}
        sizes="any"
      />
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
