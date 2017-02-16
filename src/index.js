import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would like to pay ${couseValue} for this awesome course!`)
