let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "40px";

let paraMess = document.querySelector('p.mess-with-me');

paraMess.style.background = "green";

let hiddenDin0 = document.querySelector("#hide-me");
hiddenDino.style.display = 'none';
//hiddenDino.style.opacity = '0';

let firstDino = document.querySelector("#triceratops");
firstDino.style.width = '32px';

let feathers = document.querySelector('#feathers');

let biggify = document.querySelector('#biggify');

let row = document.querySelector('#row');

let switchColorButton = document.querySelector('#toggle');

//Event Listeners
spanMess.addEventListener('click', function(){
    spanMess.style.color = "orange";
});

firstDino.addEventListener('click', function(){
    firstDino.style.border = '3px solid red';
});

feathers.addEventListener('click', function(){
    feathers.style.opacity = '0.5';
});

biggify.addEventListener('mouseover', function(){
    biggify.style.width = '200px';
    });


switchColorButton.addEventListener('click', function(){
    console.log('TESTING BUTTON!');

    if(row.style.background === 'white'){
        row.style.background = "purple";
    }else{
        row.style.background = "white";
    }

});

biggify.addEventListener('click', function(){
    if(document.body.style.width === 'hoovered'){
        document.body.style.width === 'not hoovered';
    } else {
        document.body.width === 'nothing'
    }
    });



