// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// -importo il div id griglia nel JS
// -creazione div quadrato con funzione che andrà dentro griglia
// -stilizzazione CSS quadrato, flexato padre contenitore
// -ciclo for per creare tot quadrati e click col this
// -inserire numeri all'interno dei quadrati nel ciclo for
// -stilizzare numeri all'interno del quadrato (ANCORA DA CENTRARE)
// -funzione per far comparire i quadrati al click del btn



const griglia = document.getElementById('griglia');
console.log(griglia);

const btn = document.getElementById('btn');
btn.addEventListener('click', play)

function play(){

    griglia.classList.remove('d-none');
    griglia.classList.add('d-block');
    griglia.innerHTML = "";

    let select = document.getElementById('values');
    console.log(select);
    let opzioni = select.options[select.selectedIndex].value;
    switch(opzioni){
        case '1' :

          function creazioneQuadrato(){

              const div = document.createElement('div');
              div.classList.add('quadrato');
              return div;
    
          }
          console.log(creazioneQuadrato())
    
          for (let i=0; i<100; i++){
    
              var elementoCorrente = creazioneQuadrato();
        
    
              elementoCorrente.addEventListener('click', function(){
                  this.classList.toggle('attiva');
                  console.log(`${i+1}`)
              })
    
              let numeri = document.createElement("span");
              numeri.innerText = `${i+1}`;
    
              griglia.append(elementoCorrente);
              elementoCorrente.append(numeri);
          }
          break ;

        case '2' : 
        //   div.classList.remove('quadrato');
        //   div.classList.remove('quadratoH');

          function creazioneQuadratoM(){

              const div = document.createElement('div');
              div.classList.add('quadratoM');
              return div;
    
          }
          console.log(creazioneQuadratoM())
          
    
          for (let i=0; i<81; i++){
    
              var elementoCorrenteM = creazioneQuadratoM();
        
    
              elementoCorrenteM.addEventListener('click', function(){
                  this.classList.toggle('attiva');
                  console.log(`${i+1}`)
              })
    
              let numeri = document.createElement("span");
              numeri.innerText = `${i+1}`;
    
              griglia.append(elementoCorrenteM);
              elementoCorrenteM.append(numeri);
          }
          break;

        case'3' : 

        //   div.classList.remove('quadrato');
        //   div.classList.remove('quadratoM');

          function creazioneQuadratoH(){

              const div = document.createElement('div');
              div.classList.add('quadratoH');
              return div;
    
          }
          console.log(creazioneQuadratoH())
    
          for (let i=0; i<49; i++){
    
              var elementoCorrenteH = creazioneQuadratoH();
        
    
              elementoCorrenteH.addEventListener('click', function(){
                  this.classList.toggle('attiva');
                  console.log(`${i+1}`)
              })
    
              let numeri = document.createElement("span");
              numeri.innerText = `${i+1}`;
    
              griglia.append(elementoCorrenteH);
              elementoCorrenteH.append(numeri);
          }

          break ;
        }
    
}

// function creazioneQuadrato(){

//     const div = document.createElement('div');
//     div.classList.add('quadrato');
//     return div;
    
// }
// console.log(creazioneQuadrato())
    
// for (let i=0; i<100; i++){
    
//     let elementoCorrente = creazioneQuadrato();
        
    
//     elementoCorrente.addEventListener('click', function(){
//         this.classList.toggle('attiva');
//         console.log(`${i}`)
//     })
    
//     let numeri = document.createElement("span");
//     numeri.innerText = `${i+1}`;
    
//     griglia.append(elementoCorrente);
//     elementoCorrente.append(numeri);
// }



// function creazioneQuadratoM(){

//     const div = document.createElement('div');
//     div.classList.add('quadratoM');
//     return div;
    
// }
// console.log(creazioneQuadratoM())
    
// for (let i=0; i<100; i++){
    
//     let elementoCorrenteM = creazioneQuadratoM();
        
    
//     elementoCorrenteM.addEventListener('click', function(){
//         this.classList.toggle('attiva');
//         console.log(`${i}`)
//     })
    
//     let numeri = document.createElement("span");
//     numeri.innerText = `${i+1}`;
    
//     griglia.append(elementoCorrenteM);
//     elementoCorrenteM.append(numeri);
// }




// function creazioneQuadratoH(){

//     const div = document.createElement('div');
//     div.classList.add('quadratoH');
//     return div;
    
// }
// console.log(creazioneQuadratoH())
    
// for (let i=0; i<100; i++){
    
//     let elementoCorrenteH = creazioneQuadratoH();
        
    
//     elementoCorrenteH.addEventListener('click', function(){
//         this.classList.toggle('attiva');
//         console.log(`${i}`)
//     })
    
//     let numeri = document.createElement("span");
//     numeri.innerText = `${i+1}`;
    
//     griglia.append(elementoCorrenteH);
//     elementoCorrenteH.append(numeri);
// }









