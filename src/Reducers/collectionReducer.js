const initialState = {
        collections: [],
        siteTheme: "Dark",
        loading: false
    }

export default function collectionReducer(state = initialState, action) {
    switch(action.type){
        case 'LOADING_COLLECTIONS':
            return {
              ...state,
              collections: [...state.collections],
              loading: true
            }
        case 'LOAD_COLLECTIONS':
            return {
                ...state, 
                collections: action.collections, 
                loading: false
            }
        // case 'LOADING_LIGHT_THEME':
        //     return {
        //         ...state,
        //         siteTheme: "TBD",
        //         loading: true
        //     }

        // case 'LOAD_LIGHT_THEME':
        //     return {
        //         ...state, 
        //         siteTheme: action.theme, 
        //         loading: false
        //     }
        
        default:
            return state
    }
}


// example code from NFT Drop Calendar

// export default function eventReducer(state = 
//     {
//     events: [],
//     loading: false
//     }, action) {
//     switch(action.type){
//         case 'LOADING_EVENTS':
//             return {
//               ...state,
//               events: [...state.events],
//               loading: true
//             }
//         case 'LOAD_EVENTS':
//             return {
//                 ...state, 
//                 events: action.events, 
//                 loading: false
//             }
//         case 'ADD_EVENT':
            
//             return {
//                 ...state, 
//                 events: state.events.concat(action.event) 
//             }
//         case "DELETE_EVENT":
//             return state
//         case "EDIT_EVENT":
//             return state
//         default:
//             return state
//     }
// }