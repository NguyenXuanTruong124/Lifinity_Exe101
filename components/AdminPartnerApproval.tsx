
import React from 'react';

const AdminPartnerApproval: React.FC = () => {
  const requests = [
    { id: 1, unit: 'Trường Tiểu học Kim Đồng', location: 'Quận 1, TP. Hồ Chí Minh', rep: 'Nguyễn Văn An', type: 'TRƯỜNG HỌC', date: '12/10/2023', file: 'hosodoitac_kimdong.pdf', initial: 'KH', typeColor: 'bg-blue-50 text-blue-600' },
    { id: 2, unit: 'G-Studio Vietnam', location: 'Quận 7, TP. Hồ Chí Minh', rep: 'Phạm Minh Tuấn', type: 'GAME DEV', date: '14/10/2023', file: 'gstudio_portfolio.pdf', initial: 'GS', typeColor: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-black text-[#111318] dark:text-white tracking-tight mb-2">Phê duyệt Đối tác & Trường học</h1>
        <p className="text-gray-500 dark:text-gray-400">Quản lý và thẩm định các đơn đăng ký gia nhập hệ thống giáo dục kỹ năng sống từ các cơ sở giáo dục và đơn vị sản xuất nội dung.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Đang chờ xử lý', val: '24', icon: 'pending_actions', trend: '+12%', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30' },
          { label: 'Phê duyệt tháng này', val: '156', icon: 'verified', trend: '+8%', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-950/30' },
          { label: 'Tỷ lệ từ chối', val: '5.2%', icon: 'cancel', trend: '-2%', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/30' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col gap-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">{stat.label}</span>
              <span className={`material-symbols-outlined ${stat.color} ${stat.bg} p-1.5 rounded-lg`}>{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold dark:text-white">{stat.val}</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-green-600 text-xs font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> {stat.trend}</span>
              <span className="text-gray-400 text-[10px]">so với tuần trước</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 dark:border-gray-800 px-6 pt-4 flex items-center justify-between">
          <div className="flex gap-8">
            <button className="pb-3 border-b-2 border-primary text-primary text-sm font-bold flex items-center gap-2">
              Tất cả đơn đăng ký <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px]">24</span>
            </button>
            <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">Trường học</button>
            <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">Nhà phát triển game</button>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <button className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300"><span className="material-symbols-outlined text-sm">filter_list</span> Bộ lọc</button>
            <button className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300"><span className="material-symbols-outlined text-sm">sort</span> Mới nhất</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-900/50 text-gray-400 uppercase text-[10px] font-bold tracking-widest border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-4">Tên đơn vị</th>
                <th className="px-6 py-4">Người đại diện</th>
                <th className="px-6 py-4">Loại đối tác</th>
                <th className="px-6 py-4">Ngày đăng ký</th>
                <th className="px-6 py-4">Hồ sơ</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">{req.initial}</div>
                      <div>
                        <p className="text-sm font-bold dark:text-white">{req.unit}</p>
                        <p className="text-xs text-gray-500">{req.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-400 font-medium">{req.rep}</td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${req.typeColor} dark:opacity-80`}>{req.type}</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-400">{req.date}</td>
                  <td className="px-6 py-5">
                    <a className="flex items-center gap-2 text-primary text-sm font-bold hover:underline" href="#"><span className="material-symbols-outlined text-lg">picture_as_pdf</span> {req.file}</a>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">Phê duyệt</button>
                      <button className="px-4 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-950/20 text-xs font-bold rounded-lg transition-colors">Từ chối</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <p className="text-xs text-gray-500">Hiển thị 1-10 trên 24 đơn đăng ký</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
            <button className="w-8 h-8 rounded bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600">2</button>
            <button className="w-8 h-8 rounded border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 hover:bg-gray-50"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPartnerApproval;
