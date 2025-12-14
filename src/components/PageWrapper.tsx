import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

export default function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {title && (
        <div className="bg-gradient-to-r from-[#9B8E57] to-[#96121D] px-8 py-6">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-8">
        {children}
      </div>
    </div>
  );
}
