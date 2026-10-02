"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Clock3, PackageCheck, Search, Truck } from "lucide-react";

export default function PesananPage() {
  const [code, setCode] = useState("RK-261002-017");
  const [found, setFound] = useState(true);
  const search = (e: React.FormEvent) => { e.preventDefault(); setFound(code.trim().toUpperCase() === "RK-261002-017"); };
  const stages = [
    { icon: <Check/>, title: "Diterima", detail: "02 Okt · 13.20", active: true },
    { icon: <Check/>, title: "Dibayar", detail: "02 Okt · 13.32", active: true },
    { icon: <Clock3/>, title: "Diproduksi", detail: "Sedang berjalan", active: true },
    { icon: <PackageCheck/>, title: "Siap diambil", detail: "Menunggu", active: false },
  ];
  return <>
    <nav className="nav"><div className="shell nav-inner"><Link className="brand" href="/"><span className="brand-mark">RK</span><span>RotiKita</span></Link><Link className="secondary-btn" href="/">Kembali ke katalog</Link></div></nav>
    <main className="shell section"><header className="page-header"><h1>Cek status pesanan</h1><p>Masukkan nomor pesanan untuk melihat perkembangannya.</p></header><section className="panel" style={{maxWidth:860}}><form onSubmit={search} style={{display:"flex",gap:10,flexWrap:"wrap"}}><div className="search-wrap" style={{flex:1}}><Search size={18}/><input value={code} onChange={(e)=>setCode(e.target.value)} placeholder="Contoh: RK-261002-017"/></div><button className="primary-btn">Cari pesanan</button></form>{found ? <div style={{marginTop:28}}><div className="panel-head"><div><span className="tag">RK-261002-017</span><h2 style={{marginTop:10}}>Pesanan sedang diproses</h2></div><span className="status-badge status-process">Diproses</span></div><div className="cart-line"><div><h4>Roti Sobek Cokelat × 1</h4><span>Pengambilan · 3 Oktober 2026</span></div><strong>Rp32.000</strong></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12,marginTop:28}}>{stages.map((s)=><div key={s.title} style={{padding:16,borderRadius:16,border:"1px solid var(--line)",opacity:s.active?1:.5}}><div className="brand-mark" style={{width:36,height:36,borderRadius:11}}>{s.icon}</div><strong style={{display:"block",marginTop:12}}>{s.title}</strong><small style={{color:"var(--muted)"}}>{s.detail}</small></div>)}</div></div> : <div className="empty"><Truck size={42} style={{margin:"0 auto 12px"}}/><p>Nomor pesanan belum ditemukan. Coba periksa kembali penulisannya.</p></div>}</section></main>
  </>;
}
