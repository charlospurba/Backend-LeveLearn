const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 1. Fungsi Tambahan: Ambil Material berdasarkan Chapter ID (Penting untuk Flutter)
exports.getMaterialByChapterId = async (chapterId) => {
    try {
        const material = await prisma.material.findFirst({
            where: {
                chapterId: chapterId
            }
        });
        return material;
    } catch (error) {
        throw new Error(`Error retrieving material for chapter ${chapterId}: ` + error.message);
    }
};

// 2. Ambil Semua Material
exports.getAllMaterials = async () => {
    try {
        const materials = await prisma.material.findMany(); 
        return materials;
    } catch (error) {
        throw new Error(error.message);
    }
};

// 3. Ambil Material Berdasarkan ID Unik
exports.getMaterialById = async (id) => {
    try {
        const material = await prisma.material.findUnique({
            where: {
                id: id
            },
        });
        return material;
    } catch (error) {
        throw new Error(`Error retrieving material with id ${id}`);
    }
};

// 4. Buat Material Baru
exports.createMaterial = async (newData) => {
    try {
        const newMaterial = await prisma.material.create({
            data: newData
        });
        return newMaterial;
    } catch (error) {
        throw new Error(error.message);
    }
};

// 5. Update Material
exports.updateMaterial = async(id, updateData) => {
    try {
        const material = await prisma.material.update({
            where: { id: id },      
            data: updateData,     
        });
        return material;  
    } catch (error) {
        throw new Error(error.message);  
    }
};

// 6. Hapus Material
exports.deleteMaterial = async(id) => {
    try {
        await prisma.material.delete({
            where: { id: id },
        });
        return `Successfully deleted material with id: ${id}`;
    } catch (error) {
        throw new Error('Error deleting material: ' + error.message); 
    }
};