import { TSectionTitle } from "../types/TSectionTitle";
export function ColectionTitle({title, subtitle}:TSectionTitle) {
  return (
    <div className='ml-4 my-7'>
      <h2 className='text-sm font-medium uppercase leading-3 text-principal-negative'>
        {title}
      </h2>
      <span className='text-sm text-slate-400'>{subtitle}</span>
    </div>
  );
}
