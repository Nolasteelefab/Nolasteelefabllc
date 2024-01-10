export default function ServiceAccordion() {
  return (
    <div className=" mx-auto w-full px-5 ">
      <div className="grid text-white divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <details key={index} className="group py-3 px-2">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Services</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className=" px-5 text-neutral-900 mt-3 group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
