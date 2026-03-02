
import React from 'react';
import { Language } from '../types';

interface AdminTopHeaderProps {
  pageTitle: string;
  username: string;
  onLogout: () => void;
  onNavigateHome: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const AdminTopHeader: React.FC<AdminTopHeaderProps> = ({ 
  pageTitle, username, onLogout, onNavigateHome, language, onLanguageChange 
}) => {
  return (
    <header className="h-[80px] bg-white dark:bg-[#1a262e] border-b border-[#dbe2e6] dark:border-gray-800 px-8 flex items-center justify-between sticky top-0 z-30 font-display">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-black text-slate-800 dark:text-white">{pageTitle}</h2>
      </div>

      <div className="flex items-center gap-6">
        {/* Quick Nav to Main Site */}
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-lg">home</span>
          <span>{language === 'vi' ? 'Về trang chủ' : 'Home'}</span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 dark:bg-gray-800"></div>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">{language === 'vi' ? 'Tài khoản' : 'Account'}</span>
            <span className="text-sm font-bold dark:text-white">{username}</span>
          </div>
          <div className="relative group cursor-pointer">
            <div className="size-10 rounded-full bg-primary/10 border-2 border-primary/20 p-0.5 flex items-center justify-center overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7FzFqMtxsJ2Q5rGuMldMvpeqZ2he3-Bdi3WAcYwrfUJrxlfpNu4xGw8_WPhSi_7cvkrQZGn47meS8rLFpQkub8SFQFih6e07Ab76DHYFv4kna7rUJju52ijVAeZVxO1QQ4Vo1MEL42R-AdwzFE5ruy3LXSnBIODhhadfjVtHR5XSIBz_-sknTuGjblf89YMncTY50tX6QigFF4_iCIvgryHKJWAou48x5dfmZUb4XDR423bPY3TiU8ayw3FuJJ-he-G1KxsM-P6s6" 
                alt="Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Dropdown simple */}
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto p-2">
              <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors font-bold">
                <span className="material-symbols-outlined text-lg">logout</span> {language === 'vi' ? 'Đăng xuất' : 'Logout'}
              </button>
            </div>
          </div>
          <button onClick={onLogout} className="text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminTopHeader;
