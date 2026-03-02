
import React, { useState } from 'react';
import { Language } from '../types';

interface UserGameRoomProps {
  language: Language;
  activeSession: any;
  onJoinSession: (code: string) => void;
  onEnterGame: () => void;
}

const UserGameRoom: React.FC<UserGameRoomProps> = ({ 
  language, activeSession, onJoinSession, onEnterGame 
}) => {
  const [roomCode, setRoomCode] = useState('');
  const isVi = language === 'vi';

  const t = {
    title: isVi ? 'PHÒNG GAME CỦA TÔI' : 'MY GAME ROOM',
    sub: isVi ? 'Tham gia lớp học bằng mã giáo viên cung cấp.' : 'Join a class using your teacher\'s key.',
    joinNow: isVi ? 'Vào phòng ngay' : 'Join Now',
    activeTitle: isVi ? 'PHÒNG ĐANG DIỄN RA' : 'ACTIVE SESSION',
    rejoin: isVi ? 'QUAY LẠI MÀN CHƠI' : 'REJOIN GAME',
    exploreTitle: isVi ? 'KHÁM PHÁ PHÒNG MẪU' : 'EXPLORE SAMPLE ROOMS',
    joinPh: isVi ? 'Nhập mã phòng (Key)' : 'Enter Join Key',
    btnJoin: isVi ? 'Tham gia' : 'Join',
    sampleRooms: [
      { id: 1, title: isVi ? 'Kỹ năng thoát hiểm' : 'Escape Skills', icon: 'emergency', students: 124, tag: isVi ? 'Cơ bản' : 'Basic', color: 'bg-red-500' },
      { id: 2, title: isVi ? 'Phòng chống bắt nạt' : 'Anti-Bullying', icon: 'shield', students: 85, tag: isVi ? 'Nâng cao' : 'Advanced', color: 'bg-blue-500' },
      { id: 3, title: isVi ? 'Giao tiếp an toàn' : 'Safe Communication', icon: 'security', students: 210, tag: isVi ? 'Hot' : 'Hot', color: 'bg-emerald-500' },
    ]
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomCode.trim()) return;
    onJoinSession(roomCode);
    onEnterGame();
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-6 md:space-y-10 font-display pb-20 px-1 md:px-0">
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-3xl font-black dark:text-white uppercase italic tracking-tight">{t.title}</h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium">{t.sub}</p>
        </div>

        <form onSubmit={handleJoinSubmit} className="bg-white dark:bg-slate-800 p-1.5 md:p-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2 w-full lg:min-w-[380px] lg:w-auto">
          <div className="flex-1 flex items-center pl-3 md:pl-4 gap-2 md:gap-3">
            <span className="material-symbols-outlined text-primary font-bold text-xl">vpn_key</span>
            <input 
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder={t.joinPh} 
              className="bg-transparent border-none focus:ring-0 text-sm font-bold w-full dark:text-white px-0"
            />
          </div>
          <button 
            type="submit"
            className="bg-primary text-white px-4 md:px-6 py-2.5 md:py-3.5 rounded-xl font-black text-xs md:text-sm hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20 shrink-0"
          >
            <span className="material-symbols-outlined text-lg hidden sm:inline">rocket_launch</span>
            {t.btnJoin}
          </button>
        </form>
      </header>

      {activeSession && (
        <section className="relative overflow-hidden bg-primary rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 text-white shadow-2xl shadow-primary/30 group">
          <div className="absolute top-0 right-0 size-48 md:size-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-center sm:text-left">
              <div className="size-16 md:size-24 rounded-2xl md:rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-4xl md:text-5xl animate-pulse">videogame_asset</span>
              </div>
              <div className="space-y-1 md:space-y-2">
                <span className="px-2.5 py-0.5 bg-white/20 rounded-full text-[9px] font-black uppercase tracking-widest">{t.activeTitle}</span>
                <h3 className="text-xl md:text-3xl font-black leading-tight">{activeSession.game}</h3>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 md:gap-4 text-white/80 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">vpn_key</span> {activeSession.key}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> {activeSession.teacher}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onEnterGame}
              className="w-full lg:w-auto bg-white text-primary px-8 md:px-10 py-3.5 md:py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.1em] shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shrink-0"
            >
              <span className="material-symbols-outlined font-black">play_circle</span>
              {t.rejoin}
            </button>
          </div>
        </section>
      )}

      <section className="space-y-6">
        <div className="flex items-center gap-3">
           <h3 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{t.exploreTitle}</h3>
           <div className="h-px flex-1 bg-slate-100 dark:bg-gray-800"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.sampleRooms.map(room => (
            <div key={room.id} className="bg-white dark:bg-[#1a262e] p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-gray-800 group hover:border-primary transition-all shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className={`size-12 md:size-14 rounded-xl md:rounded-2xl ${room.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                  <span className="material-symbols-outlined text-2xl md:text-3xl">{room.icon}</span>
                </div>
                <span className="px-2 py-1 bg-slate-100 dark:bg-gray-800 text-slate-500 text-[8px] md:text-[9px] font-black uppercase rounded-lg tracking-widest">
                  {room.tag}
                </span>
              </div>
              <h4 className="text-base md:text-lg font-black dark:text-white group-hover:text-primary transition-colors">{room.title}</h4>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50 dark:border-gray-800 mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5 md:-space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="size-5 md:size-6 rounded-full border-2 border-white dark:border-[#1a262e] bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${room.id + i}`} alt="" className="size-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-slate-400">+{room.students} {isVi ? 'đang chơi' : 'playing'}</span>
                </div>
                <button 
                  onClick={onEnterGame}
                  className="text-primary font-black text-[10px] md:text-xs uppercase tracking-widest hover:underline"
                >
                  {t.joinNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserGameRoom;
