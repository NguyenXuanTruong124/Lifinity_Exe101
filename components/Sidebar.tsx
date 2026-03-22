
import React from 'react';
import { Language, UserRole } from '../types';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
  onShop: () => void;
  isCollapsed: boolean;
  onToggle: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  role?: UserRole;
  username?: string;
  onLogout?: () => void;
  hideHeader?: boolean;
  hasActiveSession?: boolean;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  topOffset?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, onNavigate, isCollapsed, onToggle, 
  language, onLanguageChange, role, username, onLogout,
  hasActiveSession = false, isMobileOpen = false, onCloseMobile, topOffset = "136px"
}) => {
  const isEn = language === 'en';

  const getMenuItems = () => {
    if (role === 'school') {
      return [
        { id: 'school_members', label: isEn ? 'Unit Personnel' : 'Nhân sự Đơn vị', icon: 'group' },
        { id: 'school_permissions', label: isEn ? 'System Permissions' : 'Phân quyền hệ thống', icon: 'admin_panel_settings' },
        { id: 'school_library', label: isEn ? 'Game Library' : 'Thư viện trò chơi', icon: 'library_books' },
        { id: 'school_contracts', label: isEn ? 'Contracts' : 'Hợp đồng', icon: 'description' },
        { id: 'school_support', label: isEn ? 'Support' : 'Hỗ trợ', icon: 'headset_mic' },
        { id: 'school_profile', label: isEn ? 'Unit Profile' : 'Hồ sơ Đơn vị', icon: 'account_balance' },
      ];
    }
    if (role === 'teacher') {
      return [
        { id: 'teacher_library', label: isEn ? 'Game Library' : 'Thư viện trò chơi', icon: 'menu_book' },
        { id: 'teacher_rooms', label: isEn ? 'Live Sessions' : 'Phòng học đang mở', icon: 'sensors' },
        { id: 'teacher_analytics', label: isEn ? 'Reports & Scores' : 'Báo cáo & Điểm số', icon: 'monitoring' },
        { id: 'teacher_profile', label: isEn ? 'Instructor Profile' : 'Hồ sơ Giảng viên', icon: 'badge' },
      ];
    }
    return [
      { id: 'user_dashboard', label: isEn ? 'Dashboard' : 'Bảng điều khiển', icon: 'dashboard' },
      { id: 'user_game_room', label: isEn ? 'Game Room' : 'Phòng trò chơi', icon: 'videogame_asset', activeSession: hasActiveSession },
      { id: 'analytics', label: isEn ? 'Learning History' : 'Lịch sử học tập', icon: 'history' },
      { id: 'achievements', label: isEn ? 'Achievements' : 'Thành tích', icon: 'workspace_premium' },
      { id: 'settings', label: isEn ? 'My Profile' : 'Hồ sơ cá nhân', icon: 'person' },
    ];
  };

  const menuItems = getMenuItems();

  const getPortalLabel = () => {
    if (role === 'manager') return isEn ? 'ADMIN PORTAL' : 'QUẢN TRỊ PORTAL';
    if (role === 'school') return isEn ? 'SCHOOL PORTAL' : 'NHÀ TRƯỜNG PORTAL';
    if (role === 'teacher') return isEn ? 'TEACHER PORTAL' : 'GIẢNG VIÊN PORTAL';
    return isEn ? 'STUDENT PORTAL' : 'HỌC SINH PORTAL';
  };

  const displayRole = role === 'teacher' ? (isEn ? 'INSTRUCTOR' : 'GIẢNG VIÊN') : (isEn ? 'STUDENT' : 'HỌC SINH');

  const handleNav = (id: string) => {
    onNavigate(id);
    if (isMobileOpen && onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-[70] lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside 
        style={{ top: isMobileOpen ? '0' : topOffset, height: isMobileOpen ? '100vh' : `calc(100vh - ${topOffset})` }}
        className={`bg-white dark:bg-[#1a2632] border-r border-slate-50 dark:border-gray-800 transition-all duration-300 flex flex-col fixed lg:sticky z-[80] lg:z-40 shrink-0 font-display ${
          isCollapsed ? 'w-20' : 'w-72'
        } ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Branding Header inside Sidebar */}
        <div className={`p-6 flex flex-col gap-4 border-b border-slate-50 dark:border-gray-800 transition-all ${isCollapsed ? 'items-center' : ''}`}>
          {!isCollapsed && role !== 'manager' && role !== 'school' && (
  <div className="flex items-center gap-3 mb-2">
    <img 
      src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1280px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png" 
      alt="FPT Education" 
      className="h-8 object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
)}
          
          <div className={`flex items-center gap-3 transition-all ${isCollapsed ? 'justify-center' : 'justify-between pt-4 border-t border-slate-50 dark:border-gray-800'}`}>
            {!isCollapsed && (
              <div className="flex items-center gap-3.5">
                <div className="bg-[#2563eb] size-10 rounded-xl flex items-center justify-center text-white shadow-md shrink-0">
                  <span className="material-symbols-outlined text-[24px] filled-icon">menu_book</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg font-black leading-none text-slate-900 dark:text-white tracking-tight">Lifinity</h1>
                  <p className="text-[10px] text-[#2563eb] font-bold uppercase tracking-wider mt-1">{getPortalLabel()}</p>
                </div>
              </div>
            )}
            {isMobileOpen && (
               <button onClick={onCloseMobile} className="text-slate-400">
                 <span className="material-symbols-outlined">menu</span>
               </button>
            )}
          </div>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item: any) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all text-left relative group ${
                currentPage === item.id 
                  ? 'bg-slate-50/50 dark:bg-gray-800/50 text-[#2563eb] font-bold' 
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-gray-800/50 hover:text-[#2563eb]'
              }`}
            >
              <div className="relative">
                <span className={`material-symbols-outlined text-[24px] ${currentPage === item.id ? 'filled-icon' : ''}`}>{item.icon}</span>
                {item.activeSession && (
                  <span className="absolute -top-1 -right-1 size-2.5 bg-emerald-500 border-2 border-white dark:border-[#1a2632] rounded-full"></span>
                )}
              </div>
              {!isCollapsed && <span className="text-[15px] whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom Section - Hidden for 'school' role per user request */}
        {role !== 'school' && (
          <div className="p-4 space-y-6 mt-auto">
            {/* Language Switcher Pill */}
            {!isCollapsed && (
              <div className="bg-[#f1f5f9] dark:bg-gray-800/50 rounded-xl p-1 flex">
                <button 
                  onClick={() => onLanguageChange('vi')}
                  className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all ${language === 'vi' ? 'bg-white dark:bg-slate-700 text-[#2563eb] shadow-sm' : 'text-slate-400'}`}
                >
                  VI
                </button>
                <button 
                  onClick={() => onLanguageChange('en')}
                  className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all ${language === 'en' ? 'bg-white dark:bg-slate-700 text-[#2563eb] shadow-sm' : 'text-slate-400'}`}
                >
                  EN
                </button>
              </div>
            )}

            {/* User Profile Card */}
            <div className={`flex items-center gap-3 bg-[#f8fafc] dark:bg-gray-800/30 rounded-[1.25rem] transition-all duration-300 ${isCollapsed ? 'p-1.5 justify-center' : 'p-4'}`}>
              <div className="size-11 rounded-xl bg-gradient-to-br from-green-200 to-yellow-100 shrink-0 shadow-sm overflow-hidden">
                {role === 'teacher' && <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7FzFqMtxsJ2Q5rGuMldMvpeqZ2he3-Bdi3WAcYwrfUJrxlfpNu4xGw8_WPhSi_7cvkrQZGn47meS8rLFpQkub8SFQFih6e07Ab76DHYFv4kna7rUJju52ijVAeZVxO1QQ4Vo1MEL42R-AdwzFE5ruy3LXSnBIODhhadfjVtHR5XSIBz_-sknTuGjblf89YMncTY50tX6QigFF4_iCIvgryHKJWAou48x5dfmZUb4XDR423bPY3TiU8ayw3FuJJ-he-G1KxsM-P6s6" className="size-full object-cover" alt="" />}
              </div>
              
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-black text-slate-900 dark:text-white truncate leading-tight">
                    {role === 'teacher' ? (isEn ? 'Instructor Nguyen...' : 'Giảng viên Nguyễn ...') : username}
                  </p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{displayRole}</p>
                </div>
              )}

              {!isCollapsed && (
                <button onClick={onLogout} className="size-9 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-gray-700 text-slate-400 hover:text-primary transition-all shrink-0">
                  <span className="material-symbols-outlined text-[22px]">logout</span>
                </button>
              )}
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
