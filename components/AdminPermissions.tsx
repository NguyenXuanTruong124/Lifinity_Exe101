
import React from 'react';
import { Language } from '../types';

interface AdminPermissionsProps {
  language: Language;
}

const AdminPermissions: React.FC<AdminPermissionsProps> = ({ language }) => {
  const isEn = language === 'en';
  
  const t = {
    title: isEn ? 'PERMISSIONS SETUP' : 'THIẾT LẬP PHÂN QUYỀN',
    listTitle: isEn ? 'Admin Role List' : 'Danh sách vai trò quản trị',
    listSub: isEn ? 'Grant permissions for personnel operating the Marketplace system' : 'Cấp quyền hạn cho nhân sự vận hành hệ thống Marketplace',
    btnAdd: isEn ? 'ADD NEW ROLE' : 'THÊM VAI TRÒ MỚI',
    editBtn: isEn ? 'Edit permissions' : 'Chỉnh sửa quyền',
    personnel: isEn ? 'personnel' : 'nhân sự',
    roles: [
      { 
        role: 'Root Admin', 
        desc: isEn ? 'Full control over system, infrastructure, and users.' : 'Toàn quyền quản lý hệ thống, hạ tầng và người dùng.', 
        count: 2 
      },
      { 
        role: 'Sales Manager', 
        desc: isEn ? 'Manage contracts, revenue, and partner approval.' : 'Quản lý hợp đồng, doanh thu và phê duyệt đối tác.', 
        count: 4 
      },
      { 
        role: 'Support Specialist', 
        desc: isEn ? 'Handle customer support tickets and technical issues.' : 'Xử lý Ticket hỗ trợ khách hàng và các lỗi kỹ thuật.', 
        count: 6 
      },
    ]
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <h2 className="text-2xl font-black dark:text-white uppercase italic tracking-tight">{t.title}</h2>
      <div className="bg-white dark:bg-[#1a262e] rounded-[2.5rem] border border-slate-200 dark:border-gray-800 overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg dark:text-white">{t.listTitle}</h3>
            <p className="text-xs text-slate-500">{t.listSub}</p>
          </div>
          <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg">
            {t.btnAdd}
          </button>
        </div>
        <div className="divide-y divide-slate-50 dark:divide-gray-800">
          {t.roles.map(r => (
            <div key={r.role} className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-slate-50 dark:hover:bg-gray-800/20 transition-all gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h4 className="font-black text-lg text-slate-800 dark:text-white">{r.role}</h4>
                  <span className="px-2 py-0.5 bg-slate-100 dark:bg-gray-700 text-slate-500 text-[10px] font-bold rounded uppercase tracking-tighter">
                    {r.count} {t.personnel}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1 font-medium">{r.desc}</p>
              </div>
              <button className="text-primary font-black text-sm hover:underline transition-all whitespace-nowrap">
                {t.editBtn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPermissions;
