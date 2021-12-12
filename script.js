

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




