console.log("Hola desde un script externo ")

function changeColorTo(color){
    const refName = getReferenceFullName();
    refName.style.color= color;
}

function getReferenceFullName(){
    return document.getElementById("fullname");
}

function changeColorParagraph(color, refObj){
    console.log(refObj);
    refObj.style.color= color;
}