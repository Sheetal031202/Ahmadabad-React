import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoMarket = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const perPage = 10;

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: "INR",
            order: "market_cap_desc",
            per_page: perPage,
            page,
            sparkline: false,
          },
        }
      );
      setCoins(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [page]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4"> Crypto Market </h1>

      {/* Search  */}
      <input
        type="text"
        placeholder="Search by coin name..."
        className="w-full p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loading  */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">No</th>
              <th className="border p-2 text-left">Coin</th>
              <th className="border p-2 text-right">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, index) => (
              <tr key={coin.id} className="hover:bg-gray-50">
                <td className="border p-2">{(page - 1) * perPage + index + 1}</td>
                <td className="border p-2 flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  <span>{coin.name}</span>
                  <span className="text-gray-500 text-sm uppercase">
                    ({coin.symbol})
                  </span>
                </td>
                <td className="border p-2 text-right">
                  ₹{coin.current_price.toLocaleString()}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination  */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="font-semibold">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CryptoMarket;
