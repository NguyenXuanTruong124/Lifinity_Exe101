
import React from 'react';
import { Language } from '../types';

interface GameSceneProps {
  language: Language;
  onExit: () => void;
}

const GameScene: React.FC<GameSceneProps> = ({ language, onExit }) => {
  const isVi = language === 'vi';

  return (
    <div className="fixed inset-0 z-[100] bg-[#a8d8f0] flex flex-col font-display overflow-hidden animate-in fade-in duration-500">
      {/* Background Layers */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="flex-[3] bg-[#a8d8f0]"></div>
        <div className="flex-1 bg-[#8c94ac]"></div>
      </div>

      {/* The Fence - Vertical bars background */}
      <div className="absolute inset-x-0 bottom-1/4 h-[45%] sm:h-[55%] flex justify-center items-end opacity-40 sm:opacity-60 pointer-events-none">
        <div className="w-full h-full border-x-[8px] sm:border-x-[16px] border-t-[8px] sm:border-t-[16px] border-[#334155] relative max-w-[1200px]">
          <div className="absolute inset-0 flex justify-evenly">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-[2px] sm:w-[3px] h-full bg-[#334155]"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Header UI */}
      <header className="relative z-20 p-4 sm:p-6 flex justify-end">
        <button 
          onClick={onExit}
          className="bg-white/95 backdrop-blur shadow-lg px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black text-slate-700 hover:bg-white hover:scale-105 active:scale-95 transition-all border border-slate-200"
        >
          {isVi ? 'Thoát game' : 'Exit game'}
        </button>
      </header>

      {/* Question Area */}
      <div className="relative z-10 px-4 sm:px-0 flex justify-center mt-2 sm:mt-4">
        <div className="bg-white border-[4px] sm:border-[6px] border-[#ffcc00] rounded-[2rem] sm:rounded-[3rem] px-6 sm:px-16 py-5 sm:py-8 shadow-2xl max-w-full sm:max-w-[85%] text-center animate-in zoom-in duration-700">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-[#1e293b] leading-tight">
            {isVi ? 'Người lạ tặng kẹo và rủ con đi chơi, con nên làm gì?' : 'A stranger offers candy and asks you to play, what should you do?'}
          </h2>
        </div>
      </div>

      {/* The Action Area - Characters and Bubbles */}
      <main className="relative z-10 flex-1 flex flex-row items-end justify-between px-4 sm:px-20 pb-10 sm:pb-12 max-w-5xl mx-auto w-full">
          
          {/* AN CHARACTER (Left) */}
          <div className="relative flex flex-col items-center group">
            {/* Speech Bubble Option 1 */}
            <div className="absolute bottom-[110%] left-0 sm:left-auto w-36 sm:w-48 animate-in slide-in-from-bottom-4 duration-500 delay-300">
               <button className="bg-[#3b82f6] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-[10px] sm:text-sm shadow-[0_4px_0_#2563eb] sm:shadow-[0_8px_0_#2563eb] hover:translate-y-0.5 hover:shadow-[0_2px_0_#2563eb] active:translate-y-1 active:shadow-none transition-all w-full text-center leading-tight">
                  {isVi ? 'Lại gần nói chuyện' : 'Go near and talk'}
               </button>
               <div className="mt-2 flex justify-start pl-4">
                  <div className="bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md text-[8px] sm:text-[10px] font-black text-primary uppercase border border-blue-50">An</div>
               </div>
            </div>

            {/* Character Design - Scale down on mobile */}
            <div className="scale-75 sm:scale-100 origin-bottom flex flex-col items-center">
              <div className="size-24 bg-[#f5c299] rounded-full relative shadow-md">
                 <div className="absolute top-10 left-6 size-2 bg-[#301508] rounded-full"></div>
                 <div className="absolute top-10 right-6 size-2 bg-[#301508] rounded-full"></div>
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-3 border-b-2 border-[#301508] rounded-full"></div>
                 {/* Hair Style */}
                 <div className="absolute -top-1 inset-x-0 h-10 bg-[#301508] rounded-t-full"></div>
                 <div className="absolute top-6 -left-3 size-12 bg-[#301508] rounded-full"></div>
                 <div className="absolute top-6 -right-3 size-12 bg-[#301508] rounded-full"></div>
              </div>
              <div className="w-20 h-14 bg-[#3b82f6] rounded-t-[2.5rem] -mt-2 shadow-inner border-b-4 border-slate-900/10 relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-400/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* STRANGER CHARACTER (Right) */}
          <div className="relative flex flex-col items-center">
             {/* Speech Bubble Option 2 */}
             <div className="absolute bottom-[110%] right-0 sm:right-auto w-40 sm:w-56 animate-in slide-in-from-bottom-4 duration-500 delay-500">
               <button className="bg-[#ffcc00] text-[#1e293b] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-[10px] sm:text-sm shadow-[0_4px_0_#ca8a04] sm:shadow-[0_8px_0_#ca8a04] hover:translate-y-0.5 hover:shadow-[0_2px_0_#ca8a04] active:translate-y-1 active:shadow-none transition-all w-full text-center leading-tight">
                  {isVi ? 'Giữ khoảng cách và từ chối' : 'Keep distance and refuse'}
               </button>
            </div>

            <div className="scale-75 sm:scale-100 origin-bottom flex flex-col items-center">
              <div className="size-24 bg-[#fce4d6] rounded-full relative shadow-lg">
                 {/* Hat */}
                 <div className="absolute -top-5 -inset-x-2 h-10 bg-[#1e293b] rounded-t-full"></div>
                 <div className="absolute top-5 -inset-x-6 h-3 bg-[#1e293b] rounded-full"></div>
                 {/* Sunglasses */}
                 <div className="absolute top-10 inset-x-3 h-5 bg-black rounded-full flex items-center justify-center">
                    <div className="w-full h-px bg-slate-600 opacity-30"></div>
                 </div>
              </div>
              {/* Long Trench Coat */}
              <div className="w-24 h-40 bg-[#1e293b] rounded-t-3xl shadow-2xl relative pt-10 flex justify-center">
                 <div className="w-[1px] h-full bg-slate-700/50"></div>
                 <div className="absolute top-12 left-6 size-1.5 bg-slate-800 rounded-full"></div>
                 <div className="absolute top-12 right-6 size-1.5 bg-slate-800 rounded-full"></div>
              </div>
              {/* Hand with Candy */}
              <div className="absolute bottom-20 -left-4 sm:left-0 animate-bounce">
                 <div className="size-8 rounded-full bg-slate-200 shadow-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-yellow-500 filled-icon text-xl uppercase font-black">candy</span>
                 </div>
              </div>
            </div>
          </div>
      </main>

      {/* Bottom Status Bar */}
      <footer className="relative z-20 p-4 sm:p-10 flex justify-center sm:justify-start">
         <div className="bg-white/90 backdrop-blur px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-primary/10 shadow-xl flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-widest">
              {isVi ? 'Tiến độ' : 'Progress'}: 1 / 2
            </span>
         </div>
      </footer>
    </div>
  );
};

export default GameScene;
