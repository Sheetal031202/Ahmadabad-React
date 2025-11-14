export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">MyBrand</h1>
          <div className="space-x-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Products</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Welcome to <span className="text-blue-600">Our Store</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Find the best products at unbeatable prices. Fast delivery & trusted quality.
            </p>

            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
              Shop Now
            </button>
          </div>

          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5EyipT3EbEwdhIorOH6bjwHaEo?pid=Api&P=0&h=180"
            className="rounded-2xl shadow-lg"
            alt="Hero Banner"
          />
        </div>
      </header>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="p-8 bg-white rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your orders delivered within 48 hours.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Quality</h3>
            <p className="text-gray-600">We offer top-quality products only.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Always here to help you anytime.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Join Our Newsletter</h2>
        <p className="mt-2 text-lg">Stay updated with latest offers</p>

        <div className="mt-6 flex justify-center gap-4">
          <input
            type="email"
            className="px-4 py-3 rounded-lg outline-none text-gray-800 w-64"
            placeholder="Enter email"
          />
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow">
            Subscribe
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-gray-900 text-center text-gray-400">
        © 2025 MyBrand — All Rights Reserved
      </footer>

    </div>
  );
}
