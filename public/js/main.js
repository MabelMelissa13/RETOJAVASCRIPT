function calcularPorcentaje() { 
  var percentage = parseFloat(document.getElementById('percentage').value); 
  var total = parseFloat(document.getElementById('total').value);

  document.getElementById('error-message').textContent = '';

  if (isNaN(percentage) || isNaN(total) || percentage === '' || total === '') { 
      document.getElementById('error-message').textContent = "Ingresar valores válidos"; 
  } else { 
      var result = (percentage / 100) * total; 
      if (Number.isInteger(result)) {
          document.getElementById('result').innerText = result.toFixed(0); 
      } else {
          document.getElementById('result').innerText = result.toFixed(2); 
      }
  } 
}

document.getElementById('calculateBtn').addEventListener('click', calcularPorcentaje);
