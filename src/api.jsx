// central API helper used by all pages
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";


export async function signup({ name, email, address, password }) {
  const res = await fetch(`${BASE}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, address, password })
  });
  return res.json();
}

export async function login({ email, password }) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export function saveAuth(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() {
  try { return JSON.parse(localStorage.getItem("user")); } catch(e){ return null; }
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export async function fetchStores() {
  const res = await fetch(`${BASE}/api/stores`);
  return res.json();
}

export async function fetchStoreRatings(storeId) {
  const res = await fetch(`${BASE}/api/ratings/store/${storeId}`);
  return res.json();
}

export async function submitRating({ store_id, rating, comment }) {
  const token = getToken();
  const res = await fetch(`${BASE}/api/ratings`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    body: JSON.stringify({ store_id, rating, comment })
  });
  return res.json();
}

export async function fetchStoreById(id) {
  const res = await fetch(`${BASE}/api/stores/${id}`);
  return res.json();
}
