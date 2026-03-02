
import React, { useState } from 'react';

const ParentGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Con nên dành bao nhiêu thời gian mỗi ngày để chơi game giáo dục?", a: "Chúng tôi khuyên bạn nên bắt đầu với 30-45 phút mỗi ngày, chia làm 2 đợt. Điều này giúp trẻ tiếp thu kiến thức tốt mà không bị mệt mỏi mắt." },
    { q: "Làm sao để tôi biết con thực sự tiến bộ qua các trò chơi?", a: "Hệ thống báo cáo trong Góc Phụ Huynh sẽ cung cấp biểu đồ chi tiết về các kỹ năng con đã áp dụng thành công trong game." },
    { q: "Nền tảng có tính năng kiểm soát thời gian sử dụng không?", a: "Có, bạn có thể thiết lập giới hạn thời gian chơi trực tiếp trong phần cài đặt của tài khoản phụ huynh." }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-[#111318] dark:text-white">
              Đồng hành cùng con rèn luyện kỹ năng sống
            </h1>
            <p className="text-lg text-[#616f89] dark:text-gray-400 leading-relaxed">
              Khám phá cách trò chơi giáo dục giúp con bạn phát triển tư duy, lòng trắc ẩn và kỹ năng giải quyết vấn đề trong thế giới số một cách an toàn và hiệu quả.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-base hover:shadow-lg hover:scale-105 transition-all">
                Khám phá ngay
              </button>
              <button className="bg-primary/10 text-primary px-8 py-3 rounded-xl font-bold text-base hover:bg-primary/20 transition-colors">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700" 
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBl7xJ3GLzDjH6WXDktmFL9rE7UHf8HUjtocyIfz_A7YnFxUrvsF5V-QMc-Uqh4tbs_Q8WwVWox4Oo0s9xoAAQ7yGdFYvhV0s3qojkV0g-rd8iW1ecHMQLM7cR0MkUZZgxi7DgPzLFwFC2bD28qHYjJCfA_KezQYotI1eYpu8t84sCpcZW3RfGh37LuyAptOMxYXY7FtazkK-34KDR1z35Z_R7M3QhTzChf0fpY4ynyOJH7G_goHsFidPSsvmtwLal-hLPfJCGxLX7U")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-[#f0f2f4] dark:border-gray-700">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Nội dung được</p>
                <p className="text-sm font-bold dark:text-white">Chuyên gia kiểm chứng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Life Skills */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Tại sao trẻ cần rèn luyện kỹ năng sống?</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Tự tin giao tiếp', icon: 'chat', desc: 'Giúp con mạnh dạn bày tỏ ý kiến, lắng nghe và kết nối hiệu quả với mọi người xung quanh.' },
            { title: 'Giải quyết vấn đề', icon: 'lightbulb', desc: 'Phát triển tư duy logic, khả năng phân tích tình huống và ứng biến linh hoạt trước thử thách.' },
            { title: 'Quản lý tài chính', icon: 'payments', desc: 'Làm quen với khái niệm giá trị đồng tiền, học cách lập kế hoạch chi tiêu và tiết kiệm hợp lý.' }
          ].map((skill, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-[#dbdfe6] dark:border-gray-700 hover:border-primary transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{skill.title}</h3>
              <p className="text-[#616f89] dark:text-gray-400 leading-normal">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guide by Age */}
      <section className="py-12 bg-white dark:bg-gray-900 rounded-[2rem] px-6 md:px-12 my-12 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 pt-8 dark:text-white">Hướng dẫn chọn game theo độ tuổi</h2>
          <p className="text-[#616f89] dark:text-gray-400">Chúng tôi phân loại nội dung phù hợp với từng giai đoạn phát triển của trẻ</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {/* Age 6-10 */}
          <div className="bg-background-light dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all">
            <div className="h-32 bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary">child_care</span>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">Cấp Tiểu Học</span>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Lứa tuổi 6 - 10</h3>
              <ul className="space-y-2 mb-6 text-sm text-[#616f89] dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Nhận diện cảm xúc</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Kỹ năng tự phục vụ</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> An toàn khi ở nhà</li>
              </ul>
              <button className="w-full py-2 bg-white dark:bg-gray-700 border border-primary/20 rounded-lg text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">Xem các game phù hợp</button>
            </div>
          </div>
          {/* Age 11-15 */}
          <div className="bg-background-light dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col border-2 border-primary ring-4 ring-primary/10 hover:shadow-lg transition-all">
            <div className="h-32 bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-white">school</span>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">Cấp THCS</span>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Lứa tuổi 11 - 15</h3>
              <ul className="space-y-2 mb-6 text-sm text-[#616f89] dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Kỹ năng làm việc nhóm</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Quản lý thời gian</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Ứng xử trên mạng xã hội</li>
              </ul>
              <button className="w-full py-2 bg-primary text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all">Xem các game phù hợp</button>
            </div>
          </div>
          {/* Age 16-18 */}
          <div className="bg-background-light dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all">
            <div className="h-32 bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary">psychology</span>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">Cấp THPT</span>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Lứa tuổi 16 - 18</h3>
              <ul className="space-y-2 mb-6 text-sm text-[#616f89] dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Định hướng nghề nghiệp</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Quản lý tài chính cá nhân</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Tư duy phản biện</li>
              </ul>
              <button className="w-full py-2 bg-white dark:bg-gray-700 border border-primary/20 rounded-lg text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">Xem các game phù hợp</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Cách đồng hành cùng con</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex gap-6 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-700 hover:shadow-md transition-all">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">record_voice_over</span>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2 dark:text-white">Thảo luận sau mỗi màn chơi</h4>
              <p className="text-[#616f89] dark:text-gray-400">Thay vì chỉ xem điểm số, hãy hỏi con: "Con đã học được gì từ tình huống này?" hoặc "Tại sao con lại chọn giải pháp đó?".</p>
            </div>
          </div>
          <div className="flex gap-6 items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-[#f0f2f4] dark:border-gray-700 hover:shadow-md transition-all">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl text-purple-600 flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">track_changes</span>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2 dark:text-white">Thiết lập mục tiêu tuần</h4>
              <p className="text-[#616f89] dark:text-gray-400">Cùng con chọn 1 kỹ năng cụ thể để tập trung rèn luyện trong tuần qua các trò chơi tương ứng trên nền tảng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Câu hỏi thường gặp (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 border border-[#dbdfe6] dark:border-gray-700 rounded-xl overflow-hidden">
              <div 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-bold text-base dark:text-white">{faq.q}</span>
                <span className={`material-symbols-outlined text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
              </div>
              {openFaq === i && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 text-[#616f89] dark:text-gray-400 text-sm animate-in slide-in-from-top-2 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mt-12 p-12 bg-primary rounded-[2.5rem] relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Sẵn sàng theo dõi hành trình của con?</h2>
            <p className="text-white/80 text-lg">Truy cập ngay bảng điều khiển dành riêng cho phụ huynh để nhận báo cáo chi tiết về sự phát triển của con.</p>
          </div>
          <button className="bg-white text-primary px-10 py-4 rounded-2xl font-black text-lg hover:bg-opacity-90 transition-all flex items-center gap-3 shrink-0">
            <span className="material-symbols-outlined">dashboard</span>
            Góc Phụ Huynh
          </button>
        </div>
        <div className="absolute -top-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 size-64 bg-black/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default ParentGuide;
