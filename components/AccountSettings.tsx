
import React from 'react';
import { Language } from '../types';

interface AccountSettingsProps {
  language?: Language;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ language = 'vi' }) => {
  const t = {
    title: language === 'vi' ? 'Hồ sơ cá nhân' : 'Personal Profile',
    sub: language === 'vi' ? 'Quản lý định danh cá nhân và thiết lập bảo mật tài khoản.' : 'Manage personal identity and set up account security.',
    sec1: language === 'vi' ? 'Thông tin định danh' : 'Identity Information',
    sec2: language === 'vi' ? 'Bảo mật tài khoản' : 'Account Security',
    changeAvatar: language === 'vi' ? 'Thay ảnh đại diện' : 'Change Avatar',
    labels: {
      fullName: language === 'vi' ? 'Họ và tên đầy đủ' : 'Full Name',
      studentId: language === 'vi' ? 'Mã số học sinh' : 'Student ID',
      class: language === 'vi' ? 'Lớp / Đơn vị học tập' : 'Class / Learning Unit',
      email: language === 'vi' ? 'Email liên hệ' : 'Contact Email',
      currentPass: language === 'vi' ? 'Mật khẩu hiện tại' : 'Current Password',
      newPass: language === 'vi' ? 'Mật khẩu mới' : 'New Password'
    },
    btns: {
      cancel: language === 'vi' ? 'Hủy thay đổi' : 'Cancel Changes',
      save: language === 'vi' ? 'Lưu hồ sơ' : 'Save Profile'
    },
    classOptions: [
      language === 'vi' ? 'Lớp 6A1 - TH Chu Văn An' : 'Class 6A1 - Chu Van An Primary',
      language === 'vi' ? 'Lớp 6A2 - TH Chu Văn An' : 'Class 6A2 - Chu Van An Primary',
      language === 'vi' ? 'Lớp 7B1 - TH Chu Văn An' : 'Class 7B1 - Chu Van An Primary'
    ]
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <header>
        <h2 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white italic uppercase">{t.title}</h2>
        <p className="text-[#617589] dark:text-gray-400 mt-1 italic">{t.sub}</p>
      </header>

      <div className="space-y-6">
        <section className="bg-white dark:bg-[#1a2632] p-8 rounded-[2rem] border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-8 flex items-center gap-2">
             <span className="material-symbols-outlined text-primary">badge</span> {t.sec1}
          </h3>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="size-28 rounded-[2.5rem] bg-center bg-cover border-4 border-primary/10 shadow-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANR5L-71s1vuEDS5YhPWcxq0CGNMyigcdl9lE-evqMxGYXJn9zmlemrlykaBYRnVGYkr_yA2Q3Vl14-V4zS7BbeImRsCMIgO2pF3SG1xQMMh8qUrvBfDAt3_0dHcNvJ24XNsvsJpDZmPSlUfqAk7YXCkowdDqJl5s05OwS-PhqBGJuuVir8J5iacr6FvAEj4fKUHGSHOn5WbRu5bdUmgzPsF6cMr7ImE-hOb5zeHA0cW6AKh1-FDC5Fl03tx8VFC_gshBkh7i34y8v")' }}></div>
                <button className="absolute bottom-0 right-0 bg-primary text-white size-10 rounded-2xl shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-4 border-white dark:border-slate-800">
                  <span className="material-symbols-outlined text-lg">photo_camera</span>
                </button>
              </div>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">{t.changeAvatar}</span>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.labels.fullName}</label>
                <input className="w-full h-12 rounded-xl border-[#dbe0e6] dark:border-gray-600 dark:bg-gray-800 text-sm font-bold focus:border-primary focus:ring-primary dark:text-white" type="text" defaultValue="Nguyễn Minh Quân" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.labels.studentId}</label>
                <input disabled className="w-full h-12 rounded-xl border-[#dbe0e6] dark:border-gray-600 bg-slate-50 dark:bg-gray-900 text-sm font-bold text-slate-400" type="text" defaultValue="HS-2024-0882" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.labels.class}</label>
                <select className="w-full h-12 rounded-xl border-[#dbe0e6] dark:border-gray-600 dark:bg-gray-800 text-sm font-bold focus:border-primary outline-none dark:text-white">
                  {t.classOptions.map((opt, i) => (
                    <option key={i} selected={i === 0}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.labels.email}</label>
                <input className="w-full h-12 rounded-xl border-[#dbe0e6] dark:border-gray-600 dark:bg-gray-800 text-sm font-bold focus:border-primary focus:ring-primary dark:text-white" type="email" defaultValue="quan.nm@school.edu.vn" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-[#1a2632] p-8 rounded-[2rem] border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">security</span> {t.sec2}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.labels.currentPass}</label>
              <input className="w-full h-12 rounded-xl border-[#dbe0e6] dark:border-gray-600 dark:bg-gray-800 text-sm px-4 dark:text-white" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.labels.newPass}</label>
              <input className="w-full h-12 rounded-xl border-[#dbe0e6] dark:border-gray-600 dark:bg-gray-800 text-sm px-4 dark:text-white" type="password" placeholder="••••••••" />
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-4 pt-4 pb-10">
          <button className="px-8 py-3.5 rounded-2xl border-2 border-[#dbe0e6] dark:border-gray-700 text-xs font-black uppercase tracking-widest text-[#617589] hover:bg-gray-50 transition-colors">{t.btns.cancel}</button>
          <button className="px-10 py-3.5 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-primary-dark shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">{t.btns.save}</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
