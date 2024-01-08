import Link from 'next/link';
import NolaSteeleLogo from '../logo';
import MenuButton from './mobile/menuButton';
import { useCycle } from 'framer-motion';

export default function Navigation() {
  const [toggled, isOpen] = useCycle(false, true);
  return (
    <header className="w-full py-10 h-24">
      <div className="flex h-full  px-10 relative items-center justify-between">
        <div className=" z-10 absolute left-2 -top-[32px] md:left-6  md:-top-[25px] lg:-top-[35px] fill-theme-accent">
          <NolaSteeleLogo />
        </div>
        <nav className="hidden md:flex justify-end gap-5 w-full">
          <Link href="">About</Link>
          <Link href="">Portfolio</Link>
          <Link href="">Our Team</Link>
          <Link href="">Careers</Link>
          <Link href="">Contact</Link>
        </nav>
        <nav className="flex w-full md:hidden justify-end">
          <MenuButton toggled={toggled} onClick={() => isOpen()}/>
        </nav>
      </div>
    </header>
  );
}
