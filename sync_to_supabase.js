const fs = require('fs');
const questions = require('./all_questions.json');

const url = 'https://lumwnqixpynmommycrjj.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXducWl4cHlubW9tbXljcmpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2NzMyOTQsImV4cCI6MjEwOTI0OTI5NH0.DdfGn5Eu8_8FZdNEBDc7pYKLYlhnAFWRYbyG4by09kU';

function toDbRow(q) {
  return {
    id: q.ID_SOAL,
    mapel: q.MAPEL,
    kelas: Number(q.KELAS) || 5,
    topik: q.TOPIK || 'Umum',
    babak: q.BABAK || 'PENYISIHAN',
    level: q.LEVEL || 'SEDANG',
    tipe: q.TIPE || 'PG',
    pertanyaan: q.PERTANYAAN,
    opsi_a: q.OPSI_A || '',
    opsi_b: q.OPSI_B || '',
    opsi_c: q.OPSI_C || '',
    opsi_d: q.OPSI_D || '',
    kunci: q.KUNCI || 'A',
    pembahasan: q.PEMBAHASAN || '',
    status: q.STATUS || 'AKTIF'
  };
}

async function runUpload() {
  console.log(`Mempersiapkan sinkronisasi ${questions.length} soal ke Supabase Cloud...`);
  const chunkSize = 100;
  const totalChunks = Math.ceil(questions.length / chunkSize);

  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, questions.length);
    const chunk = questions.slice(start, end).map(toDbRow);

    let retries = 3;
    let ok = false;
    while (retries > 0 && !ok) {
      try {
        const res = await fetch(url + '/rest/v1/cc_questions', {
          method: 'POST',
          headers: {
            'apikey': key,
            'Authorization': 'Bearer ' + key,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify(chunk)
        });

        if (res.status === 200 || res.status === 201) {
          ok = true;
          console.log(`[${i + 1}/${totalChunks}] Berhasil sync soal ${start + 1} - ${end} (${chunk.length} soal)`);
        } else {
          const txt = await res.text();
          console.warn(`[${i + 1}/${totalChunks}] HTTP ${res.status}: ${txt}. Coba lagi (${retries})...`);
          retries--;
          await new Promise(r => setTimeout(r, 1000));
        }
      } catch (err) {
        console.warn(`[${i + 1}/${totalChunks}] Error: ${err.message}. Coba lagi (${retries})...`);
        retries--;
        await new Promise(r => setTimeout(r, 1000));
      }
    }

    if (!ok) {
      console.error(`Gagal sync chunk ${i + 1} setelah beberapa percobaan!`);
    }
  }

  console.log('✓ Sinkronisasi ke Supabase selesai!');
}

runUpload();
