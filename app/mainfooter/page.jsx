import Image from 'next/image'
import { Public_Sans } from "next/font/google";
const public_sans = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function MainFooter() {
  return (
    <div className='h-full bg-inherit'>
        <div className='container flex gap-[25px] items-center pt-[150px]'>
            <Image src={'/code.png'} width={445} height={284} />
            <div className='text-san-juan-blue '>
                <h1 className='text-5xl mb-[24px]'>Easy to implement</h1>
                <p className={`w-[445px] ${public_sans.className}`}>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to handle payments functionality with ease.</p>
            </div>
        </div>
    </div>
  )
}

export default MainFooter