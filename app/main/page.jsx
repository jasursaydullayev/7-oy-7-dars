import { Public_Sans } from "next/font/google";
import Image from "next/image";
const public_sans = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });
function Main() {
  return (
    <div className="h-full max-h-[472px] bg-mirage-blue ">
      <div className=" h-full bg-[url('/bg-left-img.png')] bg-no-repeat bg-left">
        <div className="container text-link-water-white flex items-center justify-between">
          <div>
            <h1 className="text-5xl  pt-[100px]">Who we work with</h1>
            <p
              className={`w-[445px] mt-[24px] opacity-70 text-[15px] leading-7 ${public_sans.className}`}
            >
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{" "}
            </p>
            <button
              className={`w-[129px] h-[48px] font-bold bg-link-water-white rounded-full text-lg text-mirage-blue mt-[32px] ${public_sans.className}`}
            >
              About Us
            </button>
          </div>
          <div>
            <div className="flex gap-[65px] mt-[95px]">
              <Image src={"/tesla.svg"} width={129} height={17}></Image>
              <Image src={"/microsoft.svg"} width={129} height={17}></Image>
              <Image src={"/hewleet.png"} width={129} height={17}></Image>
            </div>
            <div className="flex gap-[65px] mt-[39px]">
              <Image src={"/oracle.svg"} width={129} height={17}></Image>
              <Image src={"/google.svg"} width={129} height={17}></Image>
              <Image src={"/nvidia.svg"} width={129} height={17}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
