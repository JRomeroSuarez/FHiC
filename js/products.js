var filterOptions = {
    "entrepans_calents": false,
    "entrepans_freds": false,
    "begudes_calentes": false,
    "begudes_fredes": false
}

var showAll = true;


$(function() {
  
    var prodArr = [
        {
            "prodName": "Entrepà de bacó",
            "imgUrl": "bacon.png",
            "id": 1,
            "price": 20,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "entrepans_calents": true,
            "entrepans_freds": false,
            "begudes_calentes": false,
            "begudes_fredes": false
        },
        {
            "prodName": "Entrepà de formatge",
            "imgUrl": "cheese.png",
            "id": 2,
            "price": 20,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "entrepans_calents": false,
            "entrepans_freds": true,
            "begudes_calentes": false,
            "begudes_fredes": false
        },
        {
            "prodName": "Café amb llet",
            "imgUrl": "cafe_late.png",
            "id": 3,
            "price": 20,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "entrepans_calents": false,
            "entrepans_freds": false,
            "begudes_calentes": true,
            "begudes_fredes": false
        },
        {
            "prodName": "Suc de prèssec",
            "imgUrl": "peach_juice.png",
            "id": 4,
            "price": 20,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "entrepans_calents": false,
            "entrepans_freds": false,
            "begudes_calentes": false,
            "begudes_fredes": true
        },
        {
            "prodName": "Entrepà de llom",
            "imgUrl": "steak.png",
            "id": 5,
            "price": 20,
            "desc": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "entrepans_calents": true,
            "entrepans_freds": false,
            "begudes_calentes": false,
            "begudes_fredes": false
        },
    ];

    function renderProd(){

        $("#prod-list").empty();

        prodArr.forEach(prodInfo => {
            let added = false;
            Object.keys(filterOptions).forEach(propName => {
                if(!added && (filterOptions[propName] && prodInfo[propName] || showAll)){
                    $("#prod-list").append(
                        '<div class="col-lg-6" style="max-width: 100%;"> \
                            <div class="media align-items-center food-card"> \
                                <img class="mr-3 mr-sm-4" src="../img/'+ prodInfo.imgUrl +'" alt="" style="height: 100px;max-width: 180px"> \
                                <div class="media-body"> \
                                    <div class="d-flex justify-content-between food-card-title"> \
                                        <h4>'+ prodInfo.prodName +'</h4> \
                                        <h3 class="price-tag">'+ prodInfo.price +' €</h3> \
                                    </div> \
                                    <p>'+ prodInfo.desc +'</p> \
                                </div> \
                                \
                                <div class="counterCarrito"> \
                                    <button id="plus'+prodInfo.id+'" style="width: 25px;" >+</button> \
                                    <p id="quant'+prodInfo.id+'" style="font-weight: bold;font-size: medium; border: 1px solid black;background-color: white; text-align: center;color: black">0</p> \
                                    <button id="minus'+prodInfo.id+'" style="width: 25px;" >-</button> \
                                </div> \
                                <div> \
                                    <button> \
                                        <img src="../img/carrito24.png" /> \
                                    </button> \
                                </div> \
                            </div> \
                        </div>'
                    );
                    added = true;
                }
            });
        });

        $("#plus1").click(() => {
            var currVal = parseInt($("#quant1")[0].innerHTML);
            
            if(currVal >= 99){
                alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
            }else{
                $("#quant1")[0].innerHTML = (currVal+1).toString();
            }
        });
    
        $("#minus1").click(() => {
            var currVal = parseInt($("#quant1")[0].innerHTML);
            
            if(currVal == 0){
                alert("No es poden seleccionar menys de 0 items.");
            }else{
                $("#quant1")[0].innerHTML = (currVal-1).toString();
            }
        });
    
    
        $("#plus2").click(() => {
            var currVal = parseInt($("#quant2")[0].innerHTML);
            
            if(currVal >= 99){
                alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
            }else{
                $("#quant2")[0].innerHTML = (currVal+1).toString();
            }
        });
    
        $("#minus2").click(() => {
            var currVal = parseInt($("#quant2")[0].innerHTML);
            
            if(currVal == 0){
                alert("No es poden seleccionar menys de 0 items.");
            }else{
                $("#quant2")[0].innerHTML = (currVal-1).toString();
            }
        });
    
    
        $("#plus3").click(() => {
            var currVal = parseInt($("#quant3")[0].innerHTML);
            
            if(currVal >= 99){
                alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
            }else{
                $("#quant3")[0].innerHTML = (currVal+1).toString();
            }
        });
    
        $("#minus3").click(() => {
            var currVal = parseInt($("#quant3")[0].innerHTML);
            
            if(currVal == 0){
                alert("No es poden seleccionar menys de 0 items.");
            }else{
                $("#quant3")[0].innerHTML = (currVal-1).toString();
            }
        });
    
    
        $("#plus4").click(() => {
            var currVal = parseInt($("#quant4")[0].innerHTML);
            
            if(currVal >= 99){
                alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
            }else{
                $("#quant3")[0].innerHTML = (currVal+1).toString();
            }
        });
    
        $("#minus4").click(() => {
            var currVal = parseInt($("#quant4")[0].innerHTML);
            
            if(currVal == 0){
                alert("No es poden seleccionar menys de 0 items.");
            }else{
                $("#quant4")[0].innerHTML = (currVal-1).toString();
            }
        });
    
    
        $("#plus5").click(() => {
            var currVal = parseInt($("#quant5")[0].innerHTML);
            
            if(currVal >= 99){
                alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
            }else{
                $("#quant5")[0].innerHTML = (currVal+1).toString();
            }
        });
    
        $("#minus5").click(() => {
            var currVal = parseInt($("#quant5")[0].innerHTML);
            
            if(currVal == 0){
                alert("No es poden seleccionar menys de 0 items.");
            }else{
                $("#quant5")[0].innerHTML = (currVal-1).toString();
            }
        });
    }
    
    renderProd();

    $("#defaultCheck1").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.entrepans_calents = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.entrepans_calents = false;
        }
        renderProd();
    });

    $("#defaultCheck2").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.entrepans_freds = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.entrepans_freds = false;
        }
        renderProd();
    });

    $("#defaultCheck3").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.begudes_calentes = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.begudes_calentes = false;
        }
        renderProd();
    });

    $("#defaultCheck4").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheckAll" ).prop( "checked", false );
            filterOptions.begudes_fredes = true;
            showAll = false;
        } else {
            // checkbox is not checked -> do something different
            filterOptions.begudes_fredes = false;
        }
        renderProd();
    });

    $("#defaultCheckAll").click(function(){
        var id = parseInt($(this).val(), 10);
        if($(this).is(":checked")) {
            $( "#defaultCheck1" ).prop( "checked", false );
            $( "#defaultCheck2" ).prop( "checked", false );
            $( "#defaultCheck3" ).prop( "checked", false );
            $( "#defaultCheck4" ).prop( "checked", false );
            showAll = true;
        } else {
            // checkbox is not checked -> do something different
        }
        renderProd();
    });

    
  
});


