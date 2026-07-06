const bcrypt = require('bcrypt');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function resetAllPasswords() {
    try {
        const defaultPassword = 'password'; 
        
        const hashedPassword = await bcrypt.hash(defaultPassword, 10);
        console.log("Hash baru berhasil dibuat. Memulai proses reset masal...");

        const result = await prisma.user.updateMany({
            data: { password: hashedPassword }
        });

        console.log(`✅ Selesai! Berhasil mereset password untuk ${result.count} akun.`);
        console.log(`Semua user sekarang bisa login menggunakan password: ${defaultPassword}`);
    } catch (error) {
        console.error("❌ Gagal mereset password:", error.message);
    } finally {
        await prisma.$disconnect();
    }
}

resetAllPasswords();