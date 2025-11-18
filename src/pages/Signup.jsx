import React, { useState } from "react";
import { signup } from "../api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await signup({ name, email, address, password });
    alert("Signup successful!");
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-input" type="text" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input className="form-input" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="form-input" type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
        <input className="form-input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button className="form-btn" type="submit">Signup</button>
      </form>
    </div>
  );
}
