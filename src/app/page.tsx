
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent, } from "@/components/ui/card";
import { Typewriter } from "@/components/ui/typewriter-text"
import DarkVeil from '@/components/DarkVeil';



export default function Home() {
  return (
    <div className="">
      {/* background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <DarkVeil hueShift={380} />
      </div>

      <main className="min-h-screen min-w-screen relative z-10">
        <nav className="flex w-screen justify-center pt-8 fixed z-50">
          <div className="flex flex-wrap items-center justify-center border mx-4 px-6 py-4 rounded-full text-white text-sm gap-4">
            <a href="https://timilindblom.com">
              <img
                className=""
                src="/next.svg"
                alt="Timi"
                width={40}
                height={40}
              />
            </a>
            <div className="flex items-center gap-4 md:gap-6 md:ml-7">
              <a href="#" className="relative overflow-hidden h-6 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">About</span>
              </a>
              <a href="#" className="relative overflow-hidden h-6 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Projects</span>
              </a>
            </div>

            <div className="flex items-center gap-4 md:ml-10">
              <button className="bg-white hover:shadow-[0px_0px_30px_7px] shadow-[0px_0px_30px_3px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                Contact
              </button>
            </div>
          </div>
        </nav>

        <div className='flex items-center pt-50 w-full'>

          <div className='flex items-center max-w-3xl ml-[40%] -translate-x-1/2'>
            <div className='w-96'>
              <h2 className="text-xl font-medium text-white">I'm Timi Lindblom.</h2>
              <Typewriter
                text={["Developer", "CS Student", "Ambitious"]}
                speed={100}
                loop={true}
                className="text-xl font-medium text-white"
              />
            </div>

            <img
              className=""
              src="/timi-bw.PNG"
              alt="Timi"
              width={300}
              height={300}
            />

          </div>

        </div>

        <h1 className=" text-2xl font-bold text-white mt-8 text-center">About me</h1>


        <h1 className=" text-2xl font-bold text-white mt-8 text-center">Projects</h1>






      </main>
    </div>
  );
}
