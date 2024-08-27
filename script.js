let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateCode(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qrText.value;
        imgBox.classList.add("show-img");

    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");

        },1000)
    }
    


}