var filterOptions = {
  "entrepans_calents": false,
  "entrepans_freds": false,
  "begudes_calentes": false,
  "begudes_fredes": false
}

$(function () {
  $('[data-toggle="popover"]').popover()
});
var showAll = true;

$(function() {

  var prodArr = [{
      "prodName": "Bocadillo de Bacon",
      "imgUrl": "bacon.png",
      "id": 1,
      "price": 20,
      "desc": "Pan y bacon",
      "entrepans_calents": true,
      "entrepans_freds": false,
      "begudes_calentes": false,
      "begudes_fredes": false
    },
    {
      "prodName": "Bocadillo de queso",
      "imgUrl": "cheese.png",
      "id": 2,
      "price": 20,
      "desc": "Pan y queso",
      "entrepans_calents": false,
      "entrepans_freds": true,
      "begudes_calentes": false,
      "begudes_fredes": false
    },
    {
      "prodName": "Café con leche",
      "imgUrl": "cafe_late.png",
      "id": 3,
      "price": 20,
      "desc": "Cafe, leche y azucar",
      "entrepans_calents": false,
      "entrepans_freds": false,
      "begudes_calentes": true,
      "begudes_fredes": false
    },
    {
      "prodName": "Zumo de melocoton",
      "imgUrl": "peach_juice.png",
      "id": 4,
      "price": 20,
      "desc": "Melocoton y azucar",
      "entrepans_calents": false,
      "entrepans_freds": false,
      "begudes_calentes": false,
      "begudes_fredes": true
    },
    {
      "prodName": "Bocadillo de lomo",
      "imgUrl": "steak.png",
      "id": 5,
      "price": 20,
      "desc": "Pan y lomo",
      "entrepans_calents": true,
      "entrepans_freds": false,
      "begudes_calentes": false,
      "begudes_fredes": false
    },
  ];

  var carritoProds = [];

  var storage = sessionStorage.getItem("carrito");
  if(storage){
    var carritoArr = storage.split("%%%%%");
    var prod;
    var fosc = false;
    var totalPrice = -5;
    carritoArr.forEach(str => {
      prod = JSON.parse(str);
      carritoProds.push(prod);
    });
  }

  function findProduct(id){
    var res;
    prodArr.forEach(prodInfo => {
      if(prodInfo.id == id){
        res = prodInfo;
      }
    });

    return res;
  }

  function addSessionStorage(){
    var storageString = "";
    sessionStorage.removeItem("carrito");
    carritoProds.forEach(prod => {
      storageString += JSON.stringify(prod);
      storageString += "%%%%%";
    });
    storageString = storageString.substr(0,storageString.length-5);
    sessionStorage.setItem("carrito",storageString);
  }

  function renderProd() {

    $("#prod-list").empty();

    prodArr.forEach(prodInfo => {
      let added = false;
      Object.keys(filterOptions).forEach(propName => {
        if (!added && (filterOptions[propName] && prodInfo[propName] || showAll)) {
          $("#prod-list").append(
            '<div class="col-lg-6" style="max-width: 100%;"> \
                            <div class="media align-items-center food-card"> \
                                <img class="mr-3 mr-sm-4" src="../img/' + prodInfo.imgUrl + '" alt="" style="height: 100px;max-width: 180px"> \
                                <div class="media-body"> \
                                    <div class="d-flex justify-content-between food-card-title"> \
                                        <h4>' + prodInfo.prodName + '</h4> \
                                        <h3 class="price-tag">' + prodInfo.price + ' €</h3> \
                                    </div> \
                                    <p>' + prodInfo.desc + '</p> \
                                </div> \
                                \
                                <div class="counterCarrito"> \
                                    <button id="plus' + prodInfo.id + '" style="width: 25px;" >+</button> \
                                    <p id="quant' + prodInfo.id + '" style="font-weight: bold;font-size: medium; border: 1px solid black;background-color: white; text-align: center;color: black">0</p> \
                                    <button id="minus' + prodInfo.id + '" style="width: 25px;" >-</button> \
                                </div> \
                                <div> \
                                    <button type="button" id="addProduct'+ prodInfo.id +'" class="btn btn-outline-danger " data-toggle="popover" title="Popover title" data-content="PIPO" > \
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

    $("#addProduct1").click(() => {
      
      var currProd = findProduct(1);

      var numProd = parseInt($("#quant1")[0].innerHTML);

      for(i=0;i<numProd;i++){
        var nextId = sessionStorage.getItem("nextId");
        var curr_id = nextId ? parseInt(nextId) : 1;
        currProd = JSON.parse(JSON.stringify(currProd));
        currProd.carr_id = curr_id;
        carritoProds.push(currProd);
        $("#carritoProducts").append(
          '<li id="removeFromCarrito' + curr_id + '"> \
            <span class="item"> \
              <span class="item-left"> \
                <span class="item-info"> \
                  <span>'+currProd.prodName+'</span> \
                  <span>'+currProd.price+' €</span> \
                </span> \
              </span> \
              <span class="item-right"> \
                <button class="btn btn-xs btn-danger pull-right" id="remove'+curr_id+'" onClick="reply_click(this.id)" >x</button> \
              </span> \
            </span> \
          </li> \
          '
        );
        curr_id += 1;
        sessionStorage.removeItem("nextId");
        sessionStorage.setItem("nextId",curr_id.toString())
      }
      addSessionStorage();
    });

    $("#addProduct2").click(() => {
      
      var currProd = findProduct(2);

      var numProd = parseInt($("#quant2")[0].innerHTML);

      for(i=0;i<numProd;i++){
        var nextId = sessionStorage.getItem("nextId");
        var curr_id = nextId ? parseInt(nextId) : 1;
        currProd = JSON.parse(JSON.stringify(currProd));
        currProd.carr_id = curr_id;
        carritoProds.push(currProd);
        $("#carritoProducts").append(
          '<li id="removeFromCarrito' + curr_id + '"> \
            <span class="item"> \
              <span class="item-left"> \
                <span class="item-info"> \
                  <span>'+currProd.prodName+'</span> \
                  <span>'+currProd.price+' €</span> \
                </span> \
              </span> \
              <span class="item-right"> \
                <button class="btn btn-xs btn-danger pull-right" id="remove'+curr_id+'" onClick="reply_click(this.id)" >x</button> \
              </span> \
            </span> \
          </li> \
          '
        );
        curr_id += 1;
        sessionStorage.removeItem("nextId");
        sessionStorage.setItem("nextId",curr_id.toString())
      }
      addSessionStorage();
    });

    $("#addProduct3").click(() => {
      
      var currProd = findProduct(3);

      var numProd = parseInt($("#quant3")[0].innerHTML);

      for(i=0;i<numProd;i++){
        var nextId = sessionStorage.getItem("nextId");
        var curr_id = nextId ? parseInt(nextId) : 1;
        currProd = JSON.parse(JSON.stringify(currProd));
        currProd.carr_id = curr_id;
        carritoProds.push(currProd);
        $("#carritoProducts").append(
          '<li id="removeFromCarrito' + curr_id + '"> \
            <span class="item"> \
              <span class="item-left"> \
                <span class="item-info"> \
                  <span>'+currProd.prodName+'</span> \
                  <span>'+currProd.price+' €</span> \
                </span> \
              </span> \
              <span class="item-right"> \
                <button class="btn btn-xs btn-danger pull-right" id="remove'+curr_id+'" onClick="reply_click(this.id)" >x</button> \
              </span> \
            </span> \
          </li> \
          '
        );
        curr_id += 1;
        sessionStorage.removeItem("nextId");
        sessionStorage.setItem("nextId",curr_id.toString())
      }
      addSessionStorage();
    });

    $("#addProduct4").click(() => {
      
      var currProd = findProduct(4);

      var numProd = parseInt($("#quant4")[0].innerHTML);

      for(i=0;i<numProd;i++){
        var nextId = sessionStorage.getItem("nextId");
        var curr_id = nextId ? parseInt(nextId) : 1;
        currProd = JSON.parse(JSON.stringify(currProd));
        currProd.carr_id = curr_id;
        carritoProds.push(currProd);
        $("#carritoProducts").append(
          '<li id="removeFromCarrito' + curr_id + '"> \
            <span class="item"> \
              <span class="item-left"> \
                <span class="item-info"> \
                  <span>'+currProd.prodName+'</span> \
                  <span>'+currProd.price+' €</span> \
                </span> \
              </span> \
              <span class="item-right"> \
                <button class="btn btn-xs btn-danger pull-right" id="remove'+curr_id+'" onClick="reply_click(this.id)" >x</button> \
              </span> \
            </span> \
          </li> \
          '
        );
        curr_id += 1;
        sessionStorage.removeItem("nextId");
        sessionStorage.setItem("nextId",curr_id.toString())
      }
      addSessionStorage();
    });

    $("#addProduct5").click(() => {
      
      var currProd = findProduct(5);

      var numProd = parseInt($("#quant5")[0].innerHTML);

      for(i=0;i<numProd;i++){
        var nextId = sessionStorage.getItem("nextId");
        var curr_id = nextId ? parseInt(nextId) : 1;
        currProd = JSON.parse(JSON.stringify(currProd));
        currProd.carr_id = curr_id;
        carritoProds.push(currProd);
        $("#carritoProducts").append(
          '<li id="removeFromCarrito' + curr_id + '"> \
            <span class="item"> \
              <span class="item-left"> \
                <span class="item-info"> \
                  <span>'+currProd.prodName+'</span> \
                  <span>'+currProd.price+' €</span> \
                </span> \
              </span> \
              <span class="item-right"> \
                <button class="btn btn-xs btn-danger pull-right" id="remove'+curr_id+'" onClick="reply_click(this.id)" >x</button> \
              </span> \
            </span> \
          </li> \
          '
        );
        curr_id += 1;
        sessionStorage.removeItem("nextId");
        sessionStorage.setItem("nextId",curr_id.toString())
      }
      addSessionStorage();
    });

    $("#plus1").click(() => {
      var currVal = parseInt($("#quant1")[0].innerHTML);

      if (currVal >= 99) {
        alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
      } else {
        $("#quant1")[0].innerHTML = (currVal + 1).toString();
      }
    });

    $("#minus1").click(() => {
      var currVal = parseInt($("#quant1")[0].innerHTML);

      if (currVal == 0) {
        alert("No es poden seleccionar menys de 0 items.");
      } else {
        $("#quant1")[0].innerHTML = (currVal - 1).toString();
      }
    });


    $("#plus2").click(() => {
      var currVal = parseInt($("#quant2")[0].innerHTML);

      if (currVal >= 99) {
        alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
      } else {
        $("#quant2")[0].innerHTML = (currVal + 1).toString();
      }
    });

    $("#minus2").click(() => {
      var currVal = parseInt($("#quant2")[0].innerHTML);

      if (currVal == 0) {
        alert("No es poden seleccionar menys de 0 items.");
      } else {
        $("#quant2")[0].innerHTML = (currVal - 1).toString();
      }
    });


    $("#plus3").click(() => {
      var currVal = parseInt($("#quant3")[0].innerHTML);

      if (currVal >= 99) {
        alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
      } else {
        $("#quant3")[0].innerHTML = (currVal + 1).toString();
      }
    });

    $("#minus3").click(() => {
      var currVal = parseInt($("#quant3")[0].innerHTML);

      if (currVal == 0) {
        alert("No es poden seleccionar menys de 0 items.");
      } else {
        $("#quant3")[0].innerHTML = (currVal - 1).toString();
      }
    });


    $("#plus4").click(() => {
      var currVal = parseInt($("#quant4")[0].innerHTML);

      if (currVal >= 99) {
        alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
      } else {
        $("#quant4")[0].innerHTML = (currVal + 1).toString();
      }
    });

    $("#minus4").click(() => {
      var currVal = parseInt($("#quant4")[0].innerHTML);

      if (currVal == 0) {
        alert("No es poden seleccionar menys de 0 items.");
      } else {
        $("#quant4")[0].innerHTML = (currVal - 1).toString();
      }
    });


    $("#plus5").click(() => {
      var currVal = parseInt($("#quant5")[0].innerHTML);

      if (currVal >= 99) {
        alert("S'ha arribat al màxim d'items que es poden demanar en una sola comanda. Per a més informació, contacti amb el nostre correu.");
      } else {
        $("#quant5")[0].innerHTML = (currVal + 1).toString();
      }
    });

    $("#minus5").click(() => {
      var currVal = parseInt($("#quant5")[0].innerHTML);

      if (currVal == 0) {
        alert("No es poden seleccionar menys de 0 items.");
      } else {
        $("#quant5")[0].innerHTML = (currVal - 1).toString();
      }
    });
  }

  renderProd();

  $("#defaultCheck1").click(function() {
    var id = parseInt($(this).val(), 10);
    if ($(this).is(":checked")) {
      $("#defaultCheckAll").prop("checked", false);
      filterOptions.entrepans_calents = true;
      showAll = false;
    } else {
      // checkbox is not checked -> do something different
      filterOptions.entrepans_calents = false;
    }
    renderProd();
  });

  $("#defaultCheck2").click(function() {
    var id = parseInt($(this).val(), 10);
    if ($(this).is(":checked")) {
      $("#defaultCheckAll").prop("checked", false);
      filterOptions.entrepans_freds = true;
      showAll = false;
    } else {
      // checkbox is not checked -> do something different
      filterOptions.entrepans_freds = false;
    }
    renderProd();
  });

  $("#defaultCheck3").click(function() {
    var id = parseInt($(this).val(), 10);
    if ($(this).is(":checked")) {
      $("#defaultCheckAll").prop("checked", false);
      filterOptions.begudes_calentes = true;
      showAll = false;
    } else {
      // checkbox is not checked -> do something different
      filterOptions.begudes_calentes = false;
    }
    renderProd();
  });

  $("#defaultCheck4").click(function() {
    var id = parseInt($(this).val(), 10);
    if ($(this).is(":checked")) {
      $("#defaultCheckAll").prop("checked", false);
      filterOptions.begudes_fredes = true;
      showAll = false;
    } else {
      // checkbox is not checked -> do something different
      filterOptions.begudes_fredes = false;
    }
    renderProd();
  });

  $("#defaultCheckAll").click(function() {
    var id = parseInt($(this).val(), 10);
    if ($(this).is(":checked")) {
      $("#defaultCheck1").prop("checked", false);
      $("#defaultCheck2").prop("checked", false);
      $("#defaultCheck3").prop("checked", false);
      $("#defaultCheck4").prop("checked", false);
      showAll = true;
    } else {
      // checkbox is not checked -> do something different
    }
    renderProd();
  });



});
