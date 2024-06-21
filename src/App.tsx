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
        <div className='py-14 text-center'>
          <h2 className='text-principal-negative font-medium uppercase leading-3'>principal</h2>
          <span className='text-slate-400 text-sm'>Principais artes</span>
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
      </section>
    </div>
  );
}
