// import { useHistory } from 'react-router-dom'
// import { goToFeed, goToLogin } from '../router/Coordinator'
// import { validateUser } from '../services/user'


// export const useProtectPage = async (page) => {
//     console.log(`[useProtectPage]: [page]:`, page)
//     const history = useHistory()

//     const token = localStorage.getItem('token')
//     await validateUser(token).then(response => {
//         console.log(`[useProtectPage]: [response]:`, response)
//         if (page !== 'login' && page !== 'signup' && !response) {
//             console.log(
//                 `[useProtectPage]: NOT PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n goToLogin`
//             )
//             goToLogin(history)
//         } else if ((page === 'login' || page === 'signup') && response) {
//             console.log(`[useProtectPage]: PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n goToFeed`)
//             goToFeed(history)
//         } else {
//             console.log(
//                 `[useProtectPage]: PASSED\r\n [userIsValid]: ${response}\r\n [page]: ${page}\r\n sem tratamento`
//             )
//         }
//     })

// }