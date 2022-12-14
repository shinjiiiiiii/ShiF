const pierreBtn = document.getElementById('pierre');
const feuilleBtn = document.getElementById('feuille');
const ciseauxBtn = document.getElementById('ciseaux');
const affichage = document.getElementById('affichage');

let joueur = null;
let ordi = null;
let resultat = null;

let count = document.getElementById('counter');
let win = 0;
let lose = 0;

const ordieChoix = ['pierre','feuille','ciseaux']


function combat(j, o){
  if(j ==='pierre' && o === 'ciseaux' || j === 'feuille' && o === 'pierre' || j === 'ciseaux' && o === 'feuille'){
    resultat = 'Gagné';
    affichage.innerHTML = `${joueur} vs ${ordi} : ${resultat}`;
    win ++ ;
  } else if(j === 'pierre' && o === 'feuille' || j === 'feuille' && o === 'ciseaux' ||j === 'ciseaux' && o === 'pierre'){
    resultat = 'Perdu';
    affichage.innerHTML = `${joueur} vs ${ordi} : ${resultat}`;
    lose ++ 
  }else {
    resultat = 'Egalité'
    affichage.innerHTML = `${joueur} vs ${ordi} : ${resultat}`;
  }
  count.innerHTML = `${win} gagné et ${lose} perdu`
}

pierreBtn.addEventListener('click', function(){
  joueur = 'pierre';
  chiffre = Math.floor(Math.random() * 3);
  ordi = ordieChoix[chiffre];
  combat(joueur, ordi);
})
feuilleBtn.addEventListener('click', function(){
  joueur = 'feuille';
  chiffre = Math.floor(Math.random() * 3);
  ordi = ordieChoix[chiffre];
  combat(joueur, ordi);
})
ciseauxBtn.addEventListener('click', function(){
  joueur = 'ciseaux';
  chiffre = Math.floor(Math.random() * 3);
  ordi = ordieChoix[chiffre];
  combat(joueur, ordi);
})