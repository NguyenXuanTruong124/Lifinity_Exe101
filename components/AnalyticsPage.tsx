
import React from 'react';
import { Language } from '../types';

interface AnalyticsPageProps {
  language?: Language;
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ language = 'vi' }) => {
  const t = {
    title: language === 'vi' ? 'Phân tích Tiến độ' : 'Progress Analytics',
    sub: language === 'vi' ? 'Phân tích chi tiết quá trình phát triển kỹ năng của bạn.' : 'Detailed analysis of your skill development process.',
    btnDownload: language === 'vi' ? 'Tải báo cáo' : 'Download Report',
    btnPeriod: language === 'vi' ? 'Tháng này' : 'This Month',
    secSkill: language === 'vi' ? 'Phân tích Kỹ năng Tổng quát' : 'Overall Skill Analysis',
    overall: language === 'vi' ? 'Tổng thể' : 'Overall',
    secActivity: language === 'vi' ? 'Hoạt động Hàng tháng' : 'Monthly Activity',
    legendTime: language === 'vi' ? 'Thời gian' : 'Time',
    legendAvg: language === 'vi' ? 'Trung bình' : 'Average',
    stats: {
        learnTime: language === 'vi' ? 'Thời gian học' : 'Study Time',
        tests: language === 'vi' ? 'Bài kiểm tra' : 'Assessments',
        completion: language === 'vi' ? 'Tỷ lệ hoàn thành' : 'Completion Rate',
        unitHour: language === 'vi' ? 'Giờ' : 'Hours'
    },
    secGameDetail: language === 'vi' ? 'Chi tiết từng Trò chơi' : 'Individual Game Progress',
    gameLabels: {
        modules: language === 'vi' ? 'Mô-đun đã học' : 'Modules Learned',
        score: language === 'vi' ? 'Điểm số' : 'Score',
        time: language === 'vi' ? 'Thời gian' : 'Time'
    },
    skills: [
      { label: language === 'vi' ? 'Xã hội' : 'Social', val: '85%', color: 'bg-[#10b981]' },
      { label: language === 'vi' ? 'Tài chính' : 'Financial', val: '65%', color: 'bg-[#f59e0b]' },
      { label: language === 'vi' ? 'Nhận thức' : 'Cognitive', val: '78%', color: 'bg-primary' }
    ],
    days: language === 'vi' ? ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN', 'T2'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
    gameData: [
        { title: language === 'vi' ? 'Giải quyết Xung đột' : 'Conflict Resolution', skill: language === 'vi' ? 'Giao tiếp & Đàm phán' : 'Comm & Negotiation', progress: 75, score: '92 / 100', time: '4h 20m', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjgvRu8nA9WK-H1a4zrjDC1IDKsZh4wKTTzaGv-Nw77jqMqGNavVruJhQtvd7uCizjHuatDHzs8a5MZfgITW3tYE4Vclk_vz9c3P2cyRkL3-h9ST3p18FTkNLVa_XqFgCRXmK8I7cHNHeRfR-ojZO475Bts60wG9jpe_EtYcwh-zJXlJA-Ohw4W2sC_7oFIpcci5e7Gz9udW93kWJdXkwM_2F-50sBLS4rG1d8No9Ewf918i37aNUx31JFiyIWAkjYWvIBsr5_Srls' },
        { title: language === 'vi' ? 'Người hùng Ngân sách' : 'Budget Hero', skill: language === 'vi' ? 'Quản lý Tài chính' : 'Financial Management', progress: 40, score: '78 / 100', time: '2h 15m', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9cHlcah3JUWu9_oWZpwkJIu6WnQaT2TKK-MNFmNjjAlct6sG-77tUxK17Ma8joWaWbxfvL-ACza9uzUBTl2dMPeUH0mMyb3tupN1dnzA8gEBM_d_jZQLddoPopgWsutVcOILFuUxUHDPLq648ByHsHvz7WKm81kULImxD5l6q1pBB3EAOF5F0eK5uJw3Hv6_MD_yIzAqsz4q15agR3EKgwjevbabbGI4E2Ps5CQpNQpbdnE1cBS3i8xkmdG5ZRGWuK7US7h_UpZnQ' }
    ]
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <header className="flex flex-wrap justify-between items-end gap-4">
        <div className="space-y-1">
          <h2 className="text-4xl font-black tracking-tight text-[#111418] dark:text-white uppercase italic">{t.title}</h2>
          <p className="text-[#617589] dark:text-gray-400 text-lg">{t.sub}</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white dark:bg-gray-800 border border-[#dbe0e6] dark:border-gray-700 text-[#111418] dark:text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">file_download</span> {t.btnDownload}
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm">{t.btnPeriod}</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1 bg-white dark:bg-[#1a2632] p-8 rounded-3xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6">{t.secSkill}</h3>
          <div className="relative flex items-center justify-center py-4">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle className="text-gray-100 dark:text-gray-800" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12" />
              <circle className="transition-all duration-1000" cx="96" cy="96" fill="transparent" r="80" stroke="#10b981" strokeDasharray="502.6" strokeDashoffset="150" strokeWidth="12" />
              <circle className="transition-all duration-1000" cx="96" cy="96" fill="transparent" r="62" stroke="#f59e0b" strokeDasharray="389.5" strokeDashoffset="100" strokeWidth="12" />
              <circle className="transition-all duration-1000" cx="96" cy="96" fill="transparent" r="44" stroke="#2b8cee" strokeDasharray="276.4" strokeDashoffset="60" strokeWidth="12" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-[#111418] dark:text-white">72%</span>
              <span className="text-[10px] text-[#617589] font-bold uppercase tracking-widest">{t.overall}</span>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {t.skills.map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`size-3 rounded-full ${s.color}`}></div>
                  <span className="text-sm font-medium dark:text-slate-300">{s.label}</span>
                </div>
                <span className="text-sm font-bold dark:text-white">{s.val}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:col-span-2 bg-white dark:bg-[#1a2632] p-8 rounded-3xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-[#111418] dark:text-white">{t.secActivity}</h3>
            <div className="flex gap-4 text-xs font-bold text-[#617589]">
              <div className="flex items-center gap-1"><span className="w-3 h-1 bg-primary rounded"></span> {t.legendTime}</div>
              <div className="flex items-center gap-1"><span className="w-3 h-1 bg-blue-200 rounded"></span> {t.legendAvg}</div>
            </div>
          </div>
          <div className="h-64 relative flex items-end justify-between px-4 pb-4">
            {[25, 50, 33, 75, 66, 83, 50, 100].map((h, i) => (
              <div key={i} className="w-2 bg-primary rounded-t-full transition-all duration-500 hover:bg-primary-dark cursor-pointer" style={{ height: `${h}%` }}></div>
            ))}
            <div className="w-full flex justify-between absolute -bottom-2 text-[10px] font-bold text-[#617589] px-4">
              {t.days.map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
          <div className="mt-12 flex justify-around border-t border-slate-100 dark:border-gray-700 pt-8">
            {[
              { label: t.stats.learnTime, val: `24.5 ${t.stats.unitHour}` },
              { label: t.stats.tests, val: '12' },
              { label: t.stats.completion, val: '88%' }
            ].map((st, i) => (
              <div key={i} className="text-center">
                <p className="text-[10px] uppercase font-bold text-[#617589] tracking-widest">{st.label}</p>
                <p className="text-xl font-black text-primary">{st.val}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-[#111418] dark:text-white">{t.secGameDetail}</h3>
        {t.gameData.map((game, i) => (
          <div key={i} className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:border-primary transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="size-16 rounded-xl bg-cover bg-center shrink-0 shadow-lg" style={{ backgroundImage: `url(${game.img})` }}></div>
              <div>
                <h4 className="font-bold text-[#111418] dark:text-white">{game.title}</h4>
                <p className="text-xs text-[#617589] dark:text-gray-400 font-medium">{game.skill}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 flex-[2]">
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">{t.gameLabels.modules}</p>
                <p className="text-sm font-black dark:text-slate-200">{game.progress}%</p>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full mt-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${game.progress}%` }}></div>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">{t.gameLabels.score}</p>
                <p className="text-sm font-black text-green-500">{game.score}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">{t.gameLabels.time}</p>
                <p className="text-sm font-black dark:text-slate-200">{game.time}</p>
              </div>
            </div>
            <button className="material-symbols-outlined text-[#617589] group-hover:text-primary transition-colors">chevron_right</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AnalyticsPage;
