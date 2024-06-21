import { images } from './assets';
import { Home, Images, Twitter, Mail } from 'lucide-react';
export function App() {
  return (
    <div className='m-auto max-w-screen-xl'>
      <header>
        <nav className='flex items-center justify-between px-4 py-4'>
          <div className='flex gap-2'>
            <a href='#' className='hover:text-principal-negative text-slate-600 transition'>
              <Home />
            </a>
            <a href='#' className='hover:text-principal-negative text-slate-600 transition'>
              <Images />
            </a>
          </div>
          <img src={images.icon} className='w-20 rounded-full' />
          <div className='flex gap-2'>
            <a href='#' className='hover:text-principal-negative text-slate-600 transition'>
              <Twitter />
            </a>
            <a href='#' className='hover:text-principal-negative text-slate-600 transition'>
              <Mail />
            </a>
          </div>
        </nav>
        <img src={images.banner} alt='banner' />
      </header>
      <section>
        <h2 className='text-center'>principal</h2>
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
