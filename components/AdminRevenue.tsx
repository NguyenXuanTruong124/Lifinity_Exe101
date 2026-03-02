
import React from 'react';
import { Language } from '../types';

interface AdminRevenueProps {
  language: Language;
}

const AdminRevenue: React.FC<AdminRevenueProps> = ({ language }) => {
  const isVi = language === 'vi';
  const t = {
    title: isVi ? 'Báo cáo Doanh thu & Thống kê' : 'Revenue Reports & Statistics',
    searchPh: isVi ? 'Tìm báo cáo...' : 'Search reports...',
    btnExport: isVi ? 'Xuất báo cáo' : 'Export Report',
    period: {
      days7: isVi ? '7 ngày qua' : 'Last 7 days',
      month: isVi ? 'Tháng này' : 'This Month',
      quarter: isVi ? 'Quý này' : 'This Quarter'
    },
    metrics: {
      netRevenue: isVi ? 'Doanh thu thuần' : 'Net Revenue',
      orders: isVi ? 'Số đơn hàng' : 'Orders Count',
      avgOrder: isVi ? 'Giá trị trung bình đơn' : 'Avg. Order Value',
      vsMonth: isVi ? 'so với tháng trước' : 'vs last month'
    },
    chartTitle: isVi ? 'Doanh thu theo thời gian' : 'Revenue Over Time',
    chartSub: isVi ? 'Thống kê chi tiết doanh thu theo từng ngày' : 'Daily detailed revenue statistics',
    topGames: isVi ? 'Top Game bán chạy nhất' : 'Best Selling Games',
    viewAll: isVi ? 'Xem tất cả' : 'View All',
    sales: isVi ? 'lượt bán' : 'sales',
    detailTitle: isVi ? 'Phân tích Chi tiết' : 'Detailed Analysis',
    note: isVi ? 'Ngày 10/10 có đợt khuyến mãi Flash Sale mừng ngày Chuyển đổi số. Dự kiến doanh thu tăng 40%.' : 'Oct 10: Flash Sale for Digital Transformation Day. Expected 40% revenue growth.'
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-6 md:space-y-8 font-display px-0">
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
        <h2 className="text-xl md:text-3xl font-black tracking-tight dark:text-white leading-tight">{t.title}</h2>
        
        {/* Search and Export container optimized for mobile stack */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          <div className="relative flex items-center flex-1 min-w-0">
            <span className="material-symbols-outlined absolute left-3 text-[#616f89] text-xl">search</span>
            <input 
              className="pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-slate-100 dark:border-gray-700 rounded-xl text-sm w-full lg:w-64 focus:ring-2 focus:ring-primary/20 outline-none dark:text-white shadow-sm" 
              placeholder={t.searchPh}
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-primary text-white w-full sm:w-auto px-6 py-3.5 md:py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all shrink-0">
            <span className="material-symbols-outlined text-[20px]">file_download</span> <span>{t.btnExport}</span>
          </button>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1 bg-white dark:bg-gray-900 p-1 rounded-xl border border-[#dbdfe6] dark:border-gray-800 shadow-sm overflow-x-auto no-scrollbar">
          <button className="whitespace-nowrap px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white">{t.period.days7}</button>
          <button className="whitespace-nowrap px-4 py-2 text-xs font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800 dark:text-gray-300 transition-colors">{t.period.month}</button>
          <button className="whitespace-nowrap px-4 py-2 text-xs font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800 dark:text-gray-300 transition-colors">{t.period.quarter}</button>
        </div>
        <div className="flex items-center justify-center gap-3 px-5 py-2.5 bg-white dark:bg-gray-900 border border-[#dbdfe6] dark:border-gray-800 rounded-xl cursor-pointer hover:border-primary transition-colors dark:text-white shadow-sm text-sm font-bold">
          <span className="material-symbols-outlined text-primary">calendar_month</span>
          <span>01/10/2023 - 31/10/2023</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          { label: t.metrics.netRevenue, val: '125.4Mđ', icon: 'payments', trend: '+12.5%', tColor: 'text-[#07883b]' },
          { label: t.metrics.orders, val: '1,240', icon: 'shopping_cart', trend: '-2.4%', tColor: 'text-[#e73908]' },
          { label: t.metrics.avgOrder, val: '101Kđ', icon: 'analytics', trend: '+5.1%', tColor: 'text-[#07883b]' }
        ].map((c, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-[1.5rem] border border-[#dbdfe6] dark:border-gray-800 flex flex-col gap-3 shadow-sm hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start">
              <p className="text-[#616f89] text-[10px] font-black uppercase tracking-widest">{c.label}</p>
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl group-hover:rotate-6 transition-transform">{c.icon}</span>
            </div>
            <h3 className="text-2xl font-black dark:text-white">{c.val}</h3>
            <div className="flex items-center gap-1.5 pt-1">
              <span className={`${c.tColor} text-xs font-black`}>{c.trend}</span>
              <span className="text-[#616f89] text-[9px] font-bold uppercase">{t.metrics.vsMonth}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-[#dbdfe6] dark:border-gray-800 p-6 md:p-8 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-lg font-black dark:text-white leading-tight uppercase italic">{t.chartTitle}</h2>
            <p className="text-xs text-[#616f89] font-medium mt-1">{t.chartSub}</p>
          </div>
          <select className="bg-slate-50 dark:bg-gray-800 border-none rounded-xl text-xs font-black uppercase tracking-widest px-5 py-3 focus:ring-2 focus:ring-primary/20 dark:text-white outline-none shadow-sm">
            <option>{isVi ? 'Theo ngày' : 'By Day'}</option>
            <option>{isVi ? 'Theo tuần' : 'By Week'}</option>
            <option>{isVi ? 'Theo tháng' : 'By Month'}</option>
          </select>
        </div>
        <div className="relative h-[250px] w-full flex items-end justify-between overflow-hidden">
          <div className="absolute inset-0 pt-10">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
              <path d="M0,150 Q100,80 200,120 T400,60 T600,100 T800,40 T1000,80 L1000,200 L0,200 Z" fill="rgba(37, 99, 235, 0.08)"></path>
              <path d="M0,150 Q100,80 200,120 T400,60 T600,100 T800,40 T1000,80" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round"></path>
            </svg>
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 text-[9px] text-slate-400 font-black uppercase tracking-widest">
            {['01', '05', '10', '15', '20', '25', '30'].map(d => <span key={d}>{d} Th10</span>)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
        <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-[#dbdfe6] dark:border-gray-800 p-6 md:p-8 flex flex-col h-full shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black dark:text-white uppercase italic">{t.topGames}</h2>
            <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline">{t.viewAll}</button>
          </div>
          <div className="space-y-4">
            {[
              { title: isVi ? 'Tư duy Logic & Kỹ năng sống' : 'Logic & Life Skills', sales: `452 ${t.sales}`, revenue: '45.2Mđ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWscgzPAu1JVAgi9SWmUYXaaZ46VXBn76paZdi7SF2Yv3l4JyTL4gnDU4684QD-PHXhfT62nVtKC2lQZ4bumlHVk9yLsofkY61ymoK4rBEz8R8lmnhbxx6qBTzkXqZI9727q8CIcNiWfyMG4jA9mAeu3NQRjrr5ari-7_3RzoYjHDOy0i0JyHm1QrWy6OTsM7Kv37V0W32AAuNbN1A9RUbQLdbjH5SmHhIqFOyQr6l5PCYZF53L6-BpWwDa18_KgHMabAe83yA7-Gx' },
              { title: isVi ? 'Quản lý Tài chính Nhí' : 'Junior Finance Management', sales: `389 ${t.sales}`, revenue: '38.9Mđ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXOxCUtRNS0peqUKLp80h0pvaboMPaIaGbgHTxxyS4cB9jvvhsVGLka9GK4oU78l5pWNnZetIWt4zPc_0TP-G4jr8RIh2nk470DB-bTyK-NYlro4JlSyLAswWKOpXKfvMy-om5uIGDJ_t71xPiQ3-m2GlgOcb2vYCLf9w7HR2k9cPWzPOVCKLB3HNAnwqPSaPrtZbTfW4Ng1HlsjC_FFsdlRGbwBv7IAb0wK8SlKcpfPCOTop64Z1NzJkJUIGDp3erC_v7St0ozz5M' }
            ].map((game, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50/50 dark:bg-gray-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                <img src={game.img} alt="" className="size-12 rounded-xl object-cover shrink-0 shadow-sm" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black dark:text-white truncate">{game.title}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">{game.sales}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-black text-primary">{game.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-[#dbdfe6] dark:border-gray-800 p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black dark:text-white uppercase italic">{t.detailTitle}</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-7 text-center text-[9px] font-black uppercase text-slate-400 tracking-widest">
              {(isVi ? ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'] : ['S', 'M', 'T', 'W', 'T', 'F', 'S']).map(d => <span key={d}>{d}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {[28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((day, idx) => (
                <div key={idx} className={`h-10 flex items-center justify-center text-[11px] font-black rounded-lg transition-all ${
                  idx < 3 ? 'text-slate-200 dark:text-slate-700' : 
                  idx === 12 ? 'bg-primary text-white shadow-lg' : 
                  'dark:text-white hover:bg-slate-100 dark:hover:bg-gray-800 cursor-pointer'
                }`}>
                  {day}
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-[9px] font-black text-primary uppercase mb-2 tracking-[0.2em]">{isVi ? 'Ghi chú hệ thống' : 'System Note'}</p>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium italic">{t.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenue;
