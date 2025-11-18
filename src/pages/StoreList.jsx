import React, { useEffect, useState } from "react";
import { fetchStores } from "../api";
import { Link } from "react-router-dom";

export default function StoreList() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const s = await fetchStores();
    setStores(s || []);
    setLoading(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 20, color: "#222" }}>
        ⭐ Top Stores
      </h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="store-grid">
          {stores.length === 0 && <div>No stores found.</div>}

          {stores.map((s) => (
            <div className="store-card" key={s.id}>
              <h3>{s.name}</h3>
              <p>{s.address || "No address available"}</p>

              <div style={{ margin: "10px 0", fontWeight: "600" }}>
                ⭐ Rating: {s.avg_rating ?? "N/A"}
              </div>

              <Link className="store-link" to={`/store/${s.id}`}>
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
