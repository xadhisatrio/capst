-- Jalankan melalui Supabase SQL Editor.
create extension if not exists "pgcrypto";

create type public.user_role as enum ('customer', 'admin');
create type public.order_status as enum ('menunggu_konfirmasi', 'diproses', 'siap_diambil', 'dikirim', 'selesai', 'dibatalkan');
create type public.payment_status as enum ('belum_bayar', 'menunggu_verifikasi', 'dp_terverifikasi', 'lunas', 'ditolak');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  role public.user_role not null default 'customer',
  created_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  description text,
  price numeric(12,2) not null check (price >= 0),
  daily_capacity integer not null default 0 check (daily_capacity >= 0),
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  customer_id uuid not null references public.profiles(id),
  fulfillment_type text not null check (fulfillment_type in ('pickup','delivery')),
  fulfillment_date date not null,
  delivery_address text,
  notes text,
  status public.order_status not null default 'menunggu_konfirmasi',
  payment_status public.payment_status not null default 'belum_bayar',
  payment_proof_url text,
  total numeric(12,2) not null check (total >= 0),
  created_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity integer not null check (quantity > 0),
  unit_price numeric(12,2) not null check (unit_price >= 0),
  subtotal numeric(12,2) generated always as (quantity * unit_price) stored
);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create policy "Produk aktif dapat dilihat publik" on public.products for select using (is_active = true);
create policy "Pelanggan melihat profil sendiri" on public.profiles for select using (auth.uid() = id);
create policy "Pelanggan memperbarui profil sendiri" on public.profiles for update using (auth.uid() = id);
create policy "Pelanggan melihat pesanan sendiri" on public.orders for select using (auth.uid() = customer_id);
create policy "Pelanggan membuat pesanan sendiri" on public.orders for insert with check (auth.uid() = customer_id);
create policy "Pelanggan melihat item pesanannya" on public.order_items for select using (exists (select 1 from public.orders o where o.id = order_id and o.customer_id = auth.uid()));

insert into storage.buckets (id, name, public) values ('payment-proofs', 'payment-proofs', false) on conflict do nothing;
insert into storage.buckets (id, name, public) values ('product-images', 'product-images', true) on conflict do nothing;
