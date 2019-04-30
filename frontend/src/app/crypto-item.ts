export class CryptoItem {
    public id: number;
    public name: string;
    public symbol: string;
    // public quote: object;
    public quote = {
        USD: {
            price: '',
            percent_change_1h: '',
            percent_change_24h: '',
            market_cap: ''
        }
    }
}
