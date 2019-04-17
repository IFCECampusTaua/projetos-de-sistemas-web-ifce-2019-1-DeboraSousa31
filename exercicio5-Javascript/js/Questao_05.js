  document.querySelector('button').addEventListener('click', handleClick, false);
    
    function handleClick() {
      var number1 = document.querySelector( '[data-js="number1"]').value;
      var number2 = document.querySelector( '[data-js="number2"]').value;
      
      document.querySelector( '[data-js="result"]' ).innerHTML = div(number1, number2);
      document.querySelector( '[data-js="result2"]' ).innerHTML = div2(number1, number2);
    }
    
    function div( number1, number2 ) {
  		var DECIMAL = 10;
  		return parseInt( number1, DECIMAL ) / parseInt( number2, DECIMAL );
  	}

  	function div2( number1, number2 ) {
  		var DECIMAL = 10;
  		return parseInt( number1, DECIMAL ) % parseInt( number2, DECIMAL );
  	}
