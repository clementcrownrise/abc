
let anything = 0;

function hello(){
 //anything+=5;
 anything++;
 document.querySelector('h1').innerHTML = anything;
 if( anything % 2 === 0){ //modulus

 alert(`The value is now  ${counter}`);
  //alert('The value is now ' + counter);


 }

}


function dec(){
    anything--;
    document.querySelector('h1').innerHTML = anything;
}




/*

document.addEventListener('DOMContentLoaded', function(){
//red
document.querySelector('#red').onclick = function(){
    document.querySelector('#hello').style.color = 'red';
}

//black
document.querySelector('#black').onclick = function(){
    document.querySelector('#hello').style.color = 'black';

}

//green
document.querySelector('#green').onclick = function(){
    document.querySelector('body').style.backgroundColor = 'green';

}

//hide
document.querySelector('#hide').onclick = function(){
    document.querySelector('#hello').style.display = 'none';
}


//show

document.querySelector('#show').onclick = function(){
    //document.getElementById('hello').innerHTML = 'TechTutors';
    //location.reload() ;
    document.querySelector('#hello').style.display = 'block';

}






});


*/







