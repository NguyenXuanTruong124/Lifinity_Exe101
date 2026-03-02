
import React from 'react';
import { Language } from '../types';

interface AdminUserManagementProps {
  language: Language;
}

const AdminUserManagement: React.FC<AdminUserManagementProps> = ({ language }) => {
  const isEn = language === 'en';
  const isVi = language === 'vi';
  
  const t = {
    title: isVi ? 'Quản lý Người dùng' : 'Accounts Management',
    sub: isVi ? 'Theo dõi và quản lý tài khoản Học sinh, Phụ huynh, Giáo viên trên hệ thống.' : 'Monitor and manage Student, Parent, and Teacher accounts.',
    btnAdd: isVi ? 'Thêm Người dùng' : 'Add User',
    searchPh: isVi ? 'Tìm kiếm theo tên, email hoặc số điện thoại...' : 'Search by name, email or phone...',
    advancedFilter: isVi ? 'Lọc nâng cao' : 'Advanced Filter',
    cols: {
      name: isVi ? 'HỌ TÊN' : 'FULL NAME',
      role: isVi ? 'VAI TRÒ' : 'ROLE',
      date: isVi ? 'NGÀY THAM GIA' : 'JOINED DATE',
      status: isVi ? 'TRẠNG THÁI' : 'STATUS',
      action: isVi ? 'THAO TÁC' : 'ACTIONS'
    }
  };

  const users = [
    { id: 1, name: 'Nguyễn Văn An', email: 'vanan@edu-mail.com', role: isVi ? 'Học sinh' : 'Student', initial: 'NA', date: '12 Th10, 2023', status: isVi ? 'Hoạt động' : 'Active', active: true, roleColor: 'bg-[#e6fcf5] text-[#20c997]' },
    { id: 2, name: 'Trần Thị Hoa', email: 'hoatran@school.edu.vn', role: isVi ? 'Giáo viên' : 'Teacher', initial: 'TH', date: '05 Th11, 2023', status: isVi ? 'Hoạt động' : 'Active', active: true, roleColor: 'bg-[#f3f0ff] text-[#845ef7]' },
    { id: 3, name: 'Lê Minh', email: 'minh.le@gmail.com', role: isVi ? 'Phụ huynh' : 'Parent', initial: 'LM', date: '20 Th10, 2023', status: isVi ? 'Bị khóa' : 'Locked', active: false, roleColor: 'bg-[#fff4e6] text-[#fd7e14]' },
    { id: 4, name: 'Phạm Văn Việt', email: 'vietpham@edu-mail.com', role: isVi ? 'Học sinh' : 'Student', initial: 'PV', date: '15 Th12, 2023', status: isVi ? 'Hoạt động' : 'Active', active: true, roleColor: 'bg-[#e6fcf5] text-[#20c997]' },
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-6 md:space-y-8 font-display pb-20">
      {/* Header with Add Button - Matching Screenshot */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">{t.title}</h1>
          <p className="text-slate-500 text-sm md:text-base font-medium">{t.sub}</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <span className="material-symbols-outlined text-xl">person_add</span>
          {t.btnAdd}
        </button>
      </div>

      {/* Filter Section - Matching Screenshot */}
      <div className="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full flex-1 relative flex items-center bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 h-12 px-4">
            <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
            <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium dark:text-white" placeholder={t.searchPh} />
          </div>
          <div className="w-full lg:w-auto flex items-center gap-3">
            <select className="flex-1 lg:w-44 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl h-12 px-4 text-xs font-black text-slate-700 dark:text-white outline-none uppercase tracking-wider">
              <option>{isVi ? 'Tất cả Vai trò' : 'All Roles'}</option>
            </select>
            <select className="flex-1 lg:w-36 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl h-12 px-4 text-xs font-black text-slate-700 dark:text-white outline-none uppercase tracking-wider">
              <option>{isVi ? 'Trạng thái' : 'Status'}</option>
            </select>
            <button className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-white font-bold text-xs shadow-sm hover:bg-slate-50 transition-all whitespace-nowrap">
              <span className="material-symbols-outlined text-base">filter_alt</span>
              {t.advancedFilter}
            </button>
          </div>
        </div>
      </div>

      {/* Table Section - Matching Screenshot Columns & Styling */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="bg-slate-50/30 dark:bg-gray-900/20 border-b border-slate-50 dark:border-slate-800">
                <th className="pl-8 py-6 w-12 text-center">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                </th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">{t.cols.name}</th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] text-center">{t.cols.role}</th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] text-center">{t.cols.date}</th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] text-center">{t.cols.status}</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] text-right">{t.cols.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="pl-8 py-6 text-center">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-11 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary font-black text-sm shadow-inner shrink-0">
                        {user.initial}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-base font-black text-slate-800 dark:text-white leading-tight mb-1">{user.name}</span>
                        <span className="text-xs text-slate-400 font-medium truncate">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-xl text-[10px] font-black uppercase leading-tight min-w-[90px] ${user.roleColor}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className="text-[13px] font-bold text-slate-600 dark:text-slate-400">{user.date}</span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                       <div className={`size-2 rounded-full ${user.active ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                       <span className={`text-[13px] font-bold ${user.active ? 'text-green-600' : 'text-slate-400'}`}>{user.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                      <span className="material-symbols-outlined text-2xl">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination - Matching Screenshot */}
        <div className="px-8 py-6 border-t border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-400 italic">Hiển thị 1 - 4 của 1,248 người dùng</p>
          <div className="flex items-center gap-1.5">
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-black">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 font-bold">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;
