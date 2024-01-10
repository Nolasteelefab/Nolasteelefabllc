import ServiceAccordion from './tools/servAccordion';

export default function Services() {
  return (
    <div className="min-h-dvh bg-theme-accent flex px-6 md:px-8 flex-col py-12 md:py-24  w-full items-center justify-center   relative z-10">
      <div className="w-full justify-between flex gap-1 flex-col md:flex-row  max-w-7xl">
        <div className="w-full">
          <h2 className="font-semibold text-7xl text-theme-accent-two mb-2 tracking-wider text-left ">
            Our Services
          </h2>
          <p className="font-[500] break-words max-w-lg ">
            NOLA Steele Fabrication and Erection provides high quality design and steel fabrication,
            high quality structural steel erection, repair welding, ornamental iron, limited steel
            demolition, and installation of commercial handrails.
          </p>
        </div>
        <ServiceAccordion />
      </div>
      <div className="absolute md:-top-30 -top-20 -right-40 lg:w-2/3 w-full h-96 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 2000"
          className="fill-theme-accent"
        >
          <path d="M994 112c-703-2-920.47 400.35-904 905 13.35 409 32.03 946.66 977 861 684-62 792-279 835-777 61.67-714.25-288.33-987.24-908-989Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl min-h-[300px] m-2 ">
        <ul className="flex items-start justify-between gap-8 mt-10 md:flex-row flex-col"></ul>
      </div>
    </div>
  );
}
