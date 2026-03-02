
import React, { useState } from 'react';
import { Language } from '../types';

interface RegisterProps {
  onNavigateLogin: () => void;
  language: Language;
}

const Register: React.FC<RegisterProps> = ({ onNavigateLogin, language }) => {
  const [step, setStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const t = {
    title: language === 'vi' ? 'Đăng ký yêu cầu' : 'Registration Request',
    subtitle: language === 'vi' ? 'Dành cho Nhà trường & Trung tâm giáo dục' : 'For Schools & Educational Centers',
    step1: language === 'vi' ? 'Thông tin cá nhân' : 'Personal Info',
    step2: language === 'vi' ? 'Thông tin tổ chức' : 'Institutional Info',
    step3: language === 'vi' ? 'Mục tiêu & Quy mô' : 'Goals & Scale',
    next: language === 'vi' ? 'Tiếp theo' : 'Next Step',
    back: language === 'vi' ? 'Quay lại' : 'Go Back',
    complete: language === 'vi' ? 'Hoàn tất đăng ký' : 'Complete Registration',
    loginLink: language === 'vi' ? 'Đã có tài khoản? Đăng nhập' : 'Already have an account? Login',
    labels: {
      email: language === 'vi' ? 'Email' : 'Email',
      password: language === 'vi' ? 'Mật khẩu' : 'Password',
      name: language === 'vi' ? 'Họ và tên' : 'Full Name',
      role: language === 'vi' ? 'Vai trò trong trường' : 'Role in school',
      schoolName: language === 'vi' ? 'Tên trường / Trung tâm' : 'School / Center Name',
      level: language === 'vi' ? 'Cấp học' : 'Education Level',
      type: language === 'vi' ? 'Loại hình' : 'School Type',
      location: language === 'vi' ? 'Tỉnh / Thành phố' : 'Province / City',
      studentCount: language === 'vi' ? 'Số lượng học sinh' : 'Number of Students',
      goals: language === 'vi' ? 'Mục tiêu giáo dục chính (Chọn ít nhất 1)' : 'Main Educational Goals (Select at least 1)',
    },
    options: {
      roles: [
        { v: 'teacher', l: language === 'vi' ? 'Giáo viên' : 'Teacher' },
        { v: 'head', l: language === 'vi' ? 'Tổ trưởng' : 'Department Head' },
        { v: 'management', l: language === 'vi' ? 'Ban giám hiệu' : 'Management' },
        { v: 'student', l: language === 'vi' ? 'Học sinh' : 'Student' },
        { v: 'other', l: language === 'vi' ? 'Khác' : 'Other' },
      ],
      levels: [
        { v: 'preschool', l: language === 'vi' ? 'Mầm non' : 'Preschool' },
        { v: 'primary', l: language === 'vi' ? 'Tiểu học' : 'Primary School' },
        { v: 'secondary', l: language === 'vi' ? 'THCS' : 'Secondary School' },
        { v: 'high', l: language === 'vi' ? 'THPT' : 'High School' },
        { v: 'multi', l: language === 'vi' ? 'Liên cấp' : 'Inter-level' },
      ],
      types: [
        { v: 'public', l: language === 'vi' ? 'Công lập' : 'Public' },
        { v: 'private', l: language === 'vi' ? 'Tư thục' : 'Private' },
        { v: 'international', l: language === 'vi' ? 'Quốc tế' : 'International' },
      ],
      counts: ['< 200', '300-900', '400-900', '> 1000'],
      goals: [
        language === 'vi' ? 'Dạy kỹ năng sống' : 'Life skills teaching',
        language === 'vi' ? 'Phòng chống tai nạn' : 'Accident prevention',
        language === 'vi' ? 'Giáo dục giới tính' : 'Sex education',
        language === 'vi' ? 'Kỹ năng giao tiếp' : 'Communication skills',
        language === 'vi' ? 'Quản lý tài chính' : 'Financial management',
        language === 'vi' ? 'Tư duy phản biện' : 'Critical thinking',
        language === 'vi' ? 'Trí tuệ cảm xúc (EQ)' : 'Emotional Intelligence (EQ)',
        language === 'vi' ? 'Kỹ năng lãnh đạo' : 'Leadership skills',
        language === 'vi' ? 'Sử dụng internet an toàn' : 'Cyber safety',
        language === 'vi' ? 'Phòng chống bạo lực học đường' : 'Bullying prevention',
        language === 'vi' ? 'Định hướng nghề nghiệp' : 'Career orientation',
        language === 'vi' ? 'Bảo vệ môi trường' : 'Environmental protection',
        language === 'vi' ? 'Kỹ năng tự lập' : 'Independence skills',
        language === 'vi' ? 'Kỹ năng thuyết trình' : 'Presentation skills',
        language === 'vi' ? 'Giải quyết xung đột' : 'Conflict resolution',
        language === 'vi' ? 'Quản lý thời gian' : 'Time management',
        language === 'vi' ? 'Kỹ năng làm việc nhóm' : 'Teamwork skills',
        language === 'vi' ? 'Tư duy sáng tạo' : 'Creative thinking',
        language === 'vi' ? 'Sức khỏe tinh thần' : 'Mental health',
        language === 'vi' ? 'Phòng chống tệ nạn' : 'Drug/Crime prevention',
      ]
    }
  };

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col md:flex-row animate-in fade-in duration-500 font-display">
      {/* Left Decoration Panel */}
      <div className="hidden md:flex flex-1 relative bg-primary items-center justify-center p-12 overflow-hidden rounded-3xl m-4 shadow-2xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10 flex flex-col gap-10 max-w-lg text-white">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest">{t.subtitle}</span>
            <h1 className="text-4xl lg:text-5xl font-black leading-tight">{language === 'vi' ? 'Kiến tạo môi trường học tập số an toàn' : 'Creating Safe Digital Learning Environments'}</h1>
            <p className="text-lg font-light opacity-80 leading-relaxed">
              {language === 'vi' 
                ? 'Hệ thống hỗ trợ nhà trường quản lý và triển khai giáo dục kỹ năng toàn diện thông qua trò chơi tương tác.' 
                : 'A system supporting schools in managing and implementing comprehensive skills education through interactive games.'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="material-symbols-outlined text-3xl mb-2">verified</span>
              <p className="text-xs font-bold uppercase">{language === 'vi' ? 'Chứng nhận' : 'Certified'}</p>
              <p className="text-[10px] opacity-70">Expert Verified</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="material-symbols-outlined text-3xl mb-2">analytics</span>
              <p className="text-xs font-bold uppercase">{language === 'vi' ? 'Báo cáo' : 'Analytics'}</p>
              <p className="text-[10px] opacity-70">Real-time tracking</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 size-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white dark:bg-background-dark">
        <div className="w-full max-w-[540px] flex flex-col gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black dark:text-white tracking-tight">{t.title}</h2>
            
            {/* Steps Indicator */}
            <div className="flex items-center gap-4 py-4">
              {[1, 2, 3].map(s => (
                <React.Fragment key={s}>
                  <div className={`flex items-center justify-center size-8 rounded-full text-xs font-bold transition-all ${step >= s ? 'bg-primary text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                    {step > s ? <span className="material-symbols-outlined text-sm">check</span> : s}
                  </div>
                  {s < 3 && <div className={`h-1 flex-1 rounded-full ${step > s ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest">
              {step === 1 ? t.step1 : step === 2 ? t.step2 : t.step3}
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.email}</label>
                  <input className="form-input rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 focus:ring-primary" placeholder="email@school.edu.vn" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.password}</label>
                  <input type="password" className="form-input rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 focus:ring-primary" placeholder="••••••••" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.name}</label>
                  <input className="form-input rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 focus:ring-primary" placeholder={language === 'vi' ? 'Họ và tên người đại diện' : 'Representative name'} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.role}</label>
                  <select className="form-select rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 outline-none">
                    {t.options.roles.map(r => <option key={r.v} value={r.v}>{r.l}</option>)}
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.schoolName}</label>
                  <input className="form-input rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 focus:ring-primary" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.level}</label>
                    <select className="form-select rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 outline-none">
                      {t.options.levels.map(l => <option key={l.v} value={l.v}>{l.l}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.type}</label>
                    <select className="form-select rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 outline-none">
                      {t.options.types.map(ty => <option key={ty.v} value={ty.v}>{ty.l}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.location}</label>
                  <input className="form-input rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 focus:ring-primary" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.studentCount}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {t.options.counts.map(c => (
                      <button 
                        key={c}
                        type="button"
                        className="p-3 border rounded-xl text-sm font-bold hover:border-primary hover:text-primary transition-all bg-white dark:bg-slate-800"
                        onClick={() => {}}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.labels.goals}</label>
                  <div className="h-60 overflow-y-auto border border-slate-100 dark:border-slate-800 rounded-2xl p-4 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                    {t.options.goals.map((goal, idx) => (
                      <label key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 cursor-pointer transition-colors group">
                        <input 
                          type="checkbox" 
                          className="rounded text-primary focus:ring-primary h-4 w-4"
                          checked={selectedGoals.includes(goal)}
                          onChange={() => handleGoalToggle(goal)}
                        />
                        <span className={`text-sm font-medium ${selectedGoals.includes(goal) ? 'text-primary' : 'text-slate-600 dark:text-slate-400 group-hover:text-primary'}`}>{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 mt-4">
              <button 
                onClick={() => {
                  if (step < 3) setStep(step + 1);
                  else onNavigateLogin();
                }}
                className="bg-primary text-white h-14 rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
              >
                {step === 3 ? t.complete : t.next}
                <span className="material-symbols-outlined">{step === 3 ? 'verified' : 'arrow_forward'}</span>
              </button>
              
              {step > 1 && (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 h-14 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  {t.back}
                </button>
              )}
            </div>
          </form>

          <button onClick={onNavigateLogin} className="text-center text-sm font-bold text-slate-500 hover:text-primary transition-colors">
            {t.loginLink}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
