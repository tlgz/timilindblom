import { Typewriter } from "@/components/ui/typewriter-text"
import DarkVeil from '@/components/DarkVeil';
import InfiniteMenu from '@/components/InfiniteMenu'

const items = [
  {
    //title ja desc sotkee mobilen
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://timilindblom.com',
    title: 'Migraine app',
    description: 'Junction 2025 migraine app ai detection'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://timilindblom.com',
    title: 'Bike app',
    description: 'App to track your bikes'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://timilindblom.com',
    title: 'CS50: Movie review site',
    description: 'Final Project for cs50 using Ombd api calls to get movies. Review possibility and saving to database.'
  },
];



export default function Home() {
  return (
    <div className="">
      {/* background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <DarkVeil hueShift={380} />
      </div>

      <main className="min-h-screen min-w-screen relative z-10">
        <nav className="flex w-screen justify-center pt-8 fixed z-50">
          <div className="flex flex-wrap items-center justify-center border mx-4 px-6 py-4 rounded-full text-white text-sm gap-4">
            <a href="https://timilindblom.com">
              <img
                className=""
                src="/timi-logo.svg"
                alt="Timi"
                width={30}
                height={30}
              />
            </a>
            <div className="flex items-center gap-4 md:gap-6 md:ml-7">
              <a href="#about" className="relative overflow-hidden h-6 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">About</span>
              </a>
              <a href="#projects" className="relative overflow-hidden h-6 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Projects</span>
              </a>
            </div>

            <div className="flex items-center gap-4 md:ml-10">
              <button className="bg-white hover:shadow-[0px_0px_30px_7px] shadow-[0px_0px_30px_3px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                Contact
              </button>
            </div>
          </div>
        </nav>

        <div className='flex items-center pt-50 w-full'>

          <div className='flex items-center justify-center gap-20 max-w-5xl mx-auto'>
            <div className='w-96'>
              <h2 className="text-xl font-medium text-white">I'm Timi Lindblom.</h2>
              <Typewriter
                text={["Developer", "CS Student", "Ambitious"]}
                speed={100}
                loop={true}
                className="text-xl font-medium text-white"
              />
              <div className="flex gap-4 mt-6">
                <a href="https://linkedin.com/in/timi-lindblom" target="_blank" rel="noopener noreferrer" className="group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8 transition-transform group-hover:scale-110" />
                </a>
                <a href="https://github.com/tlgz" target="_blank" rel="noopener noreferrer" className="group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8 bg-white rounded-full p-0.5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            <img
              className=""
              src="/timi-bw.PNG"
              alt="Timi"
              width={300}
              height={300}
            />



          </div>

        </div>
        <section id="about" className="relative z-10 py-20 px-4 flex flex-col items-center justify-center">
          <div className="max-w-4xl w-full">
            <h1 className="text-4xl font-bold text-white mb-10 text-center tracking-tight">About me</h1>

            <div className="relative p-8 md:p-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl ring-1 ring-white/5 shadow-2xl">
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg font-light">
                <p>
                  I am a Computer Science student at Aalto University. I am an ambitious problem-solver who views programming as a strategic tool for building and optimizing complex systems.
                </p>

                <p>
                  My technical background is demonstrated through a variety of projects in my GitHub repository, where I have focused on full-stack development and algorithmic logic. I have experience building functional web applications using modern frameworks, managing both front-end user interfaces and back-end logic. These projects highlight my ability to translate abstract requirements into working code and my dedication to maintaining high standards in version control and documentation. You can have a look at them in the Projects section.
                </p>

                <p>
                  My goal is to find my first professional IT role where I can utilize
                  my extensive hobby-based expertise. I am accustomed to
                  independent information seeking and rapid adoption of new
                  technologies through my personal projects. I now wish to solidify
                  my skills as part of a professional organization and take on
                  responsibilities in demanding software development tasks.
                </p>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Technologies</h3>
                  <div className="flex flex-wrap gap-8 items-center justify-start">
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">React</span>
                    </a>
                    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Node.js</span>
                    </a>
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Python</span>
                    </a>
                    <a href="https://www.scala-lang.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" alt="Scala" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Scala</span>
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">JavaScript</span>
                    </a>
                    <a href="https://github.com/tlgz" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12 bg-white rounded-full p-0.5 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                    </a>
                    <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Scikit-learn</span>
                    </a>
                    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">MySQL</span>
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">MongoDB</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <h1 className=" text-2xl font-bold text-white mt-8 text-center">Projects</h1>
          <div style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu items={items} />
          </div>
        </section>

      </main>
    </div >
  );
}
