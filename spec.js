    // spec.js
    describe('Protractor Test App', function() {

      var calculatorPage = require('./pages/calculator_page.js');

      beforeAll(function() {
        calculatorPage.navigate();
      });

      it('should have a title', function() {
        expect(browser.getTitle()).toEqual(browser.params.page.title);
      });

      it('should add one and two', function() {
        calculatorPage.calc(1, 2, browser.params.operations.addition);
        calculatorPage.checkResult('3');
      });

      it('should divide ten and five', function() {
        calculatorPage.calc(10, 5, browser.params.operations.division);
        calculatorPage.checkResult('2');
      });

      it('should modulo eleven and seven', function() {
        calculatorPage.calc(11, 7, browser.params.operations.modulo);
        calculatorPage.checkResult('4');
      });

      it('should multiplicate 8 and 4', function() {
        calculatorPage.calc(8, 4, browser.params.operations.multiplication);
        calculatorPage.checkResult('32');
      });

      it('should subtract 5 and 4', function() {
        calculatorPage.calc(5, 4, browser.params.operations.subtraction);
        calculatorPage.checkResult('1');
      });

      it('should history has all history', function() {
        //result in memory
        //*[@ng-repeat='result in memory']

      });

    });
