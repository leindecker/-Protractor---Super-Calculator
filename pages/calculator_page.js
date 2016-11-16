var CalculatorPage = function() {
  this.inputCalculator_1 = element(by.model('first'));
  this.inputCalculator_2 = element(by.model('second'));
  this.latest_result = element(by.binding('latest'));
  this.mathResult = element(by.className('ng-binding'));
  this.selectOperation = element(by.model('operator'));
  this.history = element.all(by.repeater('result in memory'));
  this.btnGo = element(by.id('gobutton'));

  var utils = require('../framework/utils.js');

  this.navigate = function() {
    browser.get(browser.params.page.appUrl);
    browser.driver.manage().window().maximize();
  };

  this.sendInputsToPerfolMathCalc = function(valueA, valueB, operator) {
    this.selectMathOperation(operator);
    this.inputCalculator_1.sendKeys(valueA);
    this.inputCalculator_2.sendKeys(valueB);
    this.btnGo.click();
  };

  this.selectMathOperation = function(operator) {
    element(by.model('operator')).$('[value="' + operator + '"]').click();
  };

  this.checkMathHistory = function(count) {
    expect(this.history.count()).toEqual(count);
  };

  this.checkMathResult = function(valueA, valueB, mathOperator) {
    //console.log("UTILS: " + utils.perfomMathCalc(1, 2, 'ADDITION'));
    expect(this.latest_result.getText()).toEqual(utils.perfomMathCalc(
      valueA, valueB, mathOperator));
  };

};

module.exports = new CalculatorPage();
