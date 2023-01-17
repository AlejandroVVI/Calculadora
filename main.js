document.querySelectorAll(".button").forEach(element => {
    element.addEventListener("click", () => {
        if(document.getElementById("view").value == 0)
        document.getElementById("view").value = element.value;
        else
        document.getElementById("view").value += element.value;
    })
});

function cleaner(){
    document.getElementById("clean").addEventListener("click", () => {
        document.getElementById("view").value = 0;
    })
}
cleaner();

function resultview(){
    document.getElementById("idresult").addEventListener("click", () => {
        document.getElementById("view").value = eval(document.getElementById("view").value);
    })
}
resultview();
