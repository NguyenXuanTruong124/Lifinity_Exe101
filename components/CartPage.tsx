
import React from 'react';
import { CartItem, Language } from '../types';

interface CartPageProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
  language: Language;
}

const CartPage: React.FC<CartPageProps> = ({ items, onRemove, onCheckout, onContinueShopping, language }) => {
  const subtotal = items.reduce((acc, item) => acc + (typeof item.price === 'number' ? item.price : 0), 0);
  const discount = items.length > 0 ? 50000 : 0;
  const total = Math.max(0, subtotal - discount);

  const t = {
    home: language === 'vi' ? 'Trang chủ' : 'Home',
    cartTitle: language === 'vi' ? 'Danh sách thuê' : 'Lease List',
    headerH1: language === 'vi' ? 'Danh sách đăng ký thuê' : 'Lease Registration List',
    headerP: language === 'vi' 
      ? `Bạn đang chọn ${items.length} giáo trình/game để triển khai cho nhà trường`
      : `You have selected ${items.length} curriculum/games for your school`,
    emptyMsg: language === 'vi' ? 'Chưa có giáo trình nào được chọn' : 'No curriculum selected yet',
    btnExplore: language === 'vi' ? 'Khám phá kho giáo trình' : 'Explore Curriculum Store',
    leaseFee: language === 'vi' ? 'Phí thuê / Năm học' : 'Lease Fee / Academic Year',
    ageRange: language === 'vi' ? 'Lứa tuổi' : 'Age range',
    license: language === 'vi' ? 'Bản quyền triển khai' : 'Implementation License',
    remove: language === 'vi' ? 'Gỡ bỏ' : 'Remove',
    continue: language === 'vi' ? 'Tiếp tục chọn giáo trình' : 'Continue selecting curriculum',
    summaryTitle: language === 'vi' ? 'Tóm tắt hợp đồng' : 'Contract Summary',
    serviceValue: language === 'vi' ? `Giá trị dịch vụ (${items.length} mục)` : `Service Value (${items.length} items)`,
    discount: language === 'vi' ? 'Ưu đãi nhà trường' : 'School Discount',
    totalLease: language === 'vi' ? 'Tổng phí thuê' : 'Total Lease Fee',
    btnProceed: language === 'vi' ? 'Tiến hành làm hợp đồng' : 'Proceed to Contract'
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-[1200px] mx-auto font-display">
      <nav className="flex flex-wrap gap-2 items-center mb-6">
        <button onClick={onContinueShopping} className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors">{t.home}</button>
        <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
        <span className="text-primary text-sm font-semibold">{t.cartTitle}</span>
      </nav>

      <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight">{t.headerH1}</h1>
          <p className="text-[#617589] dark:text-gray-400 text-base">{t.headerP}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 p-12 rounded-2xl text-center border-2 border-dashed border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">description</span>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{t.emptyMsg}</p>
              <button onClick={onContinueShopping} className="bg-primary text-white px-6 py-2 rounded-lg font-bold">{t.btnExplore}</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-[#1a202c] p-4 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all group">
                <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-24 sm:h-[100px] w-full sm:w-auto min-w-[160px]" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <p className="text-[#111418] dark:text-white text-lg font-bold">{item.title}</p>
                      <div className="text-right">
                        <p className="text-primary text-lg font-bold">{typeof item.price === 'number' ? item.price.toLocaleString() + 'đ' : item.price}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{t.leaseFee}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">{t.ageRange}: {item.ageRange}</span>
                      <span className="text-[#617589] dark:text-gray-400 text-xs">• {t.license}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <button onClick={() => onRemove(item.id)} className="flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-600 transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span> {t.remove}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="mt-4">
            <button onClick={onContinueShopping} className="flex items-center gap-2 text-primary font-semibold hover:underline">
              <span className="material-symbols-outlined">arrow_back</span> {t.continue}
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#1a202c] p-6 rounded-xl shadow-lg border border-[#e5e7eb] dark:border-[#2d3748] sticky top-24">
            <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-6">{t.summaryTitle}</h3>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between text-[#617589] dark:text-gray-400 text-base">
                <span>{t.serviceValue}</span>
                <span>{subtotal.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-[#617589] dark:text-gray-400 text-base">
                <span>{t.discount}</span>
                <span className="text-green-500">- {discount.toLocaleString()}đ</span>
              </div>
              <div className="border-t border-dashed border-[#e5e7eb] dark:border-[#2d3748] pt-4 flex justify-between items-center">
                <span className="text-[#111418] dark:text-white font-bold text-lg">{t.totalLease}</span>
                <span className="text-primary font-black text-2xl">{total.toLocaleString()}đ</span>
              </div>
            </div>
            
            <button 
              onClick={onCheckout}
              disabled={items.length === 0}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg shadow-md transition-all active:scale-95"
            >
              {t.btnProceed}
              <span className="material-symbols-outlined">assignment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
