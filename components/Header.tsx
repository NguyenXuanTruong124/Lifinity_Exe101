
import React, { useState, useEffect } from 'react';
import { UserRole, Language } from '../types';

interface HeaderProps {
  cartCount: number;
  onNavigate: (page: any) => void;
  currentPage: string;
  isLoggedIn: boolean;
  username: string;
  role?: UserRole;
  onLogout: () => void;
  onCartClick: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, onNavigate, currentPage, isLoggedIn, username, role, 
  onLogout, onCartClick, language, onLanguageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPortalPage = ['user_dashboard', 'analytics', 'achievements', 'settings', 'user_game_room'].includes(currentPage) || currentPage.startsWith('admin_') || currentPage.startsWith('teacher_') || currentPage.startsWith('school_');

  const t = {
    home: language === 'vi' ? 'Trang chủ' : 'Home',
    catalog: language === 'vi' ? 'Danh mục' : 'Catalog',
    about: language === 'vi' ? 'Về chúng tôi' : 'About Us',
    login: language === 'vi' ? 'Đăng nhập' : 'Login',
    dashboard: language === 'vi' ? 'Trang của tôi' : 'My Dashboard',
    language: language === 'vi' ? 'Ngôn ngữ' : 'Language',
  };

  const handleMobileNav = (page: any) => {
    onNavigate(page);
    setIsMainMenuOpen(false);
  };

  const getDashboardPage = (): any => {
    if (role === 'manager') return 'admin_analytics';
    if (role === 'school') return 'school_members';
    if (role === 'teacher') return 'teacher_dashboard';
    return 'user_dashboard';
  };

  return (
    <>
      <header 
        className={`flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark px-4 md:px-12 h-[72px] sticky top-0 z-[60] transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="flex items-center justify-between max-w-[1800px] mx-auto w-full gap-2">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-2xl">{isMainMenuOpen ? 'close' : 'menu'}</span>
            </button>

            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2 text-primary shrink-0 hover:opacity-80 transition-all"
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">sports_esports</span>
              <h2 className="text-[#2563eb] text-lg md:text-2xl font-black tracking-tight">Lifinity</h2>
            </button>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            <button onClick={() => onNavigate('home')} className={`text-sm font-black transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>{t.home}</button>
            <button onClick={() => onNavigate('catalog')} className={`text-sm font-black transition-colors ${currentPage === 'catalog' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>{t.catalog}</button>
            <button onClick={() => onNavigate('about')} className={`text-sm font-black transition-colors ${currentPage === 'about' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>{t.about}</button>
            
            {isLoggedIn && (
              <button 
                onClick={() => onNavigate(getDashboardPage())}
                className="flex items-center gap-3 px-6 py-2.5 rounded-full text-xs font-black transition-all bg-[#eff6ff] text-primary hover:bg-[#dbeafe] shadow-sm border border-blue-100"
              >
                <span className="material-symbols-outlined text-[20px] filled-icon">grid_view</span>
                {t.dashboard.toUpperCase()}
              </button>
            )}
          </nav>

          <div className="flex items-center gap-1 md:gap-6">
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-100 dark:border-slate-700">
              <button onClick={() => onLanguageChange('vi')} className={`px-3 py-1 text-[10px] font-black rounded-md transition-all ${language === 'vi' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}>VI</button>
              <button onClick={() => onLanguageChange('en')} className={`px-3 py-1 text-[10px] font-black rounded-md transition-all ${language === 'en' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}>EN</button>
            </div>

            <div className="flex items-center gap-1 md:gap-4">
              {isLoggedIn ? (
                <button onClick={onLogout} className="size-9 md:size-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all border border-slate-100 dark:border-slate-700">
                  <span className="material-symbols-outlined text-[20px]">logout</span>
                </button>
              ) : (
                <button onClick={() => onNavigate('login')} className="bg-primary text-white px-3 md:px-7 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-md shadow-primary/20">{t.login}</button>
              )}
              
              <button onClick={onCartClick} className="relative p-1 shrink-0">
                <span className="material-symbols-outlined text-[24px] md:text-[26px] text-slate-600 dark:text-slate-300">shopping_cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] size-4 flex items-center justify-center rounded-full font-black border-2 border-white dark:border-background-dark">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMainMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white dark:bg-background-dark z-[70] p-6 animate-in slide-in-from-top duration-300 overflow-y-auto">
           <nav className="flex flex-col gap-2">
              <button onClick={() => handleMobileNav('home')} className="text-xl font-black text-left py-5 border-b border-slate-50 dark:border-slate-800 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">home</span> {t.home}
              </button>
              <button onClick={() => handleMobileNav('catalog')} className="text-xl font-black text-left py-5 border-b border-slate-50 dark:border-slate-800 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">category</span> {t.catalog}
              </button>
              <button onClick={() => handleMobileNav('about')} className="text-xl font-black text-left py-5 border-b border-slate-50 dark:border-slate-800 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">info</span> {t.about}
              </button>
              
              {isLoggedIn && (
                <button 
                  onClick={() => handleMobileNav(getDashboardPage())} 
                  className="text-xl font-black text-left py-5 border-b border-slate-50 dark:border-slate-800 flex items-center gap-4 text-primary"
                >
                  <span className="material-symbols-outlined filled-icon">grid_view</span> {t.dashboard}
                </button>
              )}

              {/* Language Switcher for Mobile Menu - Updated labels to VI/EN */}
              <div className="py-6 flex flex-col gap-4 mt-4">
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.language}</p>
                 <div className="flex gap-2">
                    <button 
                      onClick={() => { onLanguageChange('vi'); setIsMainMenuOpen(false); }}
                      className={`flex-1 py-4 rounded-2xl font-black text-sm border-2 transition-all ${language === 'vi' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-400'}`}
                    >
                      VI
                    </button>
                    <button 
                      onClick={() => { onLanguageChange('en'); setIsMainMenuOpen(false); }}
                      className={`flex-1 py-4 rounded-2xl font-black text-sm border-2 transition-all ${language === 'en' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-400'}`}
                    >
                      EN
                    </button>
                 </div>
              </div>
           </nav>
        </div>
      )}
    </>
  );
};

export default Header;
