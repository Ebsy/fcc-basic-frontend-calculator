var evalString = ''
var opActive = false;

$(document).ready(function() {
  $(".key").click(function(e) {
    var input = $(this).text();
    if (opActive) {
      updateScreen('clear')

    }
    opActive = false;
    updateScreen(input);
    evalString += $(this).text();
    console.log(evalString)
  })

  $(".operator").click(function() {
    opActive = true;
    var input = $(this).text();
    if (input === '÷') {
      input = '/'
    }
    if (input === 'x') {
      input = '*'
    }

    if (!validate(input)) {
      return;
    }
    evalString += input
    console.log(evalString)
  })

  $(".clear").click(function(e) {
    updateScreen('clear');
    clearAll();
  })

  $('.equals').click(function() {
    displayTotal();
  })

});

function displayTotal() {
  var total = eval(evalString);
  if (total % 1 !== 0) {
    total = total.toPrecision(12);
  }
  updateScreen('clear');
  updateScreen(total);
  evalString = total;
}

function validate(input) {
  if (evalString.length && evalString.slice(-1) === input) {
    return false;
  } else {
    return true;
  }
}

function clearAll() {
  evalString = '';
  updateScreen('clear')
}

function updateScreen(str) {
  if (str === 'clear') {
    $('#screen').html('');
    return;
  }
  $('#screen').append(str);
}
