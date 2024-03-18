-- migrate:up
CREATE TABLE auth_user (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    oauth_type varchar(30) NOT NULL,
    oauth_user_id varchar(150) NOT NULL UNIQUE,
    username varchar(50) NOT NULL,
    extra jsonb NOT NULL
);

CREATE TABLE user_session (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL REFERENCES auth_user(id),
    expires_at TIMESTAMPTZ NOT NULL
);

-- migrate:down

DROP TABLE IF EXISTS user_session;
DROP TABLE IF EXISTS auth_user;
