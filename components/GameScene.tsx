import React from 'react';
import { Language } from '../types';

interface GameSceneProps {
  language: Language;
  activeSession: any;
  onExit: () => void;
}

const GameScene: React.FC<GameSceneProps> = ({ language, activeSession, onExit }) => {
  const isVi = language === 'vi';

  // SEND JSON QUESTIONS TO GAME ENGINE
  React.useEffect(() => {
    if (activeSession?.config?.questions) {
      const timer = setTimeout(() => {
        const iframe = document.querySelector('iframe');
        if (iframe) {
           console.log("SENDING CUSTOM JSON TO GAME ENGINE:", activeSession.config.questions);
           iframe.contentWindow?.postMessage({
             type: 'LOAD_CUSTOM_QUESTIONS',
             questions: activeSession.config.questions
           }, '*');
        }
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [activeSession]);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col font-display overflow-hidden">
      
      {/* Thanh công cụ phía trên (Header) */}
      <header className="relative z-20 p-3 sm:p-4 flex justify-between items-center bg-white shadow-md">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            <span className="text-blue-700 font-black text-xs sm:text-sm uppercase tracking-wider">
              {isVi ? 'Bài học: Bảo vệ bản thân' : 'Lesson: Self-Protection'}
            </span>
          </div>
        </div>

        <button 
          onClick={onExit}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-black text-xs sm:text-sm transition-all shadow-lg active:scale-95"
        >
          {isVi ? 'Thoát game' : 'Exit game'}
        </button>
      </header>

      {/* Vùng chứa Game Unity */}
      <main className="relative flex-1 bg-black flex justify-center items-center">
        <iframe
          key={activeSession?.key || 'unity-game'}
          src={`/unity-game/index.html?v=${Date.now()}`} // Force refresh
          title="Unity Protector Game"
          className="w-full h-full border-none"
          allow="autoplay; fullscreen; keyboard"
        />
      </main>

      {/* Footer nhỏ để trang trí nếu cần */}
      <footer className="bg-slate-800 p-1 text-[10px] text-center text-slate-400">
        Unity Game Engine WebGL
      </footer>
    </div>
  );
};

export default GameScene;