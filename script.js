//afficher les clicks
var footer = document.querySelector('footer');

count = 0;

footer.addEventListener('click', function() {
    count += 1
    console.log(`click numéro ${count}`);

});

//rajouter/enlever 'collapse'
var icon = document.getElementsByClassName('navbar-toggler')[0];
var navbar = document.getElementById('navbarHeader');

icon.addEventListener('click', function() {
    navbar.classList.toggle('collapse');
    }
);

// Première carte texte rouge après click edit 
var cardText1 = document.getElementsByClassName('card-text')[0];
var editBtn1 = document.getElementsByClassName('btn-group')[0].childNodes[3];

editBtn1.addEventListener('click', function () {
    cardText1.style.color = 'red';
});

// 2eme carte texte vert après click edit 
var cardText2 = document.getElementsByClassName('card-text')[2];
var editBtn2 = document.getElementsByClassName('btn-group')[2].childNodes[3];

editBtn2.addEventListener('click', function () {
    if (cardText2.style.color === 'green') {
        cardText2.style.color = '';
    } else {
        cardText2.style.color = "green";
    };
});

// 
var link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
var nav = document.getElementsByClassName('navbar')[0]

nav.addEventListener("dblclick", function () {
    if (link.disabled) {
        link.disabled = false;
    } else {
        link.disabled = true;
    };
});
