
import React from 'react';
import { GAMES } from '../constants';

const ManagerDashboard: React.FC = () => {
  const stats = [
    { label: 'Doanh thu tháng', value: '45.200.000₫', icon: 'payments', color: 'bg-blue-500' },
    { label: 'Người dùng mới', value: '1.240', icon: 'group_add', color: 'bg-green-500' },
    { label: 'Trò chơi hoạt động', value: '24', icon: 'sports_esports', color: 'bg-purple-500' },
    { label: 'Đánh giá trung bình', value: '4.85', icon: 'star', color: 'bg-yellow-500' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-[#0f172a] dark:text-white">Bảng điều khiển Quản trị</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
          <span className="material-symbols-outlined">add</span> Thêm Game mới
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} text-white p-2 rounded-xl`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className="text-green-500 text-xs font-bold">+12%</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-black text-[#0f172a] dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <h3 className="font-bold text-lg dark:text-white">Danh sách Trò chơi</h3>
          <button className="text-primary text-sm font-bold">Xem báo cáo chi tiết</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Tên Game</th>
                <th className="px-6 py-4">Độ tuổi</th>
                <th className="px-6 py-4">Giá</th>
                <th className="px-6 py-4">Đánh giá</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {GAMES.map((game) => (
                <tr key={game.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${game.imageUrl})` }}></div>
                      <span className="font-bold text-[#0f172a] dark:text-white">{game.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{game.ageRange}</td>
                  <td className="px-6 py-4 text-sm font-bold">{typeof game.price === 'number' ? game.price.toLocaleString() + '₫' : 'Miễn phí'}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="material-symbols-outlined text-sm filled-icon">star</span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{game.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Hoạt động</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
