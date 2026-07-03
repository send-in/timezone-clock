DROP INDEX IF EXISTS idx_payments_external_id;
DROP INDEX IF EXISTS idx_payments_order_id;
DROP INDEX IF EXISTS idx_payments_status;
DROP INDEX IF EXISTS idx_payments_account_id;
DROP INDEX IF EXISTS idx_accounts_email;

DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS accounts;

DROP EXTENSION IF EXISTS pgcrypto;