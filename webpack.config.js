const path = require('path');

module.exports = {
  entry: ["./src/commons.js", "./src/qrfill.formgenerate.js", "./web-basics-helper-kit/bootstrap-datepicker-1.9.0/js/bootstrap-datepicker.min.js"],
  output: {
    filename: 'm3-mobile-self-registration.js',
    path: path.resolve(__dirname, 'dist'),
  },
};