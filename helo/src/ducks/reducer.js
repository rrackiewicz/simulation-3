const initialState = {
  //feel like it would be easier to keep my user info in an object
  user: {
    username: '',
    id: 0,
    profile_pic: ''
  }
}
const UPDATE_USER = "UPDATE_USER";
// const CLEAR_USER = 'CLEAR_USER'; 

function reducer( state = initialState, action ){ 
  switch( action.type ){
    case UPDATE_USER:
      return Object.assign( {}, state, { user : action.payload } );

    // case CLEAR_USER:
    //   return Object.assign( {}, state, action.payload );

    default: 
      return state;
   }
}

export function action_updateUser(user){
  //console.log("payload: ", user)
 return {
   type: UPDATE_USER,
   payload: user
 }
}

// export function action_clearUser(user) {
//  return {
//    type: CLEAR_USER,
//    payload: initialState
//  }
// }

export default reducer; 
