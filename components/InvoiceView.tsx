
import React from 'react';
import { Language } from '../types';

interface InvoiceViewProps {
  contract: any;
  language: Language;
  onBack: () => void;
}

const InvoiceView: React.FC<InvoiceViewProps> = ({ contract, language, onBack }) => {
  const isVi = language === 'vi';

  const t = {
    header: isVi ? 'HÓA ĐƠN GIÁ TRỊ GIA TĂNG' : 'VAT INVOICE',
    subHeader: isVi ? '(DỰ THẢO HỢP ĐỒNG THUÊ)' : '(DRAFT LEASE CONTRACT)',
    date: isVi ? 'Ngày ... tháng ... năm ...' : 'Date ... Month ... Year ...',
    seller: {
      title: isVi ? 'Đơn vị bán hàng (Issued):' : 'Issued by:',
      name: 'CÔNG TY TNHH GIÁO DỤC CÔNG NGHỆ LIFINITY',
      taxId: '0315764898',
      address: 'Số 1, Thụy Khuê, Tây Hồ, Hà Nội, Việt Nam',
      phone: '024-38xxxxxx',
      bank: '19034567890 tại Ngân hàng Techcombank - CN Hà Nội'
    },
    buyer: {
      title: isVi ? 'Họ tên người mua hàng (Customer\'s name):' : 'Customer\'s name:',
      unit: isVi ? 'Tên đơn vị (Company\'s name):' : 'Company\'s name:',
      taxId: isVi ? 'Mã số thuế (VAT code):' : 'VAT code:',
      address: isVi ? 'Địa chỉ (Address):' : 'Address:',
      method: isVi ? 'Hình thức thanh toán (Payment method):' : 'Payment method:',
      bank: isVi ? 'Ngân hàng (Bank):' : 'Bank:'
    },
    table: {
      no: isVi ? 'STT' : 'No.',
      desc: isVi ? 'Tên hàng hóa, dịch vụ' : 'Description',
      unit: isVi ? 'Đơn vị tính' : 'Unit',
      qty: isVi ? 'Số lượng' : 'Qty',
      price: isVi ? 'Đơn giá' : 'Unit Price',
      amount: isVi ? 'Thành tiền' : 'Amount'
    },
    footer: {
      subtotal: isVi ? 'Cộng tiền hàng (Total amount):' : 'Total amount:',
      vat: isVi ? 'Thuế suất GTGT (VAT rate): 8%' : 'VAT rate: 8%',
      vatAmt: isVi ? 'Tiền thuế GTGT (VAT amount):' : 'VAT amount:',
      grandTotal: isVi ? 'Tổng cộng tiền thanh toán (Total payment):' : 'Total payment:',
      words: isVi ? 'Số tiền viết bằng chữ:' : 'Amount in words:',
      buyerSig: isVi ? 'Người mua hàng (Customer)' : 'Customer',
      sellerSig: isVi ? 'Người bán hàng (Seller)' : 'Seller',
      sigNote: isVi ? '(Ký, ghi rõ họ tên)' : '(Signature & full name)'
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 p-2 md:p-8 min-h-screen animate-in fade-in duration-500 font-display flex flex-col items-center">
      {/* Action Bar */}
      <div className="w-full max-w-[850px] flex justify-between items-center mb-6 print:hidden gap-2">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 md:gap-2 text-slate-500 hover:text-primary font-bold transition-colors text-sm"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span className="whitespace-nowrap">{isVi ? 'Quay lại' : 'Back'}</span>
        </button>
        <div className="flex gap-2 md:gap-3">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs md:text-sm font-bold shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">print</span>
            <span className="hidden sm:inline">{isVi ? 'In hóa đơn' : 'Print'}</span>
          </button>
          <button className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-2 bg-primary text-white rounded-lg text-xs md:text-sm font-bold shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">download</span>
            <span className="whitespace-nowrap">{isVi ? 'Tải PDF' : 'Download PDF'}</span>
          </button>
        </div>
      </div>

      {/* Optimized Responsive Container */}
      <div className="w-full flex justify-center pb-20 overflow-hidden px-2">
        {/* Scaling Wrapper for Mobile: Shrinks the 850px document to fit screen width */}
        <div className="w-full max-w-[850px] origin-top transform-gpu scale-[0.45] min-[400px]:scale-[0.5] sm:scale-75 md:scale-90 lg:scale-100 flex justify-center transition-transform">
          
          {/* Invoice Document (A4 Style - Fixed Width for Layout Integrity) */}
          <div className="w-[850px] bg-white text-slate-900 shadow-2xl p-16 border-[12px] border-double border-blue-100 min-h-[1100px] relative overflow-hidden flex flex-col shrink-0">
            
            {/* Document Border Accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>

            {/* Header Section */}
            <div className="flex justify-between items-start mb-10">
              <div className="flex items-center gap-3">
                <div className="size-16 bg-red-700 text-white flex items-center justify-center rounded shadow-md">
                    <span className="material-symbols-outlined text-4xl">sports_esports</span>
                </div>
                <div>
                  <h1 className="text-2xl font-black text-red-700 tracking-tight leading-none mb-1 uppercase">LIFINITY</h1>
                  <p className="text-[10px] font-bold text-slate-400">Educational Games</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <h2 className="text-xl font-black text-red-600 leading-tight uppercase tracking-tight">{t.header}</h2>
                <p className="text-[10px] font-black text-red-600 italic mb-2 uppercase">{t.subHeader}</p>
                <p className="text-xs italic text-slate-500">{t.date}</p>
              </div>
            </div>

            {/* Seller & Buyer Info */}
            <div className="space-y-6 text-xs mb-8">
              <div className="grid grid-cols-1 gap-1 border-b border-dotted border-slate-300 pb-4">
                <div className="flex gap-2">
                    <span className="font-bold whitespace-nowrap">{t.seller.title}</span>
                    <span className="font-black uppercase">{t.seller.name}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold whitespace-nowrap">{isVi ? 'Mã số thuế (VAT code):' : 'VAT code:'}</span>
                    <span className="font-bold tracking-widest">{t.seller.taxId}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold whitespace-nowrap">{isVi ? 'Địa chỉ (Address):' : 'Address:'}</span>
                    <span>{t.seller.address}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold whitespace-nowrap">{isVi ? 'Số tài khoản (A/C No.):' : 'A/C No.:'}</span>
                    <span>{t.seller.bank}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                <div className="flex border-b border-dotted border-slate-300 pb-1">
                    <span className="font-bold whitespace-nowrap mr-2">{t.buyer.title}</span>
                    <span className="font-bold">{contract.representative || '................................................'}</span>
                </div>
                <div className="flex border-b border-dotted border-slate-300 pb-1">
                    <span className="font-bold whitespace-nowrap mr-2">{t.buyer.unit}</span>
                    <span className="font-black uppercase">{contract.partner || '................................................'}</span>
                </div>
                <div className="flex border-b border-dotted border-slate-300 pb-1">
                    <span className="font-bold whitespace-nowrap mr-2">{t.buyer.taxId}</span>
                    <span className="font-bold tracking-widest">{contract.mst || '........................'}</span>
                </div>
                <div className="flex border-b border-dotted border-slate-300 pb-1">
                    <span className="font-bold whitespace-nowrap mr-2">{t.buyer.address}</span>
                    <span>{contract.address || '................................................................................'}</span>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-1 border-b border-dotted border-slate-300 pb-1">
                        <span className="font-bold whitespace-nowrap mr-2">{t.buyer.method}</span>
                        <span>CK</span>
                    </div>
                    <div className="flex flex-[2] border-b border-dotted border-slate-300 pb-1">
                        <span className="font-bold whitespace-nowrap mr-2">{t.buyer.bank}</span>
                        <span>{isVi ? 'Ngân hàng của đơn vị' : 'Client Bank'}</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Invoice Table */}
            <div className="flex-1">
              <table className="w-full border-collapse border border-slate-900 text-[11px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-900 px-2 py-2 w-10 text-center">{t.table.no}</th>
                    <th className="border border-slate-900 px-3 py-2 text-center">{t.table.desc}</th>
                    <th className="border border-slate-900 px-2 py-2 w-20 text-center">{t.table.unit}</th>
                    <th className="border border-slate-900 px-2 py-2 w-16 text-center">{t.table.qty}</th>
                    <th className="border border-slate-900 px-3 py-2 w-28 text-center">{t.table.price}</th>
                    <th className="border border-slate-900 px-3 py-2 w-32 text-center">{t.table.amount}</th>
                  </tr>
                </thead>
                <tbody>
                  {contract.items.map((item: any, idx: number) => (
                    <tr key={idx} className="h-10">
                      <td className="border border-slate-900 px-2 py-1 text-center">{idx + 1}</td>
                      <td className="border border-slate-900 px-3 py-1 font-bold">{item.name}</td>
                      <td className="border border-slate-900 px-2 py-1 text-center">{isVi ? 'bản quyền' : 'license'}</td>
                      <td className="border border-slate-900 px-2 py-1 text-center font-bold">{item.qty}</td>
                      <td className="border border-slate-900 px-3 py-1 text-right">{item.price}</td>
                      <td className="border border-slate-900 px-3 py-1 text-right font-black">{item.sub}</td>
                    </tr>
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <tr key={i} className="h-8">
                      <td className="border border-slate-900"></td>
                      <td className="border border-slate-900"></td>
                      <td className="border border-slate-900"></td>
                      <td className="border border-slate-900"></td>
                      <td className="border border-slate-900"></td>
                      <td className="border border-slate-900"></td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="border border-slate-900 px-3 py-2 text-right font-bold uppercase">{t.footer.subtotal}</td>
                    <td className="border border-slate-900 px-3 py-2 text-right font-black">{contract.total}</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="border border-slate-900 px-3 py-2 text-left italic">{t.footer.vat}</td>
                    <td className="border border-slate-900 px-3 py-2 text-right font-bold uppercase">{t.footer.vatAmt}</td>
                    <td className="border border-slate-900 px-3 py-2 text-right font-bold">
                      {Math.floor(parseInt(contract.total.replace(/\D/g, '')) * 0.08).toLocaleString()}đ
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td colSpan={5} className="border border-slate-900 px-3 py-3 text-right font-black uppercase text-lg">{t.footer.grandTotal}</td>
                    <td className="border border-slate-900 px-3 py-3 text-right font-black text-lg text-red-700">
                        {Math.floor(parseInt(contract.total.replace(/\D/g, '')) * 1.08).toLocaleString()}đ
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Final Notes & Signatures */}
            <div className="mt-8 text-xs">
              <p className="mb-8 italic">
                <span className="font-bold">{t.footer.words}</span> 
                {isVi ? ' Hai triệu, ba trăm tám mươi nghìn đồng chẵn.' : ' Two million, three hundred and eighty thousand dong only.'}
              </p>
              
              <div className="grid grid-cols-2 text-center">
                <div className="flex flex-col gap-1">
                  <p className="font-black uppercase">{t.footer.buyerSig}</p>
                  <p className="italic text-[10px] text-slate-500 mb-20">{t.footer.sigNote}</p>
                  <div className="h-10 border-b border-slate-300 mx-10 opacity-30"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-black uppercase">{t.footer.sellerSig}</p>
                  <p className="italic text-[10px] text-slate-500 mb-4">{t.footer.sigNote}</p>
                  <div className="relative h-28 flex flex-col items-center justify-center">
                     <div className="absolute top-0 opacity-40 rotate-12 flex items-center justify-center">
                        <div className="size-24 rounded-full border-4 border-red-600 flex items-center justify-center p-1">
                            <div className="size-20 rounded-full border-2 border-red-600 flex flex-col items-center justify-center text-[6px] font-bold text-red-600 leading-none text-center">
                                <p className="mb-1 uppercase">LIFINITY STORE</p>
                                <p>DA PHET</p>
                                <p>2024</p>
                            </div>
                        </div>
                     </div>
                     <p className="mt-auto font-bold uppercase text-red-700">CÔNG TY LIFINITY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-10 text-center border-t border-slate-100">
               <p className="text-[8px] text-slate-400 italic">Đơn vị cung cấp giải pháp hợp đồng điện tử: Lifinity Store - Nền tảng Giáo dục kỹ năng sống qua trò chơi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
