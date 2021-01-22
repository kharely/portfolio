const Portfolio = require('./portfolio')
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function create() {
  const p = new Portfolio()
  console.log('*** Constructing portfolio ***')
  rl.question('What do you want to know about this portfolio? profit/annual: ', (answer) => {
    const sel = answer.toLowerCase()
    if (sel === 'profit') {
      rl.question('Please give me the initial date, format "YYYY-MM-DD": ', (initial) => { 
        rl.question('Please give me the end date, format "YYYY-MM-DD": ', (end) => {
          console.log('The profit is', p.profit(initial, end).toLocaleString())
          process.exit(0)
        })
      })
    } else if (sel === 'annual') {
      rl.question('Please give me the initial date, format "YYYY-MM-DD": ', (initial) => { 
        rl.question('Please give me the end date, format "YYYY-MM-DD": ', (end) => {
          console.log('The annual return is %', p.annualReturn(initial, end).toLocaleString())
          process.exit(0)
        })
      })
    } else {
      console.log('wrong')
      process.exit(0)
    }
  })
}

create()
