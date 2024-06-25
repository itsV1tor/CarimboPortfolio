import { images } from './assets';
import { Home, Images, Twitter, Mail } from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { ColectionTitle } from './components/ColectionTitle';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    gsap.from('.banner', { delay: 3, opacity: 0, x: 100 });
    gsap.to('.banner', { opacity: 1, delay: 3, x: 0, duration: 2.5, ease: 'power3.out' });

    gsap.from('.nav', { delay: 2, opacity: 0, x: 100 });
    gsap.to('.nav', { opacity: 1, delay: 2, x: 0, duration: 2.5, ease: 'power3.out' });

    gsap.from('.principal', { delay: 4, opacity: 0, x: 100 });
    gsap.to('.principal', { opacity: 1, delay: 4, x: 0, duration: 2.5, ease: 'power3.out' });
  }, []);

  return (
    <main className='m-auto max-w-screen-xl overflow-hidden'>
      <header className='header'>
        <nav className='nav flex items-center justify-between px-4 py-4'>
          <div className='flex gap-2'>
            <a
              href='#'
              className='text-slate-500 transition duration-300 hover:text-principal-negative'
            >
              <Home />
            </a>
            <a
              href='#'
              className='text-slate-500 transition duration-300 hover:text-principal-negative'
            >
              <Images />
            </a>
          </div>
          <img src={images.icon} className='w-20 rounded-full transition hover:rotate-90' />
          <div className='flex gap-2'>
            <a
              href='#'
              className='text-slate-500 transition duration-300 hover:text-principal-negative'
            >
              <Twitter />
            </a>
            <a
              href='#'
              className='text-slate-500 transition duration-300 hover:text-principal-negative'
            >
              <Mail />
            </a>
          </div>
        </nav>
        <img src={images.banner} alt='banner' className='banner w-full' />
      </header>
      <section className='flex-col'>
        <SectionTitle title='Coleções' subtitle='Coleções artisticas' />
        <ColectionTitle title='Dragons & Dungeons' subtitle='De onde vem o ferro e o fogo' />
        <aside className='principal grid grid-cols-2 max-md:grid-cols-1'>
          <div className='grid grid-cols-2'>
            <img src={images.principal_1} alt='dungeons and dungeons image' />
            <img src={images.principal_2} alt='dungeons and dungeons image' />
          </div>
          <div className='grid grid-cols-2'>
            <img src={images.principal_3} alt='dungeons and dungeons image'/>
            <img src={images.principal_4} alt='dungeons and dungeons image' />
          </div>
        </aside>
        <ColectionTitle title='Arco-Iris' subtitle='Mais que colorido' />
        <aside className='grid grid-cols-3 gap-2 px-4 max-md:grid-cols-2'>
          {images.colorized.map((image) =>(
            <img src={image} fetchPriority='high'/>
          ))}
        </aside>
        <ColectionTitle title='Vitral' subtitle='Ao estilo medieval' />
        <aside className='grid grid-cols-3 gap-2 px-4'>
          <img src={images.strainedGlass_1} />
          <img src={images.strainedGlass_2} />
          <img src={images.strainedGlass_3} />
        </aside>
      </section>
      <section>
        <SectionTitle title='Sobre' subtitle='Um pouquinho sobre mim' />
        <div className='m-auto w-fit'>
          <img
            src={images.profile}
            alt='profile icon'
            className='m-auto mb-14 w-96 rounded-full max-md:w-72'
          />
          <p className='m-auto mb-7 w-72 text-center'>
            <span className='font-medium'>Carimbo</span> é um designer de personagens apaixonado por
            dar vida a ideias através de ilustrações vibrantes.
          </p>
        </div>
        <div className='grid gap-2'>
          <img src={images.sketch_1} />
          <img src={images.sketch_2} />
          <img src={images.sketch_3} />
          <div className='grid grid-cols-2 gap-2'>
            <img src={images.sketch_4} />
            <img src={images.sketch_5} />
          </div>
        </div>
      </section>
      <section>
        <SectionTitle title='Contato' subtitle='Entre em contato comigo' />
      </section>
      <section className='mb-7 grid gap-4'>
        <a
          href='https://x.com/CarimboTinteiro'
          target='_blank'
          className='grid w-full place-content-center bg-principal-negative py-20 text-principal-orange-200 transition duration-300 hover:bg-principal-purple'
        >
          <Twitter />
        </a>

        <a
          href='mailto:Carimbotint@gmail.com'
          target='_blank'
          className='grid w-full place-content-center bg-principal-negative py-20 text-principal-orange-200 transition duration-300 hover:bg-principal-purple'
        >
          <Mail />
        </a>
      </section>
      <footer className='py-6'>
        <p className='text-center text-sm text-slate-400'>
          © 2024 Carimbo - Designed & Coded by Haku
        </p>
      </footer>
    </main>
  );
}
