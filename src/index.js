export default function DateFormat(date, options) {
  this.lang = options.lang
  this.country = options.country
  this.date = date
  this.dateStyle = options.dateStyle
  this.timeStyle = options.timeStyle
}

DateFormat.prototype.format = function () {
  const formatter = new Intl.DateTimeFormat(`${this.lang}-${this.country}`, {
    timeStyle: this.timeStyle,
    dateStyle: this.dateStyle,
  })

  return formatter.format(new Date(this.date))
}
