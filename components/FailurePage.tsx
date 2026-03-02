
import React from 'react';

interface FailurePageProps {
  onRetry: () => void;
  onSupport: () => void;
}

const FailurePage: React.FC<FailurePageProps> = ({ onRetry, onSupport }) => {
  return (
    <div className="flex flex-1 items-center justify-center py-12 px-4 animate-in fade-in duration-500">
      <div className="max-w-[600px] w-full flex flex-col items-center text-center">
        <div className="mb-6 relative">
          <div className="size-24 rounded-full bg-red-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-red-500 text-6xl">error</span>
          </div>
        </div>
        <h1 className="text-[#111418] dark:text-white text-3xl font-black mb-4 tracking-tight">Thanh toán thất bại</h1>
        <p className="text-[#617589] dark:text-gray-400 text-lg mb-8 max-w-md">
          Đã có lỗi xảy ra trong quá trình xử lý giao dịch. Vui lòng kiểm tra lại số dư hoặc phương thức thanh toán.
        </p>
        <div className="w-full bg-white dark:bg-[#1c2632] rounded-2xl p-6 border border-[#f0f2f4] dark:border-[#344054] mb-8 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#617589] dark:text-gray-500 mb-4 text-left">Chi tiết giao dịch</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#617589] dark:text-gray-400">Mã đơn hàng:</span>
              <span className="font-semibold text-[#111418] dark:text-white">EDG-882941</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#617589] dark:text-gray-400">Phương thức:</span>
              <span className="font-semibold text-[#111418] dark:text-white">Ví MoMo</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#617589] dark:text-gray-400">Thời gian:</span>
              <span className="font-semibold text-[#111418] dark:text-white">{new Date().toLocaleString()}</span>
            </div>
            <div className="pt-3 border-t border-[#f0f2f4] dark:border-[#344054] flex justify-between items-center text-base">
              <span className="text-[#111418] dark:text-white font-bold">Tổng cộng:</span>
              <span className="text-red-500 font-extrabold">398.000đ</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button onClick={onRetry} className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">refresh</span> Thử lại ngay
          </button>
          <button onClick={onSupport} className="flex-1 bg-transparent border-2 border-[#dbe0e6] dark:border-[#344054] text-[#111418] dark:text-white font-bold py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">headset_mic</span> Liên hệ hỗ trợ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
