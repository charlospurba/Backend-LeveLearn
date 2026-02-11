const express = require("express");
const multer = require("multer");
const path = require("path");
const os = require("os");

const authRoutes = require("./routes/AuthRoutes.js");
const authMiddleware = require("./middlewares/AuthMiddleware.js");
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

const cors = require("cors");
require("dotenv").config();

const app = express();

// --- TETAP MENJAGA RAW BODY DIAGNOSTICS ANDA ---
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf?.toString() || "";
    },
  })
);

// Request logger
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${
      req.ip
    }`
  );
  next();
});

// CORS configuration - Dibuat lebih eksplisit agar tidak "Lost Connection"
app.use(
  cors({
    origin: true,
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.options("*", cors()); 

// Diagnostics for login request (Tetap ada)
app.use((req, res, next) => {
  if (req.method === "POST" && req.path === "/api/login") {
    console.log("--- raw request diagnostics ---");
    console.log("Content-Type:", req.headers["content-type"]);
    console.log("Content-Length:", req.headers["content-length"]);
    console.log("Raw body:", req.rawBody);
    console.log("--- end diagnostics ---");
  }
  next();
});

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", chapterRoutes);
app.use("/api", materialRoutes);
app.use("/api", assessmentRoutes);
app.use("/api", assignmentRoutes);
app.use("/api", userCourseRoutes);
app.use("/api", userChapterRoutes);
app.use("/api", badgeRoutes);
app.use("/api", userBadgeRoutes);
app.use("/api", tradeRoutes);
app.use("/api", userTradeRoutes);
app.use("/api", activityRoute);
app.use("/api/assignment", assignmentRoutes);
app.use("/api/certificate", certificateRoutes);


// Health check
app.get("/api/ping", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Bad JSON handling
app.use((err, req, res, next) => {
  if (
    err &&
    (err instanceof SyntaxError || err.type === "entity.parse.failed")
  ) {
    console.error("JSON parse error:", err.message);
    return res
      .status(400)
      .json({ message: "Invalid JSON payload", detail: err.message });
  }
  next(err);
});

// Startup
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
  console.log("Server started:");
  console.log(`  PID : ${process.pid}`);
  console.log(`  ENV : ${process.env.NODE_ENV || "development"}`);
  console.log(`  HOST: ${HOST}`);
  console.log(`  PORT: ${PORT}`);
  console.log("  Accessible:");
  console.log(`    - Local: http://localhost:${PORT}/api`);
  const lanAddrs = getLanAddresses();
  if (lanAddrs.length) {
    lanAddrs.forEach((addr) =>
      console.log(`    - On LAN: http://${addr}:${PORT}/api`)
    );
  }
});