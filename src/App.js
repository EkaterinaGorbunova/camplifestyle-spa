import './App.css';

// https://colinhacks.com/essays/building-a-spa-with-nextjs

import React from 'react';
import { AnimatedComponent } from '../src/components/AnimatedComponent'
import { TopNavbar } from '../src/components/TopNavbar';
import { Banner } from '../src/components/Banner'
import { About } from '../src/components/About';
import { Relax } from '../src/components/Relax';
import { DeStress } from '../src/components/DeStress';
import { Roadmap } from '../src/components/Roadmap';
import { Team } from '../src/components/Team';
import Footer from '../src/components/Footer';

export default function App() {
  return (
    <>
      <TopNavbar />
        <Banner />
      <AnimatedComponent>
        <About />
      </AnimatedComponent>
      <AnimatedComponent>
        <Relax />
      </AnimatedComponent>
      <AnimatedComponent>
        <DeStress />
      </AnimatedComponent>
      <AnimatedComponent>
        <Roadmap />
      </AnimatedComponent>
      <AnimatedComponent>
        <Team />
      </AnimatedComponent>
      <Footer />
    </>
  );
};
