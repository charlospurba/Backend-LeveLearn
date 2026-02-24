const bcrypt = require('bcrypt');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function resetAllPasswords() {
    try {
        const defaultPassword = 'password'; // Password baru untuk SEMUA user
        
        // 1. Buat hash satu kali saja untuk dipakai semua user
        const hashedPassword = await bcrypt.hash(defaultPassword, 10);
        console.log("Hash baru berhasil dibuat. Memulai proses reset masal...");

        // 2. Update SEMUA baris di tabel user menggunakan updateMany
        const result = await prisma.user.updateMany({
            data: { password: hashedPassword }
        });

        console.log(`✅ Selesai! Berhasil mereset password untuk ${result.count} akun.`);
        console.log(`Semua user sekarang bisa login menggunakan password: ${defaultPassword}`);
    } catch (error) {
        console.error("❌ Gagal mereset password:", error.message);
    } finally {
        // Tutup koneksi database setelah selesai
        await prisma.$disconnect();
    }
}

resetAllPasswords();