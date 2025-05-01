CREATE TABLE IF NOT EXISTS assets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- ejemplo: 'accion', 'bono', 'cripto', 'oro', 'fondo'
    symbol TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS prices (
    id SERIAL PRIMARY KEY,
    asset_id INTEGER REFERENCES assets(id),
    price DECIMAL(20, 8),
    timestamp TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS recommendations (
    id SERIAL PRIMARY KEY,
    profile TEXT NOT NULL,
    allocation JSONB NOT NULL,
    generated_at TIMESTAMPTZ DEFAULT now()
);
