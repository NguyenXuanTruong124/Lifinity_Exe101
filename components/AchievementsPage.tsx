
import React from 'react';
import { Language } from '../types';

interface AchievementsPageProps {
  language?: Language;
}

const AchievementsPage: React.FC<AchievementsPageProps> = ({ language = 'vi' }) => {
  const t = {
    title: language === 'vi' ? 'Thành tích Học sinh' : 'Student Achievements',
    sub: language === 'vi' ? 'Khám phá các kỹ năng bạn đã chinh phục và những thử thách sắp tới.' : 'Explore the skills you have conquered and upcoming challenges.',
    tabs: {
        overview: language === 'vi' ? 'Tổng quan' : 'Overview',
        leaderboard: language === 'vi' ? 'Bảng xếp hạng' : 'Leaderboard'
    },
    filters: {
        all: language === 'vi' ? 'Tất cả' : 'All',
        unlocked: language === 'vi' ? 'Đã mở khóa' : 'Unlocked',
        bySkill: language === 'vi' ? 'Theo loại kỹ năng' : 'By Skill Category'
    },
    sidebar: {
        stats: language === 'vi' ? 'Thống kê Kỹ năng' : 'Skill Statistics',
        suggest: language === 'vi' ? 'Gợi ý thử thách' : 'Challenge Suggestions',
        btnAction: language === 'vi' ? 'Thử thách ngay' : 'Accept Challenge',
        suggestDesc: language === 'vi' 
            ? 'Hoàn thành 3 trò chơi trong danh mục Tài chính để mở khóa huy hiệu "Người Quản lý Giỏi".' 
            : 'Complete 3 games in the Financial category to unlock the "Expert Manager" badge.'
    },
    badgeDetail: {
        category: language === 'vi' ? 'Nhóm' : 'Category',
        attained: language === 'vi' ? 'Đạt được' : 'Earned on'
    },
    categories: [
        language === 'vi' ? 'Giao tiếp' : 'Communication',
        language === 'vi' ? 'Tài chính' : 'Financial'
    ]
  };

  const badges = [
    { title: language === 'vi' ? 'Bậc thầy Nhóm' : 'Team Master', cat: language === 'vi' ? 'Giao tiếp' : 'Comm', icon: 'groups', color: 'blue', unlocked: true, date: '15/10/2023', desc: language === 'vi' ? 'Hoàn thành xuất sắc thử thách làm việc nhóm cấp độ 5.' : 'Excellently completed level 5 teamwork challenges.' },
    { title: language === 'vi' ? 'Tư duy Sáng suốt' : 'Clear Thinker', cat: language === 'vi' ? 'Tư duy' : 'Logic', icon: 'psychology', color: 'yellow', unlocked: true, date: '22/10/2023', desc: language === 'vi' ? 'Đưa ra các quyết định logic trong tình huống phức tạp.' : 'Made logical decisions in complex situations.' },
    { title: language === 'vi' ? 'Trái tim Ấm áp' : 'Warm Heart', cat: language === 'vi' ? 'Đồng cảm' : 'Empathy', icon: 'favorite', color: 'red', unlocked: true, date: '05/11/2023', desc: language === 'vi' ? 'Thể hiện sự thấu hiểu tuyệt vời đối với cảm xúc của người khác.' : 'Demonstrated excellent understanding of others\' emotions.' },
    { title: language === 'vi' ? 'Người Quản lý Giỏi' : 'Expert Manager', cat: language === 'vi' ? 'Tài chính' : 'Finance', icon: 'lock', color: 'gray', unlocked: false },
    { title: language === 'vi' ? 'Chiến binh Xanh' : 'Green Warrior', cat: language === 'vi' ? 'Môi trường' : 'Eco', icon: 'energy_savings_leaf', color: 'green', unlocked: true, date: '10/11/2023', desc: language === 'vi' ? 'Tiết kiệm năng lượng và bảo vệ môi trường trong thành phố ảo.' : 'Saved energy and protected the environment in the virtual city.' },
    { title: language === 'vi' ? 'Hùng biện Trẻ' : 'Young Orator', cat: language === 'vi' ? 'Thuyết trình' : 'Public Speaking', icon: 'record_voice_over', color: 'gray', unlocked: false },
    { title: language === 'vi' ? 'Chính trực' : 'Integrity', cat: language === 'vi' ? 'Đạo đức' : 'Ethics', icon: 'verified', color: 'gray', unlocked: false },
    { title: language === 'vi' ? 'Sáng tạo Nội dung' : 'Creator', cat: language === 'vi' ? 'Sáng tạo' : 'Creative', icon: 'history_edu', color: 'gray', unlocked: false },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 text-blue-600';
      case 'yellow': return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-500 text-yellow-600';
      case 'red': return 'bg-red-100 dark:bg-red-900/30 border-red-500 text-red-600';
      case 'green': return 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-600';
      default: return 'bg-gray-100 dark:bg-gray-800 border-gray-300 text-gray-400';
    }
  };

  const skillsData = [
      { l: language === 'vi' ? 'Giao tiếp' : 'Communication', p: 85, c: 'bg-blue-500' },
      { l: language === 'vi' ? 'Tư duy phản biện' : 'Critical Thinking', p: 62, c: 'bg-yellow-500' },
      { l: language === 'vi' ? 'Đồng cảm' : 'Empathy', p: 45, c: 'bg-red-500' }
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="space-y-1">
            <h2 className="text-4xl font-black tracking-tight text-[#111418] dark:text-white uppercase italic">{t.title}</h2>
            <p className="text-[#617589] dark:text-gray-400 text-lg">{t.sub}</p>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-[#1a2632] p-1.5 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
            <button className="px-5 py-2 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all">{t.tabs.overview}</button>
            <button className="px-5 py-2 text-[#617589] dark:text-gray-400 text-xs font-black uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all">{t.tabs.leaderboard}</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#dbe0e6] dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button className="px-5 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-black uppercase tracking-widest">{t.filters.all}</button>
            <button className="px-5 py-2 text-[#617589] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-xs font-black uppercase tracking-widest">{t.filters.unlocked}</button>
          </div>
          <select className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-widest text-[#111418] dark:text-white outline-none shadow-sm">
            <option>{t.filters.bySkill}</option>
            {t.categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <div key={i} className="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-[#1a2632] rounded-[2.5rem] border border-[#dbe0e6] dark:border-gray-700 shadow-sm hover:border-primary transition-all cursor-pointer">
              <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center border-4 mb-5 shadow-xl transition-transform group-hover:scale-110 ${getColorClasses(b.color)}`}>
                <span className="material-symbols-outlined text-4xl font-bold">{b.icon}</span>
              </div>
              <h4 className="text-sm font-black text-center dark:text-white uppercase tracking-tight">{b.title}</h4>
              <p className={`text-[10px] font-black mt-1 uppercase tracking-[0.2em] ${getColorClasses(b.color).split(' ').pop()}`}>{b.cat}</p>
              
              {b.unlocked && (
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 dark:bg-[#1a2632]/95 rounded-[2.5rem] p-6 flex flex-col justify-center text-center border-2 border-primary pointer-events-none">
                  <h5 className="text-sm font-black text-primary mb-1 uppercase">{b.title}</h5>
                  <p className="text-[10px] text-[#617589] mb-3 font-bold uppercase tracking-widest">{t.badgeDetail.category}: {b.cat}</p>
                  <p className="text-xs font-medium dark:text-slate-300 leading-relaxed mb-4">{b.desc}</p>
                  <p className="text-[10px] text-[#111418] dark:text-gray-400 font-black uppercase tracking-widest">{t.badgeDetail.attained}: {b.date}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <aside className="space-y-6">
          <section className="bg-white dark:bg-[#1a2632] p-8 rounded-[2.5rem] border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
            <h3 className="text-base font-black text-[#111418] dark:text-white uppercase tracking-widest mb-8 border-b border-slate-50 dark:border-slate-800 pb-4">{t.sidebar.stats}</h3>
            <div className="space-y-6">
              {skillsData.map((s, i) => (
                <div key={i} className="space-y-2.5">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                    <span className="text-slate-500">{s.l}</span>
                    <span className="text-primary">{s.p}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className={`${s.c} h-full transition-all duration-1000`} style={{ width: `${s.p}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-[2.5rem] border border-primary/10 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="material-symbols-outlined text-primary font-black">auto_awesome</span>
              <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em]">{t.sidebar.suggest}</h3>
            </div>
            <p className="text-xs text-[#111418] dark:text-slate-300 leading-relaxed font-medium">
              {t.sidebar.suggestDesc}
            </p>
            <button className="mt-6 w-full py-3.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all">{t.sidebar.btnAction}</button>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default AchievementsPage;
