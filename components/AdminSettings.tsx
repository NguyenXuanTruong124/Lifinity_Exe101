
import React from 'react';
import { Language } from '../types';

interface AdminSettingsProps {
  language: Language;
}

const AdminSettings: React.FC<AdminSettingsProps> = ({ language }) => {
  const isEn = language === 'en';
  const t = {
    title: isEn ? 'System Settings' : 'Cài đặt hệ thống',
    sub: isEn ? 'Manage comprehensive configurations for the educational marketplace platform.' : 'Quản lý cấu hình toàn diện cho nền tảng marketplace giáo dục',
    btnCancel: isEn ? 'Cancel' : 'Hủy bỏ',
    btnSave: isEn ? 'Save All Changes' : 'Lưu tất cả thay đổi',
    sections: {
      general: isEn ? 'General Configuration' : 'Cấu hình Chung',
      payment: isEn ? 'Payment Management' : 'Quản lý Thanh toán',
      appearance: isEn ? 'Appearance Customization' : 'Tùy chỉnh Giao diện',
      notif: isEn ? 'Email & Notifications' : 'Email & Thông báo',
      security: isEn ? 'Security' : 'Bảo mật'
    },
    labels: {
      siteName: isEn ? 'Website Name' : 'Tên website',
      logo: isEn ? 'Brand Logo' : 'Logo thương hiệu',
      maintenance: isEn ? 'Maintenance Mode' : 'Chế độ bảo trì',
      maintenanceSub: isEn ? 'Temporarily disconnect users for updates' : 'Tạm thời ngắt kết nối người dùng để cập nhật',
      bankAcc: isEn ? 'Bank Account Number' : 'Số tài khoản ngân hàng',
      currency: isEn ? 'Default Currency' : 'Tiền tệ mặc định',
      primaryColor: isEn ? 'Primary Color' : 'Màu sắc chủ đạo',
      font: isEn ? 'Display Font' : 'Phông chữ hiển thị',
      emailAcc: isEn ? 'Email Account' : 'Tài khoản Email',
      btnTestEmail: isEn ? 'Send Test Email' : 'Gửi email kiểm tra',
      twoFactor: isEn ? '2-Factor Authentication (2FA) for Admin' : 'Xác thực 2 lớp (2FA) cho Admin',
      twoFactorSub: isEn ? 'Requires code from Authenticator app' : 'Yêu cầu mã từ ứng dụng Authenticator khi đăng nhập',
      sessionExp: isEn ? 'Session Timeout (Minutes)' : 'Thời gian hết hạn phiên (Phút)',
      sessionSub: isEn ? 'Auto logout after specified minutes of inactivity.' : 'Tự động đăng xuất sau số phút không hoạt động.'
    }
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#111318] dark:text-white text-3xl font-black tracking-tight">{t.title}</h1>
          <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">{t.sub}</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white text-sm font-bold hover:bg-gray-50 transition-all">
            {t.btnCancel}
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
            {t.btnSave}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">language</span>
            <h2 className="text-lg font-bold dark:text-white">{t.sections.general}</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.siteName}</label>
              <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="text" defaultValue="Lifinity Academy"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.logo}</label>
              <div className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="size-16 bg-slate-100 dark:bg-gray-800 rounded-lg flex items-center justify-center bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdd6hIAz8BiYNwaPP0NOJFpG7Y-VsjsbwanFJMefr9Qs22ttI8WyXKLwyD35grMckLVAO4knaUsc23722jqmwrk4-izJYP9XtU6514eiCqTZRJl5eo_5My1aQWH3dE25bn_n-Ul-2PJ8yWHARBre-3vjk-YEvZ3qx7MWcgVJ0eLldrKHQbaTnAYGHCB7S32_cuDVDp5iNBs5jDJL0blODttX8v6JwekfJ7DcDbwokTiO_6U96OZcZF0yP3ZIUtpuLtoP7zphmrLlqp")' }}></div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-2">PNG, JPG (Max 2MB)</p>
                  <button className="text-primary text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">upload</span> {isEn ? 'Upload New Logo' : 'Tải lên logo mới'}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div>
                <p className="text-sm font-bold dark:text-white">{t.labels.maintenance}</p>
                <p className="text-xs text-gray-500">{t.labels.maintenanceSub}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox"/>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">payments</span>
            <h2 className="text-lg font-bold dark:text-white">{t.sections.payment}</h2>
          </div>
          <div className="p-6 space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">MoMo API Key</label>
              <div className="relative">
                <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none pr-12" type="password" defaultValue="momo_live_xxxxxxxxxxxxxxxx"/>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">visibility</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.bankAcc}</label>
              <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none" placeholder="19034567890 - Techcombank" type="text"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.currency}</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none appearance-none bg-slate-50 dark:bg-gray-800">
                <option value="VND">VND (Việt Nam Đồng)</option>
                <option value="USD">USD (US Dollar)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">palette</span>
            <h2 className="text-lg font-bold dark:text-white">{t.sections.appearance}</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.primaryColor}</label>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-primary border-2 border-white shadow-md"></div>
                <input className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none uppercase" type="text" defaultValue="#135BEC"/>
                <button className="px-4 py-3 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg text-sm font-bold">{isEn ? 'Pick Color' : 'Chọn màu'}</button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.font}</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none">
                <option selected>Lexend ({isEn ? 'Default' : 'Mặc định'})</option>
                <option>Inter</option>
                <option>Manrope</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">mail</span>
            <h2 className="text-lg font-bold dark:text-white">{t.sections.notif}</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-sm font-semibold dark:text-gray-200">SMTP Host</label>
                <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none" type="text" defaultValue="smtp.gmail.com"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold dark:text-gray-200">Port</label>
                <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none" type="text" defaultValue="587"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.emailAcc}</label>
              <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none" type="email" defaultValue="system@lifinity.edu.vn"/>
            </div>
            <button className="w-full py-3 border border-primary text-primary font-bold rounded-lg text-sm hover:bg-primary/5 transition-all">{t.labels.btnTestEmail}</button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden lg:col-span-2">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">security</span>
            <h2 className="text-lg font-bold dark:text-white">{t.sections.security}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-sm font-bold dark:text-white">{t.labels.twoFactor}</p>
                <p className="text-xs text-gray-500 mt-1">{t.labels.twoFactorSub}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold dark:text-gray-200">{t.labels.sessionExp}</label>
              <div className="flex items-center gap-3">
                <input className="w-32 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none" type="number" defaultValue="60"/>
                <span className="text-sm text-gray-500">{t.labels.sessionSub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
