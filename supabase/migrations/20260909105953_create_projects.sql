create table public.projects (
  id uuid primary key,
  name text not null,
  slug text not null,
  description text,
  status text not null,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  constraint projects_name_not_blank check (name ~ '[^[:space:]]'),
  constraint projects_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  constraint projects_slug_unique unique (slug),
  constraint projects_status_supported check (status in ('draft', 'active', 'archived'))
);
