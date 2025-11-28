let imgBox =document.getElementById("imgBox");
    let qrImage =document.getElementById("qrImage");
    let qrtext =document.getElementById("qrtext");
    function generateQR(){
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}
