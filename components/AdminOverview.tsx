
import React from 'react';

const AdminOverview: React.FC = () => {
  const stats = [
    { label: 'Hệ thống', value: 'Ổn định', icon: 'check_circle', growth: '99.9% Up', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
    { label: 'Người dùng Online', value: '1,240', icon: 'sensors', growth: 'Live', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Yêu cầu/phút', value: '856', icon: 'speed', growth: 'Bình thường', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { label: 'Dung lượng DB', value: '12.4 GB', icon: 'database', growth: '45%', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
  ];

  const serverLogs = [
    { event: 'Database Backup', time: '10 phút trước', status: 'Hoàn tất', initial: 'DB' },
    { event: 'User Login Peak', time: '45 phút trước', status: 'Cảnh báo', initial: 'UP' },
    { event: 'API Deployment', time: '2 giờ trước', status: 'Hoàn tất', initial: 'AP' },
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-3xl font-black dark:text-white uppercase italic tracking-tight">System Administration</h2>
          <p className="text-slate-500 text-sm">Giám sát tài nguyên hạ tầng và trạng thái dịch vụ thời gian thực.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-[#1a262e] p-6 rounded-2xl border border-[#dbe2e6] dark:border-gray-700 shadow-sm transition-transform hover:scale-[1.02]">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 ${stat.bg} ${stat.color} rounded-lg`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.growth}</span>
            </div>
            <p className="text-[#617c89] text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1 dark:text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-[#1a262e] rounded-[2rem] border border-[#dbe2e6] dark:border-gray-700 p-8 shadow-sm">
          <h3 className="text-lg font-bold mb-6 dark:text-white">Tải trọng hệ thống (24h qua)</h3>
          <div className="flex items-end gap-2 h-[200px] px-2 mb-4">
            {[30, 45, 20, 60, 80, 95, 70, 50, 40, 30, 25, 35].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className={`w-full transition-all duration-500 rounded-t-lg ${h > 80 ? 'bg-red-500' : 'bg-primary/40 group-hover:bg-primary'}`} 
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-[10px] font-bold text-slate-400">{i*2}h</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a262e] rounded-[2rem] border border-[#dbe2e6] dark:border-gray-700 p-8 shadow-sm">
          <h3 className="text-lg font-bold mb-6 dark:text-white">Hoạt động máy chủ</h3>
          <div className="space-y-6">
            {serverLogs.map((log, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-slate-100 dark:bg-gray-800 flex items-center justify-center font-black text-slate-400">{log.initial}</div>
                <div className="flex-1">
                  <p className="text-sm font-bold dark:text-white">{log.event}</p>
                  <p className="text-xs text-slate-500">{log.time}</p>
                </div>
                <span className={`text-[10px] font-black px-2 py-1 rounded ${log.status === 'Cảnh báo' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>{log.status}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all">Xem tất cả log</button>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
