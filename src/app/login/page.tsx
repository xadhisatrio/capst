"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [register, setRegister] = useState(false);
  return <main className="login-page"><section className="login-visual"><Link className="brand" href="/"><span className="brand-mark">RK</span><span>RotiKita</span></Link><div className="login-quote">“Pesanan yang tercatat rapi membuat produksi lebih pasti.”</div></section><section className="login-panel"><div className="login-card"><Link href="/" className="secondary-btn">Kembali</Link><h1>{register?"Buat akun":"Selamat datang"}</h1><p>{register?"Daftar untuk menyimpan dan memantau pesananmu.":"Masuk untuk melanjutkan pre-order."}</p><form className="login-form" onSubmit={(e)=>e.preventDefault()}>{register && <div className="field"><label>Nama lengkap</label><input required placeholder="Nama kamu"/></div>}<div className="field"><label>Email</label><input required type="email" placeholder="nama@email.com"/></div><div className="field"><label>Kata sandi</label><input required type="password" placeholder="Minimal 8 karakter"/></div><Link href="/admin" className="primary-btn" style={{textAlign:"center"}}>{register?"Daftar":"Masuk"}</Link></form><button onClick={()=>setRegister(!register)} style={{border:0,background:"transparent",color:"var(--brown)",fontWeight:800,marginTop:18}}>{register?"Sudah punya akun? Masuk":"Belum punya akun? Daftar"}</button><div className="demo-note">Mode demo: tombol masuk akan membuka dashboard admin. Setelah Supabase dihubungkan, halaman ini menggunakan akun pelanggan dan admin yang sebenarnya.</div></div></section></main>;
}
