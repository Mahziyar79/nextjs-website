function ToPersianDigits(n) {
  const farsiDigits = ["٠", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)])
}

export default ToPersianDigits;