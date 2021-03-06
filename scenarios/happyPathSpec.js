    // spec.js
    describe('Protractor Test App', function() {

      var calculatorPage = require('../pages/calculator_page.js');
      var utils = require('../framework/utils.js');
      var pageTitle = browser.params.page.title;
      var additionOperator = browser.params.operations.addition;
      var divisionOperator = browser.params.operations.division;
      var moduloOperator = browser.params.operations.modulo;
      var multiplicationOperator = browser.params.operations.multiplication;
      var subtractionOperator = browser.params.operations.subtraction;

      beforeAll(function() {
        calculatorPage.navigate();
      });

      it('should have a title', function() {
        expect(browser.getTitle()).toEqual(pageTitle);
      });

      it('should add one and two', function() {
        calculatorPage.sendInputsToPerfolMathCalc(1, 2,
          additionOperator);
        calculatorPage.checkMathResult(1, 2, additionOperator);
      });
      it('should divide ten and five', function() {
        calculatorPage.sendInputsToPerfolMathCalc(10, 5,
          divisionOperator);
        calculatorPage.checkMathResult(10, 5,
          divisionOperator);
      });

      it('should modulo eleven and seven', function() {
        calculatorPage.sendInputsToPerfolMathCalc(11, 7,
          moduloOperator);
        calculatorPage.checkMathResult(11, 7,
          moduloOperator);
      });

      it('should multiplicate 8 and 4', function() {
        calculatorPage.sendInputsToPerfolMathCalc(8, 4,
          multiplicationOperator);
        calculatorPage.checkMathResult(8, 4,
          multiplicationOperator);
      });

      it('should subtract 5 and 4', function() {
        calculatorPage.sendInputsToPerfolMathCalc(5, 4,
          subtractionOperator);
        calculatorPage.checkMathResult(5, 4,
          subtractionOperator);
      });

      it('should send only words instead numbers', function() {
        calculatorPage.sendInputsToPerfolMathCalc('a', 'b',
          additionOperator);
        calculatorPage.checkMathResult('a', 'b',
          subtractionOperator);
      })

      it('should history has all math history', function() {
        calculatorPage.checkMathHistory(6);
      });
    });
