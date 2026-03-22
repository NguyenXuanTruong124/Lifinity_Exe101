
import React, { useState } from 'react';
import { Language } from '../types';

interface UserGameRoomProps {
  language: Language;
  activeSession: any;
  onJoinSession: (code: string) => boolean;
  onEnterGame: () => void;
}

const UserGameRoom: React.FC<UserGameRoomProps> = ({ 
  language, activeSession, onJoinSession, onEnterGame 
}) => {
  const [roomCode, setRoomCode] = useState('');
  const isVi = language === 'vi';

  const [realActiveRooms, setRealActiveRooms] = useState<any[]>(() => {
    const saved = sessionStorage.getItem('lifinity_active_rooms');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [discoveredRoomKeys, setDiscoveredRoomKeys] = useState<string[]>(() => {
    const saved = sessionStorage.getItem('lifinity_discovered_keys');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  React.useEffect(() => {
    sessionStorage.setItem('lifinity_discovered_keys', JSON.stringify(discoveredRoomKeys));
  }, [discoveredRoomKeys]);


  const t = {
    title: isVi ? 'PHÒNG TRÒ CHƠI CỦA TÔI' : 'MY GAME ROOM',
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
    const ucKey = roomCode.toUpperCase().trim();
    if (!ucKey) return;
    
    // Check if it's a real room to "discover" it
    const matchingRoom = realActiveRooms.find(r => r.key === ucKey || r.key.endsWith(ucKey));
    if (matchingRoom) {
      if (!discoveredRoomKeys.includes(matchingRoom.key)) {
        setDiscoveredRoomKeys(prev => [...prev, matchingRoom.key]);
      }
      setRoomCode(''); // Clear input
      return;
    }

    // fallback to original behavior if it's some other key or for testing
    const success = onJoinSession(roomCode);
    if (success) onEnterGame();
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



      <div className="h-px w-full bg-slate-100 dark:bg-gray-800"></div>
      <section className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Filtered Real Active Rooms - Only show if discovered via key */}
          {realActiveRooms
            .filter(room => discoveredRoomKeys.includes(room.key))
            .map(room => (
              <div key={room.id} className="bg-white dark:bg-[#1a262e] p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-2 border-primary/20 dark:border-primary/10 group hover:border-primary transition-all shadow-lg flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded-bl-xl">
                {isVi ? 'Đang mở' : 'Open'}
              </div>
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className={`size-12 md:size-14 rounded-xl md:rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                  <span className="material-symbols-outlined text-2xl md:text-3xl">hub</span>
                </div>
                <div className="text-right">
                  <span className="block text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Mã tham gia</span>
                  <span className="text-sm font-black text-primary tracking-tighter">{room.key}</span>
                </div>
              </div>
              <h4 className="text-base md:text-lg font-black dark:text-white group-hover:text-primary transition-colors">{room.gameTitle}</h4>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50 dark:border-gray-800 mt-4">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">{isVi ? 'Đang tham gia' : 'Students'}</span>
                  <span className="text-xs font-black dark:text-slate-300">{room.studentsCount} học sinh</span>
                </div>
                <button 
                  onClick={() => {
                    const success = onJoinSession(room.key);
                    if (success) onEnterGame();
                  }}
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-md active:scale-95 transition-all"
                >
                  {t.joinNow}
                </button>
              </div>
            </div>
          ))}

          {/* Sample Rooms */}
          {t.sampleRooms.map(room => (
            <div key={room.id} className="bg-white dark:bg-[#1a262e] p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 dark:border-gray-800 group hover:border-primary transition-all shadow-sm flex flex-col opacity-80">
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
                  onClick={() => {
                    const success = onJoinSession(`SAMPLE-${room.id}`);
                    if (success) onEnterGame();
                  }}
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
