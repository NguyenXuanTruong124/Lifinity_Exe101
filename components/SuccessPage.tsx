
import React from 'react';
import { Language } from '../types';

interface SuccessPageProps {
  onHome: () => void;
  onLibrary: () => void;
  language: Language;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onHome, onLibrary, language }) => {
  const t = {
    title: language === 'vi' ? 'Khởi tạo Hợp đồng thành công!' : 'Contract Initialized Successfully!',
    desc: language === 'vi' 
      ? 'Dự thảo hợp đồng thuê và hướng dẫn thanh toán đã được gửi tới email của Quý đơn vị.' 
      : 'The draft lease contract and payment instructions have been sent to your entity\'s email.',
    contractID: language === 'vi' ? 'Mã số Hợp đồng' : 'Contract ID',
    term: language === 'vi' ? 'Thời hạn thuê' : 'Lease Duration',
    termVal: language === 'vi' ? '1 Năm học (10 tháng)' : '1 Academic Year (10 months)',
    paymentVal: language === 'vi' ? 'Giá trị thanh toán' : 'Payment Amount',
    status: language === 'vi' ? 'Trạng thái' : 'Status',
    statusVal: language === 'vi' ? 'Chờ ký kết & Thanh toán' : 'Awaiting Signing & Payment',
    btnOnline: language === 'vi' ? 'Xem dự thảo Online' : 'View Draft Online',
    btnHome: language === 'vi' ? 'Về trang chủ' : 'Home'
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-12 animate-in zoom-in duration-500 font-display">
      <div className="max-w-[640px] w-full flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="size-24 rounded-full bg-green-500/10 flex items-center justify-center animate-bounce">
            <div className="size-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
              <span className="material-symbols-outlined text-white text-5xl font-bold">description</span>
            </div>
          </div>
        </div>
        <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
          {t.title}
        </h1>
        <p className="text-[#617589] dark:text-gray-400 text-lg mb-8 max-w-[500px]">
          {t.desc}
        </p>
        <div className="w-full bg-white dark:bg-[#1c2632] rounded-2xl p-6 md:p-8 shadow-xl shadow-primary/5 border border-[#f0f2f4] dark:border-[#344054] mb-10">
          <div className="grid grid-cols-1 gap-4 divide-y divide-[#f0f2f4] dark:divide-[#344054]">
            <div className="flex justify-between items-center py-2">
              <span className="text-[#617589] dark:text-gray-400 font-medium">{t.contractID}</span>
              <span className="text-[#111418] dark:text-white font-bold">#LEASE-2024-882910</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="text-[#617589] dark:text-gray-400 font-medium">{t.term}</span>
              <span className="text-[#111418] dark:text-white font-bold">{t.termVal}</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="text-[#617589] dark:text-gray-400 font-medium">{t.paymentVal}</span>
              <span className="text-primary text-xl font-bold">398.000đ</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="text-[#617589] dark:text-gray-400 font-medium">{t.status}</span>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <span className="text-yellow-600 font-bold text-xs uppercase">{t.statusVal}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button onClick={onLibrary} className="flex-1 max-w-[240px] bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">description</span> {t.btnOnline}
          </button>
          <button onClick={onHome} className="flex-1 max-w-[240px] bg-white dark:bg-transparent border-2 border-[#dbe0e6] dark:border-[#344054] text-[#111418] dark:text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">home</span> {t.btnHome}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
