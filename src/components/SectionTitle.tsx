import { TSectionTitle } from "../types/TSectionTitle";

export function SectionTitle({title, subtitle}: TSectionTitle) {
  return (
    <div className='py-14 text-center'>
      <h2 className='text-xl font-medium uppercase leading-3 text-principal-negative'>{title}</h2>
      <span className='text-sm text-slate-400'>{subtitle}</span>
    </div>
  );
}
