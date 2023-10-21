export function formatMoney(price: number) {
    return price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });
}