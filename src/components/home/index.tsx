import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className=" p-5 flex h-dvh w-full items-center relative justify-center overflow-hidden">
      <div className="z-0 w-[100%] h-[100%] md:w-[95%] md:h-[95%] filter brightness-[20%] overflow-hidden object-cover absolute md:rounded-br-xl top-0 left-0 ">
        <Image
          width={1200}
          height={400}
          className="h-full w-full object-cover"
          src="http://nolasteelefab.com/images/shutterstock_264598202.jpg"
          alt=""
        />
      </div>
      <div className="z-[1] w-full max-w-[1000px] mx-auto flex flex-col ">
        <div className="flex-col flex gap-10">
          <h1 className=" max-w-2xl font-normal text-theme-accent-two text-6xl md:text-7xl relative">
            Crafting Excellence in <span className="font-bold text-theme-accent">Steele</span>{' '}
            Fabrication & Erection
          </h1>
          <p className="max-w-lg">
            Experience excellence in steel fabrication and erection with our 15+ years of expertise,
            led by Karen L. Williams, dedicated to forging lasting partnerships and exceeding
            expectations.
          </p>
          <button className="w-fit flex items-center gap-5 justify-between bg-theme-accent py-5 px-4 rounded-md">
            <p>Get In Touch</p>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
