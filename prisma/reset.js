const bcrypt = require('bcrypt');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function resetPassword() {
    try {
        // Tentukan username yang ingin direset dan password barunya
        const targetUsername = 'emelyy'; // Ubah nama ini jika ingin mereset akun lain
        const newPassword = 'password123'; // Password baru yang ingin digunakan

        // 1. Buat hash menggunakan bcrypt bawaan Node.js (menghasilkan awalan $2b$)
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        console.log(`Hash baru untuk ${targetUsername} berhasil dibuat:`, hashedPassword);

        // 2. Update ke database menggunakan Prisma
        await prisma.user.update({
            where: { username: targetUsername },
            data: { password: hashedPassword }
        });

        console.log(`✅ Berhasil! Password untuk ${targetUsername} telah di-reset menjadi: ${newPassword}`);
    } catch (error) {
        console.error("❌ Gagal mereset password:", error.message);
    } finally {
        // Tutup koneksi database setelah selesai
        await prisma.$disconnect();
    }
}

resetPassword();