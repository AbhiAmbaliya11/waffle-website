-- ============================================================
-- Waffle Castle — Supabase Database Schema
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── 1. Products ────────────────────────────────────────────
create table if not exists public.products (
  id          uuid primary key default uuid_generate_v4(),
  title       text not null,
  category    text not null,
  image_url   text not null default '/images/waffle-main.png',
  label       text not null default '',
  is_active   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ─── 2. Blog Posts ──────────────────────────────────────────
create table if not exists public.blog_posts (
  id           uuid primary key default uuid_generate_v4(),
  slug         text unique not null,
  title        text not null,
  category     text not null default 'General',
  date         text not null,
  read_time    text not null default '5 min read',
  author       text not null,
  author_role  text not null default '',
  image_url    text not null default '/images/waffle-main.png',
  excerpt      text not null default '',
  content      text not null default '',
  is_published boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- ─── 3. Contact Leads ───────────────────────────────────────
create table if not exists public.contact_leads (
  id         uuid primary key default uuid_generate_v4(),
  name       text not null,
  email      text not null,
  phone      text not null default '',
  message    text not null default '',
  status     text not null default 'New',
  created_at timestamptz not null default now()
);

-- ─── 4. Franchise Leads ─────────────────────────────────────
create table if not exists public.franchise_leads (
  id             uuid primary key default uuid_generate_v4(),
  first_name     text not null,
  last_name      text not null,
  email          text not null,
  contact_no     text not null,
  city           text not null,
  state          text not null,
  plan_to_start  text not null default '',
  status         text not null default 'New',
  created_at     timestamptz not null default now()
);

-- ─── 5. Event Bookings ──────────────────────────────────────
create table if not exists public.event_bookings (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  phone       text not null,
  email       text not null,
  event_type  text not null default 'Table Reservation',
  message     text not null default '',
  status      text not null default 'Pending',
  created_at  timestamptz not null default now()
);

-- ─── Row Level Security ──────────────────────────────────────
-- Enable RLS on all tables
alter table public.products        enable row level security;
alter table public.blog_posts      enable row level security;
alter table public.contact_leads   enable row level security;
alter table public.franchise_leads enable row level security;
alter table public.event_bookings  enable row level security;

-- Authenticated admins can do everything
create policy "Admins full access on products"
  on public.products for all
  to authenticated using (true) with check (true);

create policy "Admins full access on blog_posts"
  on public.blog_posts for all
  to authenticated using (true) with check (true);

create policy "Admins full access on contact_leads"
  on public.contact_leads for all
  to authenticated using (true) with check (true);

create policy "Admins full access on franchise_leads"
  on public.franchise_leads for all
  to authenticated using (true) with check (true);

create policy "Admins full access on event_bookings"
  on public.event_bookings for all
  to authenticated using (true) with check (true);

-- Service role can insert into lead tables (used by API route)
-- (Service role bypasses RLS by default — no extra policy needed)

-- ─── Updated-at trigger ──────────────────────────────────────
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_products_updated_at
  before update on public.products
  for each row execute procedure public.handle_updated_at();

create trigger set_blog_posts_updated_at
  before update on public.blog_posts
  for each row execute procedure public.handle_updated_at();
