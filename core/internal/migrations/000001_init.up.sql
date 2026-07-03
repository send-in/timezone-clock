CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,

    profile TEXT,
    picture TEXT,

    plan TEXT NOT NULL DEFAULT 'free'
        CHECK (plan IN ('free', 'pro')),

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'succeeded', 'failed')),

    account_id UUID NOT NULL
        REFERENCES accounts(id)
        ON DELETE CASCADE,

    plan TEXT NOT NULL,

    amount BIGINT NOT NULL,
    currency TEXT NOT NULL,
    provider TEXT NOT NULL,

    external_id TEXT UNIQUE,
    order_id TEXT UNIQUE NOT NULL,

    payload JSONB,

    completed_at TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_accounts_email
    ON accounts(email);

CREATE INDEX idx_payments_account_id
    ON payments(account_id);

CREATE INDEX idx_payments_status
    ON payments(status);

CREATE INDEX idx_payments_order_id
    ON payments(order_id);

CREATE INDEX idx_payments_external_id
    ON payments(external_id);