
import React, { useState } from 'react';
import { CartItem, Language } from '../types';

interface CheckoutPageProps {
  items: CartItem[];
  onConfirm: () => void;
  onBack: () => void;
  language: Language;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onConfirm, onBack, language }) => {
  const [mst, setMst] = useState('');
  const [address, setAddress] = useState('');
  const [representative, setRepresentative] = useState('');
  const [duration, setDuration] = useState('1_year'); // '1_semester', '1_year', '2_years'
  
  const subtotal = items.reduce((acc, item) => acc + (typeof item.price === 'number' ? item.price : 0), 0);
  
  const getMultiplier = () => {
    if (duration === '1_semester') return 0.6;
    if (duration === '2_years') return 1.8;
    return 1;
  };

  const t = {
    backCart: language === 'vi' ? 'Danh sách thuê' : 'Lease List',
    stepInfo: language === 'vi' ? 'Thông tin hợp đồng' : 'Contract Info',
    title: language === 'vi' ? 'Thông tin Hợp đồng Thuê' : 'Lease Contract Information',
    subtitle: language === 'vi' ? 'Cung cấp thông tin pháp lý để hệ thống khởi tạo dự thảo hợp đồng thuê bản quyền giáo trình.' : 'Provide legal information for the system to generate a draft copyright lease contract.',
    section1: language === 'vi' ? 'Thông tin Pháp nhân (Trường/Trung tâm)' : 'Institutional Entity Info (School/Center)',
    labelSchoolName: language === 'vi' ? 'Tên đơn vị (theo đăng ký kinh doanh/quyết định thành lập)' : 'Unit Name (as per business registration/establishment decision)',
    labelMST: language === 'vi' ? 'Mã số thuế (MST)' : 'Tax Identification Number (TIN)',
    labelRep: language === 'vi' ? 'Người đại diện pháp luật / Chức vụ' : 'Legal Representative / Position',
    labelAddress: language === 'vi' ? 'Địa chỉ trụ sở chính' : 'Headquarters Address',
    section2: language === 'vi' ? 'Thời hạn thuê bản quyền' : 'Lease Term',
    section3: language === 'vi' ? 'Hình thức thanh toán phí thuê' : 'Lease Payment Method',
    paymentBank: language === 'vi' ? 'Chuyển khoản Ngân hàng (Dành cho tổ chức)' : 'Bank Transfer (For Organizations)',
    paymentWallet: language === 'vi' ? 'Ví MoMo / QR Code (Dành cho cá nhân)' : 'E-Wallet / QR Code (For Individuals)',
    notice: language === 'vi' ? 'Lưu ý: Sau khi xác nhận, dự thảo hợp đồng sẽ được gửi qua email. Quý đơn vị vui lòng kiểm tra kỹ MST và Địa chỉ trước khi thực hiện chuyển khoản.' : 'Note: After confirmation, the draft contract will be sent via email. Please check TIN and Address carefully before making the transfer.',
    summaryTitle: language === 'vi' ? 'Đơn thuê của đơn vị' : 'Institution Lease Order',
    termLabel: language === 'vi' ? 'Thời hạn thuê' : 'Lease Duration',
    durationText: {
      '1_semester': language === 'vi' ? '1 Học kỳ (5 tháng)' : '1 Semester (5 months)',
      '1_year': language === 'vi' ? '1 Năm học (10 tháng)' : '1 Academic Year (10 months)',
      '2_years': language === 'vi' ? '2 Năm học (20 tháng)' : '2 Academic Years (20 months)'
    },
    durationShort: {
      '1_semester': language === 'vi' ? 'Học kỳ' : 'Semester',
      '1_year': language === 'vi' ? 'Năm học' : 'Year',
      '2_years': language === 'vi' ? '2 Năm' : '2 Years'
    },
    subtotalTime: language === 'vi' ? 'Tạm tính (hệ số thời gian)' : 'Subtotal (time multiplier)',
    discount: language === 'vi' ? 'Ưu đãi đối tác giáo dục' : 'Educational Partner Discount',
    totalContract: language === 'vi' ? 'Tổng giá trị hợp đồng' : 'Total Contract Value',
    agreeCheckbox: language === 'vi' ? 'Tôi xác nhận các thông tin pháp lý trên là chính xác và đồng ý khởi tạo hợp đồng thuê bản quyền.' : 'I confirm that the above legal information is accurate and agree to initialize the copyright lease contract.',
    btnConfirm: language === 'vi' ? 'Ký & Xác nhận Hợp đồng' : 'Sign & Confirm Contract',
    durationOptions: [
      { id: '1_semester', label: language === 'vi' ? '1 Học kỳ' : '1 Semester', desc: language === 'vi' ? '5 tháng triển khai' : '5 months implementation', icon: 'calendar_today' },
      { id: '1_year', label: language === 'vi' ? '1 Năm học' : '1 Year', desc: language === 'vi' ? '10 tháng triển khai' : '10 months implementation', icon: 'event_available' },
      { id: '2_years', label: language === 'vi' ? '2 Năm học' : '2 Years', desc: language === 'vi' ? 'Ưu đãi 10% phí thuê' : '10% lease discount', icon: 'auto_awesome' },
    ]
  };

  const adjustedSubtotal = subtotal * getMultiplier();
  const discount = items.length > 0 ? 50000 : 0;
  const total = Math.max(0, adjustedSubtotal - discount);

  return (
    <div className="animate-in fade-in duration-500 max-w-[1200px] mx-auto pb-20 font-display">
      <div className="flex flex-wrap gap-2 pb-6">
        <button onClick={onBack} className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-primary">{t.backCart}</button>
        <span className="text-[#617589] dark:text-gray-400 text-sm font-medium">/</span>
        <span className="text-[#111418] dark:text-white text-sm font-medium">{t.stepInfo}</span>
      </div>

      <div className="flex flex-col gap-2 pb-8">
        <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">{t.title}</h1>
        <p className="text-[#617589] dark:text-gray-400 text-base">{t.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1c2632] rounded-xl p-6 shadow-sm border border-[#f0f2f4] dark:border-[#344054]">
            <h2 className="text-[#111418] dark:text-white text-xl font-bold pb-6 border-b border-[#f0f2f4] dark:border-[#344054] mb-6 flex items-center gap-2">
              <span className="bg-primary text-white size-7 rounded-full flex items-center justify-center text-sm">1</span>
              {t.section1}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 md:col-span-2">
                <p className="text-[#111418] dark:text-white text-sm font-semibold">{t.labelSchoolName}</p>
                <input className="form-input w-full rounded-lg border-[#dbe0e6] dark:border-[#344054] dark:bg-slate-900 text-[#111418] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary" placeholder={language === 'vi' ? 'Trường Tiểu học ABC...' : 'ABC Primary School...'} />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-[#111418] dark:text-white text-sm font-semibold">{t.labelMST}</p>
                <input 
                  value={mst}
                  onChange={(e) => setMst(e.target.value)}
                  className="form-input w-full rounded-lg border-[#dbe0e6] dark:border-[#344054] dark:bg-slate-900 text-[#111418] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary" 
                  placeholder="010xxxxxxx" 
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-[#111418] dark:text-white text-sm font-semibold">{t.labelRep}</p>
                <input 
                  value={representative}
                  onChange={(e) => setRepresentative(e.target.value)}
                  className="form-input w-full rounded-lg border-[#dbe0e6] dark:border-[#344054] dark:bg-slate-900 text-[#111418] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary" 
                  placeholder={language === 'vi' ? "Ông/Bà: Nguyễn Văn A - Hiệu trưởng" : "Mr/Ms: John Doe - Principal"} 
                />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <p className="text-[#111418] dark:text-white text-sm font-semibold">{t.labelAddress}</p>
                <input 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input w-full rounded-lg border-[#dbe0e6] dark:border-[#344054] dark:bg-slate-900 text-[#111418] dark:text-white h-12 px-4 focus:border-primary focus:ring-1 focus:ring-primary" 
                  placeholder={language === 'vi' ? "Số nhà, Đường, Phường/Xã..." : "Street, District, City..."} 
                />
              </label>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1c2632] rounded-xl p-6 shadow-sm border border-[#f0f2f4] dark:border-[#344054]">
            <h2 className="text-[#111418] dark:text-white text-xl font-bold pb-6 border-b border-[#f0f2f4] dark:border-[#344054] mb-6 flex items-center gap-2">
              <span className="bg-primary text-white size-7 rounded-full flex items-center justify-center text-sm">2</span>
              {t.section2}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.durationOptions.map((opt) => (
                <div 
                  key={opt.id}
                  onClick={() => setDuration(opt.id)}
                  className={`cursor-pointer rounded-xl p-4 border-2 transition-all flex flex-col gap-2 items-center text-center ${
                    duration === opt.id 
                    ? 'border-primary bg-primary/5 shadow-md ring-4 ring-primary/10' 
                    : 'border-slate-100 dark:border-slate-800 hover:border-primary/40'
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl ${duration === opt.id ? 'text-primary' : 'text-slate-400'}`}>
                    {opt.icon}
                  </span>
                  <div>
                    <p className={`font-bold text-sm ${duration === opt.id ? 'text-primary' : 'dark:text-white'}`}>{opt.label}</p>
                    <p className="text-[10px] text-slate-500">{opt.desc}</p>
                  </div>
                  {duration === opt.id && (
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#1c2632] rounded-xl p-6 shadow-sm border border-[#f0f2f4] dark:border-[#344054]">
            <h2 className="text-[#111418] dark:text-white text-xl font-bold pb-6 border-b border-[#f0f2f4] dark:border-[#344054] mb-6 flex items-center gap-2">
              <span className="bg-primary text-white size-7 rounded-full flex items-center justify-center text-sm">3</span>
              {t.section3}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group cursor-pointer border-2 border-primary rounded-xl p-4 flex flex-col items-center gap-3 bg-primary/5">
                <div className="absolute top-2 right-2 text-primary">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                </div>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">account_balance</span>
                </div>
                <p className="text-sm font-semibold text-[#111418] dark:text-white text-center">{t.paymentBank}</p>
              </div>
              <div className="group cursor-pointer border-2 border-[#dbe0e6] dark:border-[#344054] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/50 transition-all">
                <div className="size-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">qr_code_2</span>
                </div>
                <p className="text-sm font-semibold text-[#111418] dark:text-white text-center">{t.paymentWallet}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl flex gap-3 border border-blue-100 dark:border-blue-900/30">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">{t.notice}</p>
          </div>
        </div>

        <div className="w-full lg:w-[400px] flex flex-col gap-6 sticky top-24">
          <div className="bg-white dark:bg-[#1c2632] rounded-xl p-6 shadow-md border border-[#f0f2f4] dark:border-[#344054]">
            <h2 className="text-[#111418] dark:text-white text-xl font-bold pb-4">{t.summaryTitle}</h2>
            <div className="flex flex-col gap-4 py-4 border-b border-[#f0f2f4] dark:border-[#344054]">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="size-16 bg-cover bg-center rounded-lg flex-shrink-0" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                  <div className="flex flex-col justify-between flex-1">
                    <p className="text-sm font-bold text-[#111418] dark:text-white line-clamp-2 leading-tight">{item.title}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] text-primary font-bold uppercase">{(t.durationShort as any)[duration]}</p>
                      <p className="text-sm font-bold text-primary">{typeof item.price === 'number' ? item.price.toLocaleString() + 'đ' : item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 py-6">
              <div className="flex justify-between text-[#617589] dark:text-gray-400 text-sm">
                <span>{t.termLabel}</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">{(t.durationText as any)[duration]}</span>
              </div>
              <div className="flex justify-between text-[#617589] dark:text-gray-400 text-sm">
                <span>{t.subtotalTime}</span>
                <span>{adjustedSubtotal.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-[#617589] dark:text-gray-400 text-sm">
                <span>{t.discount}</span>
                <span className="text-green-500">-{discount.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-[#111418] dark:text-white text-lg font-bold pt-2 border-t border-[#f0f2f4] dark:border-[#344054]">
                <span>{t.totalContract}</span>
                <span className="text-primary text-2xl">{total.toLocaleString()}đ</span>
              </div>
            </div>
            
            <div className="mb-6 flex items-start gap-2">
                <input type="checkbox" className="mt-1 rounded text-primary focus:ring-primary h-4 w-4" id="agree_terms" />
                <label htmlFor="agree_terms" className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{t.agreeCheckbox}</label>
            </div>

            <button 
              onClick={onConfirm}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">draw</span> {t.btnConfirm}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
