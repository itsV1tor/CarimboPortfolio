import { images } from './assets';
import { Home, Images, Twitter, Mail } from 'lucide-react';
export function App() {
  return (
    <div className='m-auto max-w-screen-xl'>
      <header>
        <nav className='flex items-center justify-between px-4 py-4'>
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
        <img src={images.banner} alt='banner' />
      </header>
      <section>
        <div className='pt-14 text-center'>
          <h2 className='text-xl font-medium uppercase leading-3 text-principal-negative'>
            coleções
          </h2>
          <span className='text-sm text-slate-400'>Principais coleções</span>
        </div>
        <div className='ml-4 pt-14'>
          <h2 className='text-sm font-medium uppercase leading-3 text-principal-negative'>
            dungeons & dungeons
          </h2>
          <span className='text-sm text-slate-400'>de onde vem...</span>
        </div>
        <aside className='flex max-md:flex-col'>
          <div className='flex max-md:flex'>
            <img src={images.principal_1} className='w-full' />
            <img src={images.principal_2} className='w-full' />
          </div>
          <div className='flex max-md:flex'>
            <img src={images.principal_3} className='w-full' />
            <img src={images.principal_4} className='w-full' />
          </div>
        </aside>
        <div className='ml-4 pt-14'>
          <h2 className='text-sm font-medium uppercase leading-3 text-principal-negative'>
            arco-iris
          </h2>
          <span className='text-sm text-slate-400'>Uma coleção mais que colorida</span>
        </div>
        <aside className='px-4'>
          <div className='grid grid-cols-3 gap-2 max-md:grid-cols-2'>
            <img src={images.colorized_1} className='w-full' />
            <img src={images.colorized_2} className='w-full' />
            <img src={images.colorized_3} className='w-full' />
            <img src={images.colorized_4} className='w-full' />
            <img src={images.colorized_5} className='w-full' />
            <img src={images.colorized_6} className='w-full' />
          </div>
        </aside>
        <div className='ml-4 pt-14'>
          <h2 className='text-sm font-medium uppercase leading-3 text-principal-negative'>
            Vitral
          </h2>
          <span className='text-sm text-slate-400'>Expressões medievais</span>
        </div>
        <aside className='px-4'>
          <div className='flex gap-2'>
            <img src={images.strainedGlass_1} className='w-full' />
            <img src={images.strainedGlass_2} className='w-full' />
            <img src={images.strainedGlass_3} className='w-full' />
          </div>
        </aside>
      </section>
      <section>
        <div className='py-14 text-center'>
          <h2 className='text-xl font-medium uppercase leading-3 text-principal-negative'>Sobre</h2>
          <span className='text-sm text-slate-400'>Um pouquinho sobre mim</span>
        </div>
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
        <div className='flex-col gap-16'>
          <img src={images.sketch_1} alt='' className='w-full' />
          <img src={images.sketch_2} alt='' className='w-full' />
          <img src={images.sketch_3} alt='' className='w-full' />
          <div className='flex'>
            <img src={images.sketch_4} alt='' className='w-full' />
            <img src={images.sketch_5} alt='' className='w-full' />
          </div>
        </div>
      </section>
      <section>
        <div className='py-14 text-center'>
          <h2 className='text-xl font-medium uppercase leading-3 text-principal-negative'>
            Contato
          </h2>
          <span className='text-sm text-slate-400'>Entre em contato comigo</span>
        </div>
      </section>
      <section className='mb-7 flex'>
        <a
          href='https://x.com/CarimboTinteiro'
          target='_blank'
          className='flex h-48 w-full items-center justify-center bg-principal-negative text-principal-orange-200 transition duration-300 hover:bg-principal-purple'
        >
          <Twitter />
        </a>

        <a
          href='mailto:Carimbotint@gmail.com'
          target='_blank'
          className='flex h-48 w-full items-center justify-center bg-principal-negative text-principal-orange-200 transition duration-300 hover:bg-principal-purple'
        >
          <Mail />
        </a>
      </section>
      <footer className='py-6'>
        <p className='text-center text-sm text-slate-400'>© 2024 Carimbo - Designed & Coded by Haku</p>
      </footer>
    </div>
  );
}
