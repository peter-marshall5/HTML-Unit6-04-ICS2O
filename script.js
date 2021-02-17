const b1Input = document.getElementById('b1')
const b2Input = document.getElementById('b2')
const hInput = document.getElementById('h')
const calculateButton = document.getElementById('calculate')
const resultDisp = document.getElementById('result')

function error () {
  alert('You have entered an invalid value. Make sure to only enter numbers into the fields and that no numbers are negative or zero.')
}

function calculate (b1, b2, h) {
  return (b1 + b2) / 2 * h
}

function stepbystep (b1, b2, h, result) {
  return 'A=0.5*(b1+b2)*h\nA=0.5*(' + b1 + '+' + b2 + ')*' + h + '\nA=0.5*(' + (b1 + b2) + ')*' + h + '\nA=' + ((b1 + b2) / 2) + '*' + h + '\nA=' + result
}

function onclick () {
  const b1 = parseFloat(b1Input.value)
  const b2 = parseFloat(b2Input.value)
  const h = parseFloat(hInput.value)
  if (typeof b1 !== 'number' || typeof b2 !== 'number' || typeof h !== 'number') {
    error()
    return
  }
  if (isNaN(b1) || isNaN(b2) || isNaN(h)) {
    error()
    return
  }
  if (b1 <= 0 || b2 <= 0 || h <= 0) {
    error()
    return
  }
  const result = calculate(b1, b2, h)
  resultDisp.innerText = result + ' u^2\n'
  resultDisp.innerText += stepbystep(b1, b2, h, result)
}

calculateButton.addEventListener('click', onclick)
