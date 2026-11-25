import { Typewriter } from "@/components/ui/typewriter-text"
import Particles from '@/components/Particles';
import InfiniteMenu from '@/components/InfiniteMenu'
import AboutSection from '@/components/AboutSection';

const items = [
  {
    //title ja desc sotkee mobilen
    image: 'https://picsum.photos/300/300?grayscale',
    link: '',
    title: 'Migraine app',
    description: 'Junction 2025 migraine app ai detection'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: '',
    title: 'Bike app',
    description: 'App to track your bikes'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://github.com/tlgz/final-project-cs50',
    title: 'CS50: Movie review site',
    description: 'Final Project for cs50 using Ombd api calls to get movies. Review possibility and saving to database.'
  },
];



const technologies = [
  { name: 'React', href: 'https://react.dev/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', href: 'https://nodejs.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', href: 'https://www.python.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Scala', href: 'https://www.scala-lang.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg' },
  { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'GitHub', href: 'https://github.com/tlgz', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invertBg: true },
  { name: 'Scikit-learn', href: 'https://scikit-learn.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'MySQL', href: 'https://www.mysql.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

export default function Home() {
  return (
    <div className="">
      {/* background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          glow={0.5}
          twinkle={0.3}
          moveParticlesOnHover
          hoverEffect="parallax"
        />
      </div>

      <main className="min-h-screen w-full relative z-10">
        <nav className="flex w-full justify-center pt-4 md:pt-7 fixed z-50 pointer-events-none">
          <div className="pointer-events-auto flex items-center justify-center bg-black/60 backdrop-blur-xl border border-white/15 shadow-lg mx-3 px-4 py-2 md:px-6 md:py-3.5 rounded-full text-white text-xs md:text-sm gap-3 md:gap-4">
            <a href="https://timilindblom.com" className="shrink-0">
              <img
                className="w-5 h-5 md:w-7 md:h-7"
                src="/timi-logo.svg"
                alt="Timi"
                width={28}
                height={28}
              />
            </a>
            <div className="flex items-center gap-3 md:gap-6 md:ml-7">
              <a href="#about" className="relative overflow-hidden h-5 md:h-6 leading-5 md:leading-6 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">About</span>
              </a>
              <a href="#projects" className="relative overflow-hidden h-5 md:h-6 leading-5 md:leading-6 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Projects</span>
              </a>
            </div>

            <div className="flex items-center md:ml-10">
              <a href="https://linkedin.com/in/timi-lindblom" target="_blank" rel="noopener noreferrer">
                <button className="bg-white hover:shadow-[0px_0px_30px_7px] shadow-[0px_0px_30px_3px] hover:shadow-white/50 shadow-white/50 text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-slate-100 transition duration-300">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </nav>

        <section className="min-h-[100svh] flex items-center justify-center px-4 pt-20 pb-10 md:pt-24 md:pb-12 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-16 max-w-4xl w-full mx-auto">
            <div className="w-full md:flex-1 text-center md:text-left">
              <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.16em] md:tracking-[0.2em] text-slate-400 mb-2.5 md:mb-3">
                Computer Science · Aalto University
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                I&apos;m Timi Lindblom.
              </h1>
              <div className="mt-2 md:mt-3 min-h-[1.75rem] md:min-h-[2rem]">
                <Typewriter
                  text={["Developer", "CS Student", "Ambitious"]}
                  speed={100}
                  loop={true}
                  className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300"
                />
              </div>
              <div className="flex gap-3 mt-6 md:mt-8 justify-center md:justify-start">
                <a
                  href="https://linkedin.com/in/timi-lindblom"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/10 transition-all"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href="https://github.com/tlgz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/10 transition-all"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 bg-white rounded-full p-0.5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            <div className="group relative w-[210px] sm:w-[250px] md:w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] via-black/40 to-black/80 backdrop-blur-xl ring-1 ring-white/5 shadow-2xl pt-4 px-3 md:pt-6 md:px-4 flex items-end justify-center">
              <img
                className="block w-full h-auto object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                src="/timi-bw.PNG"
                alt="Timi Lindblom"
                width={300}
                height={300}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 md:h-16 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            </div>
          </div>
        </section>

        <AboutSection technologies={technologies} />
        <section id="projects" className="relative z-10 scroll-mt-16 min-h-[85svh] md:min-h-screen flex flex-col items-center justify-center py-16 md:py-28 px-4">
          <div className="max-w-4xl w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center tracking-tight">Projects</h2>
            <InfiniteMenu items={items} />
          </div>
        </section>

        <footer className="relative z-10 px-4 pt-4 pb-12 md:pt-8 md:pb-16">
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
            <span>© {new Date().getFullYear()} Timi Lindblom</span>
            <div className="flex items-center gap-6">
              <a href="https://github.com/tlgz" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/timi-lindblom" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>

      </main>
    </div >
  );
}
