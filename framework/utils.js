var Utils = function() {

  this.latest_result = element(by.binding('latest'));

  this.perfomMathCalc = function(valueA, valueB, mathOperator) {
    var result;
    switch (mathOperator) {
      case "ADDITION":
        result = valueA + valueB;
        break;
      case "DIVISION":
        result = valueA / valueB;
        break;
      case "MODULO":
        result = valueA % valueB;
        break;
      case "MULTIPLICATION":
        result = valueA * valueB;
        break;
      case "SUBTRACTION":
        result = valueA - valueB;
        break;
      default:

    }
    return result.toString();
  }

  this.getTextByElement = function(element) {
    return element.getText().then(function(element) {
      return element;
    });
  }

};
module.exports = new Utils();
