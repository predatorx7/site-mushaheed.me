-- migrate:up
CREATE TABLE guestbook (
  id BIGSERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  name TEXT NOT NULL,
  created_by TEXT NOT NULL REFERENCES auth_user(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);

-- migrate:down

DROP TABLE IF EXISTS views;
DROP TABLE IF EXISTS guestbook;