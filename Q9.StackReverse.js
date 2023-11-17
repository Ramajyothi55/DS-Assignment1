 let st = [];
 
    function insert_at_bottom(x)
    {
        if(st.length==0)
            st.push(x);
        else
        {
                let a = st.pop();
                insert_at_bottom(x);
      
                st.push(a);
        }
         
         
    }
     
    function reverse()
    {
        if(st.length > 0)
            {
                  
                
                let x = st.pop();
                reverse();
                  
            
                 insert_at_bottom(x);
            }
    }
     
    
    
    st.push('51');
    st.push('54');
    st.push('55');
    st.push('58');
     
    document.write("Original Stack<br>");
     
    document.write(st.join(" ")+"<br>");
   
