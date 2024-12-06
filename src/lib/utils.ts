export const priceFormatter = (price: number) => {
  return Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
  })
    .format(price)
    .replace(",00", "");
};
