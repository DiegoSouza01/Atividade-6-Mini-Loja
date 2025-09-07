import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        title: "Crash Twinsanity American",
        price: 99.9,
        rating: 4,
        tag: "Promo",
        image: "/assets/CrashTwinsanityAmerican.webp",
      },
      {
        id: 2,
        title: "Crash Team Racing Nitro-Fueled",
        price: 129.9,
        rating: 5,
        tag: "Novo",
        image: "/assets/Crash_Team_Racing_Nitro-Fueled_cover_art.webp",
      },
      {
        id: 3,
        title: "Crash Bandicoot 4: It's About Time",
        price: 199.9,
        rating: 4,
        tag: "Clássico",
        image: "/assets/Crash-Bandicoot-4-capa.webp",
      },
      {
        id: 4,
        title: "Crash Bandicoot: Mind Over Mutant",
        price: 69.9,
        rating: 3,
        tag: "Novo",
        image: "/assets/Crash_Mind_over_Mutant_capa.webp",
      },
      {
        id: 5,
        title: "Crash Team Rumble",
        price: 79.9,
        rating: 3,
        tag: "Promo",
        image: "/assets/Crash_Team_Rumble_cover_art.webp",
      },
      {
        id: 6,
        title: "Crash of the Titans",
        price: 59.9,
        rating: 4,
        tag: "Promo",
        image: "/assets/Crash_of_the_Titans.webp",
      },
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1500);
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCartClick = () => {
    alert(
      `🛒 Carrinho Crash\nItens: ${getTotalCartItems()}\nTotal: R$ ${cart
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)}`
    );
  };

  return (
    <div className="min-h-screen bg-crash-sand dark:bg-crash-brown-900 transition-colors duration-200">
      <Navbar cartCount={getTotalCartItems()} onCartClick={handleCartClick} />

      {showCartNotification && (
        <div className="fixed top-20 right-4 bg-crash-success text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce-in border-2 border-crash-green-300">
          ✅ Fruta Wumpa adicionada ao carrinho!
        </div>
      )}
      <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-crash-primary dark:text-crash-orange-400 mb-8 animate-pulse">
          LOJA CRASH BANDICOOT 🍊
        </h1>

        <p className="text-center text-crash-brown-600 dark:text-crash-orange-200 mb-8 text-lg">
          Descubra os melhores jogos do marsupial mais famoso dos videogames!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProductCard key={index} loading={true} />
              ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
