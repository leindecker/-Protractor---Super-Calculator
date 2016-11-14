var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'reports/',
  filename: 'my-report.html',
  showSummary: true,
  showQuickLinks: true,
  userCss: './my-report-styles.css/'

});

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
  },
  params: {
    page: {
      title: 'Super Calculator',
      appUrl: 'http://juliemr.github.io/protractor-demo/'
    },
    operations: {
      addition: 'ADDITION',
      division: 'DIVISION',
      modulo: 'MODULO',
      multiplication: 'MULTIPLICATION',
      subtraction: 'SUBTRACTION'
    }
  },

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }

}
