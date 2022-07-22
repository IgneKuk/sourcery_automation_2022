const isTriangle = require("./isTriangle");

function isRightTriangle(a, b, c) {
    return ((c ** 2 == a ** 2 + b ** 2) || (b ** 2 == a ** 2 + c ** 2) || (a ** 2 == c ** 2 + b ** 2)) && isTriangle(a, b, c);
}

module.exports = isRightTriangle;