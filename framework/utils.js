var Utils = function() {

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

};
module.exports = new Utils();
