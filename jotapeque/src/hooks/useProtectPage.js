import { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../router/Coordinator'
import { validateUser } from '../services/user'

// export const useProtectPage = async (page) => {
//     console.log(`[useProtectPage]: [page]:`, page)
//     const history = useHistory()
//     useLayoutEffect(() => {
//         (async () => {
//             const token = localStorage.getItem('token')
//             // const token = 'banana'
//             const userIsValid = await validateUser(token)
//             if (page !== 'login' && page !== 'signup' && !userIsValid) {
//                 console.log(
//                     `[useProtectPage]: NOT PASSED\r\n [userIsValid]: ${userIsValid}\r\n [page]: ${page}\r\n goToLogin`
//                 )
//                 goToLogin(history)
//             } else if ((page === 'login' || page === 'signup') && userIsValid) {
//                 console.log(`[useProtectPage]: PASSED\r\n [userIsValid]: ${userIsValid}\r\n [page]: ${page}\r\n goToFeed`)
//                 goToFeed(history)
//             } else {
//                 console.log(
//                     `[useProtectPage]: PASSED\r\n [userIsValid]: ${userIsValid}\r\n [page]: ${page}\r\n sem tratamento`
//                 )
//             }
//         })()
//     }, [history, page])
// }



// export const useProtectPage = async (page) => {
//     console.log(`[useProtectPage]: [page]:`, page)
//     const history = useHistory()
//     useLayoutEffect(() => {
//         (async () => {
//             const token = localStorage.getItem('token')
//             // const token = 'banana'
//             validateUser(token).then(response => {
//                 console.log(`[useProtectPage]: [response]:`, response)
//                 if (page !== 'login' && page !== 'signup' && !response) {
//                     console.log(
//                         `[useProtectPage]: NOT PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n goToLogin`
//                     )
//                     goToLogin(history)
//                 } else if ((page === 'login' || page === 'signup') && response) {
//                     console.log(`[useProtectPage]: PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n goToFeed`)
//                     goToFeed(history)
//                 } else {
//                     console.log(
//                         `[useProtectPage]: PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n sem tratamento`
//                     )
//                 }
//             })
//         })()
//     }, [history, page])
// }


export const useProtectPage = async (page) => {
    console.log(`[useProtectPage]: [page]:`, page)
    const history = useHistory()

    const token = localStorage.getItem('token')
    // const token = 'banana'
    await validateUser(token).then(response => {
        console.log(`[useProtectPage]: [response]:`, response)
        if (page !== 'login' && page !== 'signup' && !response) {
            console.log(
                `[useProtectPage]: NOT PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n goToLogin`
            )
            goToLogin(history)
        } else if ((page === 'login' || page === 'signup') && response) {
            console.log(`[useProtectPage]: PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n goToFeed`)
            goToFeed(history)
        } else {
            console.log(
                `[useProtectPage]: PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n sem tratamento`
            )
        }
    })

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

