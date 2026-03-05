function log() {
    let input1 = document.getElementById("i1").value.toLowerCase();
    let input2 = document.getElementById("i2").value.toLowerCase();

    if (input1 === "smsm" && input2 === "6-6-2012") {
        window.location.href = "home.html";
    }
    else {
        window.alert("❌ الكود مش صحيح");
    }
}