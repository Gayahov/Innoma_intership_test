
function findNumbers(n) {  
    let result = {};  
    let sum = ((1 + n) * n) / 2;  
      for (let i = 1; i <= n; i++) {  
        let b = (sum - i) / (i + 1);   
        if (Math.floor(b) === b && b <= n && !result[b])
         result[i] = b;  
    } 
            return result;
 }
 findNumbers(10)