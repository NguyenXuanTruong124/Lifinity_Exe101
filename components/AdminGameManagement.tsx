
import React, { useState } from 'react';
import { Language } from '../types';

interface AdminGameManagementProps {
  language: Language;
}

const AdminGameManagement: React.FC<AdminGameManagementProps> = ({ language }) => {
  const isEn = language === 'en';
  const isVi = language === 'vi';

  const t = {
    title: isVi ? 'Quản lý Danh mục Game' : 'Game Catalog Management',
    sub: isVi ? 'Quản lý và cập nhật danh sách các trò chơi giáo dục kỹ năng sống.' : 'Manage and update the list of life skills educational games.',
    btnAdd: isVi ? 'Thêm Game mới' : 'Add New Game',
    searchLabel: isVi ? 'Tìm kiếm chi tiết' : 'Search Details',
    searchPh: isVi ? 'Nhập tên game, mã game...' : 'Enter game name, code...',
    catLabel: isVi ? 'Tất cả thể loại' : 'All Categories',
    statusLabel: isVi ? 'Trạng thái' : 'Status',
    cols: {
      name: isVi ? 'TÊN GAME' : 'GAME NAME',
      cat: isVi ? 'THỂ LOẠI' : 'CATEGORY',
      age: isVi ? 'ĐỘ TUỔI' : 'AGE',
      price: isVi ? 'GIÁ (VNĐ)' : 'PRICE (VND)',
      status: isVi ? 'TRẠNG THÁI' : 'STATUS',
      action: isVi ? 'THAO TÁC' : 'ACTIONS'
    }
  };

  const [games] = useState([
    { id: 'GM-2024-001', name: isVi ? 'Kỹ năng giao tiếp cơ bản' : 'Basic Comm Skills', category: isVi ? 'Kỹ năng sống' : 'Life Skills', age: '6-10', price: '250.000', status: isVi ? 'Hoạt động' : 'Active', active: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUMYoCRk4QyTaTGSXoRtpCxoxF7LG2cg1dFhhKw9f3bsRrMy87b5ou_1l1FDjEE1XMUgTbJEawmHHXyRQ9heXVR3J4cJFLoFxlY_CrgckZ619fKUwvl0L9i00YG246qTv5NwmHEoe2H9UbbCsatT8mpaNMFK2P1n3b-tD-MHbduyS7YvoZEZ5pxcBaZij36Bbn0boV4t4XgQAqCg54WOXYllade-fmC75Ho53VQP40HLOwAHDStOiG3daTKxK2X7v_48X6kD37M9kJ' },
    { id: 'GM-2024-042', name: isVi ? 'Quản lý tài chính nhỏ' : 'Junior Finance', category: isVi ? 'Tư duy' : 'Cognitive', age: '11-15', price: '300.000', status: isVi ? 'Hoạt động' : 'Active', active: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_urUZM0-sOmNUUNBnbX3_ubNqIKCzmdMHtzoMF_NGnxBWCff-n2zkw9bbf8Z5a_7gRNO8UMLdfs2eCNCIGHeIaNDYYHhBu24ogybI9hCZaUFqwlEy3Vft2lKc4ldXh0cbKvV-zJOZXdez_0ndXXKf3c7JkR8TAwOa6mux7nxuIIaaYVwwNrYQ6sygJ_bxMvCt3lsVQ0kA13Xoc-Mu1jrq6VkyoCVkrlO41i1k9a71dK66pOhVSbENLiNDgPPpQDNJ_jHuCwIQ-NKo' },
    { id: 'GM-2024-008', name: isVi ? 'Làm việc nhóm hiệu quả' : 'Teamwork Skills', category: isVi ? 'Kỹ năng sống' : 'Life Skills', age: '8-12', price: '150.000', status: isVi ? 'Ngừng hoạt động' : 'Inactive', active: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6nUTXa53D1L-bONaIpK50D49YNnx9D5j4Ix8ypKo-pf5K04SCRoSFj1qnBgXwAbogOOSLa4Y9hNuk5Ylttb8uAKTCbI4JokU0_CRn8Qs4WaQifpv-O5-AeHj5BsV-vUrQqcKni07Pk30yBh1RZiknCReUUNF0ZiNr2ZtTqlQ3E69w-ONxQ9P8dcLX-sP68H_6D20VUvb3LQU8LaaMuSMuU4NeTpgy_sRQNBiizPQj18wsPXroeqfV_rzybe-YwqGuyjNOanug9J-w' },
  ]);

  return (
    <div className="animate-in fade-in duration-500 space-y-6 md:space-y-8 font-display pb-20">
      {/* Header with Add Button - Matching Screenshot */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">{t.title}</h1>
          <p className="text-slate-500 text-sm md:text-base font-medium">{t.sub}</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <span className="material-symbols-outlined text-xl">add_circle</span>
          {t.btnAdd}
        </button>
      </div>

      {/* Advanced Filter Section - Matching Screenshot */}
      <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-6 space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">{t.searchLabel}</label>
            <div className="relative flex items-center bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 h-14 px-4">
              <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold dark:text-white" placeholder={t.searchPh} />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-2">
            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl h-14 px-4 text-sm font-black text-slate-700 dark:text-white outline-none">
              <option>{t.catLabel}</option>
            </select>
          </div>
          <div className="lg:col-span-2 space-y-2">
            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl h-14 px-4 text-sm font-black text-slate-700 dark:text-white outline-none">
              <option>{t.statusLabel}</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <button className="w-full h-14 flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 hover:text-primary transition-all">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Section - Matching Screenshot Columns & Styling */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50/30 dark:bg-gray-900/20 border-b border-slate-50 dark:border-slate-800">
                <th className="px-8 py-6 text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.15em]">{t.cols.name}</th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.15em] text-center">{t.cols.cat}</th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.15em] text-center">{t.cols.age}</th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.15em] text-center">{t.cols.price}</th>
                <th className="px-6 py-6 text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.15em] text-center">{t.cols.status}</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.15em] text-right">{t.cols.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {games.map((game) => (
                <tr key={game.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-5">
                      <div className="size-16 rounded-2xl bg-[#eef5e1] dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 border border-slate-100 dark:border-slate-700 shadow-sm">
                        <img className="w-full h-full object-cover" src={game.img} alt={game.name} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-base font-black text-slate-800 dark:text-white leading-tight mb-1">{game.name}</span>
                        <span className="text-[10px] font-black text-slate-400 tracking-wider uppercase">ID: {game.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[10px] font-black text-primary uppercase tracking-widest whitespace-nowrap">
                      {game.category}
                    </span>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{game.age}</span>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="text-base font-black text-slate-900 dark:text-white">{game.price}</span>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center justify-center gap-2">
                       <div className={`size-2 rounded-full ${game.active ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                       <span className={`text-[13px] font-bold ${game.active ? 'text-green-600' : 'text-slate-400'}`}>{game.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8 text-right">
                    <div className="flex items-center justify-end gap-3">
                       <button className="text-slate-400 hover:text-primary transition-all"><span className="material-symbols-outlined text-xl">edit_note</span></button>
                       <button className="text-slate-400 hover:text-red-500 transition-all"><span className="material-symbols-outlined text-xl">delete</span></button>
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={game.active} className="sr-only peer" />
                          <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                       </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination - Matching Screenshot */}
        <div className="px-8 py-6 border-t border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-400 italic">Hiển thị 1-3 trong số 48 games</p>
          <div className="flex items-center gap-1.5">
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-black">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 font-bold">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGameManagement;
