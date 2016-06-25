 function makeBoard(callback){

  var table = document.createElement("table");
  table.cellPadding = 0;
  table.cellSpacing = 0;
  for(var rowIndex = 0; rowIndex < 3; rowIndex++){
    var row = document.createElement("tr");
    for(var columnIndex = 0; columnIndex < 3; columnIndex++){
      var data = document.createElement("td");
      data.innerText = callback(rowIndex, columnIndex);
      if(rowIndex != 2)
        data.style.borderBottom = "5px solid";
      if(columnIndex != 2)
        data.style.borderRight = "5px solid";
      row.appendChild(data);
    }
    table.appendChild(row);
  }
  var body = document.querySelector("body");
  body.appendChild(table);
}
function increment(i, j){
  return i * 3 + j;
}
function incrementPlus(i, j){
  return i * 3 + j + 1;
}
function twoDimension(i, j){
  return `(${i}, ${j})`;
}
function words(i, j){
  var positions = ["top left", "top center", "top right", "middle left", "center", "middle right", "bottom left", "bottom center", "bottom right"];
  return positions[i * 3 + j];
}
function blank(){
  return "";
}
makeBoard(blank);
//makeBoard(incrementPlus);
//makeBoard(increment);
//makeBoard(twoDimension);
//makeBoard(words);

/*
var addX = function(){
  this.innerText = "X";
}

var turnCount = 0;
var currentMarker = function(){
  turnCount++;
  if(turnCount % 2 == 1){
    return "X";
  } else {
    return "O";
  }
}

var addMarker = function(){
  this.innerText = currentMarker();
}

var tds = document.querySelectorAll("td");
tds.forEach(function(td){
  td.addEventListener("click", addMarker);
});

var possibleWinningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
var isX = function(tdIndex){
  return tds[tdIndex].innerText == "X"
}
var winningCombo = function(spaces){
  return spaces.every(isX);
}
var checkWin = function(){
  return possibleWinningCombos.some(winningCombo);
}
*/
