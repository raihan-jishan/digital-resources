import { Montserrat } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav.jsx";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
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
      <body className={montserrat.className}>
        <Nav />
        <div className="mt-24 ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
