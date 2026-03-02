
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import Login from './components/Login';
import Register from './components/Register';
import AdminRevenue from './components/AdminRevenue';
import AdminGameManagement from './components/AdminGameManagement';
import AdminUserManagement from './components/AdminUserManagement';
import GameGrid from './components/GameGrid';
import Hero from './components/Hero';
import Categories from './components/Categories';
import NewArrival from './components/NewArrival';
import GameCatalog from './components/GameCatalog';
import GameDetail from './components/GameDetail';
import AboutUs from './components/AboutUs';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import SuccessPage from './components/SuccessPage';
import Sidebar from './components/Sidebar';
import AdminSidebar from './components/AdminSidebar';
import DashboardUser from './components/DashboardUser';
import SchoolDashboard from './components/SchoolDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AnalyticsPage from './components/AnalyticsPage';
import AchievementsPage from './components/AchievementsPage';
import AccountSettings from './components/AccountSettings';
import UserGameRoom from './components/UserGameRoom';
import GameScene from './components/GameScene';

// Import Admin Sub-components
import AdminOrders from './components/AdminOrders';
import AdminContracts from './components/AdminContracts';
import AdminWarnings from './components/AdminWarnings';
import AdminPermissions from './components/AdminPermissions';
import AdminSupport from './components/AdminSupport';
import AdminSettings from './components/AdminSettings';

import { Game, AuthState, UserRole, Page, CartItem, Language } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isAdminSidebarCollapsed, setIsAdminSidebarCollapsed] = useState(false);
  const [isUserSidebarCollapsed, setIsUserSidebarCollapsed] = useState(false);
  const [isMobilePortalMenuOpen, setIsMobilePortalMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('vi');
  const [auth, setAuth] = useState<AuthState>({ isLoggedIn: false, role: 'guest', username: '' });

  const [activeSession, setActiveSession] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const leasedGameIds = ['1', '2', '3', '4', '5', '6'];

  const handleAddToCart = (game: Game) => {
    if (auth.role === 'school' && leasedGameIds.includes(game.id)) return;
    setCartItems(prev => {
      const existing = prev.find(item => item.id === game.id);
      if (existing) return prev.map(item => item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...game, quantity: 1 }];
    });
  };

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, role: 'guest', username: '' });
    setActiveSession(null);
    setIsPlaying(false);
    setIsMobilePortalMenuOpen(false);
    setCurrentPage('home');
  };

  const handleLoginSuccess = (role: UserRole, username: string) => {
    setAuth({ isLoggedIn: true, role, username });
    if (role === 'manager') setCurrentPage('admin_analytics');
    else if (role === 'school') setCurrentPage('school_members');
    else if (role === 'teacher') setCurrentPage('teacher_dashboard');
    else setCurrentPage('user_dashboard');
  };

  const navigateTo = (page: Page) => {
    if (page.startsWith('admin_') && auth.role !== 'manager') { setCurrentPage('home'); return; }
    setCurrentPage(page);
    setIsMobilePortalMenuOpen(false); 
  };

  const handleJoinSession = (code: string) => {
    setActiveSession({
      key: code.toUpperCase(),
      game: language === 'vi' ? "Kỹ năng thoát hiểm" : "Escape Skills",
      teacher: language === 'vi' ? "Cô Nguyễn Thảo" : "Ms. Nguyen Thao",
      startTime: new Date().toLocaleTimeString(),
    });
  };

  const isSchoolPage = currentPage.startsWith('school_');
  const isTeacherPage = currentPage.startsWith('teacher_');
  const isAdminPage = currentPage.startsWith('admin_');
  const isProfilePage = ['user_dashboard', 'analytics', 'achievements', 'settings', 'user_game_room'].includes(currentPage) || isSchoolPage || isTeacherPage || isAdminPage;
  
  const showMainHeader = !isProfilePage || (auth.role !== 'teacher' && auth.role !== 'customer');

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {isPlaying && (
        <GameScene 
          language={language} 
          onExit={() => setIsPlaying(false)} 
        />
      )}

      <div className="layout-container flex flex-1 flex-col">
        {showMainHeader && (
          <Header 
            cartCount={cartItems.length} onNavigate={navigateTo} currentPage={currentPage}
            isLoggedIn={auth.isLoggedIn} username={auth.username} role={auth.role}
            onLogout={handleLogout}
            onCartClick={() => setCurrentPage('cart')} language={language} onLanguageChange={setLanguage}
          />
        )}
        
        {isProfilePage ? (
          <div className="flex flex-1 w-full relative">
            {isAdminPage ? (
              <AdminSidebar 
                currentPage={currentPage} onNavigate={navigateTo}
                isCollapsed={isAdminSidebarCollapsed} onToggle={() => setIsAdminSidebarCollapsed(!isAdminSidebarCollapsed)}
                language={language}
                onLanguageChange={setLanguage}
                isMobileOpen={isMobilePortalMenuOpen}
                onCloseMobile={() => setIsMobilePortalMenuOpen(false)}
                topOffset={showMainHeader ? "72px" : "0px"}
              />
            ) : (
              <Sidebar 
                currentPage={currentPage} onNavigate={navigateTo} 
                onShop={() => setCurrentPage('catalog')} isCollapsed={isUserSidebarCollapsed}
                onToggle={() => setIsUserSidebarCollapsed(!isUserSidebarCollapsed)}
                language={language} onLanguageChange={setLanguage} role={auth.role}
                username={auth.username} onLogout={handleLogout}
                hideHeader={false}
                hasActiveSession={!!activeSession}
                isMobileOpen={isMobilePortalMenuOpen}
                onCloseMobile={() => setIsMobilePortalMenuOpen(false)}
                topOffset={showMainHeader ? "72px" : "0px"}
              />
            )}
            
            <div className="flex-1 flex flex-col min-w-0">
               <main className="flex-1 p-4 md:p-10 overflow-y-auto bg-[#f8fafc] dark:bg-background-dark">
                 <div className="max-w-[1600px] mx-auto">
                   {/* Mobile Portal Header - Removed Language Switcher from here as requested */}
                   <div className="lg:hidden mb-6 flex items-center gap-4">
                      <button 
                          onClick={() => setIsMobilePortalMenuOpen(true)}
                          className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-slate-500 border border-slate-100 dark:border-slate-700"
                      >
                          <span className="material-symbols-outlined">menu_open</span>
                      </button>
                      <h3 className="font-black text-slate-400 uppercase tracking-widest text-[10px]">
                         {language === 'vi' ? 'Hệ thống Menu' : 'Portal Menu'}
                      </h3>
                   </div>

                   {currentPage === 'user_dashboard' && (
                     <DashboardUser 
                       language={language} 
                       activeSession={activeSession}
                       setActiveSession={setActiveSession}
                       isPlaying={isPlaying}
                       setIsPlaying={setIsPlaying}
                       onContinueGame={(title) => setIsPlaying(true)} 
                     />
                   )}
                   {currentPage === 'user_game_room' && (
                     <UserGameRoom 
                       language={language}
                       activeSession={activeSession}
                       onJoinSession={handleJoinSession}
                       onEnterGame={() => setIsPlaying(true)}
                     />
                   )}
                   {isSchoolPage && <SchoolDashboard section={currentPage} language={language} />}
                   {isTeacherPage && <TeacherDashboard section={currentPage} language={language} />}
                   {currentPage === 'analytics' && <AnalyticsPage language={language} />}
                   {currentPage === 'achievements' && <AchievementsPage language={language} />}
                   {currentPage === 'settings' && <AccountSettings language={language} />}
                   
                   {/* Admin Pages */}
                   {currentPage === 'admin_analytics' && <AdminRevenue language={language} />}
                   {currentPage === 'admin_orders' && <AdminOrders language={language} />}
                   {currentPage === 'admin_contracts' && <AdminContracts language={language} />}
                   {currentPage === 'admin_warnings' && <AdminWarnings language={language} />}
                   {currentPage === 'admin_games' && <AdminGameManagement language={language} />}
                   {currentPage === 'admin_users' && <AdminUserManagement language={language} />}
                   {currentPage === 'admin_permissions' && <AdminPermissions language={language} />}
                   {currentPage === 'admin_support' && <AdminSupport language={language} />}
                   {currentPage === 'admin_settings' && <AdminSettings language={language} />}
                 </div>
               </main>
            </div>
          </div>
        ) : (
          <div className="flex-1 w-full max-w-[1800px] mx-auto px-4 md:px-12 py-4 md:py-8">
            <main className="w-full animate-in fade-in duration-700">
              {currentPage === 'home' && (
                <>
                  <Hero language={language} />
                  <Categories language={language} />
                  <GameGrid 
                    language={language}
                    onAddToCart={handleAddToCart} 
                    onGameClick={() => setCurrentPage('detail')} 
                  />
                  <NewArrival language={language} />
                </>
              )}
              {currentPage === 'catalog' && (
                <GameCatalog 
                  onAddToCart={handleAddToCart} 
                  onGameClick={() => setCurrentPage('detail')} 
                  language={language}
                  role={auth.role}
                  leasedGameIds={auth.role === 'school' || auth.role === 'teacher' ? leasedGameIds : []}
                />
              )}
              {currentPage === 'detail' && <GameDetail onBack={() => setCurrentPage('home')} language={language} onAddToCart={() => handleAddToCart({ id: 'detail-game', title: 'Budget Master', ageRange: '10-12', rating: 4.8, price: 619000, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIMGJVhPfWNRstxJtY-x48_v5R1BkmZBeDaQ_HvTmbFx-YnIbFRyS_kWS64AjPSloB3NBXqv5FPiaKIDcTZtZ02ELGoWXE_J4cUdV0GrGmRvM2ggu3_ywoPns7Gnrew-7vEB0Wt1uihXPuQfW7NUcYCbP6kij_SmioHeYP2fxP0kK4yfYgM_RhD0sjEdxl6K19jGnRnAtvqWHUaV49gVKpLPyevo5t_7m4-Gre0QKp3yZ4qXVzc-puIVQ_5vCu2IczttwDkAAVpXux' })} />}
              {currentPage === 'about' && <AboutUs language={language} />}
              {currentPage === 'login' && <Login onLogin={handleLoginSuccess} onNavigateRegister={() => setCurrentPage('register')} language={language} />}
              {currentPage === 'register' && <Register onNavigateLogin={() => setCurrentPage('login')} language={language} />}
              {currentPage === 'cart' && <CartPage items={cartItems} onRemove={(id) => setCartItems(prev => prev.filter(i => i.id !== id))} onCheckout={() => setCurrentPage('checkout')} onContinueShopping={() => setCurrentPage('catalog')} language={language} />}
              {currentPage === 'checkout' && <CheckoutPage items={cartItems} onConfirm={() => setCurrentPage('success')} onBack={() => setCurrentPage('cart')} language={language} />}
              {currentPage === 'success' && <SuccessPage onHome={() => {setCartItems([]); setCurrentPage('home');}} onLibrary={() => {setCartItems([]); setCurrentPage('user_dashboard');}} language={language} />}
            </main>
          </div>
        )}
        {!isProfilePage && <Footer language={language} />}
        <GeminiAssistant />
      </div>
    </div>
  );
};

export default App;
