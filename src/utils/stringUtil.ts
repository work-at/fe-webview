export function decimalFormatter(value?: number, currencyStyle?: { style: string; currency: string }): string {
  if (!value || !Number(value)) return "0";

  const amount = new Intl.NumberFormat("ko-KR", { ...currencyStyle }).format(value);

  return `${amount}`;
}
