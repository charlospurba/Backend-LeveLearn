const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding 20 Hardcoded Avatar Frames...");

//   await prisma.userTrade.deleteMany({});
//   await prisma.trade.deleteMany({});

  const frameDesigns = [
    { title: "Elite Gold", image: "DESIGN_GOLD_ELITE", price: 2500 },
    { title: "Neon Pulse", image: "DESIGN_NEON_CYBER", price: 1800 },
    { title: "Emerald Nature", image: "DESIGN_NATURE_GREEN", price: 1200 },
    { title: "Deep Ocean", image: "DESIGN_OCEAN_BLUE", price: 1500 },
    { title: "Arcane Circle", image: "DESIGN_ARCANE_PURPLE", price: 2200 },
    { title: "Stellar Cosmos", image: "DESIGN_STELLAR_STARS", price: 2800 },
    { title: "Stone Forge", image: "DESIGN_STONE_GRAY", price: 1000 },
    { title: "Quantum Rift", image: "DESIGN_QUANTUM_ORANGE", price: 2000 },
    { title: "Spectrum Aura", image: "DESIGN_SPECTRUM_RAINBOW", price: 3000 },
    { title: "Frozen Ice", image: "DESIGN_FROST_WHITE", price: 1600 },
    { title: "Shadow Stealth", image: "DESIGN_SHADOW_BLACK", price: 1400 },
    { title: "Crimson Fury", image: "DESIGN_CRIMSON_RED", price: 1900 },
    { title: "Cyber Glitch", image: "DESIGN_GLITCH_MAGENTA", price: 2100 },
    { title: "Royal Silver", image: "DESIGN_SILVER_ROYAL", price: 2300 },
    { title: "Autumn Breeze", image: "DESIGN_AUTUMN_BROWN", price: 1100 },
    { title: "Electric Bolt", image: "DESIGN_ELECTRIC_YELLOW", price: 1700 },
    { title: "Toxic Bio", image: "DESIGN_TOXIC_LIME", price: 1300 },
    { title: "Zen Bamboo", image: "DESIGN_ZEN_BAMBOO", price: 900 },
    { title: "Midnight Sun", image: "DESIGN_MIDNIGHT_NAVY", price: 2400 },
    { title: "Lava Core", image: "DESIGN_LAVA_HOT", price: 2600 }
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
  console.log("Berhasil menambahkan 20 bingkai ke database!");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());