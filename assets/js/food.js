window.addEventListener('load', dontcry, false);
function dontcry() {
  var myColors = [];
  myColors.push("green", "yellow", "blue", "pink");
  var myFood = [];
  myFood.push("banana", "ananas", "pao", "batata_frita", "coca-cola", "carne", "alface", "pepino", "pera", "queijo", "fiambre", "massa", "peixe", "ervilhas", "ovo", "broculos", "cenoura", "salsicha", "chocolate", "arroz");
  var myRealFood = [];
  myRealFood.push("Banana", "Pineapple", "Bread", "French Fries", "Coke", "Meat", "Lettuce", "Cucumber", "Pear", "Cheese", "Ham", "Pasta", "Fish", "Peas", "Egg", "Broccoli", "Carrot", "Sausage", "Chocolate", "Rice");
  var myCal = [];
  myCal.push("105", "40", "61", "288", "288", "187", "252", "12", "70", "52", "79", "220", "61", "167", "92", "32", "25", "153", "134", "135");
  var myFat = [];
  myFat.push("0,39", "0,1", "0,72", "15", "0", "6,63", "15,01", "0,16", "0,15", "4", "4,8", "1,29", "3,49", "4,04", "7,04", "0,38", "0,15", "13", "7,42", "0,29");
  var myCarbs = [];
  myCarbs.push("26,95", "10,61", "11,38", "35", "22", "0", "0", "2,16", "18,78", "0,2", "4", "42,95", "0,02", "25,01", "0,4", "6,57", "5,84", "1,4", "14,85", "29,3");
  var myProta = [];
  myProta.push("1,29", "0,45", "2,00", "4,1", "0", "29,81", "27,29", "0,59", "0,48", "4", "4,8", "8,06", "6,87", "8,55", "6.27", "2,18", "0,57", "7,5", "7,5", "2,79");
  for(var i=0; i<myFood.length; i++) {
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/img/"+myFood[i]+".png");
    x.id = i;

    var main_div = document.createElement("div");
    main_div.classList.add("food", "center");
    main_div.style.backgroundColor = "var(--color-"+myColors[Math.floor(Math.random() * 4)]+")";
    main_div.appendChild(x);
    main_div.id = "btn"+i;

    var main_panel = document.createElement("div");
    main_panel.classList.add("modal", "center");
    main_panel.id = "myModal"+i;

    var panel = document.createElement("div");
    panel.classList.add("modal-content", "center");

    var span = document.createElement("span");
    var node2 = document.createTextNode("x");
    span.classList.add("close");
    span.appendChild(node2);

    var para = document.createElement("h1");
    var node = document.createTextNode(myRealFood[i]);
    var para_cals = document.createElement("p");
    var cals = document.createTextNode("Calories: "+myCal[i]+"kcal");
    var para_fats = document.createElement("p");
    var fats = document.createTextNode("Fat: "+myFat[i]+"g");
    var para_carbs = document.createElement("p");
    var carbs = document.createTextNode("Carbohydrates: "+myCarbs[i]+"g");
    var para_prots = document.createElement("p");
    var prots = document.createTextNode("Proteins: "+myProta[i]+"g");
    para.appendChild(node);
    para_cals.appendChild(cals);
    para_fats.appendChild(fats);
    para_carbs.appendChild(carbs);
    para_prots.appendChild(prots);


    panel.appendChild(para);
    panel.appendChild(para_cals);
    panel.appendChild(para_fats);
    panel.appendChild(para_carbs);
    panel.appendChild(para_prots);
    panel.appendChild(span);
    main_panel.appendChild(panel);
    document.getElementById("main").appendChild(main_panel);
    document.getElementById("main").appendChild(main_div);
  }

  $('body').on('click', function(e){
    var str = e.target.id;
    var inte = parseInt(str);
    if (Number.isInteger(inte)==true) {
      var modal = document.getElementById("myModal"+str);
      var food = document.getElementById(str);
      var span = document.getElementsByClassName("close")[str];
      food.onclick = function() {
        modal.style.display = "flex";
      }
    } else {
        var res = str.substr(3, 3);
        var modal = document.getElementById("myModal"+res);
        var btn = document.getElementById("btn"+res);
        var span = document.getElementsByClassName("close")[res];
        btn.onclick = function() {
          modal.style.display = "flex";
        }
    }

    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
}
