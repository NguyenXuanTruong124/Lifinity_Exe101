
import React from 'react';
import { Language } from '../types';

interface AdminOrdersProps {
  language: Language;
}

const AdminOrders: React.FC<AdminOrdersProps> = ({ language }) => {
  const t = {
    title: language === 'vi' ? 'Quản lý Đơn hàng' : 'Order Management',
    cols: {
      id: language === 'vi' ? 'ORDER ID' : 'ORDER ID',
      customer: language === 'vi' ? 'CUSTOMER' : 'CUSTOMER',
      product: language === 'vi' ? 'PRODUCT' : 'PRODUCT',
      price: language === 'vi' ? 'PRICE' : 'PRICE',
      status: language === 'vi' ? 'STATUS' : 'STATUS'
    }
  };

  const orders = [
    { id: '#ORD-101', name: 'Nguyễn Minh Quân', product: 'Trùm Tài Chính', price: '499.000đ', status: 'Hoàn tất', color: 'text-green-600 bg-green-50' },
    { id: '#ORD-102', name: 'Lê Thảo My', product: 'Logic Lab', price: '350.000đ', status: 'Chờ thanh toán', color: 'text-orange-600 bg-orange-50' },
    { id: '#ORD-103', name: 'Phạm Văn Việt', product: 'Hành Trình Thấu Cảm', price: 'Free', status: 'Hoàn tất', color: 'text-green-600 bg-green-50' },
  ];

  return (
    <div className="animate-in fade-in duration-500 space-y-6">
      <h2 className="text-2xl md:text-3xl font-black dark:text-white uppercase italic tracking-tight">{t.title}</h2>
      
      {/* Container cho phép cuộn ngang trên điện thoại */}
      <div className="bg-white dark:bg-[#1a262e] rounded-2xl border border-slate-200 dark:border-gray-800 overflow-x-auto shadow-sm custom-scrollbar">
        <table className="w-full text-left min-w-[700px]">
          <thead className="bg-slate-50 dark:bg-gray-900/50 text-[11px] font-black uppercase text-slate-500 tracking-widest border-b border-slate-100 dark:border-gray-800">
            <tr>
              <th className="px-8 py-5">{t.cols.id}</th>
              <th className="px-8 py-5">{t.cols.customer}</th>
              <th className="px-8 py-5">{t.cols.product}</th>
              <th className="px-8 py-5">{t.cols.price}</th>
              <th className="px-8 py-5">{t.cols.status}</th>
              <th className="px-8 py-5 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
            {orders.map(o => (
              <tr key={o.id} className="text-sm hover:bg-slate-50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-8 py-6 font-mono font-bold dark:text-slate-300">{o.id}</td>
                <td className="px-8 py-6 font-bold text-slate-800 dark:text-slate-200">{o.name}</td>
                <td className="px-8 py-6 dark:text-slate-300">{o.product}</td>
                <td className="px-8 py-6 font-black text-primary">{o.price}</td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase whitespace-nowrap ${o.color}`}>{o.status}</span>
                </td>
                <td className="px-8 py-6 text-right">
                   <button className="text-slate-400 hover:text-primary transition-colors">
                     <span className="material-symbols-outlined">visibility</span>
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
