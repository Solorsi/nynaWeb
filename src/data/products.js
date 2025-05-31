const products = [
  {
    id: 1,
    name: "Tapado Peludo",
    price: 50000,
    categories: ["abrigos"],
    images: ["/productos/Abrigos/peludito1.jpeg", "/productos/Abrigos/peludito2.jpeg"],
    stock: 1
  },
  {
    id: 2,
    name: "Pollera Aries",
    price: 20000,
    categories: ["polleras-y-shorts"],
    images: ["/productos/PollerasYShorts/polleraAries1.jpeg", "/productos/PollerasYShorts/polleraAries2.jpeg"],
    stock: 2
  },
  {
    id: 3,
    name: "Short Cruzado",
    price: 30000,
    categories: ["polleras-y-shorts"],
    images: ["/productos/PollerasYShorts/shortCruzado.jpeg"],
    stock: 1
  },
  {
    id: 4,
    name: "Set Silver",
    price: 33000,
    categories: ["sets"],
    images: ["/productos/Sets/setSilver.jpeg"],
    stock: 1
  },
  {
    id: 5,
    name: "Top de Jean",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topJean1.jpeg", "/productos/TopsYRemeras/topJean1.jpeg"],
    stock: 4
  },
  {
    id: 6,
    name: "Remera Cruzada",
    price: 24000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/remeCruzada1.jpeg", "/productos/TopsYRemeras/remeCruzada1.jpeg"],
    stock: 0
  },
  {
    id: 7,
    name: "Top Sara Marron",
    price: 21000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/TopSara3.jpeg","/productos/TopsYRemeras/topSaraMarron.jpeg"],
    stock: 2
  },
  {
    id: 8,
    name: "Top Silver Blanco",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topSilverBlanco.jpeg"],
    stock: 1
  },
  {
    id: 9,
    name: "Top Sara Negro",
    price: 21000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topSaraNegro.jpeg"],
    stock: 3
  },
  {
    id: 10,
    name: "Vestido Capricornio",
    price: 28000,
    categories: ["vestidos"],
    images: ["/productos/Vestidos/vestidoCapricornio.jpeg"],
    stock: 1
  },
  {
    id: 11,
    name: "Vestido Silver",
    price: 25000,
    categories: ["vestidos"],
    images: ["/productos/Vestidos/vestidoSilver1.jpeg", "/productos/Vestidos/vestidoSilver2.jpeg"],
    stock: 1
  },
  {
    id: 12,
    name: "Vestido Vienna",
    price: 26000,
    categories: ["vestidos"],
    images: ["/productos/Vestidos/vestidoVienna1.jpeg", "/productos/Vestidos/vestidoVienna2.jpeg"],
    stock: 0
  },
  {
    id: 13,
    name: "Set Sienna",
    price: 33000,
    categories: ["sets"],
    images: ["/productos/Sets/setSienna1.jpeg", "/productos/Sets/setSienna2.jpeg", "/productos/Sets/setSienna3.jpeg"],
    stock: 1
  },
  {
    id: 14,
    name: "Set Sophie",
    price: 33000,
    categories: ["sets"],
    images: ["/productos/Sets/setSophie1.jpeg", "/productos/Sets/setSophie1.jpeg"],
    stock: 1
  },
  {
    id: 15,
    name: "Top Silver Negro",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/topSilverNegro.jpeg"],
    stock: 3
  },
  {
    id: 16,
    name: "Short Silver",
    price: 20000,
    categories: ["polleras-y-shorts"],
    images: ["/productos/PollerasYShorts/shortSilver.jpeg"],
    stock: 1
  },
  {
    id: 17,
    name: "Poncho Lili",
    price: 55000,
    categories: ["abrigos"],
    images: ["/productos/Abrigos/PonchoLili1.jpeg", "/productos/Abrigos/PonchoLili2.jpeg"],
    stock: 1
  },
  {
    id: 18,
    name: "Set Cloe",
    price: 95000,
    categories: ["abrigos", "sets"], 
    images: ["/productos/Sets/SetCloe1.jpeg", "/productos/Sets/SetCloe2.jpeg"],
    stock: 1
  },
  {
    id: 19,
    name: "Sweater Haze",
    price: 55000,
    categories: ["abrigos"],
    images: ["/productos/Abrigos/SweaterHaze.jpeg"],
    stock: 0
  },
  {
    id: 20,
    name: "Reme Tini",
    price: 20000,
    categories: ["tops-y-remeras"],
    images: ["/productos/TopsYRemeras/RemeTini.jpeg"],
    stock: 1
  },
  {
    id: 21,
    name: "Pant Savage",
    price: 30000,
    categories: ["pantalones"], 
    images: ["/productos/Pantalones/PantSavage1.jpeg", "/productos/Pantalones/PantSavage2.jpeg", "/productos/Pantalones/PantSavage3.jpeg"],
    stock: 0
  },
  {
    id: 22,
    name: "Cartera Aura",
    price: 32000,
    categories: ["accesorios"], 
    images: ["/productos/Accesorios/CarteraAura1.jpeg","/productos/Accesorios/CarteraAura.jpeg"],
    stock: 1
  },
  {
    id: 23,
    name: "Campera Velvet",
    price: 63000,
    categories: ["abrigos"], 
    images: ["/productos/Abrigos/CamperaVelvet1.jpeg", "/productos/Abrigos/CamperaVelvet2.jpeg"],
    stock: 1
  },
  {
    id: 24,
    name: "Pant Noir",
    price: 50000,
    categories: ["pantalones"], 
    images: ["/productos/Pantalones/PantNoir1.jpeg", "/productos/Pantalones/PantNoir2.jpeg", "/productos/Pantalones/PantNoir3.jpeg"],
    stock: 1
  },
  {
    id: 25,
    name: "Set Selene",
    price: 42000,
    categories: ["sets"], 
    images: ["/productos/Sets/SetSelene1.jpeg", "/productos/Sets/SetSelene2.jpeg", "/productos/Sets/SetSelene3.jpeg"],
    stock: 2
  },
  {
    id: 26,
    name: "Top Selene",
    price: 20000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/Sets/SetSelene1.jpeg", "/productos/Sets/SetSelene2.jpeg", "/productos/Sets/SetSelene3.jpeg"],
    stock: 3
  },
  {
    id: 27,
    name: "Pant Selene",
    price: 30000,
    categories: ["pantalones"], 
    images: ["/productos/Sets/SetSelene1.jpeg", "/productos/Sets/SetSelene2.jpeg", "/productos/Sets/SetSelene3.jpeg"],
    stock: 2
  },
  {
    id: 28,
    name: "Top Garnet",
    price: 20000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/TopsYRemeras/TopGarnet1.jpeg", "/productos/TopsYRemeras/TopGarnet2.jpeg"],
    stock: 1
  },
  {
    id: 29,
    name: "Top Terracotta",
    price: 22000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/TopsYRemeras/TopTerracotta1.jpeg", "/productos/TopsYRemeras/TopTerracotta2.jpeg"],
    stock: 0
  },
  {
    id: 30,
    name: "Short Velvet",
    price: 22000,
    categories: ["polleras-y-shorts"], 
    images: ["/productos/PollerasYShorts/ShortVelvet1.jpeg", "/productos/PollerasYShorts/ShortVelvet2.jpeg"],
    stock: 1
  },
  {
    id: 31,
    name: "Camperita Ona Talle S",
    price: 25000,
    categories: ["deportivo-importado"], 
    images: ["/productos/Deportivo/CamperitaOna1.jpeg", "/productos/Deportivo/CamperitaOna2.jpeg", "/productos/Deportivo/CamperitaOna3.jpeg"],
    stock: 3
  },
  {
    id: 32,
    name: "Set Luma Talle S",
    price: 45000,
    categories: ["deportivo-importado"], 
    images: ["/productos/Deportivo/SetLuma1.jpeg", "/productos/Deportivo/SetLuma2.jpeg"],
    stock: 1
  },
  {
    id: 33,
    name: "Set Nube Tallle S",
    price: 45000,
    categories: ["deportivo-importado"], 
    images: ["/productos/Deportivo/SetNube1.jpeg", "/productos/Deportivo/SetNube2.jpeg", "/productos/Deportivo/SetNube3.jpeg"],
    stock: 1
  },
  {
    id: 34,
    name: "Set Luma Talle L",
    price: 45000,
    categories: ["deportivo-importado"], 
    images: ["/productos/Deportivo/SetLuma1.jpeg", "/productos/Deportivo/SetLuma2.jpeg"],
    stock: 1
  },
  {
    id: 35,
    name: "Jean Crave ",
    price: 40000,
    categories: ["pantalones"], 
    images: ["/productos/Pantalones/JeanCrave1.jpeg", "/productos/Pantalones/JeanCrave2.jpeg"],
    stock: 1
  },
  {
    id: 36,
    name: "Top Calma",
    price: 22000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/TopsYRemeras/TopCalma1.jpeg", "/productos/TopsYRemeras/TopCalma2.jpeg", "/productos/TopsYRemeras/TopCalma3.jpeg", "/productos/TopsYRemeras/TopCalma4.jpeg"],
    stock: 1
  },
  {
    id: 37,
    name: "Top Cautiva",
    price: 15000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/TopsYRemeras/TopCautiva1.jpeg", "/productos/TopsYRemeras/TopCautiva2.jpeg", "/productos/TopsYRemeras/TopCautiva3.jpeg"],
    stock: 1
  },
  {
    id: 38,
    name: "Top Loba",
    price: 25000,
    categories: ["tops-y-remeras"], 
    images: ["/productos/TopsYRemeras/TopLoba1.jpeg", "/productos/TopsYRemeras/TopLoba2.jpeg", "/productos/TopsYRemeras/TopLoba3.jpeg"],
    stock: 1
  },
  {
    id: 39,
    name: "Vestido Eclipse",
    price: 30000,
    categories: ["vestidos"], 
    images: ["/productos/Vestidos/VestidoEclipse1.jpeg", "/productos/Vestidos/VestidoEclipse2.jpeg", "/productos/Vestidos/VestidosEclipses.jpeg"],
    stock: 1
  },
  {
    id: 40,
    name: "Vestido Eclipse",
    price: 30000,
    categories: ["vestidos"], 
    images: ["/productos/Vestidos/VestidoEclipsePrint1.jpeg", "/productos/Vestidos/VestidosEclipses.jpeg"],
    stock: 1
  },
  {
    id: 41,
    name: "Vestido Halo",
    price: 37000,
    categories: ["vestidos"], 
    images: ["/productos/Vestidos/VestidoHalo1.jpeg", "/productos/Vestidos/VestidoHalo2.jpeg"],
    stock: 1
  },
  {
    id: 42,
    name: "Vestido Venom",
    price: 37000,
    categories: ["vestidos"], 
    images: ["/productos/Vestidos/VestidoVenom1.jpeg", "/productos/Vestidos/VestidoVenom2.jpeg"],
    stock: 1
  },
  {
    id: 43,
    name: "Set Zafiro",
    price: 35000,
    categories: ["sets"], 
    images: ["/productos/Sets/SetZafiro1.jpeg", "/productos/Sets/SetZafiro2.jpeg", "/productos/Sets/SetsZafiros.jpeg"],
    stock: 1
  },
  {
    id: 44,
    name: "Set Zafiro",
    price: 35000,
    categories: ["sets"], 
    images: ["/productos/Sets/SetZafiroNegro1.jpeg", "/productos/Sets/SetsZafiros.jpeg"],
    stock: 1
  },
  {
    id: 45,
    name: "Vestido Arizona",
    price: 40000,
    categories: ["vestidos"], 
    images: ["/productos/Vestidos/VestidoArizona1.jpeg", "/productos/Vestidos/VestidoArizona2.jpeg"],
    stock: 1
  },
];

export default products;
