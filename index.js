const container = document.getElementById('app')
container.style.width = '100px'
container.style.height = '100px'
container.style.background = '#ff0000'

let value = 0
container.onclick = () => {
  fetch('http://127.0.0.1:3000/led', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ value })
  })
  .then(res => {
    value = 1 - value
  })
}
