
import React from 'react';

const NewArrival: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-black text-[#0f172a] dark:text-white">
            Mới ra mắt: <br />
            <span className="text-primary italic">Nhà Thám Hiểm Đạo Đức</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Đắm mình vào các kịch bản phức tạp và tìm hiểu về đạo đức cùng kỹ năng ra quyết định trong cuộc phiêu lưu kể chuyện mới nhất của chúng tôi.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark hover:scale-105 transition-all">
              Xem các bản phát hành mới
            </button>
            <span className="text-2xl font-black text-[#0f172a] dark:text-white">720.000₫</span>
          </div>
        </div>
        <div 
          className="w-full md:w-1/2 aspect-video bg-cover bg-center rounded-2xl shadow-2xl" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVlWBSFIX0IrEzqwJ943PgY1RIuyEfH_lqGGhHu_bCJ6oyQfWra82mK0209oifaSxCoG-P4MjOZgqruav3Dgfh6b2hdXiKNBU3qlbBPhDb5jtabfcs-9n0JpUsLoEGwQAqDYZYTlxO0S-G-IX3lweRn9N8lcTiAGAQCJeplqO4P5Bp_Vy8ERgosVFD6BH2B3BxiQba_xnCKOmo9Mq1RD7t-BIPxggejVPaJNxCSRbx3jXlCu2kKV6MFZ-FeNnfyoZxU1rge7btfRJY")' }}
        ></div>
      </div>
    </section>
  );
};

export default NewArrival;
