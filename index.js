function calculateSum() {
      const num1 = parseInt(document.getElementById('addNum1').value);
      const num2 = parseInt(document.getElementById('addNum2').value);
      const validation = document.getElementById('addValidationResult');

      if (isNaN(num1) || isNaN(num2)) {
        validation.textContent = 'Please enter numbers only.';
        document.getElementById('addResult').value = '';
      } else {
        validation.textContent = '';
        document.getElementById('addResult').value = num1 + num2;
      }
    }

    function subtractValue() {
      const num1 = parseInt(document.getElementById('subNum1').value);
      const num2 = parseInt(document.getElementById('subNum2').value);
      const validation = document.getElementById('subValidationResult');

      if (isNaN(num1) || isNaN(num2)) {
        validation.textContent = 'Please enter numbers only.';
        document.getElementById('subResult').value = '';
      } else {
        validation.textContent = '';
        document.getElementById('subResult').value = num1 - num2;
      }
    }

    
    function multiplyValue() {
      const num1 = parseInt(document.getElementById('mulpNum1').value);
      const num2 = parseInt(document.getElementById('mulpNum2').value);
      const validation = document.getElementById('mulpValidationResult');

      if (isNaN(num1) || isNaN(num2)) {
        validation.textContent = 'Please enter numbers only.';
        document.getElementById('mulpResult').value = '';
      } else {
        validation.textContent = '';
        document.getElementById('mulpResult').value = num1 * num2;
      }
    }
function devideValue() {
      const num1 = parseInt(document.getElementById('devNum1').value);
      const num2 = parseInt(document.getElementById('devNum2').value);
      const validation = document.getElementById('devValidationResult');

      if (isNaN(num1) || isNaN(num2)) {
        validation.textContent = 'Please enter numbers only.';
        document.getElementById('devResult').value = '';
      } else {
        validation.textContent = '';
        document.getElementById('devResult').value = num1 / num2;
      }
    }

    function clearAdd() {
      document.getElementById('addNum1').value = '';
      document.getElementById('addNum2').value = '';
      document.getElementById('addResult').value = '';
      document.getElementById('addValidationResult').textContent = '';
    }

    function clearSub() {
      document.getElementById('subNum1').value = '';
      document.getElementById('subNum2').value = '';
      document.getElementById('subResult').value = '';
      document.getElementById('subValidationResult').textContent = '';
    }

    function clearMulp() {
      document.getElementById('mulpNum1').value = '';
      document.getElementById('mulpNum2').value = '';
      document.getElementById('mulpResult').value = '';
      document.getElementById('mulpValidationResult').textContent = '';
    }

    function clearDev() {
      document.getElementById('devNum1').value = '';
      document.getElementById('devNum2').value = '';
      document.getElementById('devResult').value = '';
      document.getElementById('devValidationResult').textContent = '';
    }

    const colors = ['#f8d7da', '#d4edda', '#d1ecf1', '#fff3cd', '#e2e3e5'];
  let colorIndex = 0;

  function changeBoxColors() {
    const boxes = document.querySelectorAll('.calc-box');
    boxes.forEach(box => {
      box.style.backgroundColor = colors[colorIndex];
    });

    // Move to the next color or loop back
    colorIndex = (colorIndex + 1) % colors.length;
  }