const palabra = 'anita lava la tina';
const evaluacion = palabra.toLowerCase().split('').filter( espacios => {
  return !espacios.includes(' ')
});

const palindromo = evaluacion.join('');
const reversa = evaluacion.reverse().join('');

if(palindromo === reversa) {
  return 'Es un palíndromo!';
}
else {
  return 'No es un palíndromo.';
}