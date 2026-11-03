-- ====================================================================
-- SKEMA DATABASE ARENA CERDAS CERMAT MIPAS (SUPABASE POSTGRESQL)
-- ====================================================================
-- Jalankan skrip ini di SQL Editor pada Dashboard Supabase Anda.
-- Dashboard: https://supabase.com/dashboard/project/_/sql

-- 1. Tabel Soal (Questions)
CREATE TABLE IF NOT EXISTS cc_questions (
    id TEXT PRIMARY KEY,
    mapel TEXT NOT NULL CHECK (mapel IN ('MATEMATIKA', 'IPA', 'IPS')),
    kelas INTEGER NOT NULL CHECK (kelas IN (4, 5, 6)),
    topik TEXT NOT NULL,
    babak TEXT NOT NULL DEFAULT 'UMUM',
    level TEXT NOT NULL DEFAULT 'SEDANG',
    tipe TEXT NOT NULL DEFAULT 'PG',
    pertanyaan TEXT NOT NULL,
    opsi_a TEXT,
    opsi_b TEXT,
    opsi_c TEXT,
    opsi_d TEXT,
    kunci TEXT NOT NULL,
    pembahasan TEXT,
    status TEXT NOT NULL DEFAULT 'AKTIF' CHECK (status IN ('AKTIF', 'NONAKTIF')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indeks untuk pencarian dan pemfilteran cepat
CREATE INDEX IF NOT EXISTS idx_cc_questions_mapel_kelas ON cc_questions (mapel, kelas);
CREATE INDEX IF NOT EXISTS idx_cc_questions_status ON cc_questions (status);
CREATE INDEX IF NOT EXISTS idx_cc_questions_babak ON cc_questions (babak);

-- 2. Tabel Tim (Teams)
CREATE TABLE IF NOT EXISTS cc_teams (
    id TEXT PRIMARY KEY,
    nama_tim TEXT NOT NULL,
    anggota_1 TEXT,
    anggota_2 TEXT,
    anggota_3 TEXT,
    juru_bicara TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabel Sesi Latihan & Ujian (Sessions)
CREATE TABLE IF NOT EXISTS cc_sessions (
    id TEXT PRIMARY KEY,
    id_tim TEXT,
    nama_tim TEXT NOT NULL,
    mode TEXT NOT NULL,
    mulai_ms BIGINT NOT NULL,
    batas_ms BIGINT DEFAULT 0,
    selesai_ms BIGINT,
    skor INTEGER,
    maks_skor INTEGER,
    status TEXT NOT NULL DEFAULT 'BERJALAN' CHECK (status IN ('BERJALAN', 'SELESAI')),
    soal_ids JSONB DEFAULT '[]'::jsonb,
    jawaban JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cc_sessions_status ON cc_sessions (status);
CREATE INDEX IF NOT EXISTS idx_cc_sessions_selesai_ms ON cc_sessions (selesai_ms DESC);

-- 4. Tabel Pertandingan Final (Final Matches)
CREATE TABLE IF NOT EXISTS cc_final_matches (
    id TEXT PRIMARY KEY,
    state JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tabel Pengaturan Aplikasi (Settings)
CREATE TABLE IF NOT EXISTS cc_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Masukkan pengaturan awal jika belum ada
INSERT INTO cc_settings (key, value)
VALUES 
    ('NAMA_SEKOLAH', 'UPTD SPF SD Inpres Tangkala II'),
    ('NAMA_PEMBINA', 'Budianto, S.Pd., Gr.'),
    ('JUDUL', 'ARENA CERDAS CERMAT MIPAS 2026'),
    ('PIN_GURU', '123456')
ON CONFLICT (key) DO NOTHING;

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
-- Aktifkan RLS untuk keamanan data
ALTER TABLE cc_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cc_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE cc_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cc_final_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE cc_settings ENABLE ROW LEVEL SECURITY;

-- Policy untuk cc_questions: Semua pengunjung bisa membaca soal AKTIF
DROP POLICY IF EXISTS "Public can view active questions" ON cc_questions;
CREATE POLICY "Public can view active questions" ON cc_questions
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can insert or update questions" ON cc_questions;
CREATE POLICY "Public can insert or update questions" ON cc_questions
    FOR ALL USING (true);

-- Policy untuk cc_teams & cc_sessions: Publik bisa membuat sesi & membaca sesi mereka
DROP POLICY IF EXISTS "Public can access sessions" ON cc_sessions;
CREATE POLICY "Public can access sessions" ON cc_sessions
    FOR ALL USING (true);

DROP POLICY IF EXISTS "Public can access teams" ON cc_teams;
CREATE POLICY "Public can access teams" ON cc_teams
    FOR ALL USING (true);

-- Policy untuk cc_final_matches: Akses pertandingan
DROP POLICY IF EXISTS "Public can access final matches" ON cc_final_matches;
CREATE POLICY "Public can access final matches" ON cc_final_matches
    FOR ALL USING (true);

-- Policy untuk cc_settings: Publik bisa membaca pengaturan
DROP POLICY IF EXISTS "Public can access settings" ON cc_settings;
CREATE POLICY "Public can access settings" ON cc_settings
    FOR ALL USING (true);
