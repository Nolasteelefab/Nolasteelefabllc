import NolaSteeleLogo from '../logo';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl  px-4 py-16 mx-auto sm:px-6 h-full justify-between flex flex-col lg:px-8 min-h-dvh ">
      <h3 className="text-7xl w-full font-bold text-theme-accent-two">Get In Touch</h3>
      <div className="grid grid-cols-2 gap-8 justify-between  lg:grid-cols-3">
        <div className="  items-center flex ">
          <div className="fill-theme-accent">
            <NolaSteeleLogo />
          </div>
          <p className="max-w-xs mt-4 text-lg "></p>
        </div>
        <div className="flex flex-row ">
          <div>
            <p className="font-medium">Company</p>
            <nav className="flex flex-col w-max mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                {' '}
                About{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Portfolio
              </a>
              <a className="hover:opacity-75" href="">
                Our team{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Careers{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Contant Us{' '}
              </a>
            </nav>
          </div>
        </div>
        <div>
          <p>Come Visit Us:</p>
        </div>
      </div>

      <div className="py-5 md:py-2 px-5 text-center">
        <hr className="w-full border-white" />
        <div className="flex gap-y-5 pt-5   flex-col  md:flex-row items-center justify-between">
          <div className="">
            <p className="text-sm">Office - 504.264.7499</p>
            <p className="text-sm">Fax - 504.264.7077</p>
          </div>
          <div>
            <p className="text-sm">2713 Oak Drive C-7,</p>
            <p className="text-sm">Harvey, LA 70058</p>
          </div>

          <div>
            <p className="relative text-sm">
              All Rights Reserved {new Date().getFullYear()}
              <span className="absolute text-xs">©️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
