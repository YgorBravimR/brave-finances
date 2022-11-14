export function numberToCurrency(numberValue: number) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numberValue);

  return formattedValue;
}

export function InputDateFormatter(dateValue: number) {
  const formattedDate = new Intl.DateTimeFormat("fr-CA").format(dateValue);

  return formattedDate;
}
