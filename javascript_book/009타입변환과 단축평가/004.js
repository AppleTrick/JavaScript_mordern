1 - '1'  // -> 0
1 * '10'   // -> 10
1 / 'one' //-> NaN

'1' > 0 // true
+' '    // 0
+'0'    // 0
+'1'    // 1
+'string' // NaN

+true // 1;
+false // 0
+null // 0

+undefined // NaN
+Symbol() // Cannot convert a Symbol value to a number

+{}             // NaN
+[]             // 0
+[10,20]        // NaN
+(function(){}) // NaN