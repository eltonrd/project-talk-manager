function emailValidationRegex(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}
function dateValidationRegex(date) {
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
    return regex.test(date);
}

module.exports = { emailValidationRegex, dateValidationRegex };
