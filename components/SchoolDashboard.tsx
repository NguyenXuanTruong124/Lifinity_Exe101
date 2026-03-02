
import React, { useState, useMemo } from 'react';
import { Language, Game } from '../types';
import { GAMES } from '../constants';
import InvoiceView from './InvoiceView';

interface SchoolDashboardProps {
  section: string;
  language: Language;
}

type MemberRole = 'Giáo viên' | 'Học sinh' | 'Tổ trưởng bộ môn';

interface Member {
  id: string;
  name: string;
  role: MemberRole;
  email: string;
  class: string;
  status: 'Hoạt động' | 'Đang nghỉ';
  assignedGames: string[];
}

const SchoolDashboard: React.FC<SchoolDashboardProps> = ({ section, language }) => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'students'>('teachers');
  const [selectedContract, setSelectedContract] = useState<any>(null);
  
  const isEn = language === 'en';

  const [members, setMembers] = useState<Member[]>([
    { id: 'GV-88209', name: 'Nguyễn Thảo', role: 'Giáo viên', email: 'thao.nguyen@chuvanan.edu.vn', class: 'Kỹ năng sống', status: 'Hoạt động', assignedGames: ['1', '2', '3', '4'] },
    { id: 'GV-88210', name: 'Lê Văn C', role: 'Tổ trưởng bộ môn', email: 'c.le@chuvanan.edu.vn', class: 'Liên lớp', status: 'Hoạt động', assignedGames: ['1', '2', '3', '4', '5', '6'] },
    { id: 'GV-88215', name: 'Vũ Thị Hạnh', role: 'Giáo viên', email: 'hanh.vu@chuvanan.edu.vn', class: '8C3', status: 'Hoạt động', assignedGames: ['4', '5'] },
    { id: 'HS-2024-0882', name: 'Nguyễn Minh Quân', role: 'Học sinh', email: 'quan.nm@chuvanan.edu.vn', class: '6A1', status: 'Hoạt động', assignedGames: [] },
    { id: 'HS-2024-0885', name: 'Lê Thảo My', role: 'Học sinh', email: 'my.lt@chuvanan.edu.vn', class: '6A1', status: 'Hoạt động', assignedGames: [] },
    { id: 'HS-2024-0889', name: 'Phạm Văn Việt', role: 'Học sinh', email: 'viet.pv@chuvanan.edu.vn', class: '7B2', status: 'Hoạt động', assignedGames: [] },
  ]);

  const leasedGameIds = ['1', '2', '3', '4', '5', '6'];

  const t = {
    membersTitle: isEn ? 'Unit Personnel' : 'Nhân sự Đơn vị',
    import: isEn ? 'Import' : 'Import',
    addNew: isEn ? 'Add New' : 'Thêm mới',
    teacher: isEn ? 'Teachers' : 'Giáo viên',
    student: isEn ? 'Students' : 'Học sinh',
    headers: {
      name: isEn ? 'Full Name' : 'Họ tên',
      id: isEn ? 'ID' : 'ID',
      class: isEn ? 'Class' : 'Lớp',
      status: isEn ? 'Status' : 'Trạng thái',
      action: isEn ? 'Actions' : 'Hành động'
    },
    permissions: {
      initTitle: isEn ? 'INITIALIZE NEW ACCOUNT' : 'KHỞI TẠO TÀI KHOẢN MỚI',
      initSub: isEn ? 'Create learning accounts for Instructors or Students in the unit.' : 'Tạo tài khoản học tập cho Giảng viên hoặc Học sinh trong đơn vị.',
      createT: isEn ? 'Create Teacher Account' : 'Tạo tài khoản Giáo viên',
      createTSub: isEn ? 'Grant classroom management and curriculum rights.' : 'Cấp quyền quản lý lớp học và giáo trình cho cán bộ giáo dục.',
      createS: isEn ? 'Create Student Account' : 'Tạo tài khoản Học sinh',
      createSSub: isEn ? 'Create student accounts to participate in learning.' : 'Tạo tài khoản cho học sinh tham gia học tập và làm nhiệm vụ.',
      setupTitle: isEn ? 'SET UP TEACHER PRIVILEGES' : 'THIẾT LẬP ĐẶC QUYỀN GIẢNG VIÊN',
      setupSub: isEn ? 'Configure admin rights and authorized games for each instructor.' : 'Cấu hình quyền quản trị và danh sách game được phép mở lớp cho từng giảng viên.',
      adminRights: isEn ? 'SYSTEM ADMIN RIGHTS' : 'QUYỀN QUẢN TRỊ HỆ THỐNG',
      initAccount: isEn ? 'ACCOUNT INITIALIZATION' : 'KHỞI TẠO TÀI KHOẢN',
      initAccountSub: isEn ? 'Allow teachers to create HS/GV accounts' : 'Cho phép giáo viên tự tạo tài khoản HS/GV',
      revoke: isEn ? 'Revoke all permissions' : 'Thu hồi toàn bộ quyền',
      gameList: isEn ? 'AUTHORIZED GAMES LIST' : 'DANH SÁCH GAME ĐƯỢC ỦY QUYỀN',
      selectAll: isEn ? 'SELECT ALL' : 'CHỌN TẤT CẢ',
      saveConfig: isEn ? 'Save teaching configuration' : 'Lưu cấu hình giảng dạy',
    },
    support: {
      title: isEn ? 'Unit Support Center' : 'Trung tâm hỗ trợ Đơn vị',
      sub: isEn ? 'We are always ready to solve technical issues for your school.' : 'Chúng tôi luôn sẵn sàng giải quyết các vấn đề kỹ thuật cho Quý nhà trường.',
      hotline: isEn ? 'Priority Hotline' : 'Hotline ưu tiên',
      email: isEn ? 'Support Email' : 'Email hỗ trợ',
      newReq: isEn ? 'Submit New Support Request' : 'Gửi yêu cầu hỗ trợ mới',
      reqTitle: isEn ? 'REQUEST TITLE' : 'TIÊU ĐỀ YÊU CẦU',
      titlePh: isEn ? 'Enter title...' : 'Nhập tiêu đề...',
      reqDetail: isEn ? 'DETAILED CONTENT' : 'NỘI DUNG CHI TIẾT',
      detailPh: isEn ? 'Describe error or unit needs...' : 'Mô tả lỗi hoặc nhu cầu của đơn vị...',
      btnSend: isEn ? 'Submit Request' : 'Gửi yêu cầu'
    },
    profile: {
      schoolName: isEn ? 'Chu Van An Primary School' : 'Trường Tiểu học Chu Văn An',
      partnerBadge: isEn ? 'Gold Partner since 2022' : 'Đối tác Vàng của EduGame từ 2022',
      legalInfo: isEn ? 'Institutional Information' : 'Thông tin Pháp nhân',
      mst: isEn ? 'TAX ID' : 'MÃ SỐ THUẾ',
      rep: isEn ? 'REPRESENTATIVE' : 'NGƯỜI ĐẠI DIỆN',
      address: isEn ? 'ADDRESS' : 'ĐỊA CHỈ',
      phone: isEn ? 'UNIT PHONE' : 'ĐIỆN THOẠI ĐƠN VỊ',
      editBtn: isEn ? 'Edit institutional information' : 'Chỉnh sửa thông tin pháp nhân',
      displaySet: isEn ? 'Display Settings' : 'Thiết lập hiển thị',
      showLeaderboard: isEn ? 'Show Leaderboard' : 'Hiển thị Bảng xếp hạng',
      showLeaderboardSub: isEn ? 'Allow students to see school-wide rankings' : 'Cho phép học sinh xem thứ hạng toàn trường',
      parentNotify: isEn ? 'Email Notifications to Parents' : 'Thông báo email cho Phụ huynh',
      parentNotifySub: isEn ? 'Automatically send weekly reports to parents' : 'Tự động gửi báo cáo tuần cho phụ huynh',
      pvpMode: isEn ? 'Challenge Mode' : 'Chế độ Thách đấu',
      pvpModeSub: isEn ? 'Allow classes to challenge each other' : 'Cho phép các lớp thách đấu kỹ năng với nhau'
    },
    library: {
      title: isEn ? 'Curriculum Library' : 'Thư viện giáo trình',
      permanent: isEn ? 'Permanent' : 'Vĩnh viễn',
      accCount: isEn ? 'Account Count' : 'Số lượng tài khoản',
      btnDeploy: isEn ? 'Deploy now' : 'Triển khai ngay',
      licenseBadge: isEn ? 'LIFINITY LICENSE' : 'BẢN QUYỀN LIFINITY',
      providedBy: isEn ? 'Issued by' : 'Cấp bởi',
      accSuffix: isEn ? 'ACCOUNTS' : 'TÀI KHOẢN',
      description: isEn ? 'List of digital skill curricula your school has licensed for implementation.' : 'Danh sách các giáo trình kỹ năng số mà trường đã thuê bản quyền triển khai.',
      suitability: isEn ? 'Ages' : 'Phù hợp',
      emptyTitle: isEn ? 'Empty Library' : 'Thư viện trống',
      emptySub: isEn ? 'Your school has not leased any curriculum yet.' : 'Quý trường chưa thực hiện thuê giáo trình nào.',
      btnExplore: isEn ? 'Explore Catalog' : 'Khám phá Danh mục'
    },
    contracts: {
      title: isEn ? 'Lease Contracts' : 'Hợp đồng thuê bản quyền',
      id: isEn ? 'CONTRACT ID' : 'MÃ HỢP ĐỒNG',
      date: isEn ? 'CREATED DATE' : 'NGÀY KHỞI TẠO',
      type: isEn ? 'TYPE' : 'LOẠI HÌNH',
      total: isEn ? 'TOTAL VALUE' : 'TỔNG GIÁ TRỊ',
      status: isEn ? 'STATUS' : 'TRẠNG THÁI',
      action: isEn ? 'ACTIONS' : 'HÀNH ĐỘNG',
      viewInvoice: isEn ? 'View Invoice' : 'Xem hóa đơn'
    }
  };

  const contractsData = [
    { 
      id: 'LEASE-2024-882910', 
      date: '12/10/2023', 
      type: isEn ? 'Yearly' : 'Thuê năm', 
      total: '398.000đ', 
      status: isEn ? 'Active' : 'Đang hiệu lực', 
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
  ];

  const sortedMembers = useMemo(() => {
    return [...members].filter(m => {
      if (activeTab === 'teachers') return m.role.includes('Giáo viên') || m.role.includes('Tổ trưởng');
      return m.role === 'Học sinh';
    });
  }, [members, activeTab]);

  const renderMembers = () => (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 font-display">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-black dark:text-white uppercase tracking-tight italic">{t.membersTitle}</h2>
        <div className="flex gap-3">
          <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-lg">upload</span> {t.import}
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">person_add</span> {t.addNew}
          </button>
        </div>
      </div>

      <div className="flex border-b border-slate-200 dark:border-slate-700">
        <button onClick={() => setActiveTab('teachers')} className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${activeTab === 'teachers' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
          {t.teacher} ({members.filter(m => m.role.includes('Giáo viên') || m.role.includes('Tổ trưởng')).length})
        </button>
        <button onClick={() => setActiveTab('students')} className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${activeTab === 'students' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
          {t.student} ({members.filter(m => m.role === 'Học sinh').length})
        </button>
      </div>

      <div className="bg-white dark:bg-[#1a2632] rounded-[2rem] border border-slate-100 dark:border-gray-800 overflow-x-auto shadow-sm custom-scrollbar">
        <table className="w-full text-left min-w-[800px]">
          <thead className="bg-slate-50/50 dark:bg-gray-900/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <tr>
              <th className="px-8 py-4">{t.headers.name}</th>
              <th className="px-6 py-4">{t.headers.id}</th>
              <th className="px-6 py-4">{t.headers.class}</th>
              <th className="px-6 py-4">{t.headers.status}</th>
              <th className="px-8 py-4 text-right">{t.headers.action}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
            {sortedMembers.map(m => (
              <tr key={m.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/20">
                <td className="px-8 py-5"><div className="flex flex-col"><span className="font-bold dark:text-white">{m.name}</span><span className="text-[10px] text-slate-400 font-medium">{m.email}</span></div></td>
                <td className="px-6 py-5 font-mono text-xs">{m.id}</td>
                <td className="px-6 py-5 text-sm font-bold text-slate-700 dark:text-slate-300">{m.class}</td>
                <td className="px-6 py-5"><div className="flex items-center gap-1.5"><div className={`size-2 rounded-full ${m.status === 'Hoạt động' ? 'bg-green-500' : 'bg-slate-400'}`}></div><span className="text-[10px] font-black uppercase">{isEn && m.status === 'Hoạt động' ? 'Active' : m.status}</span></div></td>
                <td className="px-8 py-5 text-right">
                  <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPermissions = () => (
    <div className="space-y-12 animate-in fade-in duration-500 font-display pb-20">
       <header>
          <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight italic leading-none">{t.permissions.initTitle}</h2>
          <p className="text-slate-500 text-sm font-medium mt-2">{t.permissions.initSub}</p>
       </header>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1a2632] p-10 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center gap-6 group hover:border-primary/30 transition-all">
             <div className="size-20 rounded-[1.75rem] bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">person_add</span>
             </div>
             <div className="space-y-1">
                <h3 className="text-xl font-black dark:text-white">{t.permissions.createT}</h3>
                <p className="text-xs text-slate-500 max-w-[300px] leading-relaxed">{t.permissions.createTSub}</p>
             </div>
             <div className="w-full space-y-4">
                <input className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl h-14 px-6 text-sm font-bold" placeholder={isEn ? 'Teacher email...' : 'Email giáo viên...'} />
                <button className="w-full bg-primary text-white h-14 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">{isEn ? 'Create & Invite' : 'Tạo & Gửi lời mời'}</button>
             </div>
          </div>

          <div className="bg-white dark:bg-[#1a2632] p-10 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center gap-6 group hover:border-emerald-500/30 transition-all">
             <div className="size-20 rounded-[1.75rem] bg-emerald-500/5 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">school</span>
             </div>
             <div className="space-y-1">
                <h3 className="text-xl font-black dark:text-white">{t.permissions.createS}</h3>
                <p className="text-xs text-slate-500 max-w-[300px] leading-relaxed">{t.permissions.createSSub}</p>
             </div>
             <div className="w-full space-y-4">
                <div className="flex gap-3">
                   <input className="flex-1 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl h-14 px-6 text-sm font-bold" placeholder={isEn ? 'Student ID/Name...' : 'Mã học sinh/Tên...'} />
                   <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-2xl h-14 px-4 text-xs font-black uppercase outline-none">
                      <option>{isEn ? 'Class 6A1' : 'Lớp 6A1'}</option>
                      <option>{isEn ? 'Class 7B2' : 'Lớp 7B2'}</option>
                   </select>
                </div>
                <button className="w-full bg-emerald-500 text-white h-14 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all">{isEn ? 'Confirm Creation' : 'Xác nhận tạo tài khoản'}</button>
             </div>
          </div>
       </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-8 animate-in fade-in duration-500 font-display pb-20">
       <div className="max-w-2xl">
          <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight italic leading-none">{t.support.title}</h2>
          <p className="text-sm text-slate-500 font-medium mt-3">{t.support.sub}</p>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
             <div className="bg-white dark:bg-[#1a2632] p-8 rounded-[2rem] border border-slate-100 dark:border-gray-800 shadow-sm group">
                <div className="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined">call</span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t.support.hotline}</p>
                <p className="text-2xl font-black dark:text-white">1900 xxxx (Ext: 2)</p>
             </div>
             <div className="bg-white dark:bg-[#1a2632] p-8 rounded-[2rem] border border-slate-100 dark:border-gray-800 shadow-sm group">
                <div className="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined">mail</span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t.support.email}</p>
                <p className="text-lg font-black dark:text-white">support@lifinity.edu.vn</p>
             </div>
          </div>
          <div className="lg:col-span-2 bg-white dark:bg-[#1a2632] p-10 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm">
             <h3 className="text-xl font-black dark:text-white mb-8">{t.support.newReq}</h3>
             <div className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.support.reqTitle}</label>
                   <input className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl h-14 px-6 text-sm font-bold focus:ring-2 focus:ring-primary transition-all" placeholder={t.support.titlePh} />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{t.support.reqDetail}</label>
                   <textarea rows={6} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl p-6 text-sm font-medium focus:ring-2 focus:ring-primary transition-all" placeholder={t.support.detailPh} />
                </div>
                <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all">{t.support.btnSend}</button>
             </div>
          </div>
       </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8 animate-in fade-in duration-500 font-display pb-20">
       <div className="bg-white dark:bg-[#1a2632] p-10 md:p-14 rounded-[3rem] border border-slate-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="size-32 md:size-40 rounded-[2.5rem] bg-primary text-white flex items-center justify-center text-5xl font-black shadow-2xl relative shrink-0">
             <span className="material-symbols-outlined text-7xl">school</span>
          </div>
          <div className="space-y-3 relative z-10 text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight dark:text-white">{t.profile.schoolName}</h2>
             <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="material-symbols-outlined filled-icon text-yellow-400 text-2xl">verified</span>
                <span className="text-sm font-black text-slate-500 uppercase tracking-widest">{t.profile.partnerBadge}</span>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white dark:bg-[#1a2632] p-10 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm space-y-10">
             <div className="flex justify-between items-center">
                <h3 className="text-xl font-black dark:text-white flex items-center gap-3"><span className="material-symbols-outlined text-primary text-3xl">info</span> {t.profile.legalInfo}</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: t.profile.mst, val: '0101234567', icon: 'tag' },
                  { label: t.profile.rep, val: isEn ? 'Mr. Nguyen Van A - Principal' : 'Nguyễn Văn A - Hiệu trưởng', icon: 'badge' },
                  { label: t.profile.address, val: isEn ? 'No. 1, Thuy Khue, Tay Ho, Hanoi' : 'Số 1, Thụy Khuê, Tây Hồ, Hà Nội', icon: 'location_on' },
                  { label: t.profile.phone, val: '024-38xxxxxx', icon: 'call' }
                ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="size-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 shrink-0"><span className="material-symbols-outlined text-lg">{item.icon}</span></div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</span>
                         <span className="text-sm font-bold dark:text-white leading-snug">{item.val}</span>
                      </div>
                   </div>
                ))}
             </div>
             <button className="text-primary font-black text-sm hover:underline mt-4 inline-block">{t.profile.editBtn}</button>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-[#1a2632] p-10 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm space-y-10">
             <h3 className="text-xl font-black dark:text-white flex items-center gap-3"><span className="material-symbols-outlined text-primary text-3xl">settings</span> {t.profile.displaySet}</h3>
             <div className="space-y-6">
                {[
                  { label: t.profile.showLeaderboard, sub: t.profile.showLeaderboardSub, icon: 'leaderboard' },
                  { label: t.profile.parentNotify, sub: t.profile.parentNotifySub, icon: 'notifications_active' },
                  { label: t.profile.pvpMode, sub: t.profile.pvpModeSub, icon: 'swords' }
                ].map((set, i) => (
                   <div key={i} className="flex items-center justify-between gap-4 p-4 hover:bg-slate-50 dark:hover:bg-gray-900/50 rounded-[1.5rem] transition-colors group">
                      <div className="flex items-start gap-4">
                         <div className="size-10 rounded-xl bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors shrink-0">
                            <span className="material-symbols-outlined text-xl">{set.icon}</span>
                         </div>
                         <div>
                            <p className="text-sm font-black dark:text-white">{set.label}</p>
                            <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">{set.sub}</p>
                         </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" defaultChecked={i < 2} className="sr-only peer" />
                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );

  const renderContent = () => {
    switch (section) {
      case 'school_members': return renderMembers();
      case 'school_permissions': return renderPermissions();
      case 'school_library': return (
        <div className="space-y-8 animate-in fade-in duration-500 font-display">
          <header className="flex flex-col gap-1">
             <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight italic leading-none">{t.library.title}</h2>
             <p className="text-slate-500 text-sm font-medium">{t.library.description}</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GAMES.filter(game => leasedGameIds.includes(game.id)).map(game => (
              <div key={game.id} className="bg-white dark:bg-[#1a2632] rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-gray-800 group hover:shadow-2xl hover:border-primary/20 transition-all flex flex-col">
                <div className="h-48 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${game.imageUrl})` }}>
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-primary/30">{t.library.licenseBadge}</span>
                   </div>
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-1">
                    <h4 className="font-black text-xl dark:text-white leading-tight group-hover:text-primary transition-colors">{game.title}</h4>
                    <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest">{t.library.suitability}: {game.ageRange}</p>
                  </div>
                  
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] border-y border-slate-50 dark:border-gray-800 py-4">
                    <div className="flex flex-col gap-1">
                       <span className="text-primary">{t.library.permanent}</span>
                       <span className="text-[8px] text-slate-400 leading-none uppercase">{t.library.providedBy}: LIFINITY EDU</span>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                       <span className="text-slate-400">{t.library.accCount}</span>
                       <span className="text-slate-800 dark:text-white">250 {t.library.accSuffix}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 mt-auto">
                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
                       {t.library.btnDeploy}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {GAMES.filter(game => leasedGameIds.includes(game.id)).length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center gap-4 bg-slate-50/50 dark:bg-gray-900/30 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-gray-800">
               <span className="material-symbols-outlined text-6xl text-slate-200">inventory_2</span>
               <div>
                  <p className="text-lg font-black text-slate-400 uppercase tracking-widest">{t.library.emptyTitle}</p>
                  <p className="text-sm text-slate-500">{t.library.emptySub}</p>
               </div>
               <button className="mt-4 bg-primary text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20">{t.library.btnExplore}</button>
            </div>
          )}
        </div>
      );
      case 'school_contracts': return (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 font-display">
           {selectedContract ? <InvoiceView contract={selectedContract} language={language} onBack={() => setSelectedContract(null)} /> : (
              <>
                 <h2 className="text-2xl font-black dark:text-white uppercase tracking-tight italic">{t.contracts.title}</h2>
                 <div className="bg-white dark:bg-[#1a262e] rounded-[2rem] border border-slate-100 dark:border-gray-800 overflow-x-auto shadow-sm custom-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                       <thead>
                          <tr className="border-b border-slate-50 dark:border-gray-800 bg-slate-50/30 dark:bg-gray-900/20">
                             <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.contracts.id}</th>
                             <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.contracts.date}</th>
                             <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.contracts.type}</th>
                             <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.contracts.total}</th>
                             <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">{t.contracts.status}</th>
                             <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">{t.contracts.action}</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
                          {contractsData.map((c) => (
                             <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-gray-800/30 transition-colors">
                                <td className="px-8 py-6"><button onClick={() => setSelectedContract(c)} className="font-black text-primary text-sm tracking-tight hover:underline">{c.id}</button></td>
                                <td className="px-6 py-6 text-sm font-medium text-slate-600 dark:text-slate-400">{c.date}</td>
                                <td className="px-6 py-6 text-sm font-bold text-slate-800 dark:text-slate-200">{c.type}</td>
                                <td className="px-6 py-6 text-sm font-black text-slate-900 dark:text-white">{c.total}</td>
                                <td className="px-6 py-6">
                                  <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase inline-block whitespace-nowrap ${
                                    c.statusKey === 'active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                  }`}>
                                    {c.status}
                                  </span>
                                </td>
                                <td className="px-8 py-6 text-right"><button onClick={() => setSelectedContract(c)} className="text-primary text-sm font-black hover:underline whitespace-nowrap">{t.contracts.viewInvoice}</button></td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </>
           )}
        </div>
      );
      case 'school_support': return renderSupport();
      case 'school_profile': return renderProfile();
      default: return renderMembers();
    }
  };

  return (
    <div className="w-full h-full pb-20">
      {renderContent()}
    </div>
  );
};

export default SchoolDashboard;
