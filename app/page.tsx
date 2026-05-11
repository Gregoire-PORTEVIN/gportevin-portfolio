import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
