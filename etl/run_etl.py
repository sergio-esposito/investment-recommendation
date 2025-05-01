# run_etl.py
import requests, psycopg2
def fetch_crypto_prices():
    data = requests.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd").json()
    return data

def save_to_db(data):
    conn = psycopg2.connect("...")
    cursor = conn.cursor()
    for coin, price in data.items():
        cursor.execute("INSERT INTO prices (asset, price) VALUES (%s, %s)", (coin, price['usd']))
    conn.commit()

if __name__ == "__main__":
    data = fetch_crypto_prices()
    save_to_db(data)
