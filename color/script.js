let a=["red.png","yellow.png","m.png","green.png","black.png"];
let i=0;
function change()
{
    if(i==4){
        document.getElementById("image").src=a[4]
        i=0
    }
    else{
        document.getElementById("image").src=a[i++]
    }
}