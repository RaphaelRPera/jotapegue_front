import { goToFeed, goToLogin } from '../router/Coordinator'
import { validateUser } from '../services/user'


export const protectPage = async (page, history) => {
    const token = localStorage.getItem('token')
    await validateUser(token).then(response => {
        if (page !== 'login' && page !== 'signup' && !response) {
            // console.log(`[protectPage]: ${response} - goToLogin`)
            goToLogin(history)
        } else if ((page === 'login' || page === 'signup') && response) {
            // console.log(`[protectPage]: ${response} - goToFeed`)
            goToFeed(history)
        } else {
            // console.log(`[protectPage]: ${response}`)
        }
        // console.log(`[protectPage]: [${page}]: DONE!`)
    })
}
