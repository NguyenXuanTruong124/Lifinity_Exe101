
import React from 'react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = {
    badge: language === 'vi' ? 'Trò chơi Nổi bật' : 'Featured Game',
    h1: language === 'vi' ? 'Làm chủ Kỹ năng Sống qua Trò chơi' : 'Master Life Skills through Play',
    p: language === 'vi' ? 'Giúp học sinh phát triển với các trò chơi về Tư duy Phản biện, Quản lý Tài chính và Trí tuệ Cảm xúc.' : 'Empowering students with games focused on Critical Thinking, Financial Literacy, and Emotional Intelligence.',
    btnPlay: language === 'vi' ? 'Chơi ngay' : 'Play Now',
    btnLearn: language === 'vi' ? 'Tìm hiểu thêm' : 'Learn More'
  };

  return (
    <section className="mb-12">
      <div className="@container">
        <div className="flex flex-col gap-6 py-6 @[864px]:flex-row @[864px]:items-center">
          <div 
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-xl border-4 border-white dark:border-background-dark @[864px]:w-3/5" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXlGiZ0QDWfANIi8GkgB0X5kX4oe5Pn3kD-EsaAp5JY3BnctwuYYyuaoeOmbP3AUNjkU0wkbKDMeDKhm6ABitb6B28tKCg_kgvI6lVYSInmRA3m7R0pBUlLLtK-gXqsxaox8t2vYL7CVqpWHPLM4upMBp_d3yaQlkUcZNNsEO5E9uKOaJzPkEDg1LqgdjpX0OUKsQ1kyAFIhQcE4JSHWQjqN-rUsUtKbGOCxLJp_oTkHj0Wr8t3vcwC0iqy4t-WfHldxe3lQj_4nP6")' }}
          ></div>
          <div className="flex flex-col gap-6 @[864px]:w-2/5">
            <div className="flex flex-col gap-3">
              <span className="px-3 py-1 bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider rounded-full w-fit">{t.badge}</span>
              <h1 className="text-[#0f172a] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                {t.h1}
              </h1>
              <p className="text-[#475569] dark:text-gray-300 text-lg font-normal leading-relaxed">
                {t.p}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark hover:scale-105 transition-all">
                {t.btnPlay}
              </button>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#f1f5f9] dark:bg-[#1e293b] text-[#0f172a] dark:text-white text-base font-bold hover:bg-[#e2e8f0] dark:hover:bg-[#334155] transition-colors">
                {t.btnLearn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
