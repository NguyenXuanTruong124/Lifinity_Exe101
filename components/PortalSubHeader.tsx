
import React from 'react';
import { UserRole, Language } from '../types';

interface PortalSubHeaderProps {
  role: UserRole;
  language: Language;
  onSidebarToggle: () => void;
  isMainHeaderHidden?: boolean;
}

const PortalSubHeader: React.FC<PortalSubHeaderProps> = ({ role, language, onSidebarToggle, isMainHeaderHidden }) => {
  const isVi = language === 'vi';
  
  const getRoleLabel = () => {
    if (role === 'manager') return isVi ? 'QUẢN TRỊ PORTAL' : 'ADMIN PORTAL';
    if (role === 'school') return isVi ? 'NHÀ TRƯỜNG PORTAL' : 'SCHOOL PORTAL';
    if (role === 'teacher') return isVi ? 'GIẢNG VIÊN PORTAL' : 'TEACHER PORTAL';
    return isVi ? 'HỌC SINH PORTAL' : 'STUDENT PORTAL';
  };

  return (
    <div className={`bg-white dark:bg-[#1a262e] border-b border-slate-100 dark:border-gray-800 h-[64px] flex items-center justify-between px-4 md:px-8 sticky z-50 font-display shadow-sm transition-all duration-300 ${isMainHeaderHidden ? 'top-0' : 'top-[72px]'}`}>
      <div className="flex items-center gap-4">
        {/* Nút mở Sidebar riêng của trang Quản lý (Chỉ hiện ở Mobile) */}
        <button 
          onClick={onSidebarToggle}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">menu_open</span>
        </button>

        {/* Brand Block - Matching the screenshot style */}
        <div className="flex items-center gap-3.5">
          <div className="bg-primary size-10 rounded-[12px] flex items-center justify-center text-white shadow-lg shadow-primary/20 shrink-0">
            <span className="material-symbols-outlined text-[22px] filled-icon">menu_book</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-black leading-none text-slate-900 dark:text-white uppercase tracking-tight">LIFINITY</h1>
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.18em] mt-1">{getRoleLabel()}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="size-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors hover:bg-slate-50 dark:hover:bg-gray-800">
           <span className="material-symbols-outlined text-[22px]">notifications</span>
        </button>
        <button className="size-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors hover:bg-slate-50 dark:hover:bg-gray-800">
           <span className="material-symbols-outlined text-[22px]">settings</span>
        </button>
      </div>
    </div>
  );
};

export default PortalSubHeader;
