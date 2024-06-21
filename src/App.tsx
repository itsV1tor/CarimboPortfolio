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
              className='hover:text-principal-negative text-slate-500 transition duration-300'
            >
              <Home />
            </a>
            <a
              href='#'
              className='hover:text-principal-negative text-slate-500 transition duration-300'
            >
              <Images />
            </a>
          </div>
          <img src={images.icon} className='w-20 rounded-full transition hover:rotate-90' />
          <div className='flex gap-2'>
            <a
              href='#'
              className='hover:text-principal-negative text-slate-500 transition duration-300'
            >
              <Twitter />
            </a>
            <a
              href='#'
              className='hover:text-principal-negative text-slate-500 transition duration-300'
            >
              <Mail />
            </a>
          </div>
        </nav>
        <img src={images.banner} alt='banner' />
      </header>
      <section>
        <div className='pt-14 text-center'>
          <h2 className='text-principal-negative font-medium uppercase leading-3 text-xl'>coleções</h2>
          <span className='text-sm text-slate-400'>Principais coleções</span>
        </div>
        <div className='ml-4 pt-14'>
          <h2 className='text-principal-negative text-sm font-medium uppercase leading-3'>
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
          <h2 className='text-principal-negative text-sm font-medium uppercase leading-3'>
            arco-iris
          </h2>
          <span className='text-sm text-slate-400'>uma coleção mais que colorida</span>
        </div>
        <aside className='px-4'>
          <div className='grid grid-cols-3 max-md:grid-cols-2 gap-2'>
            <img src={images.colorized_1} className='w-full' />
            <img src={images.colorized_2} className='w-full' />
            <img src={images.colorized_3} className='w-full' />
            <img src={images.colorized_4} className='w-full' />
            <img src={images.colorized_5} className='w-full' />
            <img src={images.colorized_6} className='w-full' />
          </div>
        </aside>
      </section>
    </div>
  );
}
