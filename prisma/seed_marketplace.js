const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding 20 Hardcoded Avatar Frames...");

  await prisma.userTrade.deleteMany({});
  await prisma.trade.deleteMany({});

const frameDesigns = [
  { title: "Spark I – Soft Shine", image: "Frame1", price: 500 },
  { title: "Spark II – Starflare", image: "Frame2", price: 600 },
  { title: "Spark III – Golden Gleam", image: "Frame3", price: 700 },
  { title: "Spark IV – Bright Bloom ", image: "Frame4", price: 800 },
  { title: "Spark V – Tiny Glow", image: "Frame5", price: 900 },
  { title: "Journey I – Star Trail", image: "Frame6", price: 1000 },
  { title: "Journey II – Ember Run", image: "Frame7", price: 1200 },
  { title: "Journey III – Ripple Path", image: "Frame8", price: 1300 },
  { title: "Journey IV – Coral Drift", image: "Frame9", price: 1400 },
  { title: "Journey V – Forest Glow", image: "Frame10", price: 1500 },
  { title: "Kinetic I – Gilded Sparkle", image: "Frame11", price: 1600 },
  { title: "Kinetic II – Cyber Stream", image: "Frame12", price: 1700 },
  { title: "Kinetic III – Gilded Rift", image: "Frame13", price: 1800 },
  { title: "Kinetic IV – Nebula Drift", image: "Frame14", price: 1900 },
  { title: "Kinetic V – Lunar Bloom", image: "Frame15", price: 2000 },
  { title: "Magnitude I – Cobalt Wing", image: "Frame16", price: 2100 },
  { title: "Magnitude II – Crimson Ember", image: "Frame17", price: 2200 },
  { title: "Magnitude III – Amethyst Wing", image: "Frame18", price: 2300 },
  { title: "Magnitude IV – Void Scepter", image: "Frame19", price: 2400 },
  { title: "Magnitude V – Sovereign Crest", image: "Frame20", price: 2500 }
];

  for (const f of frameDesigns) {
    await prisma.trade.create({
      data: {
        title: f.title,
        description: `Bingkai eksklusif bertema ${f.title} untuk profil Anda.`,
        image: f.image,
        category: "FRAME",
        priceInPoints: f.price,
      }
    });
  }
  console.log("Berhasil menambahkan bingkai ke database!");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());