class Stock {
  /*
   * @param {Number} price
   * @param {float/Number} grow
   * @param {String} date
   * */
  constructor(price, grow, date = null) {
    this.purchase_price = price;
    this.grow_per_day = grow;
    this.purchase_date = date || Date();
  }

  /**
   * @param {String} - actual date
   * @returns {Number}
   */
  currentPrice(date) {
    const purchaseDate = new Date(this.purchase_date);
    const actualDate = new Date(date);
    const differenceInDays = (actualDate.getTime() - purchaseDate.getTime())/(1000 * 3600 * 24);
    return (this.purchase_price * (this.grow_per_day * differenceInDays))+ this.purchase_price;
  }
}

module.exports = Stock
