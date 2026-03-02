
import React from 'react';
import { Language } from '../types';

interface AdminSupportProps {
  language: Language;
}

const AdminSupport: React.FC<AdminSupportProps> = ({ language }) => {
  const isEn = language === 'en';

  const t = {
    title: isEn ? 'ADMIN SUPPORT CENTER' : 'ADMIN SUPPORT CENTER',
    ticketsTitle: isEn ? 'TICKETS TO HANDLE' : 'TICKETS CẦN XỬ LÝ',
    badgeNew: isEn ? 'NEW: 2' : 'MỚI: 2',
    categoryTech: isEn ? 'TECHNICAL' : 'KỸ THUẬT',
    timeAgo: isEn ? '10 mins ago' : '10 phút trước',
    ticketTitle: isEn ? 'Data synchronization error after purchase' : 'Lỗi đồng bộ dữ liệu sau khi mua',
    ticketDesc: isEn 
      ? 'Customer HS-2024 does not see game in library despite successful report...' 
      : 'Khách hàng HS-2024 không thấy game trong thư viện dù đã báo thành công...',
    reportTitle: isEn ? 'Quick Report' : 'Báo cáo nhanh',
    totalTickets: isEn ? 'Total Tickets today' : 'Tổng Ticket hôm nay',
    completed: isEn ? 'Completed' : 'Đã hoàn thành',
    avgTime: isEn ? 'Average Time' : 'Thời gian trung bình',
    minUnit: isEn ? 'm' : 'p'
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <h2 className="text-2xl font-black dark:text-white uppercase italic tracking-tight">{t.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-[#1a262e] rounded-[2.5rem] border border-slate-200 dark:border-gray-800 overflow-hidden shadow-sm">
            <div className="p-8 bg-slate-50/50 dark:bg-gray-900/50 border-b border-slate-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400">{t.ticketsTitle}</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-600 text-[10px] font-black rounded-lg uppercase shadow-sm">
                  {t.badgeNew}
                </span>
              </div>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-gray-800">
              {[1, 2].map(i => (
                <div key={i} className="p-8 hover:bg-slate-50 dark:hover:bg-gray-800/20 transition-all cursor-pointer group">
                  <div className="flex justify-between mb-3">
                    <span className="text-xs font-black text-primary uppercase tracking-widest">{t.categoryTech}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{t.timeAgo}</span>
                  </div>
                  <h4 className="font-black text-lg dark:text-white group-hover:text-primary transition-colors">{t.ticketTitle}</h4>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-1 font-medium">{t.ticketDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 size-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="font-black text-2xl mb-8 italic tracking-tight">{t.reportTitle}</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center border-b border-white/20 pb-4">
                <span className="text-sm font-bold opacity-80 uppercase tracking-wide">{t.totalTickets}</span>
                <span className="text-2xl font-black">12</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-4">
                <span className="text-sm font-bold opacity-80 uppercase tracking-wide">{t.completed}</span>
                <span className="text-2xl font-black">10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold opacity-80 uppercase tracking-wide">{t.avgTime}</span>
                <span className="text-2xl font-black">15{t.minUnit}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1a262e] p-8 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
              <span className="material-symbols-outlined font-bold">check_circle</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{isEn ? 'System Status' : 'Trạng thái hệ thống'}</p>
              <p className="text-sm font-black dark:text-white uppercase">{isEn ? 'All Operational' : 'Hoạt động ổn định'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
