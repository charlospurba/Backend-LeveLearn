const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllPosts = async (currentUserId) => {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            user: { // Identitas Pembuat Post
                select: { id: true, name: true, image: true }
            },
            comments: { // Identitas Pemberi Komentar
                include: { 
                    user: { select: { name: true, image: true } } // WAJIB ADA
                },
                orderBy: { createdAt: 'asc' }
            },
            likes: {
                where: { userId: parseInt(currentUserId) || 0 },
                select: { userId: true }
            },
            _count: { select: { likes: true, comments: true } }
        }
    });
};

exports.createPost = async (userId, content, link, fileUrl, fileName) => {
    return await prisma.post.create({
        data: {
            userId: parseInt(userId),
            content,
            link,
            fileUrl,
            fileName
        },
        include: {
            user: { select: { name: true, image: true } },
            _count: { select: { likes: true, comments: true } }
        }
    });
};

exports.toggleLike = async (userId, postId) => {
    const existing = await prisma.like.findUnique({
        where: { postId_userId: { postId: parseInt(postId), userId: parseInt(userId) } }
    });

    if (existing) {
        return await prisma.like.delete({ where: { id: existing.id } });
    } else {
        return await prisma.like.create({
            data: { postId: parseInt(postId), userId: parseInt(userId) }
        });
    }
};

exports.addComment = async (userId, postId, content) => {
    return await prisma.comment.create({
        data: {
            userId: parseInt(userId),
            postId: parseInt(postId),
            content
        },
        include: { user: { select: { name: true, image: true } } }
    });
};

exports.updatePost = async (postId, userId, content) => {
    return await prisma.post.updateMany({
        where: {
            id: parseInt(postId),
            userId: parseInt(userId) // Keamanan: Pastikan user adalah pemiliknya
        },
        data: {
            content: content,
            updatedAt: new Date() // Pastikan field updatedAt diperbarui
        }
    });
};

// Hapus Postingan
exports.deletePost = async (postId, userId) => {
    return await prisma.post.deleteMany({
        where: {
            id: parseInt(postId),
            userId: parseInt(userId) // Keamanan: Pastikan user adalah pemiliknya
        }
    });
};