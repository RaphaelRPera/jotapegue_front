import { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../router/Coordinator'
import { validateUser } from '../services/user'

export const useProtectPage = (page) => {
    const history = useHistory()
    useLayoutEffect(() => {
        (async () => {
            const token = localStorage.getItem('token')
            // const token = 'banana'
            const userIsValid = await validateUser(token)
            // console.log(`[useProtect]: [userIsValid]:`, userIsValid)
            if (page !== 'login' && page !== 'signup' && !userIsValid) {
                goToLogin(history)
            } else if ((page === 'login' || page === 'signup') && userIsValid) {
                goToFeed(history)
            }
        })()
    }, [history])
}












// var tabela = '';
// var contador = 0;

// var p = function(){
//     return new Promise(function(resolve, reject){

//        window.setTimeout(
//         function() {
//           // Cumprimos a promessa !
//           resolve('Dados tabela');
//         }, Math.random() * 8000 + 1000);
//     });
// }

// p().then(function(result){
//    //Adicionar regras
//    console.log('Cumprimos a promessa');
//    tabela = result;
  
// });

// setInterval(function(){
//     contador++;
//     if(contador > 10) return;
//     console.log('Contador: ' + contador + ' - Tabela: ' + tabela);
// }, 1000);

