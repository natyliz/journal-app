import { types } from '../types/types';

// va a estar vacio cuando no este autoenticado
/* Cuando este autoenticado
 {
    uid: ,jfjfhjghdj12345678',
    name: 'Nathaly'

 }
 */

export const authReducer = ( state={}, action) => {

    switch (action.type) {
        case types.login:
            
        return {
            uid: action.payload.uid,
            name :action.payload.displayName

        };
        case types.logout:
        return { };
    
        default:
        return state; // siempre debe de retornar el state
   }
 
}
