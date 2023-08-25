document.addEventListener('DOMContentLoaded', () => {

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }

    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }

    function closeAlert() {
        document.getElementById("alert-danger").classList.remove("show");
        document.getElementById("alert-success").classList.remove("show");
    }

    function eventos() {
        document.getElementById('regBtn').addEventListener('click', validate);
        document.querySelector('#button1').addEventListener('click', closeAlert);
        document.querySelector('#button2').addEventListener('click', closeAlert);
    } eventos();

    function validate () {

        let inputs = document.querySelectorAll('#nombre, #apellido, #email, #password1, #password2');
        let inputPass1 = document.getElementById('password1');
        let inputPass2 = document.getElementById('password2');
        let checkBox = document.getElementById('terminos');
        
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === "") {
                return showAlertError();
            } 
        };
        
        if (inputPass1.value.length < 6) {
                return showAlertError();    
        };

        if (inputPass1.value !== inputPass2.value) {
                return showAlertError();
        };

        if (checkBox.checked === false) {
                return showAlertError();
        }
        
        showAlertSuccess();
    };

});
    