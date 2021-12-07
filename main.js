for (let i = 0; i < 9; i++) {
  document.getElementById('ticTacToe').innerHTML+=('<div class="gamePlace"></div>');  
}

let counter = 0;

document.getElementById('ticTacToe').onclick = function (event) {  
  // console.log(event);
  if(event.target.className == 'gamePlace') {
    if(counter%2 == 0) {
      document.getElementById('step').innerHTML=('Следующий ход: Нолики');
      event.target.innerHTML = 'x';
    }
    else {
      document.getElementById('step').innerHTML=('Следующий ход: Крестики');
      event.target.innerHTML = '0';
    }
    counter++;
    winner();    
  }  
}

function winner() {
  const places = document.getElementsByClassName('gamePlace');
  if(places[0].innerHTML =='x' && places[1].innerHTML =='x' && places[2].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[3].innerHTML =='x' && places[4].innerHTML =='x' && places[5].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[6].innerHTML =='x' && places[7].innerHTML =='x' && places[8].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[0].innerHTML =='x' && places[3].innerHTML =='x' && places[6].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[1].innerHTML =='x' && places[4].innerHTML =='x' && places[7].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[2].innerHTML =='x' && places[5].innerHTML =='x' && places[8].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[0].innerHTML =='x' && places[4].innerHTML =='x' && places[8].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[2].innerHTML =='x' && places[4].innerHTML =='x' && places[6].innerHTML == 'x') {
    alert('Победитель: Крестики');
  }
  if(places[0].innerHTML =='0' && places[1].innerHTML =='0' && places[2].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
  if(places[3].innerHTML =='0' && places[4].innerHTML =='0' && places[5].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
  if(places[6].innerHTML =='0' && places[7].innerHTML =='0' && places[8].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
  if(places[0].innerHTML =='0' && places[3].innerHTML =='0' && places[6].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
  if(places[1].innerHTML =='0' && places[4].innerHTML =='0' && places[7].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
  if(places[2].innerHTML =='0' && places[5].innerHTML =='0' && places[8].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
  if(places[0].innerHTML =='0' && places[4].innerHTML =='0' && places[8].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
  if(places[2].innerHTML =='0' && places[4].innerHTML =='0' && places[6].innerHTML == '0') {
    alert('Победитель: Нолики');
  }
}