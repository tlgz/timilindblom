import { Typewriter } from "@/components/ui/typewriter-text"
import DarkVeil from '@/components/DarkVeil';
import InfiniteMenu from '@/components/InfiniteMenu'

const items = [
  {
    //title ja desc sotkee mobilen
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://timilindblom.com',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://timilindblom.com',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://timilindblom.com',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://timilindblom.com',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
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
                src="/next.svg"
                alt="Timi"
                width={40}
                height={40}
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

          <div className='flex items-center max-w-3xl ml-[40%] -translate-x-1/2'>
            <div className='w-96'>
              <h2 className="text-xl font-medium text-white">I'm Timi Lindblom.</h2>
              <Typewriter
                text={["Developer", "CS Student", "Ambitious"]}
                speed={100}
                loop={true}
                className="text-xl font-medium text-white"
              />
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
        <section id="about">
          <h1 className=" text-2xl font-bold text-white mt-8 text-center">About me</h1>
          <a className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam ligula, lobortis sit amet porttitor in, maximus non risus. Phasellus tincidunt augue leo, non congue massa dapibus aliquet. In blandit, dui vitae porttitor faucibus, neque metus rhoncus dui, at aliquam dui odio in urna. In aliquam id ex cursus fringilla. Curabitur euismod, massa quis tincidunt efficitur, libero metus dictum mi, eu vulputate arcu ligula eu lectus. Vivamus ut tellus non risus dapibus cursus. Aenean vitae ligula ut arcu tincidunt feugiat. Morbi non odio pretium, sagittis nisl nec, venenatis sapien. Morbi venenatis blandit turpis volutpat pharetra. Curabitur enim arcu, fermentum quis diam egestas, tempor lacinia urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent gravida id augue at hendrerit. Duis egestas urna vitae pulvinar elementum. Mauris quis sapien urna.

            Integer blandit feugiat nisi, vel facilisis ligula placerat eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sodales, dui at vulputate sagittis, purus ante ultrices neque, id interdum felis purus a mi. Quisque a est rhoncus lectus tincidunt vestibulum. Sed luctus metus eu est sollicitudin iaculis nec id mi. Fusce a ante lectus. Aliquam erat volutpat. Quisque euismod faucibus mauris, at tempus mauris commodo in. Vestibulum id erat in ipsum lacinia interdum. In sollicitudin, ante non vulputate varius, neque turpis rhoncus arcu, id tincidunt nisl velit nec turpis. Aliquam luctus vulputate magna a sodales. Duis eu eleifend diam, ut rhoncus quam. In non faucibus ex. Vivamus fringilla elit eu enim volutpat, tempus sollicitudin nibh eleifend.

            Donec a sem tortor. Phasellus eget neque at mauris eleifend dictum. Vivamus magna metus, tincidunt ac gravida a, placerat vitae arcu. Suspendisse lacinia congue varius. Nulla vel nisl mi. Aliquam nec varius ex, eu semper velit. Proin egestas ipsum ipsum, sit amet posuere tellus accumsan vel. Mauris vitae aliquet arcu. Vivamus eu tempus risus, eu vestibulum tellus. Proin quis nisl eget nisi varius porttitor. Phasellus orci nibh, cursus nec sem eget, vestibulum mattis elit. Phasellus imperdiet fringilla ultrices. Fusce ac facilisis ante. Donec eget lectus scelerisque, hendrerit dolor in, cursus ipsum. Morbi consectetur viverra purus, a sodales orci condimentum vel.

            Nam posuere sem eu magna blandit porta. Curabitur et lacus ornare, sagittis dui dictum, suscipit turpis. Morbi sollicitudin bibendum nisl ac semper. Curabitur ut leo a metus posuere mattis. Phasellus aliquam orci turpis, nec congue dolor rhoncus a. Praesent porta maximus velit, sed dapibus arcu fermentum in. Vivamus congue felis ac tincidunt pretium. Quisque eget massa volutpat, lobortis arcu sit amet, efficitur magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Mauris eleifend, leo eu semper mattis, quam elit euismod mi, sit amet egestas leo ipsum ac ante. Vestibulum egestas sagittis iaculis. Mauris feugiat, felis et sodales blandit, mi lorem mollis augue, bibendum laoreet nulla dolor quis quam. Aenean libero tellus, aliquam eget nunc quis, porta facilisis sem. Etiam ultricies nisi a mattis auctor. Aenean euismod lacus a orci malesuada, at consectetur orci facilisis. Etiam laoreet elementum risus eget sodales. Proin semper sem vitae blandit imperdiet. Integer pulvinar turpis in egestas ornare. Duis vitae facilisis felis, ac posuere neque. Duis eget tempor enim, ut finibus erat. Vestibulum porttitor mattis sapien, vitae tristique neque laoreet vel. Maecenas tincidunt tortor nec elementum consequat.</a>
        </section>
        <section id="projects">
          <h1 className=" text-2xl font-bold text-white mt-8 text-center">Projects</h1>
          <div style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu items={items} />
          </div>
        </section>

      </main>
    </div>
  );
}
