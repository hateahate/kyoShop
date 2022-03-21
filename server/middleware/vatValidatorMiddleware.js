const Validator = require('validate-vat');
const ApiError = require('../error/ApiError');
module.exports = (vat) => {
    if (vat) {
        try {
            console.log('From vat validation middleware: ' + vat);
            let countryCode = vat.replace(/[0-9]/g, "");
            console.log('cc: ' + countryCode);
            let vatNumber = vat.replace(/[A-z]/g, "");
            console.log('vn: ' + vatNumber);
            Validator(countryCode, vatNumber, (err, validate) => {
                return validate;
            });
        }
        catch (e) {
            return ApiError.badRequest('Please try again ' + e);
        }
    }
}