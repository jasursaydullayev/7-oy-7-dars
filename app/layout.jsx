import { Public_Sans } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import "./global.css";

const public_sans = Public_Sans({ subsets: ["latin"], weight: "400" });
const serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={serif_display.className}>{children}</body>
    </html>
  );
};

export default layout;