0 + ' ' // "0"
-0 + ' ' // "0"    
1 + ' ' // "1"
-1 + ' '    // "-1"
NaN + ' '   // "NaN"
Infinity + ''   // "Infinity"
-Infinity + ''  // "-Infinity"
true + ''   // "true"
false + ''  // "false"
null + ''   // "null"
undefined + ''  // "undefined"
(Symbol()) + '' // -> Cannot convert a Symbol value to a string
({}) + ''   // object ojbect
Math + ''   // object Math
[10,20] + ''    // 10,20
(function(){}) + '' // function(){}
Array + ''  // function Array()