import Image from 'next/image';
import Karen from '@/public/assets/images/karenwilliams.jpg';
import Travis from '@/public/assets/images/traviswilliams.jpg';
import Link from 'next/link';

const description =
  "From the vibrant heart of New Orleans, Mrs. Williams brings over 20 years of expertise in commercial structural steel, fabrication, erection, and the marine industry, backed by a Business Management and Accounting degree. She's the driving force behind the company, overseeing client relations, sales, marketing, safety, and talent recruitment with precision and dedication, setting a high bar for industry leadership.";
const vpdescription =
  "Born and bred in New Orleans, Msr. Williams is a Service Connected Disabled Veteran, leveraging a decade of expertise as a Project Manager. He honed his skills through On-The-Job Training as an Estimator. Additionally, he plays a pivotal role in client relations, sales, marketing, safety oversight, and talent acquisition, contributing significantly to the company's multifaceted success.";

export default function OurTeam() {
  return (
    <div className="min-h-dvh px-6 md:px-8 py-24 sm:py-32 w-full bg-white ">
      <div className="w-full mx-auto flex gap-1 flex-col  max-w-7xl">
        <div className="w-fit">
          <h2 className="text-6xl font-bold text-theme-accent-two mb-2 tracking-wider text-left ">
            Meet Our Leaders
          </h2>
          <p className="font-[500] break-words max-w-lg text-black">
            NOLA Steele Fabrication & Erection (NSFE) was established in 2014 by Karen L. Williams.
            Mrs. Williams brings over 20 years experience, providing an array of subcontracting
            services, in the Marine and Commercial Fabrication and Erection Industry.
          </p>
        </div>
        <div className="w-full   px-6 py-10 flex flex-col gap-y-12 md:flex-row items-center justify-evenly md:gap-x-10  ">
          <div className="flex gap-5 flex-col">
            <div className="w-fit">
              <h3 className="font-black text-theme-accent text-2xl">Karen L. Williams</h3>{' '}
              <p className="text-black text-sm">President / Administrator</p>
              <hr />
            </div>
            <div className="hidden md:block ">
              <p className="text-black max-w-sm leading-6 ">{description}</p>
            </div>
          </div>
          <div className="bg-theme-accent-two rounded-full p-2 w-[240px] md:w-[420px] md:h-[420px] relative h-[240px] ">
            <Image
              src={Karen}
              alt=""
              className=" absolute right-3 top-0 rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="block md:hidden">
            <p className="text-black max-w-sm leading-6 ">{description}</p>
          </div>
        </div>
        <div className="w-full px-6 gap-y-12 py-10 flex flex-col md:flex-row-reverse items-center justify-evenly md:gap-x-10  ">
          <div className="flex gap-5 flex-col">
            <div className="w-fit">
              <h3 className="font-black text-theme-accent text-2xl">Travis M. Williams</h3>{' '}
              <p className="text-black text-sm">Vice President / Estimator</p>
              <hr />
            </div>
            <div className="hidden md:block ">
              <p className="text-black max-w-sm leading-6 ">{vpdescription}</p>
            </div>
          </div>
          <div className="bg-theme-accent-two rounded-full p-2 w-[240px] md:w-[420px] md:h-[420px] relative h-[240px] ">
            <Image
              src={Travis}
              alt=""
              className=" absolute left-3 top-0 rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="block md:hidden">
            <p className="text-black max-w-sm leading-6 ">{vpdescription}</p>
          </div>
        </div>
      </div>
      <div>
        <Link className=" text-gray-700" href="">
          Join Our Team
        </Link>
      </div>
    </div>
  );
}
