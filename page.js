export default function Home() {
  const products = [
    {
      id: 1,
      name: "Essential Oversized Tee",
      price: "Rp189.000",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Minimal Hoodie",
      price: "Rp349.000",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Daily Sling Bag",
      price: "Rp229.000",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Navbar */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide uppercase">
            Crunch Studios
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded-full text-sm">
              Login
            </button>

            <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
              Cart
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-[5px] mb-4">
            New Collection 2026
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Minimal Style. <br />
            Maximum Impact.
          </h2>

          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Modern minimalist fashion inspired by clean aesthetics and timeless
            essentials.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-2">
            Categories
          </p>

          <h3 className="text-4xl font-bold">Shop by Category</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Pria", "Wanita", "Aksesoris"].map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-3xl h-60 flex items-center justify-center text-3xl font-semibold hover:bg-black hover:text-white transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-10">
          <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-2">
            Best Seller
          </p>

          <h3 className="text-4xl font-bold">Featured Products</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={product.image}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">
                  {product.name}
                </h4>

                <p className="text-gray-500 mb-5">{product.price}</p>

                <div className="flex gap-3">
                  <button className="flex-1 bg-black text-white py-3 rounded-full">
                    Add to Cart
                  </button>

                  <button className="border border-black px-5 rounded-full">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-4">
            About Us
          </p>

          <h3 className="text-5xl font-bold mb-8">
            Built for Modern Simplicity.
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Crunch Studios is a minimalist fashion brand focused on timeless
            essentials, clean aesthetics, and premium streetwear inspired by
            modern culture.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <h4 className="uppercase font-bold tracking-wide">
            Crunch Studios
          </h4>

          <p className="text-sm text-gray-500">
            © 2026 Crunch Studios. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}