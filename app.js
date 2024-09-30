function Converter(amount, originalCurrency, targeCurrency) {
  switch (originalCurrency) {
    case "RUB":
      switch (targeCurrency) {
        case "RUB":
          return amount;
        case "USD":
          return amount * 0.01;
        case "EUR":
          return amount * 0.01;
        default:
          return null;
      }
    case "USD":
      switch (targeCurrency) {
        case "USD":
          return amount;
        case "RUB":
          return amount * 93.22;
        case "EUR":
          return amount * 0.9;
        case "BYN":
          return amount * 3.22;
        default:
          return null;
      }
    case "EUR":
      switch (targeCurrency) {
        case "EUR":
          return amount;
        case "RUB":
          return amount * 104.17;
        case "USD":
          return amount * 1.1;
        case "BYN":
          return amount * 3.6;
        default:
          return null;
      }
    case "BYN":
      switch (targeCurrency) {
        case "BYN":
          return amount;
        case "RUB":
          return amount * 28.77;
        case "USD":
          return amount * 0.31;
        case "EUR":
          return amount * 0.028;
        default:
          return null;
      }
    default:
      return null;
  }
}

console.log("converter", Converter(400, "RUB", "BYN")); // Выводим Null если пары валют не существует

console.log("converter", Converter(1400, "RUB", "USD"));

