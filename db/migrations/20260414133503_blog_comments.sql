-- migrate:up
CREATE TABLE blog_comments (
  id BIGSERIAL PRIMARY KEY,
  slug VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  name TEXT NOT NULL,
  created_by TEXT REFERENCES auth_user(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

-- migrate:down

DROP TABLE IF EXISTS blog_comments;
