```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  
  arrayDeNumeros.sort();

var current = numeroEscolhido;
var cnt = 0;

for (var i = 0; i < arrayDeNumeros.length; i++) {
   
    if (arrayDeNumeros[i] != current) {
        if (cnt > 0) {
            return(' O numero  ' + current + ' aparece ' + cnt + 'X');
        }
        
    } else{
        cnt++;
    }
}
}
```