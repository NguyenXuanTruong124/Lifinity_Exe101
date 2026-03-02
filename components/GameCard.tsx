
import React from 'react';
import { Game, Language } from '../types';

interface GameCardProps {
  game: Game;
  onAddToCart: (game: Game) => void;
  onClick: (game: Game) => void;
  language?: Language;
  isLeased?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, onAddToCart, onClick, language = 'vi', isLeased = false }) => {
  const t = {
    bestSeller: language === 'vi' ? 'Bán chạy nhất' : 'Best Seller',
    free: language === 'vi' ? 'Miễn phí' : 'Free',
    leased: language === 'vi' ? 'ĐÃ THUÊ' : 'LEASED',
  };

  const getLocalizedAge = (age: string) => {
    if (language === 'en') {
      return age
        .replace('Tiểu học', 'Primary')
        .replace('THCS', 'Secondary')
        .replace('THPT', 'High School');
    }
    return age;
  };

  return (
    <div 
      onClick={() => onClick(game)}
      className={`flex flex-col bg-white dark:bg-background-dark rounded-xl border overflow-hidden group hover:shadow-xl transition-all cursor-pointer ${
        isLeased ? 'border-emerald-200 dark:border-emerald-900/50' : 'border-[#e2e8f0] dark:border-[#1e293b]'
      }`}
    >
      <div 
        className="h-48 w-full bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${game.imageUrl})` }}
      >
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {game.isBestSeller && !isLeased && (
            <div className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded-lg uppercase shadow-sm">
              {t.bestSeller}
            </div>
          )}
          {isLeased && (
            <div className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-lg uppercase shadow-lg flex items-center gap-1 animate-in slide-in-from-left-2">
              <span className="material-symbols-outlined text-[12px] font-black">verified</span>
              {t.leased}
            </div>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#64748b] dark:text-gray-400 font-semibold uppercase">
            {getLocalizedAge(game.ageRange)}
          </span>
          <div className="flex items-center text-yellow-400">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="text-xs font-bold text-[#0f172a] dark:text-white ml-1">{game.rating}</span>
          </div>
        </div>
        <h3 className={`text-lg font-bold leading-tight group-hover:text-primary transition-colors ${isLeased ? 'text-emerald-700 dark:text-emerald-400' : 'text-[#0f172a] dark:text-white'}`}>
          {language === 'en' && game.titleEn ? game.titleEn : game.title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className={`text-xl font-black ${isLeased ? 'text-slate-400 line-through' : 'text-primary'}`}>
            {typeof game.price === 'number' 
              ? game.price.toLocaleString('vi-VN') + '₫' 
              : t.free}
          </span>
          <button 
            disabled={isLeased}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(game);
            }}
            className={`h-9 w-9 rounded-lg flex items-center justify-center transition-all ${
              isLeased 
              ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 cursor-default' 
              : 'bg-primary/10 text-primary hover:bg-primary hover:text-white active:scale-90'
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {isLeased ? 'library_add_check' : (game.price === 'Free' ? 'download' : 'add_shopping_cart')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
