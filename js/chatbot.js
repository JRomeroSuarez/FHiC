var chatMsg = ["Hola, sóc Break"]

$(function() {

    $("#plus1").click(() => {
        var currVal = parseInt($("#quant1")[0].innerHTML);
        
        if(currVal >= 99){
            alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
        }else{
            $("#quant1")[0].innerHTML = (currVal+1).toString();
        }
    });

      document.getElementById('foo').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
          // Enter pressed
          alert("enter pressed!");
          return false;
        }
      }
  
});


