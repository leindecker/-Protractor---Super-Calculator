        var CalculatorPage = function() {
          this.inputCalculator_1 = element(by.model('first'));
          this.inputCalculator_2 = element(by.model('second'));
          this.latest_result = element(by.binding('latest'));
          this.selectOperation = element(by.model('operator'));
          this.history = element.all(by.repeater('result in memory'));
          this.btnGo = element(by.id('gobutton'));

          this.navigate = function() {
            browser.get(browser.params.page.appUrl);
            browser.driver.manage().window().maximize();
          };

          this.calc = function(valueA, valueB, operator) {
            this.selectMathOperation(operator);
            this.inputCalculator_1.sendKeys(valueA);
            this.inputCalculator_2.sendKeys(valueB);
            this.btnGo.click();
          };

          this.selectMathOperation = function(operator) {
            element(by.model('operator')).$('[value="' + operator + '"]').click();
          };

          this.checkResult = function(result) {
            expect(this.latest_result.getText()).toEqual(result);
          };

          this.checkHistory = function() {

          };

        };

        module.exports = new CalculatorPage();
