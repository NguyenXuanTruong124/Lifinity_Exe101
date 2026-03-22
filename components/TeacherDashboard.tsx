
import React, { useState, useMemo, useEffect } from 'react';
import { Language, Game } from '../types';
import { GAMES } from '../constants';
import * as XLSX from 'xlsx';

interface TeacherDashboardProps {
  section: string;
  language: Language;
}

interface RoomRule {
  id: string;
  textVi: string;
  textEn: string;
}

interface TeacherRoom {
  id: string;
  gameId: string;
  gameTitle: string;
  key: string;
  studentsCount: number;
  timeLimit: number;
  questionsCount: number;
  status: 'Open' | 'Closed';
  studentsProgress: { name: string; progress: number; score: number }[];
  questions?: {q: string, a: string}[];
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ section, language }) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [studentLimit, setStudentLimit] = useState(30);
  const [timeLimit, setTimeLimit] = useState(45);
  const [questionCount, setQuestionCount] = useState(20);
  const [configMode, setConfigMode] = useState<'quick' | 'advanced'>('quick');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isReadingFile, setIsReadingFile] = useState(false);
  const [extractedCount, setExtractedCount] = useState<number | null>(null);
  const [previewQuestions, setPreviewQuestions] = useState<{q: string, a: string}[]>([]);
  
  const [rules, setRules] = useState<RoomRule[]>([
    { 
      id: '1', 
      textVi: 'Không được nhận quà từ người lạ', 
      textEn: 'Do not accept gifts from strangers' 
    },
    { 
      id: '2', 
      textVi: 'Không được đi theo người lạ', 
      textEn: 'Do not follow strangers' 
    },
  ]);
  const [newRuleText, setNewRuleText] = useState('');
  
  const [presentingRoom, setPresentingRoom] = useState<TeacherRoom | null>(null);

  const allowedGames = useMemo(() => {
    return GAMES.filter(g => ['1', '2', '3', '4'].includes(g.id));
  }, []);

  const [activeRooms, setActiveRooms] = useState<TeacherRoom[]>(() => {
    const saved = sessionStorage.getItem('lifinity_active_rooms');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing rooms from session", e);
        // If parsing fails, return an empty array or default to avoid issues
        return []; 
      }
    }
    // Default value if nothing is in sessionStorage
    return [
      {
        id: 'ROOM-882',
        gameId: '1',
        gameTitle: 'Trùm Tài Chính Đại Chiến',
        key: 'LIFESKILL-X9',
        studentsCount: 2,
        timeLimit: 45,
        questionsCount: 15,
        status: 'Open',
        studentsProgress: [
          { name: 'Nguyễn Minh Quân', progress: 85, score: 1200 },
          { name: 'Trần Thị B', progress: 60, score: 850 },
        ]
      }
    ];
  });

  const isVi = language === 'vi';



  // Save to session storage
  useEffect(() => {
    sessionStorage.setItem('lifinity_active_rooms', JSON.stringify(activeRooms));
  }, [activeRooms]);

  // Process file upload
  useEffect(() => {
    if (uploadedFile) {
      setIsReadingFile(true);
      setExtractedCount(null);
      setPreviewQuestions([]);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          
          // Row to JSON conversion
          const rows = XLSX.utils.sheet_to_json(firstSheet);
          
          // Mapping based on user's column headers (Câu Hỏi, Câu Trả Lời)
          const extracted = rows.map((row: any) => ({
            q: row['Câu Hỏi'] || row['CÂU HỎI'] || row['Câu hỏi'] || row['Question'] || row['question'] || '',
            a: row['Câu Trả Lời'] || row['CÂU TRẢ LỜI'] || row['Câu trả lời'] || row['Answer'] || row['answer'] || ''
          })).filter(item => item.q && item.a); // Only keep rows with both Q and A
          
          if (extracted.length > 0) {
            setExtractedCount(extracted.length);
            setQuestionCount(extracted.length);
            setPreviewQuestions(extracted.slice(0, 50)); // Limit preview to 50 for performance
          } else {
            // If no match found, fallback or message
            setExtractedCount(0);
          }
        } catch (error) {
          console.error("Error parsing Excel file:", error);
          setExtractedCount(0);
        } finally {
          setIsReadingFile(false);
        }
      };
      
      reader.onerror = () => {
        setIsReadingFile(false);
        console.error("FileReader error");
      };
      
      reader.readAsArrayBuffer(uploadedFile);
    } else {
      setExtractedCount(null);
      setIsReadingFile(false);
      setPreviewQuestions([]);
    }
  }, [uploadedFile, isVi]);

  const t = {
    libraryTitle: isVi ? 'Thư viện trò chơi' : 'Game Library',
    librarySub: isVi ? `Bạn có quyền triển khai ${allowedGames.length} trò chơi.` : `You are authorized to deploy ${allowedGames.length} games.`,
    configTitle: isVi ? 'Cấu hình Phòng học' : 'Room Setup',
    configSub: isVi ? 'Thiết lập cho giáo trình' : 'Settings for curriculum',
    roomNowTitle: isVi ? 'Phòng học thời gian thực' : 'Live Sessions',
    roomNowSub: isVi ? 'Mời học sinh tham gia bằng Join Key dưới đây.' : 'Invite students using the Join Key below.',
    analyticsTitle: isVi ? 'Báo cáo học tập tổng quát' : 'Learning Analytics',
    analyticsSub: isVi ? 'Tổng hợp dữ liệu kết quả từ các phiên học.' : 'Summary of results from learning sessions.',
    profileTitle: isVi ? 'Hồ sơ Giảng viên' : 'Teacher Profile',
    btnCreate: isVi ? 'BẮT ĐẦU MỞ LỚP' : 'START CLASS',
    btnEnd: isVi ? 'Kết thúc sớm' : 'End Session',
    btnExport: isVi ? 'Xuất file Excel' : 'Export Excel',
    btnCopy: isVi ? 'Sao chép mã' : 'Copy Key',
    roomKey: isVi ? 'MÃ PHÒNG' : 'ROOM KEY',
    scanToJoin: isVi ? 'QUÉT MÃ ĐỂ THAM GIA NGAY' : 'SCAN CODE TO JOIN NOW',
    studentCount: isVi ? 'Sĩ số' : 'Students',
    timeLimit: isVi ? 'Thời gian' : 'Time Limit',
    questions: isVi ? 'Câu hỏi' : 'Questions',
    rules: isVi ? 'Ý nghĩa lớp học' : 'Class Meaning',
    addRule: isVi ? 'Thêm ý nghĩa' : 'Add Meaning',
    active: isVi ? 'Đang hoạt động' : 'Active',
    closed: isVi ? 'Kết thúc' : 'Closed',
    rulesCount: isVi ? 'Ý NGHĨA' : 'MEANING',
    stats: {
        rank: isVi ? 'Xếp loại' : 'Rank',
        score: isVi ? 'Điểm số' : 'Score',
        progress: isVi ? 'Tiến độ' : 'Progress',
        name: isVi ? 'Tên học sinh' : 'Student Name',
    },
    quickPlay: isVi ? 'Mở chơi ngay' : 'Quick Play',
    advancedConfig: isVi ? 'Cấu hình nâng cao' : 'Advanced Configuration',
    uploadTitle: isVi ? 'Tải lên bảng câu hỏi' : 'Upload Question Sheet',
    uploadSub: isVi ? 'Hỗ trợ file .xlsx, .csv' : 'Supports .xlsx, .csv',
    fileSelected: isVi ? 'Đã chọn file' : 'File selected',
  };

  const addRule = () => {
    if (!newRuleText.trim()) return;
    setRules([...rules, { 
      id: Date.now().toString(), 
      textVi: newRuleText, 
      textEn: newRuleText 
    }]);
    setNewRuleText('');
  };

  const createRoom = (gameOverride?: Game) => {
    const game = gameOverride || selectedGame;
    if (!game) return;
    const newRoom: TeacherRoom = {
      id: `ROOM-${Math.floor(Math.random() * 900) + 100}`,
      gameId: game.id,
      gameTitle: game.title,
      key: `EDU-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      studentsCount: 0,
      timeLimit,
      questionsCount: questionCount,
      status: 'Open',
      studentsProgress: [],
      questions: configMode === 'advanced' ? previewQuestions : undefined
    };
    setActiveRooms([newRoom, ...activeRooms]);
    setSelectedGame(null);
    setIsConfiguring(false);
    setUploadedFile(null);
    setPreviewQuestions([]);
    setConfigMode('quick');
  };

  const renderLibrary = () => {
    if (isConfiguring && selectedGame) {
      return (
        <div className="animate-in slide-in-from-right-8 duration-500 space-y-8 pb-20 font-display">
          <div className="flex items-center gap-4">
            <button onClick={() => { setIsConfiguring(false); setUploadedFile(null); }} className="size-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h2 className="text-2xl font-black dark:text-white uppercase tracking-tight italic">{t.configTitle}</h2>
              <p className="text-sm text-slate-500">{t.configSub}: <span className="font-bold text-primary">{selectedGame.title}</span></p>
            </div>
          </div>

          <div className="flex gap-4 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit">
            <button 
              onClick={() => setConfigMode('quick')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${configMode === 'quick' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400'}`}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">bolt</span> {t.quickPlay}
              </span>
            </button>
            <button 
              onClick={() => setConfigMode('advanced')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${configMode === 'advanced' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400'}`}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">settings_suggest</span> {t.advancedConfig}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-6">
                <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">settings_input_component</span> {isVi ? 'Thông số phiên học' : 'Session Parameters'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{isVi ? 'Sĩ số tối đa' : 'Max Students'}</label>
                    <input type="number" value={studentLimit} onChange={e => setStudentLimit(Number(e.target.value))} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl h-12 px-4 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{isVi ? 'Thời gian (Phút)' : 'Time (Mins)'}</label>
                    <input type="number" value={timeLimit} onChange={e => setTimeLimit(Number(e.target.value))} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl h-12 px-4 font-bold" />
                  </div>

                </div>

                {configMode === 'advanced' && (
                  <div className="mt-8 space-y-4">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.uploadTitle}</label>
                    <div className="relative group">
                      <input 
                        type="file" 
                        onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                        accept=".xlsx,.csv"
                      />
                      <div className={`w-full border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center gap-3 transition-all ${uploadedFile ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 group-hover:border-primary group-hover:bg-primary/5'}`}>
                        {isReadingFile ? (
                          <div className="flex flex-col items-center gap-3">
                             <div className="size-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                             <p className="text-xs font-bold text-primary animate-pulse">{isVi ? 'Đang đọc dữ liệu file...' : 'Reading file data...'}</p>
                          </div>
                        ) : uploadedFile ? (
                          <>
                            <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                              <span className="material-symbols-outlined text-3xl">task</span>
                            </div>
                            <div className="text-center">
                              <p className="font-bold text-emerald-700 text-sm">{uploadedFile.name}</p>
                              {extractedCount !== null && (
                                <p className="text-[12px] text-emerald-600 font-black mt-1">
                                  <span className="material-symbols-outlined text-sm align-middle mr-1">check_circle</span>
                                  {isVi ? `Đã tìm thấy ${extractedCount} câu hỏi/trả lời` : `Found ${extractedCount} questions/answers`}
                                </p>
                              )}
                              <p className="text-[10px] text-emerald-600/70 font-black uppercase mt-2">{t.fileSelected}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-400 flex items-center justify-center group-hover:text-primary">
                              <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                            </div>
                            <div className="text-center">
                              <p className="font-bold dark:text-white text-sm">{isVi ? 'Kéo thả hoặc nhấn để chọn file' : 'Drag and drop or click to select file'}</p>
                              <p className="text-[10px] text-slate-400 font-black uppercase mt-1">{t.uploadSub}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl">{isVi ? 'Triển khai ngay?' : 'Ready to Launch?'}</h4>
                    <p className="text-sm opacity-80">{isVi ? 'Mã phòng sẽ hiển thị sau khi nhấn bắt đầu.' : 'Room Key will be generated after starting.'}</p>
                  </div>
                </div>
                <button 
                  onClick={createRoom} 
                  disabled={configMode === 'advanced' && !uploadedFile}
                  className={`w-full bg-white text-primary font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {t.btnCreate}
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm space-y-6 flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold dark:text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">quiz</span> {isVi ? 'Nội dung câu hỏi' : 'Question Content'}
                </h3>
              </div>
              
              <div className="flex-1 space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                {configMode === 'advanced' ? (
                  previewQuestions.length > 0 ? (
                    previewQuestions.map((item, idx) => (
                      <div key={idx} className="bg-slate-50/50 dark:bg-slate-900/40 p-6 rounded-[1.75rem] border border-transparent hover:border-primary/10 transition-all space-y-2">
                        <div className="flex items-start gap-4">
                          <div className="size-6 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary text-[10px] font-black flex items-center justify-center shrink-0">
                            {idx + 1}
                          </div>
                          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.q}</p>
                        </div>
                        <p className="text-xs text-slate-400 ml-10 font-medium italic">{isVi ? 'Đáp án: ' : 'Answer: '}{item.a}</p>
                      </div>
                    ))
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-10 gap-4">
                      <div className="size-20 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                         <span className="material-symbols-outlined text-4xl text-slate-200 animate-bounce">upload_file</span>
                      </div>
                      <div>
                        <p className="text-sm font-black dark:text-white uppercase tracking-widest">{isVi ? 'Đang chờ tải file...' : 'Waiting for file...'}</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">{isVi ? 'Vui lòng chọn file câu hỏi ở bảng bên trái' : 'Please select a question file on the left panel'}</p>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border border-blue-100 dark:border-blue-800/30">
                       <p className="text-xs font-bold text-blue-600 dark:text-blue-400 leading-relaxed text-center">
                         {isVi ? 'Chế độ Mở ngay sử dụng bộ câu hỏi mặc định của hệ thống cho trò chơi này.' : 'Quick Start mode uses the system default question set for this game.'}
                       </p>
                    </div>
                    {/* Visual placeholder for questions in quick play */}
                    {[1, 2, 3].map(i => (
                      <div key={i} className="opacity-40 bg-slate-50 dark:bg-slate-900/40 p-6 rounded-[1.75rem] border border-transparent space-y-2 blur-[1px]">
                        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="h-3 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8 animate-in fade-in duration-500 font-display">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-black dark:text-white uppercase tracking-tight italic">{t.libraryTitle}</h2>
          <p className="text-sm text-slate-500 italic tracking-wide">{t.librarySub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allowedGames.map(game => (
            <div key={game.id} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all relative">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${game.imageUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 space-y-4 relative">
                <h4 className="font-black text-xl dark:text-white leading-tight">{game.title}</h4>
                <div className="flex items-center gap-4 py-2 border-y border-slate-50 dark:border-slate-700/50">
                   <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{isVi ? 'Độ tuổi' : 'Age'}</span><span className="text-sm font-black dark:text-white">{game.ageRange}</span></div>
                   <div className="flex flex-col"><span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{isVi ? 'Đánh giá' : 'Rating'}</span><span className="text-sm font-black text-yellow-500 flex items-center gap-1">★ {game.rating}</span></div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => { setSelectedGame(game); setIsConfiguring(true); setConfigMode('quick'); }}
                    className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 rounded-2xl hover:bg-primary hover:text-white transition-all uppercase text-[10px] tracking-widest flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">bolt</span> {isVi ? 'Mở ngay' : 'Quick Start'}
                  </button>
                  <button 
                    onClick={() => { setSelectedGame(game); setIsConfiguring(true); setConfigMode('advanced'); }}
                    className="flex-1 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-3 rounded-2xl hover:bg-primary hover:text-white transition-all uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span className="material-symbols-outlined text-sm">settings</span> {isVi ? 'Cấu hình' : 'Configure'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderRooms = () => (
    <div className="space-y-8 animate-in fade-in duration-500 font-display">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-black dark:text-white uppercase tracking-tight italic">{t.roomNowTitle}</h2>
          <p className="text-sm text-slate-500">{t.roomNowSub}</p>
        </div>
        <button onClick={() => { setIsConfiguring(false); setSelectedGame(null); }} className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add</span> {isVi ? 'Tạo thêm phòng' : 'New Room'}
        </button>
      </div>

      <div className="space-y-8">
        {activeRooms.map(room => (
          <div key={room.id} className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 dark:border-slate-700 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-slate-50/50 dark:bg-slate-900/30">
              <div className="flex items-center gap-6 flex-1">
                <div className="size-24 rounded-[2rem] bg-primary flex flex-col items-center justify-center text-white shadow-xl relative group">
                  <span className="text-[10px] font-black uppercase opacity-60 leading-none mb-1 tracking-[0.2em]">{isVi ? 'MÃ' : 'KEY'}</span>
                  <span className="text-3xl font-black tracking-tighter">{room.key.split('-')[1]}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black dark:text-white">{room.gameTitle}</h3>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${room.status === 'Open' ? 'bg-green-100 text-green-700 animate-pulse' : 'bg-red-100 text-red-700'}`}>
                      {room.status === 'Open' ? t.active : t.closed}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest"><span className="material-symbols-outlined text-sm text-primary">vpn_key</span> {room.key}</div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest"><span className="material-symbols-outlined text-sm text-primary">timer</span> {room.timeLimit} {isVi ? 'Phút' : 'Mins'}</div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest"><span className="material-symbols-outlined text-sm text-primary">quiz</span> {room.questionsCount} {t.questions}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 w-full lg:w-auto">
                 <button 
                  onClick={() => setPresentingRoom(room)}
                  className="flex-1 lg:flex-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
                 >
                    <span className="material-symbols-outlined">qr_code_2</span> {isVi ? 'Trình chiếu mã' : 'Present Key'}
                 </button>
                 <button className="flex-1 lg:flex-none bg-red-50 dark:bg-red-950/20 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all">{t.btnEnd}</button>
              </div>
            </div>

            <div className="p-10">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">{isVi ? 'Học sinh đang trực tuyến' : 'Online Students'} ({room.studentsProgress.length})</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {room.studentsProgress.map((student, i) => (
                  <div key={i} className="flex items-center gap-5 bg-slate-50 dark:bg-slate-900/50 p-5 rounded-[2rem] border border-transparent hover:border-primary/20 transition-all">
                    <div className="size-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center font-black text-primary text-lg shadow-sm border border-slate-100 dark:border-slate-700 shrink-0">{student.name.charAt(0)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-black dark:text-slate-200 truncate">{student.name}</span>
                        <span className="text-xs font-black text-primary">{student.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${student.progress}%` }}></div>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 mt-2">{t.stats.score}: <span className="text-slate-800 dark:text-white">{student.score}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final QR Modal - Ultra Clean and Compact with No Backdrop Blur */}
      {presentingRoom && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Invisible click-away overlay */}
           <div onClick={() => setPresentingRoom(null)} className="absolute inset-0 bg-transparent"></div>
           
           <div className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-[340px] w-full text-center shadow-[0_24px_80px_-12px_rgba(0,0,0,0.3)] animate-in zoom-in duration-300 relative overflow-hidden flex flex-col items-center border border-slate-100 pointer-events-auto">
              {/* Close Button */}
              <button 
                onClick={() => setPresentingRoom(null)}
                className="absolute top-4 right-4 size-8 text-slate-300 hover:text-slate-900 transition-colors"
              >
                <span className="material-symbols-outlined text-2xl font-black">close</span>
              </button>

              {/* Header */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight tracking-tight">{presentingRoom.gameTitle}</h3>
                <p className="text-slate-400 font-bold uppercase tracking-[0.1em] text-[8px] md:text-[9px] italic">{t.scanToJoin}</p>
              </div>

              {/* QR Container */}
              <div className="w-full aspect-square max-w-[200px] bg-slate-50 p-4 rounded-[1.75rem] border border-slate-100 mb-6 flex items-center justify-center shadow-inner group">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://lifinity.edu/join?key=${presentingRoom.key}&bgcolor=ffffff&color=2563eb`}
                  alt="Room QR Code" 
                  className="w-full h-full object-contain shadow-md rounded-xl border-[5px] border-white transition-transform group-hover:scale-[1.03]"
                />
              </div>

              {/* Key Section */}
              <div className="w-full space-y-4">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">{t.roomKey}</span>
                  <div className="w-full bg-blue-50/50 py-4 rounded-2xl border border-blue-100/50 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl font-black text-primary tracking-tight uppercase leading-none">
                      {presentingRoom.key}
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider opacity-60">
                   Lifinity.edu/join
                </p>
              </div>
           </div>
        </div>
      )}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 font-display">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-black dark:text-white uppercase tracking-tight italic">{t.analyticsTitle}</h2>
          <p className="text-sm text-slate-500">{t.analyticsSub}</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
          <span className="material-symbols-outlined">table_view</span> {t.btnExport}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
           <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-10 py-5">{t.stats.name}</th>
                  <th className="px-6 py-5">{isVi ? 'Chủ đề' : 'Topic'}</th>
                  <th className="px-6 py-5">{isVi ? 'Kết quả' : 'Result'}</th>
                  <th className="px-6 py-5 text-right">{t.stats.rank}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {[
                  { name: 'Nguyễn Minh Quân', game: 'Tài chính', score: 1200, rank: 'Giỏi', color: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Trần Thị B', game: 'Giao tiếp', score: 850, rank: 'Khá', color: 'bg-blue-100 text-blue-700' },
                  { name: 'Phạm Minh Quân', game: 'Logic', score: 1500, rank: 'Xuất sắc', color: 'bg-purple-100 text-purple-700' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/20">
                    <td className="px-10 py-5"><span className="font-bold dark:text-white">{row.name}</span></td>
                    <td className="px-6 py-5 text-xs font-bold text-slate-500">{row.game}</td>
                    <td className="px-6 py-5 text-sm font-black text-primary">{row.score}đ</td>
                    <td className="px-6 py-5 text-right">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${row.color}`}>{row.rank}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 py-10 font-display text-center md:text-left">
      <div className="bg-white dark:bg-slate-800 rounded-[3.5rem] p-12 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
        <div className="size-40 rounded-[3rem] bg-primary text-white flex items-center justify-center text-5xl font-black shadow-2xl relative shrink-0">
          NT
          <div className="absolute -bottom-3 -right-3 size-12 rounded-2xl bg-emerald-500 border-4 border-white dark:border-slate-800 flex items-center justify-center text-white shadow-lg">
            <span className="material-symbols-outlined text-2xl font-bold">verified</span>
          </div>
        </div>
        <div className="space-y-3 relative z-10">
           <h2 className="text-4xl font-black dark:text-white">Nguyễn Thảo</h2>
           <p className="text-primary font-black uppercase tracking-[0.2em] text-sm">{isVi ? 'Giảng viên Kỹ năng sống' : 'Life Skills Instructor'}</p>
           <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
              <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider"><span className="material-symbols-outlined text-lg text-primary">school</span> {isVi ? 'TH Chu Văn An' : 'Chu Van An School'}</div>
              <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider"><span className="material-symbols-outlined text-lg text-primary">calendar_today</span> {isVi ? 'Gia nhập: 2023' : 'Joined: 2023'}</div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm space-y-8">
           <h3 className="text-xl font-bold dark:text-white flex items-center gap-3"><span className="material-symbols-outlined text-primary font-black">contact_mail</span> {isVi ? 'Thông tin công vụ' : 'Official Information'}</h3>
           <div className="space-y-5">
              {[
                { label: isVi ? 'Email công vụ' : 'Work Email', val: 'thao.nguyen@chuvanan.edu.vn', icon: 'alternate_email' },
                { label: isVi ? 'Tổ chuyên môn' : 'Department', val: 'Kỹ năng mềm - GDCD', icon: 'groups' },
                { label: isVi ? 'Mã cán bộ' : 'Instructor ID', val: 'GV-88209', icon: 'badge' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="size-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 shrink-0"><span className="material-symbols-outlined text-lg">{item.icon}</span></div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">{item.label}</span>
                    <span className="text-sm font-black dark:text-slate-200">{item.val}</span>
                  </div>
                </div>
              ))}
           </div>
           <button className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all">{isVi ? 'Cập nhật hồ sơ' : 'Update Profile'}</button>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm space-y-8">
           <h3 className="text-xl font-bold dark:text-white flex items-center gap-3"><span className="material-symbols-outlined text-primary font-black">military_tech</span> {isVi ? 'Thành tích tiêu biểu' : 'Key Achievements'}</h3>
           <div className="grid grid-cols-3 gap-6">
              {[
                { icon: 'star', color: 'text-yellow-500', label: isVi ? 'Tích cực' : 'Active' },
                { icon: 'favorite', color: 'text-red-500', label: isVi ? 'Tâm huyết' : 'Passion' },
                { icon: 'psychology', color: 'text-blue-500', label: isVi ? 'Đổi mới' : 'Innovate' }
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                   <div className="size-16 rounded-3xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <span className={`material-symbols-outlined text-3xl filled-icon ${m.color}`}>{m.icon}</span>
                   </div>
                   <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{m.label}</span>
                </div>
              ))}
           </div>
           <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 relative text-left">
              <p className="text-[10px] font-black text-primary uppercase mb-2 tracking-[0.2em]">{isVi ? 'Triết lý giảng dạy' : 'Teaching Philosophy'}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed font-medium">"Học qua trò chơi là con đường ngắn nhất và vui vẻ nhất để trẻ em làm chủ cuộc đời mình."</p>
           </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (section) {
      case 'teacher_library':
      case 'teacher_dashboard':
        return renderLibrary();
      case 'teacher_rooms': return renderRooms();
      case 'teacher_analytics': return renderAnalytics();
      case 'teacher_profile': return renderProfile();
      default: return renderLibrary();
    }
  };

  return (
    <div className="w-full h-full">
      {renderContent()}
    </div>
  );
};

export default TeacherDashboard;
