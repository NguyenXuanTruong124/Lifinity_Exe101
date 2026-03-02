
import React, { useState } from 'react';
import { GAMES } from '../constants';
import GameCard from './GameCard';
import { Game, Language, UserRole } from '../types';

interface GameCatalogProps {
  onAddToCart: (game: Game) => void;
  onGameClick: (game: Game) => void;
  language?: Language;
  role?: UserRole;
  leasedGameIds?: string[];
}

const GameCatalog: React.FC<GameCatalogProps> = ({ 
  onAddToCart, onGameClick, language = 'vi', role, leasedGameIds = [] 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const t = {
    home: language === 'vi' ? 'Trang chủ' : 'Home',
    catalog: language === 'vi' ? 'Danh mục' : 'Catalog',
    explore: language === 'vi' ? 'KHÁM PHÁ TRÒ CHƠI' : 'EXPLORE GAMES',
    searchPlaceholder: language === 'vi' ? 'Tìm kiếm trong danh mục...' : 'Search in catalog...',
    sortBy: language === 'vi' ? 'Sắp xếp theo:' : 'Sort by:',
    noGames: language === 'vi' ? 'Không tìm thấy trò chơi phù hợp.' : 'No games found.',
    filters: {
      skills: language === 'vi' ? 'Kỹ năng' : 'Skills',
      age: language === 'vi' ? 'Độ tuổi' : 'Age Groups',
      price: language === 'vi' ? 'Giá' : 'Price',
      rating: language === 'vi' ? 'Đánh giá' : 'Rating',
      skillList: [
        language === 'vi' ? 'Giao tiếp' : 'Communication',
        language === 'vi' ? 'Tư duy phản biện' : 'Critical Thinking',
        language === 'vi' ? 'Quản lý tài chính' : 'Financial Management',
        language === 'vi' ? 'Trí tuệ cảm xúc' : 'Emotional Intelligence'
      ],
      ageList: [
        language === 'vi' ? 'Tiểu học (6-11 tuổi)' : 'Primary (6-11 years)',
        language === 'vi' ? 'THCS (12-15 tuổi)' : 'Secondary (12-15 years)',
        language === 'vi' ? 'THPT (16-18 tuổi)' : 'High School (16-18 years)'
      ],
      priceList: [
        language === 'vi' ? 'Tất cả' : 'All',
        language === 'vi' ? 'Miễn phí' : 'Free',
        language === 'vi' ? 'Trả phí' : 'Paid'
      ],
      ratingStar: language === 'vi' ? '4 sao trở lên' : '4 stars & up'
    },
    sortOptions: [
      language === 'vi' ? 'Mới nhất' : 'Newest',
      language === 'vi' ? 'Giá: Thấp đến Cao' : 'Price: Low to High',
      language === 'vi' ? 'Giá: Cao đến Thấp' : 'Price: High to Low',
      language === 'vi' ? 'Phổ biến nhất' : 'Most Popular'
    ]
  };

  const filteredGames = GAMES.filter(game => {
    const title = language === 'en' && game.titleEn ? game.titleEn : game.title;
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="animate-in fade-in duration-500 font-display">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-[#64748b] dark:text-gray-400 gap-2 items-center mb-8">
        <button className="hover:text-primary transition-colors" onClick={() => window.location.reload()}>{t.home}</button>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-[#0f172a] dark:text-white font-medium">{t.catalog}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0f172a] dark:text-white uppercase tracking-tighter italic">
              <span className="material-symbols-outlined text-primary">psychology</span> {t.filters.skills}
            </h3>
            <div className="flex flex-col gap-3">
              {t.filters.skillList.map((label, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" id={`skill${idx}`} type="checkbox"/>
                  <label className="text-sm text-[#475569] dark:text-gray-300 cursor-pointer group-hover:text-primary font-medium" htmlFor={`skill${idx}`}>{label}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#e2e8f0] dark:border-[#1e293b] pt-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0f172a] dark:text-white uppercase tracking-tighter italic">
              <span className="material-symbols-outlined text-primary">school</span> {t.filters.age}
            </h3>
            <div className="flex flex-col gap-3">
              {t.filters.ageList.map((label, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" id={`age${idx}`} type="checkbox"/>
                  <label className="text-sm text-[#475569] dark:text-gray-300 cursor-pointer group-hover:text-primary font-medium" htmlFor={`age${idx}`}>{label}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#e2e8f0] dark:border-[#1e293b] pt-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0f172a] dark:text-white uppercase tracking-tighter italic">
              <span className="material-symbols-outlined text-primary">sell</span> {t.filters.price}
            </h3>
            <div className="flex flex-col gap-3">
              {t.filters.priceList.map((label, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                  <input className="border-gray-300 text-primary focus:ring-primary h-4 w-4" id={`price${idx}`} name="price" type="radio" defaultChecked={idx === 0}/>
                  <label className="text-sm text-[#475569] dark:text-gray-300 cursor-pointer group-hover:text-primary font-medium" htmlFor={`price${idx}`}>{label}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#e2e8f0] dark:border-[#1e293b] pt-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0f172a] dark:text-white uppercase tracking-tighter italic">
              <span className="material-symbols-outlined text-primary">grade</span> {t.filters.rating}
            </h3>
            <div className="flex items-center gap-3 group cursor-pointer">
              <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" id="rating1" type="checkbox"/>
              <label className="text-sm text-[#475569] dark:text-gray-300 cursor-pointer group-hover:text-primary flex items-center gap-1 font-medium" htmlFor="rating1">
                {t.filters.ratingStar} <span className="material-symbols-outlined text-sm text-yellow-400 filled-icon">star</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Main Catalog View */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-black text-[#0f172a] dark:text-white italic tracking-tight uppercase">{t.explore}</h2>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.sortBy}</span>
              <select className="bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#1e293b] rounded-xl text-sm px-4 py-2 focus:ring-primary dark:text-white font-bold outline-none shadow-sm">
                {t.sortOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-8 group">
            <div className="relative flex items-center bg-white dark:bg-[#1e293b] rounded-[1.25rem] border border-[#e2e8f0] dark:border-[#1e293b] shadow-sm overflow-hidden focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all">
               <span className="material-symbols-outlined ml-4 text-slate-400">search</span>
               <input 
                type="text" 
                placeholder={t.searchPlaceholder} 
                className="w-full border-none bg-transparent text-sm h-14 px-4 focus:ring-0 dark:text-white font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onAddToCart={onAddToCart} 
                  onClick={onGameClick}
                  language={language}
                  isLeased={role === 'school' && leasedGameIds.includes(game.id)}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-6xl text-slate-200">sentiment_dissatisfied</span>
                <p className="text-slate-500 font-bold">{t.noGames}</p>
              </div>
            )}
          </div>
          
          {filteredGames.length > 0 && (
            <div className="flex justify-center mt-16 gap-2 pb-10">
               <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
               <button className="size-10 flex items-center justify-center rounded-xl bg-primary text-white font-black">1</button>
               <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCatalog;
