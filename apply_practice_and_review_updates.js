// apply_practice_and_review_updates.js
// Mengupdate index.html dengan:
// 1. Menu Review & Riwayat yang bisa diakses murid
// 2. Halaman Review (pembahasan soal salah, filter sesi, tombol remedial)
// 3. Latihan Mandiri Berbagian (Part 1, 2, 3... 30 soal, 45 menit, 90 dtk/soal)
// 4. Menu Sortir acak di latihan mandiri
// 5. Tombol Latih Lagi Soal Salah (Remedial)

const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Tambah CSS untuk Bagian Latihan & Review
const cssTarget = '/* Responsive */';
const cssAdditions = `
    /* Menu Bagian & Part Card Latihan Mandiri */
    .part-category-bar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}
    .part-category-btn{padding:8px 14px;border-radius:10px;border:1.5px solid #cbd5e1;background:#fff;font-size:12.5px;font-weight:700;color:#334155;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:.15s}
    .part-category-btn:hover{background:#f1f5f9;border-color:#94a3b8}
    .part-category-btn.active{background:var(--navy);color:#fff;border-color:var(--navy);box-shadow:0 3px 8px rgba(15,23,42,.2)}
    
    .part-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(210px, 1fr));gap:12px;margin-top:14px}
    .part-card{background:#ffffff;border:1.5px solid #e2e8f0;border-radius:12px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.03)}
    .part-card:hover{border-color:var(--blue);box-shadow:0 4px 12px rgba(37,99,235,.1);transform:translateY(-2px)}
    .part-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
    .part-card-title{font-size:14px;font-weight:800;color:#0f172a}
    .part-card-desc{font-size:11.5px;color:#64748b;margin-bottom:10px;line-height:1.45}
    
    /* Riwayat Review Hasil */
    .reviews-list{display:flex;flex-direction:column;gap:12px}
    .review-history-card{background:#ffffff;border:1.5px solid #e2e8f0;border-radius:12px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;transition:.2s}
    .review-history-card:hover{border-color:#cbd5e1;box-shadow:0 3px 8px rgba(0,0,0,.04)}
    .review-history-meta{display:flex;flex-direction:column;gap:4px}
    .review-history-title{font-size:14px;font-weight:800;color:#0f172a}
    .review-history-sub{font-size:12px;color:#64748b;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
    .review-history-score{text-align:right}
    .review-history-score strong{font-size:18px;color:#0f172a}

    /* Responsive */`;

if (!html.includes('.part-category-btn')) {
  html = html.replace(cssTarget, cssAdditions);
  console.log('CSS added successfully.');
}

// 2. Update Menu Sidebar & Mobile Nav
const oldMenu = `const menu = [
      ['dashboard', '🏠', 'Dashboard'],
      ['summary', '📖', 'Rangkuman Materi'],
      ['practice', '🧠', 'Latihan Mandiri'],
      ['exam', '🏆', 'Simulasi Lomba'],
      ['final', '⚡', 'Final & Buzzer'],
      ['bank', '📚', 'Bank Soal Guru'],
      ['stats', '📊', 'Evaluasi'],
      ['settings', '⚙️', 'Pengaturan']
    ];`;

const newMenu = `const menu = [
      ['dashboard', '🏠', 'Dashboard'],
      ['summary', '📖', 'Rangkuman Materi'],
      ['practice', '🧠', 'Latihan Mandiri'],
      ['reviews', '📋', 'Review Hasil Belajar'],
      ['exam', '🏆', 'Simulasi Lomba'],
      ['final', '⚡', 'Final & Buzzer'],
      ['bank', '📚', 'Bank Soal Guru'],
      ['stats', '📊', 'Evaluasi'],
      ['settings', '⚙️', 'Pengaturan']
    ];`;

if (html.includes(oldMenu)) {
  html = html.replace(oldMenu, newMenu);
  console.log('Sidebar menu updated.');
}

// Update mobile nav
const oldMobileNav = `['dashboard', '🏠', 'Beranda'],
            ['summary', '📖', 'Materi'],
            ['practice', '🧠', 'Latihan'],
            ['exam', '🏆', 'Lomba'],
            ['final', '⚡', 'Final']`;

const newMobileNav = `['dashboard', '🏠', 'Beranda'],
            ['summary', '📖', 'Materi'],
            ['practice', '🧠', 'Latihan'],
            ['reviews', '📋', 'Review'],
            ['exam', '🏆', 'Lomba'],
            ['final', '⚡', 'Final']`;

if (html.includes(oldMobileNav)) {
  html = html.replace(oldMobileNav, newMobileNav);
  console.log('Mobile nav updated.');
}

// 3. Update Dashboard View Mode Cards
const oldDashboardCards = `\${modeCard('📖', 'Rangkuman Materi', 'Kumpulan materi MTK & IPAS lengkap Kelas 4–6 dengan rumus cepat dan konsep penting.', 'summary')}
          \${modeCard('🧠', 'Latihan Mandiri', 'Latihan terfokus per mata pelajaran, kelas, dan tingkat kesulitan.', 'practice')}
          \${modeCard('🏆', 'Simulasi Lomba', 'Babak 30 soal, 45 menit, 10 MTK + 10 IPA + 10 IPS standar olimpiade.', 'exam')}
          \${modeCard('⚡', 'Final & Buzzer', 'Pertandingan 3 tim dengan sesi wajib 30 detik & sesi rebutan buzzer.', 'final')}`;

const newDashboardCards = `\${modeCard('📖', 'Rangkuman Materi', 'Kumpulan materi MTK & IPAS lengkap Kelas 4–6 dengan rumus cepat dan konsep penting.', 'summary')}
          \${modeCard('🧠', 'Latihan Mandiri', 'Latihan per bagian (30 soal, 45 menit, 90 dtk/soal) untuk MTK, IPA, IPS & Campuran.', 'practice')}
          \${modeCard('📋', 'Review Hasil Belajar', 'Lihat penjelasan soal yang salah, diagnosa konsep, dan latih ulang soal salah.', 'reviews')}
          \${modeCard('🏆', 'Simulasi Lomba', 'Babak 30 soal, 45 menit, 10 MTK + 10 IPA + 10 IPS standar olimpiade.', 'exam')}
          \${modeCard('⚡', 'Final & Buzzer', 'Pertandingan 3 tim dengan sesi wajib 30 detik & sesi rebutan buzzer.', 'final')}`;

if (html.includes(oldDashboardCards)) {
  html = html.replace(oldDashboardCards, newDashboardCards);
  console.log('Dashboard cards updated.');
}

// 4. Update State S
const oldState = `// Halaman Rangkuman
      summaryFilter: { mapel: '', kelas: '', search: '' },
      summaryOpenAnswers: {}
    };`;

const newState = `// Halaman Rangkuman
      summaryFilter: { mapel: '', kelas: '', search: '' },
      summaryOpenAnswers: {},

      // Latihan Mandiri Bagian & Sortir
      practiceCategory: 'CAMPURAN',
      practiceSort: 'ACAK',

      // Review & Riwayat Murid
      reviewsFilter: 'ALL'
    };`;

if (html.includes(oldState)) {
  html = html.replace(oldState, newState);
  console.log('State S updated.');
}

// 5. Update api.createSession
const oldCreateSession = `      async createSession(payload) {
        const all = (await dbGetQuestions()).filter(q => q.STATUS === 'AKTIF');
        const mode = (payload.mode || 'LATIHAN').toUpperCase();
        const teamName = (payload.teamName || 'Tim Cerdas').trim();
        let selected = [], seconds = 0;

        if (mode === 'PENYISIHAN' || mode === 'SEMIFINAL') {
          // 10 Matematika, 10 IPA, 10 IPS
          ['MATEMATIKA', 'IPA', 'IPS'].forEach(m => {
            const pool = all.filter(q => q.MAPEL === m && q.TIPE === 'PG');
            selected.push(...shuffle(pool).slice(0, 10));
          });
          selected = shuffle(selected);
          seconds = 2700; // 45 menit
        } else {
          // Latihan Mandiri / Cepat
          const count = Math.min(50, Math.max(5, Number(payload.count) || 10));
          let pool = all.filter(q => q.TIPE === 'PG');
          if (payload.mapel) pool = pool.filter(q => q.MAPEL === payload.mapel);
          if (payload.kelas) pool = pool.filter(q => Number(q.KELAS) === Number(payload.kelas));
          if (payload.level) pool = pool.filter(q => q.LEVEL === payload.level);
          
          selected = shuffle(pool).slice(0, count);
          if (selected.length < count) {
            // fallback jika filter terlalu ketat
            const fallback = shuffle(all.filter(q => !selected.includes(q)));
            selected.push(...fallback.slice(0, count - selected.length));
          }
          seconds = mode === 'CEPAT'
            ? selected.length * Math.min(30, Math.max(10, Number(payload.fastSeconds) || 15))
            : (payload.timed ? selected.length * 60 : 0);
        }`;

const newCreateSession = `      async createSession(payload) {
        const all = (await dbGetQuestions()).filter(q => q.STATUS === 'AKTIF');
        const mode = (payload.mode || 'LATIHAN').toUpperCase();
        const teamName = (payload.teamName || 'Tim Cerdas').trim();
        let selected = [], seconds = 0;

        if (mode === 'PENYISIHAN' || mode === 'SEMIFINAL') {
          // 10 Matematika, 10 IPA, 10 IPS
          ['MATEMATIKA', 'IPA', 'IPS'].forEach(m => {
            const pool = all.filter(q => q.MAPEL === m && q.TIPE === 'PG');
            selected.push(...shuffle(pool).slice(0, 10));
          });
          selected = shuffle(selected);
          seconds = 2700; // 45 menit
        } else if (mode === 'REMEDIAL') {
          // Sesi Remedial Khusus Soal Salah
          selected = payload.questions || [];
          if (payload.sort !== 'URUT') selected = shuffle(selected);
          seconds = Math.max(1, selected.length) * 90; // 90 detik per soal
        } else if (mode === 'LATIHAN_BAGIAN') {
          const cat = payload.category || 'CAMPURAN';
          const part = Number(payload.part) || 1;
          const sort = payload.sort || 'ACAK';

          if (cat === 'CAMPURAN') {
            const poolMTK = all.filter(q => q.MAPEL === 'MATEMATIKA' && q.TIPE === 'PG');
            const poolIPA = all.filter(q => q.MAPEL === 'IPA' && q.TIPE === 'PG');
            const poolIPS = all.filter(q => q.MAPEL === 'IPS' && q.TIPE === 'PG');
            
            const startIdx = (part - 1) * 10;
            const mtkSlice = poolMTK.slice(startIdx, startIdx + 10);
            const ipaSlice = poolIPA.slice(startIdx, startIdx + 10);
            const ipsSlice = poolIPS.slice(startIdx, startIdx + 10);
            
            selected = [...mtkSlice, ...ipaSlice, ...ipsSlice];
            if (selected.length < 30) {
              const remaining = all.filter(q => !selected.includes(q) && q.TIPE === 'PG');
              selected.push(...remaining.slice(0, 30 - selected.length));
            }
          } else {
            const pool = all.filter(q => q.MAPEL === cat && q.TIPE === 'PG');
            const startIdx = (part - 1) * 30;
            selected = pool.slice(startIdx, startIdx + 30);
          }

          if (sort === 'ACAK') {
            selected = shuffle(selected);
          }
          // 45 menit = 2700 detik (atau 90 detik per soal jika sisa < 30)
          seconds = selected.length >= 30 ? 2700 : (selected.length * 90);
        } else {
          // Fallback Latihan Standar
          const count = Math.min(50, Math.max(5, Number(payload.count) || 10));
          let pool = all.filter(q => q.TIPE === 'PG');
          if (payload.mapel) pool = pool.filter(q => q.MAPEL === payload.mapel);
          selected = shuffle(pool).slice(0, count);
          seconds = payload.timed ? selected.length * 90 : 0;
        }`;

if (html.includes(oldCreateSession)) {
  html = html.replace(oldCreateSession, newCreateSession);
  console.log('api.createSession updated.');
}

// 6. Ganti practiceView lama dengan Latihan Mandiri Berbagian Baru
const oldPracticeView = `    // =========================================================================
    // VIEW: LATIHAN MANDIRI & SIMULASI UJIAN
    // =========================================================================
    function practiceView() {
      return \`
        \${heading('Latihan Mandiri & Cepat', 'Kustomisasi sesi latihan sesuai mata pelajaran, kelas, dan tingkat kesulitan murid.')}
        \${card(\`
          <div class="grid form-grid three">
            \${input('Nama Murid / Tim', 'trainTeamName', '', 'text', 'Contoh: Tim Elang')}
            \${select('Jenis Latihan', 'trainMode', [['LATIHAN', 'Latihan Mandiri Standar'], ['CEPAT', 'Latihan Cepat (Fast-Quiz)']])}
            \${select('Mata Pelajaran', 'trainMapel', subjOpts)}
            \${select('Kelas', 'trainKelas', clsOpts)}
            \${select('Tingkat Kesulitan', 'trainLevel', levelOpts)}
            \${select('Jumlah Soal', 'trainCount', [['10', '10 Soal'], ['20', '20 Soal'], ['30', '30 Soal'], ['50', '50 Soal']])}
            \${select('Batas Waktu', 'trainTimed', [['false', 'Tanpa Batas Waktu'], ['true', '1 Menit per Soal']])}
            \${select('Timer per Soal (Mode Cepat)', 'trainFastSeconds', [['10', '10 Detik'], ['15', '15 Detik'], ['20', '20 Detik'], ['30', '30 Detik']])}
          </div>
          <div class="top-spacer"></div>
          <button class="btn gold" data-action="startPractice">▶ Mulai Sesi Latihan</button>
        \`)}
        <div class="top-spacer"></div>
        <div class="notice">
          💡 Soal diacak secara otomatis dari bank soal cloud Supabase. Kunci jawaban dan pembahasan mendalam akan tampil seketika setelah hasil dikumpulkan.
        </div>
      \`;
    }`;

const newPracticeView = `    // =========================================================================
    // VIEW: LATIHAN MANDIRI BERBAGIAN (PART 1, PART 2... 30 SOAL / 45 MENIT)
    // =========================================================================
    function practiceView() {
      const all = typeof QUESTIONS_SEED !== 'undefined' ? QUESTIONS_SEED : [];
      const cat = S.practiceCategory || 'CAMPURAN';
      const sort = S.practiceSort || 'ACAK';
      
      const countMTK = all.filter(q => q.MAPEL === 'MATEMATIKA' && q.STATUS === 'AKTIF').length;
      const countIPA = all.filter(q => q.MAPEL === 'IPA' && q.STATUS === 'AKTIF').length;
      const countIPS = all.filter(q => q.MAPEL === 'IPS' && q.STATUS === 'AKTIF').length;
      
      let totalCatQuestions = 0;
      let numParts = 1;

      if (cat === 'MATEMATIKA') {
        totalCatQuestions = countMTK;
        numParts = Math.max(1, Math.ceil(countMTK / 30));
      } else if (cat === 'IPA') {
        totalCatQuestions = countIPA;
        numParts = Math.max(1, Math.ceil(countIPA / 30));
      } else if (cat === 'IPS') {
        totalCatQuestions = countIPS;
        numParts = Math.max(1, Math.ceil(countIPS / 30));
      } else {
        totalCatQuestions = all.length;
        numParts = Math.max(1, Math.ceil(all.length / 30));
      }

      const parts = [];
      for (let i = 1; i <= numParts; i++) {
        const startNum = (i - 1) * 30 + 1;
        let endNum = i * 30;
        if (cat !== 'CAMPURAN' && endNum > totalCatQuestions) endNum = totalCatQuestions;
        if (cat === 'CAMPURAN' && endNum > all.length) endNum = all.length;
        const qCount = Math.max(1, endNum - startNum + 1);
        parts.push({
          part: i,
          start: startNum,
          end: endNum,
          count: qCount
        });
      }

      return \`
        \${heading('Latihan Mandiri Terpadu per Bagian (Paket)', 'Pilih mata pelajaran atau paket campuran, tentukan nomor bagian latihan (30 soal • 45 menit / alokasi 90 detik per soal), dan latih ketangkasanmu.')}

        <div class="card" style="margin-bottom:20px">
          <div style="font-size:12.5px;font-weight:800;color:#64748b;margin-bottom:8px">1. NAMA PESERTA / TIM:</div>
          <div style="max-width:380px;margin-bottom:16px">
            <input type="text" id="trainTeamName" placeholder="Contoh: Andi Pratama / Tim Rajawali" value="Murid Hebat" style="width:100%;padding:10px 12px;border:1.5px solid #cbd5e1;border-radius:8px;font-size:14px">
          </div>

          <div style="font-size:12.5px;font-weight:800;color:#64748b;margin-bottom:8px">2. PILIH MATA PELAJARAN / PAKET:</div>
          <div class="part-category-bar">
            <button class="part-category-btn \${cat === 'CAMPURAN' ? 'active' : ''}" data-action="setPracticeCategory" data-val="CAMPURAN">
              🔀 Campuran MIPAS (10 MTK + 10 IPA + 10 IPS)
            </button>
            <button class="part-category-btn \${cat === 'MATEMATIKA' ? 'active' : ''}" data-action="setPracticeCategory" data-val="MATEMATIKA">
              🔢 Matematika (\${countMTK} Soal)
            </button>
            <button class="part-category-btn \${cat === 'IPA' ? 'active' : ''}" data-action="setPracticeCategory" data-val="IPA">
              🔬 IPA (\${countIPA} Soal)
            </button>
            <button class="part-category-btn \${cat === 'IPS' ? 'active' : ''}" data-action="setPracticeCategory" data-val="IPS">
              🌏 IPS (\${countIPS} Soal)
            </button>
          </div>

          <div style="font-size:12.5px;font-weight:800;color:#64748b;margin-bottom:8px">3. MENU SORTIR / URUTAN SOAL:</div>
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:16px">
            <button class="filter-btn \${sort === 'ACAK' ? 'active' : ''}" data-action="setPracticeSort" data-val="ACAK">
              🔀 Soal Teracak (Rekomendasi)
            </button>
            <button class="filter-btn \${sort === 'URUT' ? 'active' : ''}" data-action="setPracticeSort" data-val="URUT">
              📋 Soal Berurutan (Nomor Awal ke Akhir)
            </button>
            <span class="subtle" style="font-size:11.5px;margin-left:6px">
              \${sort === 'ACAK' ? '⚡ Urutan soal diacak secara otomatis saat kuis dimulai.' : '📌 Soal disajikan urut sesuai susunan bank materi.'}
            </span>
          </div>

          <div class="notice" style="background:#eff6ff;border:1px solid #bfdbfe;color:#1e40af">
            ⏱️ <b>Format Resmi Latihan:</b> Setiap bagian terdiri dari <b>30 Soal</b> dengan waktu <b>45 Menit</b> (alokasi rata-rata <b>90 detik per soal</b>). Nilai dan pembahasan lengkap beserta diagnosa kekeliruan langsung tampil seketika setelah hasil dikumpulkan.
          </div>
        </div>

        \${heading(\`Pilih Bagian Soal (\${parts.length} Bagian Tersedia)\`, \`Klik tombol bagian di bawah untuk langsung memulai pengerjaan paket 30 soal.\`)}

        <div class="part-grid">
          \${parts.map(p => \`
            <div class="part-card">
              <div>
                <div class="part-card-header">
                  <span class="part-card-title">Bagian \${p.part}</span>
                  <span class="pill \${cat === 'MATEMATIKA' ? 'blue' : (cat === 'IPA' ? 'green' : (cat === 'IPS' ? 'gold' : 'purple'))}">
                    \${p.count} Soal
                  </span>
                </div>
                <div class="part-card-desc">
                  \${cat === 'CAMPURAN' 
                    ? '10 MTK + 10 IPA + 10 IPS' 
                    : \`Rentang Soal No. \${p.start} – \${p.end}\`}
                  <br><small style="color:#0284c7">⏱ 45 Menit (90 dtk/soal)</small>
                </div>
              </div>
              <button class="btn sm" data-action="startPartPractice" data-part="\${p.part}" style="width:100%;margin-top:8px">
                ▶ Kerjakan Bagian \${p.part}
              </button>
            </div>
          \`).join('')}
        </div>
      \`;
    }

    // =========================================================================
    // VIEW: REVIEW HASIL BELAJAR & RIWAYAT SESI MURID [BARU]
    // =========================================================================
    function reviewsView() {
      const sessions = JSON.parse(localStorage.getItem('cc_sessions_list') || '[]').filter(s => s.finished);
      const filter = S.reviewsFilter || 'ALL';
      
      let filtered = sessions;
      if (filter === 'LATIHAN') {
        filtered = filtered.filter(s => s.mode?.includes('LATIHAN') && !s.mode?.includes('REMEDIAL'));
      } else if (filter === 'EXAM') {
        filtered = filtered.filter(s => s.mode === 'PENYISIHAN' || s.mode === 'SEMIFINAL');
      } else if (filter === 'REMEDIAL') {
        filtered = filtered.filter(s => s.mode?.includes('REMEDIAL'));
      }

      const totalSesi = sessions.length;
      const avgPct = totalSesi > 0 
        ? Math.round(sessions.reduce((acc, s) => acc + (s.score && s.maximum ? (100 * s.score / s.maximum) : 0), 0) / totalSesi)
        : 0;

      return \`
        \${heading('Review Hasil Latihan & Simulasi Lomba', 'Akses kembali hasil latihan mandiri dan simulasi lomba sebelumnya, pelajari penjelasan soal yang salah, dan latih ulang soal-soal yang belum tepat.')}
        
        <div class="grid cols-3" style="margin-bottom:20px">
          \${card(\`<div class="stat"><div class="stat-icon">📋</div><div><small>Total Sesi Diselesaikan</small><strong>\${totalSesi} Sesi</strong></div></div>\`)}
          \${card(\`<div class="stat"><div class="stat-icon">🎯</div><div><small>Rata-rata Ketepatan</small><strong>\${avgPct}%</strong></div></div>\`)}
          \${card(\`<div class="stat"><div class="stat-icon">🔄</div><div><small>Fasilitas Remedial</small><strong style="color:#dc2626">Latih Ulang Soal Salah</strong></div></div>\`)}
        </div>

        <div class="card" style="margin-bottom:20px">
          <div class="summary-filter-bar">
            <div class="filter-pills">
              <span class="subtle" style="display:flex;align-items:center;margin-right:4px"><b>Filter Sesi:</b></span>
              <button class="filter-btn \${filter === 'ALL' ? 'active' : ''}" data-action="setReviewsFilter" data-val="ALL">Semua Sesi (\${sessions.length})</button>
              <button class="filter-btn \${filter === 'LATIHAN' ? 'active' : ''}" data-action="setReviewsFilter" data-val="LATIHAN">🧠 Latihan Mandiri</button>
              <button class="filter-btn \${filter === 'EXAM' ? 'active' : ''}" data-action="setReviewsFilter" data-val="EXAM">🏆 Simulasi Lomba</button>
              <button class="filter-btn \${filter === 'REMEDIAL' ? 'active' : ''}" data-action="setReviewsFilter" data-val="REMEDIAL">🔄 Remedial Soal Salah</button>
            </div>
          </div>
        </div>

        \${filtered.length === 0 ? \`
          <div class="card empty">
            <div style="font-size:44px">📝</div>
            <strong>Belum Ada Riwayat Sesi</strong>
            <p>Kamu belum menyelesaikan sesi latihan atau simulasi lomba pada kategori ini. Yuk mulai latihan sekarang!</p>
            <button class="btn gold sm" data-action="navigate" data-page="practice">▶ Buka Latihan Mandiri</button>
          </div>
        \` : \`
          <div class="reviews-list">
            \${filtered.map(s => {
              const rev = s.review;
              const score = s.score !== undefined ? s.score : (rev?.score || 0);
              const max = s.maximum !== undefined ? s.maximum : (rev?.maximum || 1);
              const pct = Math.round((100 * score) / Math.max(1, max));
              const totalQ = rev?.total || (s.soalIds?.length || 0);
              const wrongCount = rev ? rev.items.filter(x => !x.correct).length : (totalQ - (rev?.correct || 0));
              const dateStr = s.finishedAt ? new Date(s.finishedAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) : '-';
              const isRemedial = s.mode?.includes('REMEDIAL');

              return \`
                <div class="review-history-card">
                  <div class="review-history-meta">
                    <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
                      <span class="pill \${isRemedial ? 'red' : (s.mode?.includes('EXAM') || s.mode === 'PENYISIHAN' || s.mode === 'SEMIFINAL' ? 'gold' : 'blue')}">
                        \${isRemedial ? '🔄 Remedial' : (s.mode?.includes('PENYISIHAN') ? '🏆 Penyisihan' : (s.mode?.includes('SEMIFINAL') ? '🏆 Semifinal' : '🧠 Latihan'))}
                      </span>
                      <span class="review-history-title">\${esc(s.teamName || 'Murid')}</span>
                    </div>
                    <div class="review-history-sub">
                      <span>📅 \${dateStr}</span>
                      <span>•</span>
                      <span>⏱ \${Math.round(s.duration ? s.duration / 60 : 0)} menit pengerjaan</span>
                      <span>•</span>
                      <span>📝 \${totalQ} Soal (\${rev ? rev.correct : score} Benar, <b style="color:\${wrongCount > 0 ? '#dc2626' : '#16a34a'}">\${wrongCount} Salah</b>)</span>
                    </div>
                  </div>

                  <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
                    <div class="review-history-score">
                      <div style="font-size:12px;color:#64748b">Ketepatan:</div>
                      <strong style="color:\${pct >= 75 ? '#16a34a' : (pct >= 50 ? '#d97706' : '#dc2626')}">\${pct}%</strong>
                      <div style="font-size:11.5px;color:#94a3b8">\${score} / \${max} Poin</div>
                    </div>

                    <div style="display:flex;gap:6px;flex-direction:column">
                      <button class="btn secondary sm" data-action="openReviewSession" data-id="\${s.id}">
                        👁️ Buka Pembahasan
                      </button>
                      \${wrongCount > 0 ? \`
                        <button class="btn sm" data-action="retakeWrongFromHistory" data-id="\${s.id}" style="background:#dc2626;color:#fff;border-color:#b91c1c;font-size:11px;padding:4px 8px">
                          🔄 Latih Lagi \${wrongCount} Soal Salah
                        </button>
                      \` : ''}
                    </div>
                  </div>
                </div>
              \`;
            }).join('')}
          </div>
        \`}
      \`;
    }`;

if (html.includes(oldPracticeView)) {
  html = html.replace(oldPracticeView, newPracticeView);
  console.log('practiceView & reviewsView updated.');
}

// 7. Update resultView: Tambahkan Tombol Latih Lagi Soal Salah & Kembali ke Review
const oldResultButtons = `<div class="btn-row" style="justify-content:center;margin-top:16px">
              <button class="btn" data-action="navigate" data-page="practice">Ulangi Latihan</button>
              <button class="btn \${S.reviewOnlyWrong ? 'gold' : 'secondary'}" data-action="toggleWrong">
                \${S.reviewOnlyWrong ? '📋 Tampilkan Semua Soal' : \`🔍 Evaluasi \${wrongCount} Soal yang Salah\`}
              </button>
              <button class="btn ghost" data-action="print">🖨️ Cetak Hasil Evaluasi</button>
            </div>`;

const newResultButtons = `<div class="btn-row" style="justify-content:center;margin-top:16px;flex-wrap:wrap;gap:8px">
              <button class="btn secondary" data-action="navigate" data-page="reviews">📋 Daftar Riwayat Review</button>
              <button class="btn" data-action="navigate" data-page="practice">Kembali ke Latihan</button>
              <button class="btn \${S.reviewOnlyWrong ? 'gold' : 'secondary'}" data-action="toggleWrong">
                \${S.reviewOnlyWrong ? '📋 Tampilkan Semua Soal' : \`🔍 Evaluasi \${wrongCount} Soal yang Salah\`}
              </button>
              \${wrongCount > 0 ? \`
                <button class="btn danger" data-action="retakeWrongQuestions" style="background:#dc2626;color:#fff;font-weight:bold;box-shadow:0 3px 10px rgba(220,38,38,.3)">
                  🔄 Latih Lagi \${wrongCount} Soal yang Salah
                </button>
              \` : ''}
              <button class="btn ghost" data-action="print">🖨️ Cetak Lembar Hasil</button>
            </div>`;

if (html.includes(oldResultButtons)) {
  html = html.replace(oldResultButtons, newResultButtons);
  console.log('resultView buttons updated.');
}

// 8. Update render() function routing
const oldRender = `      if (S.page === 'dashboard') html = dashboardView();
      else if (S.page === 'summary') html = summaryView();
      else if (S.page === 'practice') html = practiceView();
      else if (S.page === 'exam') html = examView();`;

const newRender = `      if (S.page === 'dashboard') html = dashboardView();
      else if (S.page === 'summary') html = summaryView();
      else if (S.page === 'practice') html = practiceView();
      else if (S.page === 'reviews') html = reviewsView();
      else if (S.page === 'exam') html = examView();`;

if (html.includes(oldRender)) {
  html = html.replace(oldRender, newRender);
  console.log('render() routing updated.');
}

// 9. Update handleAction
const oldHandleActionStart = `        case 'practiceFromSummary': {
          const mapel = el.dataset.mapel;
          const kelas = el.dataset.kelas;
          await navigate('practice');
          setTimeout(() => {
            const mEl = document.getElementById('trainMapel');
            const kEl = document.getElementById('trainKelas');
            if (mEl) mEl.value = mapel;
            if (kEl) kEl.value = kelas;
          }, 50);
          break;
        }`;

const newHandleActionAdditions = `        case 'practiceFromSummary': {
          const mapel = el.dataset.mapel;
          S.practiceCategory = mapel === 'MATEMATIKA' ? 'MATEMATIKA' : (mapel === 'IPA' ? 'IPA' : 'CAMPURAN');
          await navigate('practice');
          break;
        }

        case 'setPracticeCategory':
          S.practiceCategory = el.dataset.val;
          render();
          break;

        case 'setPracticeSort':
          S.practiceSort = el.dataset.val;
          render();
          break;

        case 'setReviewsFilter':
          S.reviewsFilter = el.dataset.val;
          render();
          break;

        case 'startPartPractice': {
          const part = Number(el.dataset.part) || 1;
          const cat = S.practiceCategory || 'CAMPURAN';
          const sort = S.practiceSort || 'ACAK';
          const name = (value('trainTeamName') || 'Murid Hebat').trim();
          
          const sess = await run(() => api.createSession({
            mode: 'LATIHAN_BAGIAN',
            category: cat,
            part,
            sort,
            teamName: \`\${name} (\${cat} - Bagian \${part})\`
          }));
          S.session = sess;
          S.questionIndex = 0;
          S.answers = {};
          S.page = 'quiz';
          sessionStorage.setItem('ccActiveSession', sess.id);
          render();
          break;
        }

        case 'openReviewSession': {
          const id = el.dataset.id;
          const list = JSON.parse(localStorage.getItem('cc_sessions_list') || '[]');
          const sess = list.find(s => s.id === id);
          if (!sess) { toast('Data sesi tidak ditemukan.', true); return; }
          
          if (!sess.review) {
            const allQuestions = await dbGetQuestions();
            const qMap = new Map(allQuestions.map(q => [q.ID_SOAL, q]));
            const items = (sess.questions || sess.soalIds || []).map(qOrId => {
              const qId = typeof qOrId === 'string' ? qOrId : qOrId.id;
              const raw = qMap.get(qId);
              const chosen = sess.answers?.[qId] || '';
              const correct = chosen && raw && chosen.toUpperCase() === raw.KUNCI.trim().toUpperCase();
              return {
                ...(typeof qOrId === 'object' ? qOrId : publicQuestion(raw)),
                chosen,
                correct: !!correct,
                answer: raw ? raw.KUNCI : '',
                explanation: raw ? raw.PEMBAHASAN : '',
                diagnosa: raw ? raw.DIAGNOSA : '',
                points: correct ? 4 : 0
              };
            });
            sess.review = {
              score: sess.score !== undefined ? sess.score : items.reduce((s, it) => s + it.points, 0),
              maximum: sess.maximum || (items.length * 4),
              correct: items.filter(x => x.correct).length,
              total: items.length,
              items,
              finishedAt: sess.finishedAt || Date.now()
            };
          }
          S.review = sess.review;
          S.reviewOnlyWrong = false;
          S.page = 'result';
          render();
          break;
        }

        case 'retakeWrongQuestions': {
          if (!S.review?.items) return;
          const wrongItems = S.review.items.filter(x => !x.correct);
          if (wrongItems.length === 0) {
            toast('Tidak ada soal yang salah! Semua jawaban kamu sudah tepat 🎉');
            return;
          }
          const allQuestions = await dbGetQuestions();
          const qMap = new Map(allQuestions.map(q => [q.ID_SOAL, q]));
          const selected = wrongItems.map(w => qMap.get(w.id)).filter(Boolean);
          
          const sess = await run(() => api.createSession({
            mode: 'REMEDIAL',
            teamName: 'Remedial ' + selected.length + ' Soal Salah',
            questions: selected,
            sort: 'ACAK'
          }));
          S.session = sess;
          S.questionIndex = 0;
          S.answers = {};
          S.page = 'quiz';
          sessionStorage.setItem('ccActiveSession', sess.id);
          toast(\`Memulai remedial \${selected.length} soal yang salah. Waktu: 90 dtk/soal. Semangat! 💪\`);
          render();
          break;
        }

        case 'retakeWrongFromHistory': {
          const id = el.dataset.id;
          const list = JSON.parse(localStorage.getItem('cc_sessions_list') || '[]');
          const sess = list.find(s => s.id === id);
          if (!sess) return;
          
          let wrongItems = [];
          if (sess.review?.items) {
            wrongItems = sess.review.items.filter(x => !x.correct);
          } else {
            const allQuestions = await dbGetQuestions();
            const qMap = new Map(allQuestions.map(q => [q.ID_SOAL, q]));
            wrongItems = (sess.soalIds || []).map(qId => {
              const raw = qMap.get(qId);
              const chosen = sess.answers?.[qId] || '';
              const correct = chosen && raw && chosen.toUpperCase() === raw.KUNCI.trim().toUpperCase();
              return correct ? null : { id: qId };
            }).filter(Boolean);
          }

          if (wrongItems.length === 0) {
            toast('Tidak ada soal yang salah pada sesi ini! 🎉');
            return;
          }

          const allQuestions = await dbGetQuestions();
          const qMap = new Map(allQuestions.map(q => [q.ID_SOAL, q]));
          const selected = wrongItems.map(w => qMap.get(w.id)).filter(Boolean);

          const newSess = await run(() => api.createSession({
            mode: 'REMEDIAL',
            teamName: \`Remedial \${selected.length} Soal (\${sess.teamName || 'Murid'})\`,
            questions: selected,
            sort: 'ACAK'
          }));
          S.session = newSess;
          S.questionIndex = 0;
          S.answers = {};
          S.page = 'quiz';
          sessionStorage.setItem('ccActiveSession', newSess.id);
          toast(\`Memulai latihan remedial \${selected.length} soal salah. Waktu: 90 dtk/soal. Semangat! 💪\`);
          render();
          break;
        }`;

if (html.includes(oldHandleActionStart)) {
  html = html.replace(oldHandleActionStart, newHandleActionAdditions);
  console.log('handleAction cases updated.');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');
