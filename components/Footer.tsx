
import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language?: Language;
}

const Footer: React.FC<FooterProps> = ({ language = 'vi' }) => {
  const t = {
    desc: language === 'vi' ? 'Nền tảng hàng đầu thế giới cung cấp các trò chơi giáo dục kỹ năng sống cho học sinh mọi lứa tuổi.' : 'The world\'s leading platform providing life skill educational games for students of all ages.',
    col1: language === 'vi' ? 'Mua sắm' : 'Shopping',
    col2: language === 'vi' ? 'Về chúng tôi' : 'About Us',
    col3: language === 'vi' ? 'Bản tin' : 'Newsletter',
    newsletterDesc: language === 'vi' ? 'Nhận cập nhật về các trò chơi kỹ năng mới và mẹo giáo dục.' : 'Get updates on new skill games and educational tips.',
    placeholder: language === 'vi' ? 'Địa chỉ Email' : 'Email Address',
    btnJoin: language === 'vi' ? 'Tham gia' : 'Join',
    copyright: language === 'vi' ? '© 2024 Lifinity Store Inc. Bảo lưu mọi quyền. Được xây dựng cho những nhà lãnh đạo tương lai.' : '© 2024 Lifinity Store Inc. All rights reserved. Built for future leaders.',
    links: {
      games: language === 'vi' ? 'Tất cả trò chơi' : 'All Games',
      bestsellers: language === 'vi' ? 'Bán chạy nhất' : 'Best Sellers',
      new: language === 'vi' ? 'Mới ra mắt' : 'New Arrivals',
      bundles: language === 'vi' ? 'Gói khuyến mãi' : 'Promo Bundles',
      mission: language === 'vi' ? 'Sứ mệnh & Tầm nhìn' : 'Mission & Vision',
      team: language === 'vi' ? 'Đội ngũ chuyên gia' : 'Expert Team',
      partners: language === 'vi' ? 'Đối tác chiến lược' : 'Strategic Partners',
      story: language === 'vi' ? 'Câu chuyện thương hiệu' : 'Brand Story',
    }
  };

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-[#e2e8f0] dark:border-[#1e293b] py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 text-[#0f172a] dark:text-primary">
            <img 
              src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1280px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"
              alt="FPT Education" 
              className="h-8 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-4">
              <span className="material-symbols-outlined text-3xl">sports_esports</span>
              <h2 className="text-xl font-bold">Lifinity Store</h2>
            </div>
          </div>
          <p className="text-sm text-slate-500">{t.desc}</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">social_leaderboard</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">smart_display</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors">alternate_email</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 dark:text-white">{t.col1}</h4>
          <ul className="text-sm text-slate-500 space-y-2">
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.games}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.bestsellers}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.new}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.bundles}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 dark:text-white">{t.col2}</h4>
          <ul className="text-sm text-slate-500 space-y-2">
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.mission}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.team}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.partners}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t.links.story}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 dark:text-white">{t.col3}</h4>
          <p className="text-xs text-slate-500 mb-4">{t.newsletterDesc}</p>
          <div className="flex">
            <input 
              className="bg-[#f1f5f9] dark:bg-[#1e293b] border-none rounded-l-lg text-sm w-full focus:ring-1 focus:ring-primary dark:text-white" 
              placeholder={t.placeholder} 
              type="email" 
            />
            <button className="bg-primary px-4 py-2 rounded-r-lg text-white font-bold text-sm hover:bg-primary-dark transition-colors shrink-0">{t.btnJoin}</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-[#e2e8f0] dark:border-[#1e293b] text-center text-xs text-slate-400">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;