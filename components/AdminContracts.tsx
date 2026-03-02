
import React, { useState } from 'react';
import { Language } from '../types';
import InvoiceView from './InvoiceView';

interface AdminContractsProps {
  language: Language;
}

const AdminContracts: React.FC<AdminContractsProps> = ({ language }) => {
  const [selectedContract, setSelectedContract] = useState<any>(null);
  const isEn = language === 'en';
  
  const t = {
    title: isEn ? 'COPYRIGHT LEASE CONTRACTS' : 'HỢP ĐỒNG THUÊ BẢN QUYỀN',
    btnAdd: isEn ? 'Create Manual Contract' : 'Tạo hợp đồng tay',
    cols: {
      id: isEn ? 'CONTRACT ID' : 'MÃ HỢP ĐỒNG',
      date: isEn ? 'CREATED DATE' : 'NGÀY KHỞI TẠO',
      type: isEn ? 'TYPE' : 'LOẠI HÌNH',
      total: isEn ? 'TOTAL VALUE' : 'TỔNG GIÁ TRỊ',
      status: isEn ? 'STATUS' : 'TRẠNG THÁI',
      action: isEn ? 'ACTION' : 'HÀNH ĐỘNG'
    },
    status: {
      active: isEn ? 'Active' : 'Đang hiệu lực',
      expired: isEn ? 'Expired' : 'Đã hết hạn',
      pending: isEn ? 'Pending' : 'Chờ duyệt'
    }
  };

  const contracts = [
    { 
      id: 'LEASE-2024-882910', 
      date: '12/10/2023', 
      type: isEn ? 'Yearly' : 'Thuê năm', 
      total: '398.000đ', 
      status: t.status.active, 
      statusKey: 'active',
      partner: 'Trường Tiểu học Chu Văn An',
      representative: 'Nguyễn Văn A - Hiệu trưởng',
      address: 'Số 1 Thụy Khuê, Tây Hồ, Hà Nội',
      mst: '0101234567',
      items: [
        { name: 'Budget Master: City Life', price: '250.000đ', qty: 1, sub: '250.000đ' },
        { name: 'Logic Lab: Junior', price: '148.000đ', qty: 1, sub: '148.000đ' }
      ]
    },
    { 
      id: 'LEASE-2023-110293', 
      date: '05/09/2023', 
      type: isEn ? 'Semester' : 'Thuê học kỳ', 
      total: '250.000đ', 
      status: t.status.expired, 
      statusKey: 'expired',
      partner: 'Trường THCS Đoàn Thị Điểm',
      representative: 'Lê Thảo My - Kế toán trưởng',
      address: 'Lê Đức Thọ, Nam Từ Liêm, Hà Nội',
      mst: '0109988776',
      items: [
        { name: 'Finance Overlord', price: '250.000đ', qty: 1, sub: '250.000đ' }
      ]
    },
  ];

  if (selectedContract) {
    return <InvoiceView contract={selectedContract} language={language} onBack={() => setSelectedContract(null)} />;
  }

  return (
    <div className="animate-in fade-in duration-500 space-y-8 font-display">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black dark:text-white tracking-tight italic uppercase">{t.title}</h2>
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all">
          {t.btnAdd}
        </button>
      </div>

      <div className="bg-white dark:bg-[#1a262e] rounded-[2rem] border border-slate-100 dark:border-gray-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50 dark:border-gray-800 bg-slate-50/30 dark:bg-gray-900/20">
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.cols.id}</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.cols.date}</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.cols.type}</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.cols.total}</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.cols.status}</th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">{t.cols.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-gray-800">
              {contracts.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="px-8 py-6">
                    <button 
                      onClick={() => setSelectedContract(c)}
                      className="font-black text-primary text-sm tracking-tight hover:underline transition-all"
                    >
                      {c.id}
                    </button>
                  </td>
                  <td className="px-6 py-6 text-sm font-medium text-slate-600 dark:text-slate-400">{c.date}</td>
                  <td className="px-6 py-6 text-sm font-bold text-slate-800 dark:text-slate-200">{c.type}</td>
                  <td className="px-6 py-6 text-sm font-black text-slate-900 dark:text-white">{c.total}</td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase inline-block ${
                      c.statusKey === 'active' ? 'bg-green-100 text-green-700' : 
                      c.statusKey === 'pending' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button onClick={() => setSelectedContract(c)} className="text-primary text-sm font-black hover:underline flex items-center gap-1 justify-end ml-auto">
                      <span className="material-symbols-outlined text-lg">visibility</span>
                      {isEn ? 'View Invoice' : 'Xem hóa đơn'}
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

export default AdminContracts;
