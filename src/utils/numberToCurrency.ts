export function numberToCurrency(numberValue: number) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numberValue);

  return formattedValue;
}
