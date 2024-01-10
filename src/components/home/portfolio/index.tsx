import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const description =
  'Dive into our portfolio showcasing a diverse range of successful ventures led by our expert team. From innovative structural steel constructions to intricate marine industry projects, explore our track record of excellence, precision, and groundbreaking solutions that define our commitment to delivering exceptional results.';

export default function Portfolio() {
  return (
    <div className="min-h-dvh  px-6 md:px-8 py-24 sm:py-32 w-full bg-white ">
      <div className="w-full mx-auto flex gap-1 flex-col  max-w-7xl">
        <div className="flex w-full gap-y-10 flex-col md:flex-row justify-between items-center">
          <div className="w-fit">
            <h2 className="text-6xl font-bold text-theme-accent-two mb-2 tracking-wider text-left ">
              Our Portfolio
            </h2>
            <p className="font-[500] break-words max-w-lg text-black">{description}</p>
          </div>
          <div className="flex gap-10 ">
            <FiArrowLeft className="w-[40px] h-[40px] bg-theme-base rounded-full " />
            <FiArrowRight className="w-[40px] h-[40px]  bg-theme-accent rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
}
