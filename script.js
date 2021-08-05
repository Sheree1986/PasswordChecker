let cl = console.log;

const strength = document.getElementById('strength');

let password = prompt('Enter your password.');

function checkPassword(){
  if(password.length < 8 && password.length >= 1){
    strength.innerHTML = '<strong>Weak</strong>';
    // strength.setAttribute('class', 'weak');
    strength.classList.add('weak');
    strength.classList.remove('standOut');
    
  }else if(password.length >= 8 && password.length < 12){
     strength.innerHTML = '<strong>Medium</strong>';
    // strength.setAttribute('class', 'medium');
    strength.classList.add('medium');
  }else {
     strength.innerHTML = '<strong>Strong</strong>';
    // strength.setAttribute('class', 'strong');
    strength.classList.add('strong');
  }
}

if(password === null || password.length === 0) {
  alert('Please, do not forget your password.');
  checkPassword();
}else {
  checkPassword();
}