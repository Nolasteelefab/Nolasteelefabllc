import NolaSteeleLogo from '../logo';

export default function Footer() {
  return (
    <footer className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 h-full justify-between flex flex-col lg:px-8 min-h-dvh ">
      <h3 className="text-7xl font-bold text-theme-accent-two">Get In Touch</h3>
      <div className="grid grid-cols-1 gap-8  lg:grid-cols-3">
        <div className=" flex-col items-center flex ">
          <div className="fill-theme-accent">
            <NolaSteeleLogo />
          </div>
          <p className="max-w-xs mt-4 text-lg "></p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-medium">Company</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                {' '}
                About{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Meet the Team{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                History{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Careers{' '}
              </a>
            </nav>
          </div>
          <div>
            <p className="font-medium">Location</p>
          </div>
          <div>
            <p className="font-medium">Contact Info</p>
          </div>
          <div>
            <p className="font-medium">Legal</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                {' '}
                Privacy Policy{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Terms &amp; Conditions{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Returns Policy{' '}
              </a>
              <a className="hover:opacity-75" href="">
                {' '}
                Accessibility{' '}
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-full border-white" />
        <div className="px-5">
          <p className="mt-8 text-xs">Nola Steele Fabracation and Erection LLC.</p>
        </div>
      </div>
    </footer>
  );
}
