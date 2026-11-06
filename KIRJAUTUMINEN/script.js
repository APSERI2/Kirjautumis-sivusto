function submit() {
    document.getElementById('loginU').value = "";
    document.getElementById('loginP').value = "";
}

document.getElementById('submit').addEventListener("click", submit);