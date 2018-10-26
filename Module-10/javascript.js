    
    // When grow Grow button is pressed it will grow
    document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "400px";
    
    });
    
    // When Blue  button is pressed it will turn the box blue
    document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "Blue";
    
    });
    
    // When fade button is pressed the red box will fade in color
    document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.3";
    
    });

    // When Reset button is pressed the square will go back to normal
    document.getElementById("button4").addEventListener("click", function(){
    
    document.getElementById("box").style.height = "200px";

    document.getElementById("box").style.backgroundColor = "red";

    document.getElementById("box").style.opacity = "1";
        
    });
        
    