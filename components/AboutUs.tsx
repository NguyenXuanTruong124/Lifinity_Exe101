
import React from 'react';
import { Language } from '../types';

interface AboutUsProps {
  language: Language;
}

const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const t = {
    badge: language === 'vi' ? 'Về chúng tôi' : 'About Us',
    heroH1: language === 'vi' ? 'Kiến tạo tương lai qua' : 'Shaping the Future through',
    heroH1Span: language === 'vi' ? 'Trò chơi Giáo dục' : 'Educational Gaming',
    heroP: language === 'vi' 
      ? 'Lifinity Store không chỉ là một cửa hàng trò chơi. Chúng tôi là một hệ sinh thái học tập hiện đại, nơi mỗi màn chơi là một bước tiến mới trong việc hình thành kỹ năng sống cho thế hệ trẻ.' 
      : 'Lifinity Store is more than just a game store. We are a modern learning ecosystem where every level played is a step forward in shaping life skills for the younger generation.',
    btnMission: language === 'vi' ? 'Khám phá sứ mệnh' : 'Explore Mission',
    btnPartner: language === 'vi' ? 'Liên hệ hợp tác' : 'Partner with Us',
    statStudents: language === 'vi' ? 'Học sinh tham gia' : 'Active Students',
    statSchools: language === 'vi' ? 'Trường học liên kết' : 'Partner Schools',
    statAwards: language === 'vi' ? 'Giải thưởng đạt được' : 'Awards Won',
    statCountries: language === 'vi' ? 'Quốc gia hiện diện' : 'Countries Reached',
    missionTitle: language === 'vi' ? 'Tầm nhìn & Sứ mệnh' : 'Vision & Mission',
    quote: language === 'vi' ? '"Mục tiêu của chúng tôi là biến giáo dục thành một hành trình trải nghiệm đầy cảm hứng."' : '"Our goal is to turn education into an inspiring journey of experience."',
    missionLabel: language === 'vi' ? 'Sứ mệnh' : 'Mission',
    missionDesc: language === 'vi' ? 'Trang bị cho học sinh những kỹ năng thiết yếu của thế kỷ 21 thông qua các phương pháp tương tác và trò chơi hóa tiên tiến.' : 'Equip students with essential 21st-century skills through advanced interactive and gamification methods.',
    visionLabel: language === 'vi' ? 'Tầm nhìn' : 'Vision',
    visionDesc: language === 'vi' ? 'Trở thành nền tảng giáo dục kỹ năng sống qua trò chơi hàng đầu khu vực, giúp mỗi đứa trẻ khai phá tiềm năng tối đa của chính mình.' : 'To become the leading regional life skills educational platform through gaming, helping every child unlock their full potential.',
    valuesTitle: language === 'vi' ? 'Giá trị Cốt lõi' : 'Core Values',
    valuesSub: language === 'vi' ? 'Những nguyên tắc dẫn dắt Lifinity Store trên con đường phát triển bền vững.' : 'The principles guiding Lifinity Store on the path of sustainable development.',
    v1Title: language === 'vi' ? 'Đổi mới Sáng tạo' : 'Innovation',
    v1Desc: language === 'vi' ? 'Luôn tìm kiếm những cách tiếp cận mới để việc học trở nên thú vị hơn.' : 'Always seeking new approaches to make learning more enjoyable.',
    v2Title: language === 'vi' ? 'Người học là Trung tâm' : 'Student-Centric',
    v2Desc: language === 'vi' ? 'Mọi trải nghiệm đều được thiết kế dựa trên sự phát triển của học sinh.' : 'Every experience is designed based on the development of the student.',
    v3Title: language === 'vi' ? 'Chính trực & Tin cậy' : 'Integrity & Trust',
    v3Desc: language === 'vi' ? 'Cam kết nội dung giáo dục an toàn, được kiểm chứng bởi chuyên gia.' : 'Committed to safe educational content, verified by experts.',
    teamTitle: language === 'vi' ? 'Đội ngũ Chuyên gia' : 'Expert Team',
    teamSub: language === 'vi' ? 'Sự kết hợp giữa những nhà phát triển trò chơi tài năng và các chuyên gia giáo dục hàng đầu.' : 'A blend of talented game developers and leading educational experts.',
    ctaH2: language === 'vi' ? 'Hãy cùng kiến tạo tương lai!' : 'Let\'s create the future together!',
    ctaP: language === 'vi' ? 'Chúng tôi luôn chào đón những đối tác có cùng tầm nhìn để mở rộng kho tàng giáo dục kỹ năng cho học sinh.' : 'We always welcome partners with the same vision to expand the repository of skills education for students.',
    ctaBtn: language === 'vi' ? 'Bắt đầu ngay hôm nay' : 'Start Today'
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-24 pb-20 font-display">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-[#0f172a] text-white p-12 md:p-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest">{t.badge}</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">{t.heroH1} <span className="text-primary">{t.heroH1Span}</span></h1>
          <p className="text-lg text-slate-300 leading-relaxed">{t.heroP}</p>
          <div className="flex gap-4 pt-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">{t.btnMission}</button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold backdrop-blur-md transition-all">{t.btnPartner}</button>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block">
            <span className="material-symbols-outlined text-[300px] text-primary/10 select-none">rocket_launch</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: t.statStudents, val: '1.2M+', icon: 'groups' },
          { label: t.statSchools, val: '500+', icon: 'school' },
          { label: t.statAwards, val: '24', icon: 'workspace_premium' },
          { label: t.statCountries, val: '12', icon: 'public' }
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-2 group">
            <div className="mx-auto size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">{stat.val}</h3>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team working" className="rounded-3xl shadow-2xl" />
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[240px]">
            <p className="text-sm italic text-slate-600 dark:text-slate-400">{t.quote}</p>
            <p className="text-xs font-bold mt-3 text-primary">— Founder & CEO</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t.missionTitle}</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">flag</span>
              </div>
              <div>
                <h4 className="font-bold text-lg dark:text-white">{t.missionLabel}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{t.missionDesc}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">visibility</span>
              </div>
              <div>
                <h4 className="font-bold text-lg dark:text-white">{t.visionLabel}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{t.visionDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t.valuesTitle}</h2>
          <p className="text-slate-500">{t.valuesSub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: t.v1Title, desc: t.v1Desc, icon: 'lightbulb' },
            { title: t.v2Title, desc: t.v2Desc, icon: 'person_search' },
            { title: t.v3Title, desc: t.v3Desc, icon: 'verified_user' }
          ].map((v, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">{v.icon}</span>
              <h4 className="text-xl font-bold dark:text-white mb-3">{v.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team/Advisors */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-12 md:p-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black dark:text-white">{t.teamTitle}</h2>
          <p className="text-slate-500">{t.teamSub}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Dr. Minh Phan', role: 'Head of Education', img: 'https://i.pravatar.cc/150?u=minh' },
            { name: 'Hoàng Nguyễn', role: 'Lead Game Designer', img: 'https://i.pravatar.cc/150?u=hoang' },
            { name: 'Thảo Lê', role: 'Student Success', img: 'https://i.pravatar.cc/150?u=thao' },
            { name: 'David Tran', role: 'CTO', img: 'https://i.pravatar.cc/150?u=david' }
          ].map((m, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="size-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                <img src={m.img} alt={m.name} className="size-full object-cover" />
              </div>
              <div>
                <h5 className="font-bold dark:text-white">{m.name}</h5>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary rounded-[3rem] p-12 text-center text-white space-y-6 shadow-2xl shadow-primary/30">
        <h2 className="text-3xl md:text-5xl font-black">{t.ctaH2}</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">{t.ctaP}</p>
        <button className="bg-white text-primary px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl">{t.ctaBtn}</button>
      </section>
    </div>
  );
};

export default AboutUs;