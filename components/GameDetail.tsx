
import React from 'react';
import { Language } from '../types';

interface GameDetailProps {
  onBack: () => void;
  onAddToCart: () => void;
  language: Language;
}

const GameDetail: React.FC<GameDetailProps> = ({ onBack, onAddToCart, language }) => {
  const isEn = language === 'en';

  const t = {
    home: isEn ? 'Home' : 'Trang chủ',
    category: isEn ? 'Life Skill Games' : 'Game Kỹ năng Sống',
    ageLabel: isEn ? 'AGE 10-12' : 'ĐỘ TUỔI 10-12',
    leaseService: isEn ? 'Lease Service' : 'Dịch vụ cho thuê',
    description: isEn 
      ? 'Master the art of financial management and urban planning in a vibrant 3D simulation environment. Budget, manage city growth, and reach for success.'
      : 'Làm chủ nghệ thuật quản lý tài chính và quy hoạch đô thị trong môi trường mô phỏng 3D sống động. Lập ngân sách, quản lý sự phát triển của thành phố và vươn tới thành công.',
    tags: {
      finance: isEn ? 'Finance' : 'Tài chính',
      critical: isEn ? 'Critical Thinking' : 'Tư duy Phản biện',
      strategy: isEn ? 'Strategy' : 'Chiến thuật'
    },
    priceUnit: isEn ? '/ Academic Year' : '/ Năm học',
    btnLease: isEn ? 'Register Lease (Contract)' : 'Đăng ký thuê (Hợp đồng)',
    btnWishlist: isEn ? 'Save to Wishlist' : 'Lưu vào danh sách dự kiến',
    verified: isEn ? 'Curriculum verified by experts' : 'Giáo trình đã được chuyên gia phê duyệt'
  };

  return (
    <div className="animate-in fade-in duration-500 font-display">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={onBack} className="text-[#64748b] text-sm font-medium hover:underline">{t.home}</button>
        <span className="text-[#64748b] text-sm font-medium">/</span>
        <button className="text-[#64748b] text-sm font-medium hover:underline">{t.category}</button>
        <span className="text-[#64748b] text-sm font-medium">/</span>
        <span className="text-[#0f172a] dark:text-white text-sm font-medium">Budget Master: City Life</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative flex items-center justify-center bg-[#0f172a] bg-cover bg-center aspect-video rounded-xl overflow-hidden group shadow-lg" 
               style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIMGJVhPfWNRstxJtY-x48_v5R1BkmZBeDaQ_HvTmbFx-YnIbFRyS_kWS64AjPSloB3NBXqv5FPiaKIDcTZtZ02ELGoWXE_J4cUdV0GrGmRvM2ggu3_ywoPns7Gnrew-7vEB0Wt1uihXPuQfW7NUcYCbP6kij_SmioHeYP2fxP0kK4yfYgM_RhD0sjEdxl6K19jGnRnAtvqWHUaV49gVKpLPyevo5t_7m4-Gre0QKp3yZ4qXVzc-puIVQ_5vCu2IczttwDkAAVpXux")' }}>
            <button className="flex shrink-0 items-center justify-center rounded-full size-20 bg-primary/90 text-white hover:scale-110 transition-transform shadow-xl">
              <span className="material-symbols-outlined filled-icon text-4xl">play_arrow</span>
            </button>
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex h-1.5 items-center justify-center mb-2">
                <div className="h-full flex-1 rounded-full bg-primary"></div>
                <div className="relative"><div className="absolute -left-1.5 -top-1.5 size-4 rounded-full bg-white border-2 border-primary"></div></div>
                <div className="h-full flex-1 rounded-full bg-white/30"></div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-white text-xs font-bold">0:37 / 2:23</p>
                <span className="material-symbols-outlined text-white text-xl cursor-pointer">fullscreen</span>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {['DVEIPTklaMboIZcRwjgEvz7BemZG1qCVx6IoV-KJcOg6TW6lNMrqAvqWJvL5VTDyTfFkZKv9b17RkF4T_DqulqL2tUU2_GiOR8ukvIfgNwE37mRfzrLMRPGpB4m_EwfB1aXBCDY1VKJhRvDYUx007kgTZvj22B3bp-IjvZnbmJ387PHiJdIqByqiPVxGRzSaSRnMXjlWvu7fY8V81XNt7eQIktfU767KlpdR_IEw3e0GMXK4AU3W4HyUCIdcpPDU1vyv3cLW-QuiiW', 'BdtqAeBGvDX4Au688tMMtXQvfxm_JRerxiu3IajwbeIHdVasIo28BzxRG7gqBlWB6V9U_Fu_IOXBpm7oWWYCPfeBDIgVcfV1kX4jb0hdtG42up5Amk6U6v2QzKenGYw0vLhkGRV1p5MqQY8m6IVT379zxaf5v6ngiXzcJfC9FQLlGqlDyjc-gretVmqMtN8mg2P3tcLsK5Btr_Z1DfN2PNCVFpF34LwAY07jGlMEWncsQM6G82fABxiAQVEV47TR2woOAT5Xl6IoXt', 'BXQUb0xlDtRurjYYWlyDRGFP-lBWXfyT1i_qIt-KLxjzYqB4DJzsxXcmxEvSiu3RX7BsJhl37Rfjo8bW4SsovuI-M__UpltJ0DJLBjYi6SKxcKNyHTHaH12u9MrKIA6FThE9LyKiaAQgDW5RzMENa3pTx3UC4uLtk_OeI5LuCZ3fMr4nqtIxJ-Ex_r0zjuxogUrB8wQB76q9K1ApddjeHEji1j7VuR7gpxHwNAz4QiM_i7eDiUp-tPQ20jSR-8P0pTX5Rzc3svlbbV', 'Bc6qrWyNDCvktvhUYozgzLlfCHCDkz7oX87dc1f4sIRrIRAf6kq-lzvgxmXGtdUKQLht9SY3mJT3AHpKZElyL9y8RB_4RUjwQD3uXz_AK9BzF4dR1AA5UIWKa6BRGRNLfrAI2HIB1e1_RuZVTWEev1AV69X2TfXNrEtBTeDZRr3TKhYEnSHIsXuSgak_1DF8NDBK9yZld59iHqtLUQKOQuIxDqlBRDG8sirtD3q-P_2ixRLTBwICh0qVhlwiyFbWMAZd1xnv1eyh-t'].map((id, idx) => (
              <div key={idx} className={`aspect-video rounded-lg overflow-hidden cursor-pointer transition-opacity ${idx === 0 ? 'border-2 border-primary opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                <img src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${id}`} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Side Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 shadow-sm border border-[#e2e8f0] dark:border-[#334155] flex flex-col gap-6 sticky top-24">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-bold rounded uppercase tracking-tighter">{t.ageLabel}</span>
                <span className="px-2 py-0.5 bg-[#f1f5f9] dark:bg-slate-700 text-[#475569] dark:text-slate-300 text-xs font-bold rounded uppercase">{t.leaseService}</span>
              </div>
              <h1 className="text-[#0f172a] dark:text-white text-3xl font-black leading-tight mb-2">Budget Master: City Life</h1>
              <p className="text-[#64748b] dark:text-slate-400 text-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[t.tags.finance, t.tags.critical, t.tags.strategy].map(tag => (
                <div key={tag} className="flex h-7 items-center justify-center rounded-lg bg-[#f1f5f9] dark:bg-slate-800 px-3">
                  <p className="text-[#0f172a] dark:text-slate-300 text-xs font-medium">{tag}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] dark:border-[#334155]">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-[#0f172a] dark:text-white">619.000₫</span>
                <span className="text-sm text-[#64748b] font-medium">{t.priceUnit}</span>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={onAddToCart} className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-all shadow-md flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">description</span>
                  {t.btnLease}
                </button>
                <button className="w-full bg-[#f1f5f9] dark:bg-slate-800 text-[#0f172a] dark:text-white font-bold py-3 rounded-lg hover:bg-[#e2e8f0] dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">favorite</span>
                  {t.btnWishlist}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#64748b] dark:text-slate-400">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <span>{t.verified}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
