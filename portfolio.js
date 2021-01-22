const Stock = require('./stock')

class Portfolio {
  constructor() {
    this.myStocks= [
      { 
        stock: new Stock(50, 0.02, '2020-05-20'),
        quantity_purchased: 50
      },
      { 
        stock: new Stock(50, 0.04, '2020-08-01'),
        quantity_purchased: 20
      },
      { 
        stock: new Stock(50, 0.06, '2015-01-02'),
        quantity_purchased: 50
      },
    ]
  }
  /*
   * param {String} - dateStart
   * param {String} - dateEnd
   * returns {Number}
   * */
  profit(dateStart, dateEnd) {
    const initialValue = this.sumOfPortfolio(dateStart)
    const endsValue = this.sumOfPortfolio(dateEnd)
    return (endsValue - initialValue)
  }

  /*
   * param {String} - date
   * returns {Number}
   * */
  sumOfPortfolio(date) {
    return this.myStocks.map(st => (st.stock.currentPrice(date) * st.quantity_purchased))
      .reduce((a, c) => a + c)
  }

  /*
   * @param {String} - dateInitial
   * @param {dateEnd} - dateEnd
   * @returns {Number}
   * */
  annualReturn(dateInitial, dateEnd) {
    const years = new Date(dateEnd).getFullYear() - new Date(dateInitial).getFullYear();
    const quantityEnds = this.sumOfPortfolio(dateEnd)
    const quantityInitial = this.sumOfPortfolio(dateInitial)
    return ((((Math.abs(quantityEnds/quantityInitial)) ** (1/years)) -1) * 100)
  }
}

module.exports = Portfolio
