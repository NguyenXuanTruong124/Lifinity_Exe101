
import React from 'react';
import { CATEGORIES } from '../constants';
import { Language } from '../types';

interface CategoriesProps {
  language?: Language;
}

const Categories: React.FC<CategoriesProps> = ({ language = 'vi' }) => {
  const t = {
    title: language === 'vi' ? 'Khám phá Danh mục Kỹ năng' : 'Explore Skill Categories',
    viewAll: language === 'vi' ? 'Xem tất cả' : 'View All',
    catNames: {
      comm: language === 'vi' ? 'Giao tiếp' : 'Communication',
      prob: language === 'vi' ? 'Giải quyết Vấn đề' : 'Problem Solving',
      eq: language === 'vi' ? 'Trí tuệ Cảm xúc' : 'Emotional Intelligence',
      crit: language === 'vi' ? 'Tư duy Phản biện' : 'Critical Thinking',
      fin: language === 'vi' ? 'Quản lý Tài chính' : 'Financial Management',
    }
  };

  return (
    <section id="categories-section" className="mb-12 scroll-mt-24 font-display">
      <div className="flex items-center justify-between px-4 pb-6">
        <h2 className="text-[#0f172a] dark:text-white text-2xl font-black leading-tight tracking-tight uppercase italic">{t.title}</h2>
        <a className="text-primary font-bold text-sm hover:underline" href="#">{t.viewAll}</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {CATEGORIES.map((cat) => (
          <div 
            key={cat.id} 
            className="flex flex-col gap-3 rounded-2xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white dark:bg-background-dark p-6 items-center text-center hover:border-primary hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="text-primary bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-6">
              <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
            </div>
            <h3 className="text-[#0f172a] dark:text-white text-sm font-black uppercase tracking-tight">
              {(t.catNames as any)[cat.id] || cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
