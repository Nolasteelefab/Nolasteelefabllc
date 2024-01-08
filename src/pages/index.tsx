import Home from '@/components/home';
import About from '@/components/home/about';
import OurTeam from '@/components/home/ourTeam';
import Portfolio from '@/components/home/portfolio';
import Services from '@/components/home/services';
import { Fragment } from 'react';

export default function Main() {
  return (
    <Fragment>
      <Home />
      <About />
      <Services />
      <OurTeam />
      <Portfolio />
    </Fragment>
  );
}
