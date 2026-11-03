const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('all_questions.json', 'utf8'));

function sqlEscape(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/'/g, "''") + "'";
}

let sql = '-- ====================================================================\n';
sql += '-- SEED DATA: 234 SOAL CERDAS CERMAT MIPAS (SUPABASE POSTGRESQL)\n';
sql += '-- ====================================================================\n\n';
sql += 'INSERT INTO cc_questions (id, mapel, kelas, topik, babak, level, tipe, pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, kunci, pembahasan, status)\nVALUES\n';

const values = questions.map(q => {
  return '(' + [
    sqlEscape(q.ID_SOAL),
    sqlEscape(q.MAPEL),
    q.KELAS,
    sqlEscape(q.TOPIK),
    sqlEscape(q.BABAK),
    sqlEscape(q.LEVEL),
    sqlEscape(q.TIPE),
    sqlEscape(q.PERTANYAAN),
    sqlEscape(q.OPSI_A),
    sqlEscape(q.OPSI_B),
    sqlEscape(q.OPSI_C),
    sqlEscape(q.OPSI_D),
    sqlEscape(q.KUNCI),
    sqlEscape(q.PEMBAHASAN),
    sqlEscape(q.STATUS)
  ].join(', ') + ')';
});

sql += values.join(',\n') + '\n';
sql += 'ON CONFLICT (id) DO UPDATE SET\n';
sql += '  mapel = EXCLUDED.mapel,\n';
sql += '  kelas = EXCLUDED.kelas,\n';
sql += '  topik = EXCLUDED.topik,\n';
sql += '  babak = EXCLUDED.babak,\n';
sql += '  level = EXCLUDED.level,\n';
sql += '  tipe = EXCLUDED.tipe,\n';
sql += '  pertanyaan = EXCLUDED.pertanyaan,\n';
sql += '  opsi_a = EXCLUDED.opsi_a,\n';
sql += '  opsi_b = EXCLUDED.opsi_b,\n';
sql += '  opsi_c = EXCLUDED.opsi_c,\n';
sql += '  opsi_d = EXCLUDED.opsi_d,\n';
sql += '  kunci = EXCLUDED.kunci,\n';
sql += '  pembahasan = EXCLUDED.pembahasan,\n';
sql += '  status = EXCLUDED.status,\n';
sql += '  updated_at = NOW();\n';

fs.writeFileSync('supabase/seed.sql', sql);
console.log('supabase/seed.sql successfully generated with ' + questions.length + ' questions.');
