//contains utility wrt money.

export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}
