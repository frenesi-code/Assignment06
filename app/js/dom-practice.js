/*eslint-env browser*/

//STEP 1

function BtnAClick() {
    alert('I have been clicked Btn A');
}

function OnLoad() {
    //STEP 2
 
    var btnB = document.getElementById("btnB");
    btnB.addEventListener("click", btnBClicked);
        
    function btnBClicked() {
        alert('I have been clicked Btn B');
    }

    //STEP 3
    document.getElementById("btnC").addEventListener("click", btnCClicked);        
    
    function btnCClicked() {
        alert('I have been clicked Btn C');
    }

    //STEP 4
    document.getElementById("btnD").addEventListener("click", function(){
        alert('I have been clicked Btn D');
    })

    // Step 5
    // The step 5 was implemented in the practive html file as requested

    //STEP 6
    document.getElementById("redirect").addEventListener("click", function(event){    
        event.preventDefault();
        alert('I have been clicked on the link but prevents the browser from also redirecting to the Google site');                
    })

    //STEP 7
    document.getElementById("btnF").addEventListener("click", function(event){    
        alert(document.getElementById("myInput").value);
        
        var el = event.target 
        el.setAttribute('disabled', true);
    })

    //STEP 8
    document.getElementById("btnG").addEventListener("click", function(){        
        var w = 300;
        var h = 300;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        window.open("newpage.html", "New Page", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);        
    })
     
    //STEP 9

    var timer;

    function start() {
        timer = setInterval(printInTheConsole, 2000);
    }

    function stop() {
        clearInterval(timer);
    }

    function printInTheConsole() {
        console.log("Learning JavaScript is fun!");
    }

    document.getElementById("btnH").addEventListener("click", start);                    
    document.getElementById("btnI").addEventListener("click", stop);
    
    //STEP 10
    document.getElementById("btnJ").addEventListener("click", function(){        
        alert(document.getElementById("cars").value);
    })    
}




