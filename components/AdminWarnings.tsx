
import React from 'react';
import { Language } from '../types';

interface AdminWarningsProps {
  language: Language;
}

const AdminWarnings: React.FC<AdminWarningsProps> = ({ language }) => {
  const isVi = language === 'vi';
  
  const t = {
    title: isVi ? 'Hệ thống Cảnh báo' : 'Warning System',
    sub: isVi ? 'Theo dõi các hợp đồng cần xử lý gấp và sự cố người dùng.' : 'Monitor urgent contracts and user issues.',
    pendingContracts: isVi ? 'HỢP ĐỒNG CẦN DUYỆT' : 'PENDING APPROVAL',
    expiringContracts: isVi ? 'HỢP ĐỒNG SẮP ĐẾN HẠN' : 'EXPIRING SOON',
    supportErrors: isVi ? 'LỖI CẦN HỖ TRỢ' : 'SUPPORT TICKETS',
    btnAction: isVi ? 'Xử lý ngay' : 'Resolve',
    priority: {
      high: isVi ? 'CAO' : 'HIGH',
      medium: isVi ? 'TRUNG BÌNH' : 'MEDIUM',
      low: isVi ? 'THẤP' : 'LOW'
    }
  };

  const warnings = [
    { 
      id: 1, 
      category: 'Contract', 
      title: isVi ? 'Duyệt hợp đồng Trường Tiểu học Chu Văn An' : 'Approval: Chu Van An Primary', 
      desc: isVi ? 'Hợp đồng mới gửi lên từ đối tác Gold, cần thẩm định hồ sơ pháp nhân.' : 'New contract from Gold partner, legal documents pending.', 
      priority: 'High' 
    },
    { 
      id: 2, 
      category: 'Contract', 
      title: isVi ? 'Hợp đồng LEASE-992 sắp đến hạn' : 'Contract LEASE-992 expiring', 
      desc: isVi ? 'Còn 3 ngày nữa là hết hạn thuê giáo trình kỹ năng của THPT Lương Thế Vinh.' : 'Expiring in 3 days for Luong The Vinh High School.', 
      priority: 'High' 
    },
    { 
      id: 3, 
      category: 'Support', 
      title: isVi ? 'Lỗi thanh toán MoMo (Khách hàng báo)' : 'MoMo Payment Issue', 
      desc: isVi ? 'Học sinh "Minh Quân" báo cáo đã trừ tiền nhưng chưa được kích hoạt game.' : 'Student reports money deducted but game not activated.', 
      priority: 'Medium' 
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-6 md:space-y-8 font-display pb-20">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-black dark:text-white uppercase italic tracking-tight">{t.title}</h2>
        <p className="text-slate-500 text-sm font-medium">{t.sub}</p>
      </div>

      {/* Top Summary Cards - Styled like the screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-orange-50/50 dark:bg-orange-950/10 border border-orange-200 dark:border-orange-800/50 p-6 md:p-8 rounded-[2rem] shadow-sm">
          <p className="text-orange-700 dark:text-orange-400 font-black text-[11px] md:text-xs uppercase tracking-widest mb-2">{t.pendingContracts}</p>
          <p className="text-4xl md:text-5xl font-black text-orange-800 dark:text-orange-300">08</p>
        </div>
        <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-800/50 p-6 md:p-8 rounded-[2rem] shadow-sm">
          <p className="text-red-700 dark:text-red-400 font-black text-[11px] md:text-xs uppercase tracking-widest mb-2">{t.expiringContracts}</p>
          <p className="text-4xl md:text-5xl font-black text-red-800 dark:text-red-300">03</p>
        </div>
        <div className="bg-blue-50/50 dark:bg-blue-950/10 border border-blue-200 dark:border-blue-800/50 p-6 md:p-8 rounded-[2rem] shadow-sm">
          <p className="text-blue-700 dark:text-blue-400 font-black text-[11px] md:text-xs uppercase tracking-widest mb-2">{t.supportErrors}</p>
          <p className="text-4xl md:text-5xl font-black text-blue-800 dark:text-blue-300">05</p>
        </div>
      </div>

      {/* Warning List - Styled like the screenshot */}
      <div className="space-y-4">
        {warnings.map((w) => (
          <div key={w.id} className="bg-white dark:bg-[#1a2632] p-5 md:p-8 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start gap-4 md:gap-6">
              {/* Icon Container */}
              <div className="size-12 md:size-16 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center shrink-0 shadow-sm border border-orange-50 dark:border-orange-800/30">
                <span className="material-symbols-outlined text-orange-600 text-2xl md:text-3xl filled-icon">
                  {w.category === 'Contract' ? 'description' : 'headset_mic'}
                </span>
              </div>

              {/* Content Container */}
              <div className="flex-1 min-w-0">
                {/* Header Row: Title + Action Button + Menu */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 flex-1 min-w-0">
                    <h4 className="font-black text-base md:text-xl text-slate-800 dark:text-white leading-snug truncate">
                      {w.title}
                    </h4>
                    <span className={`px-2 py-0.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-tighter w-fit shrink-0 ${
                      w.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {(t.priority as any)[w.priority.toLowerCase()]}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="bg-primary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95 whitespace-nowrap">
                      {t.btnAction}
                    </button>
                    <button className="p-1 text-slate-300 hover:text-slate-500 transition-colors">
                      <span className="material-symbols-outlined text-2xl">more_vert</span>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {w.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminWarnings;
