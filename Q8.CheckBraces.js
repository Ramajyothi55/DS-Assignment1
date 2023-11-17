
    function areBracketsBalanced(expr) 
    { 
          
        let stack = []; 
      
        // Traversing the Expression 
        for(let i = 0; i < expr.length; i++) 
        { 
            let x = expr[i]; 
      
            if (x == '(' || x == '[' || x == '{') 
            { 
                  
                stack.push(x); 
                continue; 
            } 
            if (stack.length == 0) 
                return false; 
                  
            let check; 
            switch (x){ 
            case ')': 
                check = stack.pop(); 
                if (check == '{' || check == '[') 
                    return false; 
                break; 
      
            case '}': 
                check = stack.pop(); 
                if (check == '(' || check == '[') 
                    return false; 
                break; 
      
            case ']': 
                check = stack.pop(); 
                if (check == '(' || check == '{') 
                    return false; 
                break; 
            } 
        } 
      
        // Check Empty Stack 
        return (stack.length == 0); 
    } 
      
     
    let expr = "([{}])"; 
      
    // Function call 
    if (areBracketsBalanced(expr)) 
        document.write("Closed "); 
    else
        document.write("Not Closed "); 
      
