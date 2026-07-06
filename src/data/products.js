export const collections = {
  newArrivals: [
    {
      id: "na1",
      name: "Liquid Obsidian Desk Mat",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1629739884942-8c704f7bdc71?w=800&q=80"
    },
    {
      id: "na2",
      name: "Cyber Grid Extended Pad",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=80"
    },
    {
      id: "na3",
      name: "Neon Nights Mousepad",
      price: 1499,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
    },
    {
      id: "na4",
      name: "Ergo Wrist Rest Pro",
      price: 999,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80"
    }
  ],
  bestSellers: [
    {
      id: "bs1",
      name: "Topographic Noir Desk Mat",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1588693959306-613d2f9b8c94?w=800&q=80"
    },
    {
      id: "bs2",
      name: "Minimalist Ivory Desk Mat",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80"
    },
    {
      id: "bs3",
      name: "Mechanical Keyboard Coiled Cable",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80"
    },
    {
      id: "bs4",
      name: "Walnut Wood Monitor Stand",
      price: 3499,
      originalPrice: 4299,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
    }
  ],
  animeCollection: [
    {
      id: "an1",
      name: "Tokyo Nights Desk Mat",
      price: 2199,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80"
    },
    {
      id: "an2",
      name: "Samurai Edge Mousepad",
      price: 2199,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=800&q=80"
    },
    {
      id: "an3",
      name: "Mecha Wing XL Pad",
      price: 2499,
      originalPrice: 3299,
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80"
    },
    {
      id: "an4",
      name: "Sakura Blossom Mat",
      price: 2199,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80"
    }
  ],
  minimalCollection: [
    {
      id: "mn1",
      name: "Matte Black Stealth Mat",
      price: 1899,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800&q=80"
    },
    {
      id: "mn2",
      name: "Pure White Leather Desk Pad",
      price: 2499,
      originalPrice: 3199,
      image: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=800&q=80"
    },
    {
      id: "mn3",
      name: "Charcoal Felt Desk Mat",
      price: 1799,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
    },
    {
      id: "mn4",
      name: "Concrete Grey Mousepad",
      price: 1499,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80"
    }
  ],
  limitedEdition: [
    {
      id: "le1",
      name: "Aura Glow RGB Mat",
      price: 2999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
    },
    {
      id: "le2",
      name: "Carbon Fiber Pro Edition",
      price: 3499,
      originalPrice: 4499,
      image: "https://images.unsplash.com/photo-1592965415392-1b1d7d08b6bd?w=800&q=80"
    },
    {
      id: "le3",
      name: "Gold Trim Executive Pad",
      price: 3999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=800&q=80"
    },
    {
      id: "le4",
      name: "Hyper Space XL Edition",
      price: 2799,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?w=800&q=80"
    }
  ]
};

// A simple pseudo-random number generator to ensure consistent values between server and client hydration
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

Object.values(collections).forEach(category => {
  category.forEach((product, i) => {
    // Generate a consistent "random" number based on the product ID
    let seed = 0;
    for (let j = 0; j < product.id.length; j++) {
      seed += product.id.charCodeAt(j);
    }
    
    const rand1 = seededRandom(seed + i);
    const rand2 = seededRandom(seed + i + 1);
    
    product.reviewCount = Math.floor(rand1 * 18) + 3; // 3 to 20
    product.rating = (Math.floor(rand2 * 11) / 10 + 4.0).toFixed(1); // 4.0 to 5.0
  });
});
