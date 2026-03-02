
import React from 'react';
import { Language } from '../types';

interface AdminSidebarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
  isCollapsed: boolean;
  onToggle: () => void;
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  topOffset?: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  currentPage, onNavigate, isCollapsed, onToggle, language = 'vi', onLanguageChange,
  isMobileOpen = false, onCloseMobile, topOffset = "72px"
}) => {
  const isEn = language === 'en';

  const menuItems = [
    { id: 'admin_analytics', label: isEn ? 'Analytics' : 'Phân tích', icon: 'insert_chart' },
    { id: 'admin_orders', label: isEn ? 'Orders' : 'Đơn hàng', icon: 'shopping_cart' },
    { id: 'admin_contracts', label: isEn ? 'Contract List' : 'Danh sách hợp đồng', icon: 'description' },
    { id: 'admin_warnings', label: isEn ? 'Warnings' : 'Cảnh báo', icon: 'warning' },
    { id: 'admin_games', label: isEn ? 'Product Management' : 'Quản lý sản phẩm', icon: 'sports_esports' },
    { id: 'admin_users', label: isEn ? 'User Management' : 'Quản lý tài khoản', icon: 'group' },
    { id: 'admin_permissions', label: isEn ? 'Permissions' : 'Phân quyền', icon: 'rule' },
    { id: 'admin_support', label: isEn ? 'Support' : 'Hỗ trợ', icon: 'headset_mic' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    if (onCloseMobile) onCloseMobile();
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
        className={`bg-white dark:bg-[#1a262e] border-r border-slate-100 dark:border-gray-800 transition-all duration-300 flex flex-col fixed lg:sticky z-[80] lg:z-40 shrink-0 font-display ${
          isCollapsed ? 'w-20' : 'w-72'
        } ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Branding Header */}
        <div className="p-6 flex flex-col gap-4 border-b border-slate-50 dark:border-gray-800">
           {!isCollapsed && (
             <>
               <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-gray-800">
                  <div className="bg-[#2563eb] size-11 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                     <span className="material-symbols-outlined text-[26px] filled-icon">shield_person</span>
                  </div>
                  <div className="flex flex-col">
                     <h1 className="text-xl font-black leading-none text-slate-900 dark:text-white tracking-tight">Lifinity</h1>
                     <p className="text-[10px] text-[#64748b] dark:text-slate-400 font-black uppercase tracking-widest mt-1">
                       {isEn ? 'MANAGER PORTAL' : 'QUẢN TRỊ PORTAL'}
                     </p>
                  </div>
               </div>
             </>
           )}
           <button 
             onClick={onToggle}
             className={`text-slate-400 hover:text-slate-600 transition-colors ${isCollapsed ? 'mx-auto' : 'absolute right-6 top-1/2 -translate-y-1/2'}`}
           >
              <span className="material-symbols-outlined text-[24px]">{isCollapsed ? 'menu' : 'menu_open'}</span>
           </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all text-left relative group ${
                  isActive 
                    ? 'bg-[#2563eb] text-white shadow-lg shadow-blue-500/30 font-bold' 
                    : 'text-[#64748b] hover:bg-slate-50 dark:hover:bg-gray-800/50 hover:text-[#2563eb]'
                }`}
              >
                <span className={`material-symbols-outlined text-[24px] ${isActive ? 'filled-icon' : ''}`}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="text-[15px] font-bold whitespace-nowrap">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
