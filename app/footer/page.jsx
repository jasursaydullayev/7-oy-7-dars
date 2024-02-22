import Image from "next/image";
import Link from "next/link";
import { Public_Sans } from "next/font/google";
const public_sans = Public_Sans({ subsets: ["latin"], weight: "400" });

function Footer() {
  return (
    <div className="text-link-water-white bg-mirage-blue">
        <div
      className={`flex justify-between container py-[25px] ${public_sans.className}`}
    >
      <div className="flex items-center gap-[40px]">
        <Image
          className="mr-[20px]"
          src={"/cite-white.svg"}
          alt=""
          width={135}
          height={38}
        />
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <button className="w-[173px] py-[16px] bg-btn-colors text-link-water-white rounded-full fon">
        Schedule a Demo
      </button>
    </div>
    </div>
  );
}

export default Footer;
