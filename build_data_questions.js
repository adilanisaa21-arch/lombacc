const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('all_questions.json', 'utf8'));
const content = '/**\n * SEED DATA 234 SOAL CERDAS CERMAT MIPAS (OFFLINE-FIRST / FALLBACK)\n */\nconst QUESTIONS_SEED = ' + JSON.stringify(questions, null, 2) + ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = QUESTIONS_SEED;\n}\n';
fs.writeFileSync('data_questions.js', content);
console.log('data_questions.js written with ' + questions.length + ' questions.');
