const express = require("express");
const path = require("path");
const os = require("os");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const authRoutes = require("./routes/AuthRoutes.js");
const userRoutes = require("./routes/UserRouter.js");
const courseRoutes = require("./routes/CourseRouter.js");
const userCourseRoutes = require("./routes/UserCourseRouter.js");
const userChapterRoutes = require("./routes/UserChapterRouter.js");
const chapterRoutes = require("./routes/ChapterRouter.js");
const materialRoutes = require("./routes/MaterialRouter.js");
const assessmentRoutes = require("./routes/AssessmentRouter.js");
const assignmentRoutes = require("./routes/AssignmentRouter.js");
const badgeRoutes = require("./routes/BadgeRouter.js");
const userBadgeRoutes = require("./routes/UserBadgeRouter.js");
const tradeRoutes = require("./routes/TradeRouter.js");
const userTradeRoutes = require("./routes/UserTradeRouter.js");
const activityRoute = require('./routes/ActivityRoute');
const certificateRoutes = require("./routes/CertificateRouter");
const friendsRoutes = require("./routes/FriendsRouter");

const app = express();

// 1. Middleware Dasar & CORS
app.use(cors({
    origin: true,
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
}));

app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf?.toString() || "";
    },
}));

// 2. Akses File Statis (PENTING untuk Preview Gambar/PDF)
// Jika upload ke public/uploads/documents, akses via http://localhost:7000/uploads/documents/...
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// 3. Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.ip}`);
    next();
});

// 4. API Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", chapterRoutes);
app.use("/api", materialRoutes);
app.use("/api", assessmentRoutes);
app.use("/api", assignmentRoutes); // Mount utama assignment
app.use("/api", userCourseRoutes);
app.use("/api", userChapterRoutes);
app.use("/api", badgeRoutes);
app.use("/api", userBadgeRoutes);
app.use("/api", tradeRoutes);
app.use("/api", userTradeRoutes);
app.use("/api", activityRoute);
app.use("/api/certificate", certificateRoutes);
app.use("/api", friendsRoutes);

// Health check
app.get("/api/ping", (req, res) => {
    res.json({ ok: true, time: new Date().toISOString() });
});

// 5. Error Handling (Bad JSON)
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error("JSON parse error:", err.message);
        return res.status(400).json({ message: "Invalid JSON payload", detail: err.message });
    }
    next(err);
});

// 6. Server Listening
const PORT = process.env.PORT || 7000;
const HOST = process.env.HOST || "0.0.0.0";

function getLanAddresses() {
    const nets = os.networkInterfaces();
    const addresses = [];
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === "IPv4" && !net.internal) {
                addresses.push(net.address);
            }
        }
    }
    return addresses;
}

app.listen(PORT, HOST, () => {
    console.log(`\n🚀 Server started on Port ${PORT}`);
    console.log(`🏠 Local: http://localhost:${PORT}/api`);
    const lanAddrs = getLanAddresses();
    lanAddrs.forEach((addr) => console.log(`🌐 LAN  : http://${addr}:${PORT}/api`));
});