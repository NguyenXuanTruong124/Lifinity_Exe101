
import React, { useState } from 'react';
import { UserRole, Language } from '../types';

interface LoginProps {
  onLogin: (role: UserRole, username: string) => void;
  onNavigateRegister: () => void;
  language: Language;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigateRegister, language }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isEn = language === 'en';

  const t = {
    title: isEn ? 'System Login' : 'Đăng nhập hệ thống',
    subtitle: isEn ? 'Please enter the account provided by Lifinity.' : 'Vui lòng nhập tài khoản được cấp bởi Lifinity.',
    usernameLabel: isEn ? 'Username (1-4)' : 'Tên đăng nhập (1-4)',
    usernamePh: isEn ? 'Enter username' : 'Nhập tài khoản',
    passwordLabel: isEn ? 'Password' : 'Mật khẩu',
    passwordPh: isEn ? 'Enter password' : 'Nhập mật khẩu',
    btnLogin: isEn ? 'Enter System' : 'Vào hệ thống',
    noAccount: isEn ? "Don't have an institutional account?" : 'Chưa có tài khoản đơn vị?',
    btnRegister: isEn ? 'Partner Registration' : 'Đăng ký đối tác',
    errorMsg: isEn ? 'Invalid username or password. (Try: 1, 2, 3 or 4)' : 'Tài khoản hoặc mật khẩu không đúng. (Thử: 1, 2, 3 hoặc 4)',
    heroTitle: isEn ? 'Digital Skills Portal' : 'Cổng thông tin giáo dục kỹ năng số',
    heroDesc: isEn ? 'Login to access the management and learning system tailored to your role.' : 'Đăng nhập để truy cập vào hệ thống quản lý và học tập dành riêng cho vai trò của bạn.',
    roleAdmin: isEn ? '1: Admin' : '1: Admin',
    roleSchool: isEn ? '2: School' : '2: Trường học',
    roleTeacher: isEn ? '3: Teacher' : '3: Giảng viên',
    roleStudent: isEn ? '4: Student' : '4: Học sinh',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === '1' && password === '1') {
      onLogin('manager', isEn ? 'Root Admin' : 'Tổng Quản trị');
    } else if (username === '2' && password === '2') {
      onLogin('school', isEn ? 'Chu Van An Primary School' : 'Trường Tiểu học Chu Văn An');
    } else if (username === '3' && password === '3') {
      onLogin('teacher', isEn ? 'Instructor Nguyen Thao' : 'Giảng viên Nguyễn Thảo');
    } else if (username === '4' && password === '4') {
      onLogin('customer', isEn ? 'Student Minh Quan' : 'Học sinh Minh Quân');
    } else {
      setError(t.errorMsg);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full flex-col md:flex-row animate-in fade-in duration-500">
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 bg-primary/10 dark:bg-primary/5 flex-col items-center justify-center p-12 relative overflow-hidden rounded-3xl m-4">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="relative z-10 max-w-lg text-center">
          <div className="flex items-center justify-center gap-3 mb-8 text-primary">
            <div className="size-10">
              <span className="material-symbols-outlined text-4xl font-bold">sports_esports</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#0f172a] dark:text-white">Lifinity</h1>
          </div>
          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <img alt="Login Illustration" className="w-full h-auto object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw_RYcpMqtKaWlX6grKg4sBrSa1gojEGLSvIgeKbVNpdNDipeiYYKXiBDxA4Nr9cX7Q4B9rat7wA9kNvDH-0eyLJXOhAfKHQLYhN6NYA66XUd-sSTMKSy8pkaQo-FYox1v5q0rhut-5Ss5xnTeXGyUAfhsBvmw4ugYv4u9uoAHSlfXDxHOge8Zg3n1AmW_qidimgKWJYANInZRQ_C5gIJnxNxU4duTgcBfcUG1weMvlLr8tJQV_jD-452xb1ISrgqnS6G-2eHX7GmL" />
          </div>
          <h2 className="text-3xl font-black text-[#0f172a] dark:text-white mb-4 leading-tight">
            {t.heroTitle}
          </h2>
          <p className="text-[#64748b] dark:text-gray-400 text-lg">
            {t.heroDesc}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-24 font-display">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tight text-[#0f172a] dark:text-white">{t.title}</h2>
            <p className="mt-2 text-sm text-[#64748b] dark:text-gray-400 font-medium">{t.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100 animate-bounce">
                {error}
              </div>
            )}
            <div className="flex flex-col gap-2">
              <p className="text-[#0f172a] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">{t.usernameLabel}</p>
              <input
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input w-full rounded-xl border-[#dbe0e6] dark:border-gray-700 dark:bg-slate-800 text-sm h-14 focus:ring-primary focus:border-primary font-bold px-5"
                placeholder={t.usernamePh}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#0f172a] dark:text-gray-200 text-xs font-black uppercase tracking-widest ml-1">{t.passwordLabel}</p>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input w-full rounded-xl border-[#dbe0e6] dark:border-gray-700 dark:bg-slate-800 text-sm h-14 focus:ring-primary focus:border-primary font-bold px-5"
                placeholder={t.passwordPh}
              />
            </div>
            <button className="w-full bg-primary text-white h-14 rounded-xl font-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-[1.01] active:scale-95 uppercase tracking-widest">
              {t.btnLogin}
            </button>
          </form>

          <div className="mt-10 grid grid-cols-2 gap-3 text-[10px] text-slate-400 font-black uppercase tracking-widest">
            <div className="p-2 border border-slate-100 dark:border-gray-800 rounded-lg text-center">{t.roleAdmin}</div>
            <div className="p-2 border border-slate-100 dark:border-gray-800 rounded-lg text-center">{t.roleSchool}</div>
            <div className="p-2 border border-slate-100 dark:border-gray-800 rounded-lg text-center">{t.roleTeacher}</div>
            <div className="p-2 border border-slate-100 dark:border-gray-800 rounded-lg text-center">{t.roleStudent}</div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-[#64748b] dark:text-gray-400 font-medium">
              {t.noAccount}
              <button onClick={onNavigateRegister} className="font-black text-primary hover:underline ml-2">{t.btnRegister}</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
