export const hourPerDay = 8;
export const daysFaturaveis = 22;

export function dayRate(ratePerHour) {
  return  ratePerHour * hourPerDay;
}

export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  if (numDays >= daysFaturaveis) {
    const taxasDiarias = numDays % daysFaturaveis;
    const taxasMensais = numDays - taxasDiarias;
    const desconto = taxasMensais + (taxasMensais * discount);
    return (taxasDiarias + taxasMensais) * dayRate(ratePerHour)
  } else {
    return numDays * dayRate(ratePerHour)
  }
}