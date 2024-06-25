import { useEffect } from 'react';
import { TSectionTitle } from '../types/TSectionTitle';
import { gsap } from 'gsap';

export function SectionTitle({ title, subtitle }: TSectionTitle) {
  useEffect(() => {
    gsap.from('.title', {
      opacity: 0,
      y: 100,
      duration: 2.5,
      delay: 4,
      ease: 'power2.out',
    });
    gsap.to('.title', {
      opacity: 1,
      y: 0,
      delay: 4,
      duration: 2.5,
      ease: 'power2.out',
    });
  }, []);
  return (
    <div className='title py-14 text-center'>
      <h2 className='text-xl font-medium uppercase leading-3 text-principal-negative'>{title}</h2>
      <span className='text-sm text-slate-400'>{subtitle}</span>
    </div>
  );
}
