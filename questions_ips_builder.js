// =============================================================================
// BUILDER 1.000 SOAL IPS BERKUALITAS TINGGI (100% UNIK & BEBAS DUPLIKAT)
// 10 Topik Kurikulum × (20 Mudah + 40 Sedang + 20 Sulit + 20 HOTS) = 1.000 Soal
// =============================================================================

const t1 = require('./ips_t1');
const t2 = require('./ips_t2');
const t3 = require('./ips_t3');
const t4 = require('./ips_t4');
const t5 = require('./ips_t5');
const t6 = require('./ips_t6');
const t7 = require('./ips_t7');
const t8 = require('./ips_t8');
const t9 = require('./ips_t9');
const t10 = require('./ips_t10');
const { renderLinimasaSejarah, renderPetaZonaWaktu } = require('./svg_helpers');

function createSafeOptions(correct, w1, w2, w3, seed) {
  let list = [String(correct).trim()];
  const cand = [String(w1).trim(), String(w2).trim(), String(w3).trim()];
  let delta = 1;

  cand.forEach(c => {
    let finalOpt = c;
    while (list.includes(finalOpt) || !finalOpt) {
      finalOpt = finalOpt + ' (opsi ' + delta + ')';
      delta++;
    }
    list.push(finalOpt);
  });

  const s = Math.abs(seed || 1);
  const p1 = s % 4;
  const p2 = (s + 1) % 4;
  const temp = list[p1];
  list[p1] = list[p2];
  list[p2] = temp;

  const correctIndex = list.indexOf(String(correct).trim());
  const kunci = 'ABCD'[correctIndex >= 0 ? correctIndex : 0];

  return { A: list[0], B: list[1], C: list[2], D: list[3], kunci };
}

function buildIpsQuestions() {
  const list = [];
  const globalUsedText = new Set();

  function addQ(q) {
    const cleanText = q.PERTANYAAN.trim();
    const norm = cleanText.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (globalUsedText.has(norm)) {
      throw new Error(`DUPLICATE IPS QUESTION DETECTED: "${cleanText}"`);
    }
    globalUsedText.add(norm);
    list.push(q);
  }

  const allTopics = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];

  allTopics.forEach((topikObj, tIdx) => {
    const topicName = topikObj.name;
    const diffs = [
      { name: 'Mudah', arr: topikObj.mudah },
      { name: 'Sedang', arr: topikObj.sedang },
      { name: 'Sulit', arr: topikObj.sulit },
      { name: 'HOTS', arr: topikObj.hots }
    ];

    diffs.forEach(diff => {
      diff.arr.forEach((item, itemIdx) => {
        const [qText, corr, w1, w2, w3, expl] = item;
        const seed = tIdx * 1000 + diff.name.length * 100 + itemIdx * 7;
        const opt = createSafeOptions(corr, w1, w2, w3, seed);

        let svg = null;
        if (tIdx === 5 && itemIdx % 5 === 0) {
          // Topik 6: Proklamasi Sejarah
          svg = renderLinimasaSejarah();
        } else if (tIdx === 7 && itemIdx % 5 === 0) {
          // Topik 8: Zona Waktu
          svg = renderPetaZonaWaktu();
        }

        addQ({
          MAPEL: 'IPS',
          KELAS: 'Kelas 4-6',
          TOPIK: topicName,
          BABAK: 'Penyisihan',
          LEVEL: diff.name.toUpperCase(),
          TIPE: 'PG',
          PERTANYAAN: qText,
          OPSI_A: opt.A,
          OPSI_B: opt.B,
          OPSI_C: opt.C,
          OPSI_D: opt.D,
          KUNCI: opt.kunci,
          PEMBAHASAN: expl,
          DIAGNOSA: `Topik: ${topicName} (Level: ${diff.name})`,
          STATUS: 'AKTIF',
          STIMULUS_GAMBAR: svg || ''
        });
      });
    });
  });

  return list;
}

module.exports = { buildIpsQuestions };
