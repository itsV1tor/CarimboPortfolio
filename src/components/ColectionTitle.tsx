import { useEffect } from 'react';
import { TSectionTitle } from '../types/TSectionTitle';
import { gsap } from 'gsap';

export function ColectionTitle({ title, subtitle }: TSectionTitle) {
  useEffect(() => {
    gsap.from('.subtitle', { delay: 3, opacity: 0, x: -100, duration: 2.5, ease: 'power3.out' });
    gsap.to('.subtitle', { delay: 3, opacity: 1, x: 0, duration: 2.5, ease: 'power3.out' });
  }, []);
  return (
    <div className='subtitle my-7 ml-4'>
      <h2 className='text-sm font-medium uppercase leading-3 text-principal-negative'>{title}</h2>
      <span className='text-sm text-slate-400'>{subtitle}</span>
    </div>
  );
}
