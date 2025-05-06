const products = [
  {
    id: 1,
    name: "Tapado Peludo",
    price: 50000,
    categories: ["abrigos"],
    images: ["/productos/Abrigos/peludito1.jpeg", "/productos/Abrigos/peludito2.jpeg"]
  },
  {
    id: 2,
    name: "Pollera Aries",
    price: 20000,
    categories: ["polleras-y-shorts"],
    images: ["/productos/PollerasYShorts/polleraAries1.jpeg", "/productos/PollerasYShorts/polleraAries2.jpeg"]
  },
  {
    id: 3,
    name: "Short Cruzado",
    price: 30000,
    categories: ["polleras-y-shorts"],
    images: ["/productos/PollerasYShorts/shortCruzado.jpeg"]
  },
  {
    id: 4,
    name: "Set Silver",
    price: 33000,
    categories: ["sets"],
    images: ["/productos/Sets/setSilver.jpeg"]
  },
  {
    id: 5,
    name: "Top de Jean",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topJean1.jpeg", "/productos/TopsYRemeras/topJean1.jpeg"]
  },
  {
    id: 6,
    name: "Remera Cruzada",
    price: 24000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/remeCruzada1.jpeg", "/productos/TopsYRemeras/remeCruzada1.jpeg"]
  },
  {
    id: 7,
    name: "Top Sara Marron",
    price: 21000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topSaraMarron.jpeg"]
  },
  {
    id: 8,
    name: "Top Silver Blanco",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topSilverBlanco.jpeg"]
  },
  {
    id: 9,
    name: "Top Sara Negro",
    price: 21000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topSaraNegro.jpeg"]
  },
  {
    id: 10,
    name: "Vestido Capricornio",
    price: 28000,
    categories: ["vestidos"],
    images: ["/productos/Vestidos/vestidoCapricornio.jpeg"]
  },
  {
    id: 11,
    name: "Vestido Silver",
    price: 25000,
    categories: ["vestidos"],
    images: ["/productos/Vestidos/vestidoSilver1.jpeg", "/productos/Vestidos/vestidoSilver2.jpeg"]
  },
  {
    id: 12,
    name: "Vestido Vienna",
    price: 26000,
    categories: ["vestidos"],
    images: ["/productos/Vestidos/vestidoVienna1.jpeg", "/productos/Vestidos/vestidoVienna2.jpeg"]
  },
  {
    id: 13,
    name: "Set Sienna",
    price: 33000,
    categories: ["sets"],
    images: ["/productos/Sets/setSienna1.jpeg", "/productos/Sets/setSienna2.jpeg"]
  },
  {
    id: 14,
    name: "Set Sophie",
    price: 33000,
    categories: ["sets"],
    images: ["/productos/Sets/setSophie1.jpeg", "/productos/Sets/setSophie1.jpeg"]
  },
  {
    id: 15,
    name: "Top Silver Negro",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topSilverNegro.jpeg"]
  },
  {
    id: 16,
    name: "Short Silver",
    price: 20000,
    categories: ["polleras-y-shorts"],
    images: ["/productos/PollerasYShorts/shortSilver.jpeg"]
  },
  {
    id: 17,
    name: "Poncho Lili",
    price: 55000,
    categories: ["abrigos"],
    images: ["/productos/Abrigos/PonchoLili1.jpeg", "/productos/Abrigos/PonchoLili2.jpeg"]
  },
  {
    id: 18,
    name: "Set Cloe",
    price: 95000,
    categories: ["abrigos", "sets"], 
    images: ["/productos/Sets/SetCloe1.jpeg", "/productos/Sets/SetCloe2.jpeg"]
  },
  {
    id: 19,
    name: "Sweater Haze",
    price: 45000,
    categories: ["abrigos"],
    images: ["/productos/Abrigos/SweaterHaze.jpeg"]
  },
  {
    id: 20,
    name: "Reme Tini",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/RemeTini.jpeg"]
  },
  {
    id: 21,
    name: "Pant Savage",
    price: 30000,
    categories: ["pantalones"], 
    images: ["/productos/Pantalones/PantSavage1.jpeg", "/productos/Pantalones/PantSavage2.jpeg", "/productos/Pantalones/PantSavage3.jpeg"]
  },
  {
    id: 22,
    name: "Cartera Aura",
    price: 32000,
    categories: ["accesorios"], 
    images: ["/productos/Accesorios/CarteraAura.jpeg"]
  },
  {
    id: 23,
    name: "Campera Velvet",
    price: 63000,
    categories: ["abrigos"], 
    images: ["/productos/Abrigos/CamperaVelvet1.jpeg", "/productos/Abrigos/CamperaVelvet2.jpeg"]
  },
  {
    id: 24,
    name: "Pant Noir",
    price: 50000,
    categories: ["pantalones"], 
    images: ["/productos/Pantalones/PantNoir1.jpeg", "/productos/Pantalones/PantNoir2.jpeg"]
  },
  {
    id: 25,
    name: "Set Selene",
    price: 42000,
    categories: ["sets"], 
    images: ["/productos/Sets/SetSelene1.jpeg", "/productos/Sets/SetSelene1.jpeg"]
  },
  {
    id: 26,
    name: "Top Selene",
    price: 20000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/Sets/SetSelene1.jpeg", "/productos/Sets/SetSelene1.jpeg"]
  },
  {
    id: 27,
    name: "Pant Selene",
    price: 30000,
    categories: ["pantalones"], 
    images: ["/productos/Sets/SetSelene1.jpeg", "/productos/Sets/SetSelene1.jpeg"]
  },
  {
    id: 28,
    name: "Top Garnet",
    price: 20000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/TopsYRemeras/TopGarnet1.jpeg", "/productos/TopsYRemeras/TopGarnet2.jpeg"]
  },
  {
    id: 29,
    name: "Top Terracotta",
    price: 22000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/TopsYRemeras/TopTerracotta1.jpeg", "/productos/TopsYRemeras/TopTerracotta2.jpeg"]
  },
];

export default products;
