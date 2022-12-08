var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    var fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    var toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    var exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
