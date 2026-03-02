
import React from 'react';
import { GAMES } from '../constants';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameGridProps {
  onAddToCart: (game: Game) => void;
  onGameClick: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ onAddToCart, onGameClick }) => {
  // Chỉ hiển thị 4 trò chơi đầu tiên
  const featuredGames = GAMES.slice(0, 4);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between px-4 pb-6">
        <h2 className="text-[#0f172a] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Game được Đánh giá Cao</h2>
        <div className="flex gap-2">
          <button className="bg-white dark:bg-background-dark border border-[#e2e8f0] dark:border-[#1e293b] p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#1e293b] transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="bg-white dark:bg-background-dark border border-[#e2e8f0] dark:border-[#1e293b] p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#1e293b] transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {featuredGames.map((game) => (
          <GameCard 
            key={game.id} 
            game={game} 
            onAddToCart={onAddToCart} 
            onClick={onGameClick}
          />
        ))}
      </div>
    </section>
  );
};

export default GameGrid;
