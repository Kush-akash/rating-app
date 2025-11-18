import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStoreById, fetchStoreRatings } from "../api";

export default function StoreDetails(){
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [ratings, setRatings] = useState([]);

  useEffect(()=> {
    load();
  }, [id]);

  async function load(){
    const s = await fetchStoreById(id);
    const r = await fetchStoreRatings(id);
    setStore(s || null);
    setRatings([]);

  }

  if (!store) return <div>Loading store...</div>;

  return (
    <div>
      <h2>{store.name}</h2>
      <div>{store.address || store.location}</div>
      <div style={{ marginTop: 12 }}>
        <h3>Ratings</h3>
        {ratings.length === 0 && <div>No ratings yet.</div>}
        {ratings.map(r => (
          <div key={r.id} style={{ borderBottom: "1px solid #eee", padding: 8 }}>
            <div style={{ fontWeight: 600 }}>{r.user_name || r.user?.name}</div>
            <div>Score: {r.rating}</div>
            {r.comment && <div>{r.comment}</div>}
            <div style={{ color:"#666", fontSize:12 }}>{r.created_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
