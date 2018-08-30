$("#login").click(() => {


    login();



})

$("#logOut").click(() => {
    logOut();
});



let decodeToken = (token) => {
    var playload = JSON.parse(atob(token.split('.')[1]));
    console.log(playload);

    return playload;

};


let login = () => {

    $.ajax({

        "url": "http://localhost:3000/api/login",
        "type": "POST",
        "data": {


            nombre: $("#username").val(),
            cedula: $("#password").val()
        },
        "dataType": "JSON"


    }).done((response) => {

        if (response && response.token) {
            localStorage.setItem('token', response.token);


            const token = localStorage.getItem('token');

            console.log(token);

            window.location.href = 'http://localhost:3000/funciona';


        } else {

            $("#error").html(`<div class="alert alert-danger">Usuario y/o contraseña incorrectas</div>`);

        }

        console.log(decodeToken(response.token));





    }).always(() => {

    });

};

let logOut = () => {

    const token = localStorage.getItem('token');




    localStorage.removeItem('token');

    
    window.location.href = 'http://localhost:3000/';

    console.log(token);

}