
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface DashboardUserProps {
  onContinueGame: (id: string) => void;
  language?: Language;
  activeSession: any;
  setActiveSession: (session: any) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const DashboardUser: React.FC<DashboardUserProps> = ({ 
  onContinueGame, language = 'vi', activeSession, setActiveSession, isPlaying, setIsPlaying 
}) => {
  const isVi = language === 'vi';

  const studentProfile = {
    fullName: "Nguyễn Minh Quân",
    class: isVi ? "Lớp 6A1 - TH Chu Văn An" : "Class 6A1 - Chu Van An Primary",
    studentId: "HS-2024-0882",
    email: "quan.nm@school.edu.vn",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuANR5L-71s1vuEDS5YhPWcxq0CGNMyigcdl9lE-evqMxGYXJn9zmlemrlykaBYRnVGYkr_yA2Q3Vl14-V4zS7BbeImRsCMIgO2pF3SG1xQMMh8qUrvBfDAt3_0dHcNvJ24XNsvsJpDZmPSlUfqAk7YXCkowdDqJl5s05OwS-PhqBGJuuVir8J5iacr6FvAEj4fKUHGSHOn5WbRu5bdUmgzPsF6cMr7ImE-hOb5zeHA0cW6AKh1-FDC5Fl03tx8VFC_gshBkh7i34y8v"
  };

  const t = {
    welcome: isVi ? 'Học sinh Portal' : 'Student Portal',
    greeting: isVi ? 'Xin chào' : 'Welcome',
    historyTitle: isVi ? 'Lịch sử tham gia' : 'Activity History',
    profileTitle: isVi ? 'Thông tin cá nhân' : 'Personal Profile',
    activeRoom: isVi ? 'Đang diễn ra' : 'In Progress',
    btnExit: isVi ? 'Rời phòng' : 'Exit',
    btnPlay: isVi ? 'Vào màn chơi' : 'Enter Game',
    roomLabel: isVi ? 'Phòng Game' : 'Game Room',
    updateProfile: isVi ? 'Cập nhật hồ sơ' : 'Update Profile',
    viewReport: isVi ? 'Xem báo cáo' : 'View Report',
    sessionCol: isVi ? 'Phiên học' : 'Session',
    instructor: isVi ? 'Giảng viên' : 'Instructor',
    labels: {
        id: isVi ? 'Mã số học sinh' : 'Student ID',
        email: isVi ? 'Email học tập' : 'Learning Email',
        class: isVi ? 'Lớp tham gia' : 'Current Class',
        name: isVi ? 'Tên định danh' : 'Identity Name',
        key: isVi ? 'Mã phòng' : 'Room Key',
        date: isVi ? 'Ngày tham gia' : 'Date Joined',
        score: isVi ? 'Điểm số' : 'Score',
        result: isVi ? 'Kết quả' : 'Result',
    },
    stats: {
        medals: isVi ? 'Huy chương' : 'Medals',
        streak: isVi ? 'Ngày Streak' : 'Streak Days',
    }
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-8 pb-16 font-display">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h2 className="text-4xl font-black tracking-tight text-[#111418] dark:text-white italic uppercase">{t.welcome}</h2>
          <p className="text-[#617589] dark:text-gray-400 text-lg">
             {t.greeting}, <span className="font-bold text-primary">{studentProfile.fullName}</span>!
          </p>
        </div>

        <div className="w-full md:w-auto">
          {activeSession && (
            <div className="bg-primary text-white p-1 rounded-2xl shadow-xl flex items-center gap-4 animate-in zoom-in duration-300">
               <div className="bg-white/10 px-5 py-4 rounded-xl flex items-center gap-4">
                  <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined animate-spin">cyclone</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase opacity-70 tracking-widest leading-none mb-1">{t.roomLabel}</p>
                    <p className="text-lg font-black">{activeSession.key}</p>
                  </div>
               </div>
               <div className="px-4 pr-6">
                  <button onClick={() => setActiveSession(null)} className="flex items-center gap-2 text-xs font-bold hover:underline opacity-80 hover:opacity-100">
                    <span className="material-symbols-outlined text-sm">logout</span> {t.btnExit}
                  </button>
               </div>
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
           <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">{t.profileTitle}</h3>
              <div className="flex flex-col items-center text-center space-y-4">
                 <div className="size-28 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                    <img src={studentProfile.avatar} className="size-full object-cover" alt="Student" />
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-2xl font-black dark:text-white">{studentProfile.fullName}</h4>
                    <p className="text-primary font-bold text-sm tracking-wide uppercase">{studentProfile.class}</p>
                 </div>
              </div>
              
              <div className="mt-10 space-y-4">
                 <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl flex items-center gap-4 border border-transparent hover:border-primary/10 transition-all">
                    <span className="material-symbols-outlined text-primary">badge</span>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.labels.id}</span>
                       <span className="text-sm font-bold dark:text-white">{studentProfile.studentId}</span>
                    </div>
                 </div>
                 <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl flex items-center gap-4 border border-transparent hover:border-primary/10 transition-all">
                    <span className="material-symbols-outlined text-primary">alternate_email</span>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.labels.email}</span>
                       <span className="text-sm font-bold dark:text-white">{studentProfile.email}</span>
                    </div>
                 </div>
              </div>

              <button className="w-full mt-8 py-3.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">{t.updateProfile}</button>
           </section>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-500 p-6 rounded-3xl text-white shadow-lg shadow-emerald-500/20">
                 <span className="material-symbols-outlined text-3xl mb-2">military_tech</span>
                 <p className="text-3xl font-black">12</p>
                 <p className="text-[10px] font-bold uppercase opacity-80">{t.stats.medals}</p>
              </div>
              <div className="bg-orange-500 p-6 rounded-3xl text-white shadow-lg shadow-orange-500/20">
                 <span className="material-symbols-outlined text-3xl mb-2">local_fire_department</span>
                 <p className="text-3xl font-black">5</p>
                 <p className="text-[10px] font-bold uppercase opacity-80">{t.stats.streak}</p>
              </div>
           </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
           {activeSession && (
             <section className="bg-primary/5 dark:bg-primary/10 border-2 border-primary/20 rounded-[2.5rem] p-8 animate-in slide-in-from-top-4 duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                   <div className="flex gap-6 items-center">
                      <div className="size-20 rounded-3xl bg-primary flex items-center justify-center text-white shadow-xl">
                         <span className="material-symbols-outlined text-4xl filled-icon">play_circle</span>
                      </div>
                      <div className="space-y-1">
                         <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-black rounded uppercase tracking-tighter">{t.activeRoom}</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{activeSession.startTime}</span>
                         </div>
                         <h3 className="text-2xl font-black dark:text-white leading-tight">{activeSession.game}</h3>
                         <p className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                           <span className="material-symbols-outlined text-lg text-primary">person</span> {t.instructor}: {activeSession.teacher}
                         </p>
                      </div>
                   </div>
                   <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                   >
                     {t.btnPlay}
                   </button>
                </div>
             </section>
           )}

           <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 dark:border-slate-700 flex justify-between items-center">
                 <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">{t.historyTitle}</h3>
                 <button className="text-primary text-xs font-bold hover:underline">{t.viewReport}</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                       <tr>
                          <th className="px-8 py-4">{t.sessionCol}</th>
                          <th className="px-6 py-4">{t.labels.date}</th>
                          <th className="px-6 py-4 text-center">{t.labels.score}</th>
                          <th className="px-6 py-4 text-right">{t.labels.result}</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
                       {[
                         { title: isVi ? 'An toàn cá nhân' : 'Personal Safety', key: 'EDU-X92', date: '24/05/2024', score: 1200, rank: isVi ? 'Giỏi' : 'Good', color: 'bg-emerald-100 text-emerald-700' },
                         { title: isVi ? 'Giao tiếp 101' : 'Comm 101', key: 'LIF-K12', date: '20/05/2024', score: 850, rank: isVi ? 'Khá' : 'Fair', color: 'bg-blue-100 text-blue-700' },
                       ].map((item, i) => (
                         <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/20 group cursor-pointer transition-colors">
                            <td className="px-8 py-5">
                               <div className="flex flex-col">
                                  <span className="font-bold dark:text-white group-hover:text-primary transition-colors">{item.title}</span>
                                  <span className="text-[10px] font-mono text-slate-400">Key: {item.key}</span>
                               </div>
                            </td>
                            <td className="px-6 py-5 text-sm text-slate-500 font-medium">{item.date}</td>
                            <td className="px-6 py-5 text-center"><span className="font-black text-slate-700 dark:text-slate-200">{item.score}</span></td>
                            <td className="px-6 py-5 text-right">
                               <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${item.color}`}>{item.rank}</span>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
