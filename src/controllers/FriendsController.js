const friendsService = require("../services/FriendsService");

const getPosts = async (req, res) => {
    try {
        // currentUserId dikirim dari Flutter via query params (?currentUserId=5)
        const { currentUserId } = req.query; 
        const posts = await friendsService.getAllPosts(currentUserId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil postingan", details: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        // Data ini dikirim dari Flutter dalam format JSON
        const { userId, content, link, fileUrl, fileName } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "User ID diperlukan" });
        }

        // Validasi: Minimal harus ada konten teks atau file
        if (!content && !fileUrl) {
            return res.status(400).json({ message: "Postingan tidak boleh kosong" });
        }

        const post = await friendsService.createPost(userId, content, link, fileUrl, fileName);
        res.status(201).json(post);
    } catch (error) {
        console.error("Controller Error:", error);
        res.status(500).json({ message: "Gagal membuat postingan", details: error.message });
    }
};

const handleLike = async (req, res) => {
    try {
        const { userId, postId } = req.body;
        if (!userId || !postId) {
            return res.status(400).json({ message: "UserId dan PostId diperlukan" });
        }
        await friendsService.toggleLike(userId, postId);
        res.status(200).json({ success: true, message: "Like berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const handleComment = async (req, res) => {
    try {
        const { userId, postId, content } = req.body;
        if (!userId || !postId || !content) {
            return res.status(400).json({ message: "Data komentar tidak lengkap" });
        }
        const comment = await friendsService.addComment(userId, postId, content);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params; // ID Post dari URL
        const { userId, content } = req.body; // userId dan konten baru dari Body

        const result = await friendsService.updatePost(id, userId, content);
        
        if (result.count === 0) {
            return res.status(403).json({ message: "Bukan pemilik postingan atau post tidak ditemukan" });
        }
        
        res.status(200).json({ message: "Postingan berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params; // ID Post dari URL
        const { userId } = req.body; // userId pengirim

        const result = await friendsService.deletePost(id, userId);

        if (result.count === 0) {
            return res.status(403).json({ message: "Bukan pemilik postingan atau post tidak ditemukan" });
        }

        res.status(200).json({ message: "Postingan berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPosts, createPost, handleLike, handleComment, updatePost, deletePost };