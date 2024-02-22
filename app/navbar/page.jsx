import { Public_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const public_sans = Public_Sans({ subsets: ["latin"], weight: "400" });
function Navbar() {
  return (
    <div className="h-full bg-[url('/bg-img.png')] bg-no-repeat bg-right-top">
      <div
        className={`flex justify-between container pt-[25px] ${public_sans.className}`}
      >
        <div className="flex items-center gap-[40px]">
          <Image
            className="mr-[20px]"
            src={"/cite-logo.svg"}
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
      <div className="container flex justify-between">
        <div>
          <h1 className="text-7xl text-san-juan-blue mt-[152px] w-[646px] h-[243px]">
            Copy Start building with our APIs for absolutely free.
          </h1>
          <div className={public_sans.className}>
            <input
              className="w-[445px] pl-[27px] text-sm border-0 h-[48px] absolute rounded-full"
              type="text"
              placeholder="Enter email address"
            />
            <button className="w-[173px] relative left-[272px]  h-[48px] bg-btn-colors text-link-water-white rounded-full">
              Schedule a Demo
            </button>
            <h3 className="ml-[27px] text-sm text-light-san-juan-blue mt-[16px]">
              Have any questions? <span className="font-bold">Contact Us</span>
            </h3>
          </div>
        </div>
        <Image
          className="mt-[45px]"
          src={"/phone_first.png"}
          width={400}
          height={632}
        />
      </div>
    </div>
  );
}

export default Navbar;
