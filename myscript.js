function check()
{
    /**Take input value from html element 
     with id "word" and store it in a variable named input**/
    var input = document.getElementById("word").value;
    
    /**Print "input" variable to console**/
    console.log(input);

    /**Calculate length of input 
    and store it in a variable named count**/
    var count=(input.length);

    /**Print "count" variable to console**/
    console.log(count);
    
    /**Add if-else to check if count is greater than 5 or lesser 
    and print a message to the console accordingly***/
    if(count>5){
    console.log('morethan 5');
    }

    else{
    console.log('lessthan 5');
    }
}
