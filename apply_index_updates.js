const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Add CSS
const cssTarget = `.summary-card-foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid #f1f5f9;gap:10px}`;
const cssReplacement = `.summary-card-foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid #f1f5f9;gap:10px}

    .warning-box{background:#fef2f2;border:1px solid #fecaca;border-left:4px solid #ef4444;border-radius:12px;padding:12px 14px;margin-bottom:12px;color:#991b1b}
    .warning-box-title{font-size:11.5px;font-weight:800;margin-bottom:6px;display:flex;align-items:center;gap:6px}
    .warning-box ul{margin:0;padding-left:18px;font-size:12px;line-height:1.55}

    /* Stimulus Soal Styles */
    .stimulus-card{background:#f0fdf4;border:1.5px solid #86efac;border-left:5px solid #16a34a;border-radius:12px;padding:14px 16px;margin-bottom:14px;box-shadow:0 2px 5px rgba(0,0,0,.03)}
    .stimulus-badge{display:inline-flex;align-items:center;gap:6px;background:#dcfce7;color:#15803d;font-size:11px;font-weight:800;letter-spacing:.5px;padding:3px 10px;border-radius:99px;margin-bottom:8px;border:1px solid #bbf7d0}
    .stimulus-content{font-size:13.5px;color:#1e293b;line-height:1.65}
    .stimulus-prompt{font-size:15px;font-weight:700;color:#0f172a;line-height:1.55;margin-top:10px;margin-bottom:8px}
    .standard-question-body{font-size:15px;color:#0f172a;line-height:1.6}

    /* Diagnosa & Penjelasan Kesalahan Styles */
    .wrong-explanation-box{background:#fff1f2;border:1.5px solid #fecdd3;border-left:5px solid #e11d48;border-radius:12px;padding:14px 16px;margin-top:12px}
    .wrong-explanation-header{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;color:#9f1239;font-weight:800;font-size:13px}
    .wrong-explanation-body{font-size:13px;color:#881337;line-height:1.6;margin-bottom:10px}
    .wrong-diagnostic-hint{background:#ffffff;border:1px dashed #fda4af;border-radius:8px;padding:9px 12px;font-size:12px;color:#9f1239;line-height:1.5}
    .correct-explanation-box{background:#f0fdf4;border:1px solid #bbf7d0;border-left:4px solid #22c55e;border-radius:10px;padding:10px 14px;margin-top:10px;font-size:13px;color:#166534;line-height:1.5}`;

if (!html.includes(cssTarget)) {
  console.error('CSS target not found!');
  process.exit(1);
}
html = html.replace(cssTarget, cssReplacement);
console.log('✓ CSS added');

// 2. Add Helper Functions
const helpersTarget = `    const clock = seconds => {
      const s = Math.max(0, Math.floor(seconds));
      return Math.floor(s / 3600)
        ? \`\${String(Math.floor(s / 3600)).padStart(2, '0')}:\${String(Math.floor(s / 60) % 60).padStart(2, '0')}:\${String(s % 60).padStart(2, '0')}\`
        : \`\${String(Math.floor(s / 60)).padStart(2, '0')}:\${String(s % 60).padStart(2, '0')}\`;
    };`;

const helpersReplacement = `    const clock = seconds => {
      const s = Math.max(0, Math.floor(seconds));
      return Math.floor(s / 3600)
        ? \`\${String(Math.floor(s / 3600)).padStart(2, '0')}:\${String(Math.floor(s / 60) % 60).padStart(2, '0')}:\${String(s % 60).padStart(2, '0')}\`
        : \`\${String(Math.floor(s / 60)).padStart(2, '0')}:\${String(s % 60).padStart(2, '0')}\`;
    };

    function formatQuestionText(text) {
      if (!text) return '';
      if (text.includes('[STIMULUS]')) {
        const parts = text.split(/\\[PERTANYAAN\\]/i);
        const stimulusPart = parts[0].replace(/\\[STIMULUS\\]/i, '').trim();
        const questionPart = (parts[1] || '').trim();
        return \`
          <div class="stimulus-card">
            <div class="stimulus-badge">📋 BACAAN STIMULUS / KASUS SOAL</div>
            <div class="stimulus-content">\${esc(stimulusPart).replace(/\\n/g, '<br>')}</div>
          </div>
          <div class="stimulus-prompt">
            <b>❓ Pertanyaan:</b><br>\${esc(questionPart).replace(/\\n/g, '<br>')}
          </div>
        \`;
      }
      return \`<div class="standard-question-body">\${esc(text).replace(/\\n/g, '<br>')}</div>\`;
    }

    function detectErrorCategory(q) {
      if (!q.chosen) return '⏰ Tidak Dijawab / Waktu Habis';
      const text = ((q.text || '') + ' ' + (q.topik || '')).toLowerCase();
      if (text.includes('[stimulus]') || text.includes('bacaan') || text.includes('tabel') || text.includes('pernyataan')) {
        return '🔍 Membaca Informasi & Stimulus';
      }
      if (q.mapel === 'MATEMATIKA') {
        if (text.includes('kabataku') || text.includes('kurung') || text.includes('hitung') || text.includes('operasi') || text.includes('pecahan')) {
          return '🧮 Ketelitian Hitung / Aturan Kabataku';
        }
        if (text.includes('kpk') || text.includes('fpb') || text.includes('rasio') || text.includes('skala') || text.includes('lingkaran') || text.includes('luas') || text.includes('volume')) {
          return '📐 Pemahaman Konsep & Rumus';
        }
        return '🧮 Ketelitian Perhitungan';
      }
      if (q.mapel === 'IPA') {
        if (text.includes('metamorfosis') || text.includes('wujud') || text.includes('gaya') || text.includes('tata surya') || text.includes('alveolus') || text.includes('darah')) {
          return '🧬 Konsep Biologi / Fisika Dasar';
        }
        return '🔬 Analisis Fakta Sains';
      }
      if (q.mapel === 'IPS') {
        if (text.includes('1928') || text.includes('1945') || text.includes('1908') || text.includes('sejarah') || text.includes('wita') || text.includes('wib')) {
          return '⏳ Kronologi Sejarah & Zona Wilayah';
        }
        return '🌏 Pemahaman Geografi & Sosial';
      }
      return '💡 Pemahaman Materi';
    }`;

if (!html.includes(helpersTarget)) {
  console.error('Helpers target not found!');
  process.exit(1);
}
html = html.replace(helpersTarget, helpersReplacement);
console.log('✓ Helpers added');

// 3. Update dbGetQuestions cache fallback
const cacheTarget = `      // Fallback: Local Storage atau Seed
      const cached = localStorage.getItem('cc_questions_data');
      if (cached) {
        try {
          return JSON.parse(cached);
        } catch (e) {}
      }
      return typeof QUESTIONS_SEED !== 'undefined' ? QUESTIONS_SEED : [];`;

const cacheReplacement = `      // Fallback: Local Storage atau Seed
      const seed = typeof QUESTIONS_SEED !== 'undefined' ? QUESTIONS_SEED : [];
      const cached = localStorage.getItem('cc_questions_data');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length >= seed.length) {
            return parsed;
          }
        } catch (e) {}
      }
      return seed;`;

if (!html.includes(cacheTarget)) {
  console.error('Cache target not found!');
  process.exit(1);
}
html = html.replace(cacheTarget, cacheReplacement);
console.log('✓ dbGetQuestions updated');

// 4. Update publicQuestion to include diagnosa
const pubQTarget = `    function publicQuestion(q) {
      return {
        id: q.ID_SOAL,
        mapel: q.MAPEL,
        kelas: Number(q.KELAS),
        topik: q.TOPIK,
        babak: q.BABAK,
        level: q.LEVEL,
        tipe: q.TIPE || 'PG',
        text: q.PERTANYAAN,
        options: [q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D].filter(Boolean)
      };
    }`;

const pubQReplacement = `    function publicQuestion(q) {
      return {
        id: q.ID_SOAL,
        mapel: q.MAPEL,
        kelas: Number(q.KELAS),
        topik: q.TOPIK,
        babak: q.BABAK,
        level: q.LEVEL,
        tipe: q.TIPE || 'PG',
        text: q.PERTANYAAN,
        options: [q.OPSI_A, q.OPSI_B, q.OPSI_C, q.OPSI_D].filter(Boolean),
        diagnosa: q.DIAGNOSA || ''
      };
    }`;

if (!html.includes(pubQTarget)) {
  console.error('publicQuestion target not found!');
  process.exit(1);
}
html = html.replace(pubQTarget, pubQReplacement);
console.log('✓ publicQuestion updated');

// 5. Update submitSession to pass diagnosa
const submitTarget = `          return {
            ...pq,
            chosen,
            correct: !!correct,
            answer: raw ? raw.KUNCI : '',
            explanation: raw ? raw.PEMBAHASAN : '',
            points: correct ? pts : 0
          };`;

const submitReplacement = `          return {
            ...pq,
            chosen,
            correct: !!correct,
            answer: raw ? raw.KUNCI : '',
            explanation: raw ? raw.PEMBAHASAN : '',
            diagnosa: raw ? (raw.DIAGNOSA || '') : (pq.diagnosa || ''),
            points: correct ? pts : 0
          };`;

if (!html.includes(submitTarget)) {
  console.error('submitSession target not found!');
  process.exit(1);
}
html = html.replace(submitTarget, submitReplacement);
console.log('✓ submitSession updated');

// 6. Update summaryView search filter to check perhatikan
const summarySearchTarget = `          const matchFormula = (item.rumus || []).some(r => r.toLowerCase().includes(s));
          if (!matchTitle && !matchRingkasan && !matchCategory && !matchTags && !matchFormula) return false;`;

const summarySearchReplacement = `          const matchFormula = (item.rumus || []).some(r => r.toLowerCase().includes(s));
          const matchPerhatikan = (item.perhatikan || []).some(p => p.toLowerCase().includes(s));
          if (!matchTitle && !matchRingkasan && !matchCategory && !matchTags && !matchFormula && !matchPerhatikan) return false;`;

if (!html.includes(summarySearchTarget)) {
  console.error('summarySearch target not found!');
  process.exit(1);
}
html = html.replace(summarySearchTarget, summarySearchReplacement);
console.log('✓ summaryView search filter updated');

// 7. Update summaryCardHtml to render perhatikan box
const summaryPerhatikanTarget = `          \${item.contohSoal ? \`
            <div class="example-box">
              <div class="example-q">❓ Contoh Uji Pemahaman:</div>
              <div style="font-size:12.5px;color:#334155;margin-bottom:6px">\${esc(item.contohSoal.tanya)}</div>
              <button class="example-toggle" data-action="toggleSummaryAnswer" data-id="\${item.id}">
                \${showAnswer ? '▲ Sembunyikan Pembahasan' : '▼ Lihat Kunci & Pembahasan'}
              </button>
              \${showAnswer ? \`
                <div class="example-ans">
                  <b>Kunci:</b> \${esc(item.contohSoal.kunci)}<br>
                  <b>💡 Pembahasan:</b> \${esc(item.contohSoal.bahas)}
                </div>
              \` : ''}
            </div>
          \` : ''}

          <div class="summary-card-foot">`;

const summaryPerhatikanReplacement = `          \${item.contohSoal ? \`
            <div class="example-box">
              <div class="example-q">❓ Contoh Uji Pemahaman:</div>
              <div style="font-size:12.5px;color:#334155;margin-bottom:6px">\${esc(item.contohSoal.tanya)}</div>
              <button class="example-toggle" data-action="toggleSummaryAnswer" data-id="\${item.id}">
                \${showAnswer ? '▲ Sembunyikan Pembahasan' : '▼ Lihat Kunci & Pembahasan'}
              </button>
              \${showAnswer ? \`
                <div class="example-ans">
                  <b>Kunci:</b> \${esc(item.contohSoal.kunci)}<br>
                  <b>💡 Pembahasan:</b> \${esc(item.contohSoal.bahas)}
                </div>
              \` : ''}
            </div>
          \` : ''}

          \${item.perhatikan && item.perhatikan.length ? \`
            <div class="warning-box">
              <div class="warning-box-title">⚠️ PERHATIKAN (Jebakan & Kesalahan Umum):</div>
              <ul>
                \${item.perhatikan.map(p => \`<li>\${esc(p)}</li>\`).join('')}
              </ul>
            </div>
          \` : ''}

          <div class="summary-card-foot">`;

if (!html.includes(summaryPerhatikanTarget)) {
  console.error('summaryPerhatikan target not found!');
  process.exit(1);
}
html = html.replace(summaryPerhatikanTarget, summaryPerhatikanReplacement);
console.log('✓ summaryCardHtml perhatikan box added');

// 8. Update quizView to format stimulus
const quizTextTarget = `<div class="question-text">\${esc(q.text)}</div>`;
const quizTextReplacement = `<div class="question-text">\${formatQuestionText(q.text)}</div>`;

if (!html.includes(quizTextTarget)) {
  console.error('quizText target not found!');
  process.exit(1);
}
html = html.replace(quizTextTarget, quizTextReplacement);
console.log('✓ quizView stimulus format updated');

// 9. Update resultView with wrong explanation & diagnostics
const resultTarget = `    function resultView() {
      const r = S.review;
      if (!r) return dashboardView();
      const pct = Math.round((100 * r.score) / Math.max(1, r.maximum));
      const entries = S.reviewOnlyWrong ? r.items.filter(x => !x.correct) : r.items;

      return \`
        \${card(\`
          <div style="text-align:center;padding:10px 0">
            <div style="font-size:52px">\${pct >= 80 ? '🏆' : (pct >= 60 ? '🌟' : '📚')}</div>
            <div class="eyebrow" style="color:#64748b">HASIL PENGERJAAN LATIHAN</div>
            <div class="result-score">\${r.score}<span style="font-size:24px;color:#94a3b8"> / \${r.maximum}</span></div>
            <h2>\${pct}% Ketepatan</h2>
            <p class="subtle">\${r.correct} dari \${r.total} soal dijawab dengan benar</p>
            <div class="btn-row" style="justify-content:center;margin-top:16px">
              <button class="btn" data-action="navigate" data-page="practice">Ulangi Latihan</button>
              <button class="btn secondary" data-action="toggleWrong">\${S.reviewOnlyWrong ? 'Tampilkan Semua Soal' : 'Lihat Yang Salah Saja'}</button>
              <button class="btn ghost" data-action="print">Cetak Hasil Evaluasi</button>
            </div>
          </div>
        \`)}
        
        \${heading('Kunci Jawaban & Pembahasan Lengkap', 'Pelajari pembahasan materi untuk soal yang belum dikuasai.')}
        \${entries.map(q => \`
          <div class="result-answer \${q.correct ? 'correct' : 'wrong'}">
            <div class="question-actions" style="margin-bottom:6px">
              <strong>\${esc(q.mapel)} • Kelas \${q.kelas} • \${esc(q.topik)}</strong>
              <span class="pill \${q.correct ? 'green' : 'red'}">\${q.correct ? 'Benar (+4)' : 'Belum Tepat (0)'}</span>
            </div>
            <div>\${esc(q.text)}</div>
            <p>
              Jawabanmu: <b>\${esc(q.chosen || 'Tidak dijawab')}</b> &nbsp;|&nbsp;
              Kunci: <b>\${esc(q.answer)}</b> — \${esc(q.options['ABCD'.indexOf(q.answer)] || '')}
            </p>
            <p>💡 <b>Pembahasan:</b> \${esc(q.explanation || 'Pembahasan belum tersedia.')}</p>
          </div>
        \`).join('') || card('<div class="empty">Hebat sekali! Tidak ada jawaban yang salah 🎉</div>')}
      \`;
    }`;

const resultReplacement = `    function resultView() {
      const r = S.review;
      if (!r) return dashboardView();
      const pct = Math.round((100 * r.score) / Math.max(1, r.maximum));
      const entries = S.reviewOnlyWrong ? r.items.filter(x => !x.correct) : r.items;
      const wrongCount = r.items.filter(x => !x.correct).length;

      return \`
        \${card(\`
          <div style="text-align:center;padding:10px 0">
            <div style="font-size:52px">\${pct >= 80 ? '🏆' : (pct >= 60 ? '🌟' : '📚')}</div>
            <div class="eyebrow" style="color:#64748b">HASIL PENGERJAAN LATIHAN</div>
            <div class="result-score">\${r.score}<span style="font-size:24px;color:#94a3b8"> / \${r.maximum}</span></div>
            <h2>\${pct}% Ketepatan</h2>
            <p class="subtle">\${r.correct} dari \${r.total} soal dijawab dengan benar (\${wrongCount} soal perlu dievaluasi)</p>
            <div class="btn-row" style="justify-content:center;margin-top:16px">
              <button class="btn" data-action="navigate" data-page="practice">Ulangi Latihan</button>
              <button class="btn \${S.reviewOnlyWrong ? 'gold' : 'secondary'}" data-action="toggleWrong">
                \${S.reviewOnlyWrong ? '📋 Tampilkan Semua Soal' : \`🔍 Evaluasi \${wrongCount} Soal yang Salah\`}
              </button>
              <button class="btn ghost" data-action="print">🖨️ Cetak Hasil Evaluasi</button>
            </div>
          </div>
        \`)}
        
        \${heading(
          S.reviewOnlyWrong ? 'Daftar Evaluasi Khusus Soal yang Salah' : 'Kunci Jawaban & Pembahasan Lengkap',
          S.reviewOnlyWrong ? 'Fokus pelajari diagnosa kesalahan dan langkah penyelesaian untuk soal yang belum tepat.' : 'Pelajari pembahasan materi untuk setiap soal guna memperkuat penguasaan konsep.'
        )}

        \${entries.map(q => {
          const chosenIdx = 'ABCD'.indexOf(q.chosen);
          const answerIdx = 'ABCD'.indexOf(q.answer);
          const chosenText = chosenIdx >= 0 ? q.options[chosenIdx] : (q.chosen || 'Tidak dijawab');
          const answerText = answerIdx >= 0 ? q.options[answerIdx] : q.answer;
          const category = detectErrorCategory(q);

          return \`
            <div class="result-answer \${q.correct ? 'correct' : 'wrong'}">
              <div class="question-actions" style="margin-bottom:10px">
                <div>
                  <span class="pill \${q.mapel === 'MATEMATIKA' ? 'blue' : 'green'}">\${esc(q.mapel)} • Kelas \${q.kelas}</span>
                  <span class="subtle" style="margin-left:6px"><b>Topik:</b> \${esc(q.topik)}</span>
                </div>
                <span class="pill \${q.correct ? 'green' : 'red'}">\${q.correct ? '✓ Jawaban Tepat (+4)' : '✗ Belum Tepat (0)'}</span>
              </div>

              \${formatQuestionText(q.text)}

              <div class="result-comparison" style="margin:12px 0;padding:10px 14px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;font-size:13px">
                <div style="display:flex;flex-wrap:wrap;gap:18px">
                  <div>
                    <span style="color:#64748b">Jawaban Kamu:</span> 
                    <b style="color:\${q.correct ? '#16a34a' : '#dc2626'}">\${q.chosen ? esc(q.chosen + ' — ' + chosenText) : '<span style="color:#94a3b8">(Tidak dijawab)</span>'}</b>
                  </div>
                  <div>
                    <span style="color:#64748b">Kunci Jawaban yang Benar:</span> 
                    <b style="color:#16a34a">\${esc(q.answer + ' — ' + answerText)}</b>
                  </div>
                </div>
              </div>

              \${!q.correct ? \`
                <div class="wrong-explanation-box">
                  <div class="wrong-explanation-header">
                    <span>🔍 DIAGNOSA & PENJELASAN KESALAHAN:</span>
                    <span class="pill red" style="font-size:11px">\${category}</span>
                  </div>
                  <div class="wrong-explanation-body">
                    <b>💡 Mengapa Jawaban Ini Salah & Pembahasan Langkah Benar:</b><br>
                    \${esc(q.explanation || 'Perhatikan konsep materi dan hitung kembali secara bertahap.')}
                  </div>
                  \${q.diagnosa ? \`
                    <div class="wrong-diagnostic-hint">
                      <b>🎯 Saran Pencegahan / Rumus Kunci:</b> \${esc(q.diagnosa)}
                    </div>
                  \` : ''}
                </div>
              \` : \`
                <div class="correct-explanation-box">
                  💡 <b>Pembahasan:</b> \${esc(q.explanation || 'Jawaban kamu tepat sekali!')}
                </div>
              \`}
            </div>
          \`;
        }).join('') || card('<div class="empty">Hebat sekali! Tidak ada jawaban yang salah 🎉</div>')}
      \`;
    }`;

if (!html.includes(resultTarget)) {
  console.error('resultView target not found!');
  process.exit(1);
}
html = html.replace(resultTarget, resultReplacement);
console.log('✓ resultView updated');

// 10. Update finalView stimulus format
const finalTarget = `<div class="question-text">\${esc(q?.text || 'Soal tidak ditemukan')}</div>`;
const finalReplacement = `<div class="question-text">\${formatQuestionText(q?.text || 'Soal tidak ditemukan')}</div>`;

if (!html.includes(finalTarget)) {
  console.error('finalView question target not found!');
  process.exit(1);
}
html = html.replace(finalTarget, finalReplacement);
console.log('✓ finalView question format updated');

// 11. Update settings sync button text and confirm
const syncBtnTarget = `<button class="btn secondary" data-action="syncSeedToCloud">☁️ Sinkronkan 234 Soal Awal ke Supabase</button>`;
const syncBtnReplacement = `<button class="btn secondary" data-action="syncSeedToCloud">☁️ Sinkronkan 1.000 Soal ke Supabase</button>`;

if (html.includes(syncBtnTarget)) {
  html = html.replace(syncBtnTarget, syncBtnReplacement);
  console.log('✓ sync button text updated');
}

const syncConfirmTarget = `if (!confirm('Unggah seluruh 234 bank soal awal ke Supabase database?')) return;`;
const syncConfirmReplacement = `if (!confirm(\`Unggah seluruh \${questions.length} bank soal ke Supabase database?\`)) return;`;

if (html.includes(syncConfirmTarget)) {
  html = html.replace(syncConfirmTarget, syncConfirmReplacement);
  console.log('✓ sync confirmation text updated');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html!');
