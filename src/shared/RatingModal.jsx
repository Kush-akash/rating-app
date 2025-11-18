import React, { useState } from "react";

export default function RatingModal({ store, onClose, onSubmit }) {
  const [score, setScore] = useState(5);
  const [comment, setComment] = useState("");

  return (
    <div style={{
      position: "fixed", left:0, right:0, top:0, bottom:0,
      background: "rgba(0,0,0,0.4)", display: "flex", alignItems:"center", justifyContent:"center"
    }}>
      <div style={{ background:"#fff", padding:20, borderRadius:6, width:420 }}>
        <h3>Rate {store.name}</h3>
        <div>
          <label>Score (1-5)</label>
          <select value={score} onChange={e=>setScore(Number(e.target.value))}>
            {[1,2,3,4,5].map(n=> <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div style={{ marginTop:8 }}>
          <label>Comment (optional)</label>
          <textarea value={comment} onChange={e=>setComment(e.target.value)} style={{ width:"100%", height:80 }} />
        </div>
        <div style={{ display:"flex", gap:8, justifyContent:"flex-end", marginTop:12 }}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={()=> onSubmit(score, comment)}>Submit</button>
        </div>
      </div>
    </div>
  );
}
