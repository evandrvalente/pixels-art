window.onload = resetBoard;

let pixelBoardWidh = 5;
let pixelBoardHight = 5;

//determinar quantidade de elementos pixels por coluna e gerar uma linha

let pixelBoardRows = document.querySelector('.pixels-rows');

function generateRows (){
    for (index= 0; index < pixelBoardWidh; index +=1){
        let pixelItem = document.createElement('div');
        pixelItem.className  = "pixel";
        pixelBoardRows.appendChild(pixelItem);
    
    }
}
generateRows();

//gerar demais linhas a partir da primeira

let rows = document.getElementsByClassName('pixels-rows')[0].innerHTML;

for (ln = 0; ln < pixelBoardHight-1; ln +=1) {
    const pixelBoardLines = document.querySelector('#pixel-lines');
    let newLine = document.createElement ("section");
    newLine.className = "pixels-rows"
    newLine.innerHTML = document.querySelector('.pixels-rows').innerHTML;
    pixelBoardLines.appendChild(newLine);
};

//resetar estilos   
function resetBoard (){
document.getElementById("paleteFirst").classList.add("selected");
generateRows
}



//selecionar cor na paleta de cores

let first = document.getElementById('paleteFirst');
let second = document.getElementById('paleteSecond');
let third = document.getElementById('paleteThird');
let fourth = document.getElementById('paleteFourth');



//first.addEventListener("click", );

//pintar um elemento pixel

let = chosenColor = "white"

first.addEventListener("click", function()
    {
     //chosenColor = second.style.backgroundColor;  não funciona   
     //solução baseada em resposta enconrada no stackoverflow https://pt.stackoverflow.com/questions/167565/pegar-o-atributo-de-um-elemento
        chosenColor = window.getComputedStyle(first).backgroundColor;
        first.classList.add("selected");
        second.classList.remove("selected");
        third.classList.remove("selected");
        fourth.classList.remove("selected");
    }
);


second.addEventListener("click", function()
    {
        chosenColor = window.getComputedStyle(second).backgroundColor;
        first.classList.remove("selected");
        second.classList.add("selected");
        third.classList.remove("selected");
        fourth.classList.remove("selected");
    }
);

third.addEventListener("click", function()
    {
        chosenColor = window.getComputedStyle(third).backgroundColor;
        first.classList.remove("selected");
        second.classList.remove("selected");
        third.classList.add("selected");
        fourth.classList.remove("selected");
    }
);

fourth.addEventListener("click", function()
    {
        chosenColor = window.getComputedStyle(fourth).backgroundColor;
        first.classList.remove("selected");
        second.classList.remove("selected");
        third.classList.remove("selected");
        fourth.classList.add("selected");
    }
);

//adicionar id em cada pixel
let pixelsArrows = document.querySelectorAll('.pixel');
for (let mx = 0; mx < pixelsArrows.length; mx += 1) {
    let putId = pixelsArrows[mx];
    let idName = "pixelN" + mx;
    putId.setAttribute("id", idName);
};

//alterar background-color do pixel
let board = document.getElementsByClassName("pixel");
for (let mxm = 0; mxm < board.length; mxm += 1) {
    let putIdx = board[mxm];
    putIdx.addEventListener("click", clickPoint);
    function clickPoint (point){
        putIdx.style.backgroundColor = chosenColor};
};

/*
let board = document.getElementById("pixel-board");

board.addEventListener("click", clickPoint);
function clickPoint (point){
    console.log(point.target.id);
    let mudacor = point.target;
    mudacor.setAttribute("background-color", chosenColor);
};
*/