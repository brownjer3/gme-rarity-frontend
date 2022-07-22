// Mock JSON-Server Endpoints    
COLLECTIONS_URL = "http://localhost:3001/collections"
TOP_FIVE_URL = "http://localhost:3001/topFive"

// export const fetchCollections = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_COLLECTIONS'})
//         fetch(COLLECTIONS_URL)
//         .then(response => response.json())
//         .then(data => {
//           dispatch({ type: 'LOAD_COLLECTIONS', collections: data })
//         })
//     }
// }

// export const fetchTopFive = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_TOP_FIVE'})
//         fetch(TOP_FIVE_URL)
//         .then(response => response.json())
//         .then(data => {
//           dispatch({ type: 'LOAD_TOP_FIVE', top_five: data })
//         })
//     }
// }


// example code from NFT Drop Calendar

// const url = 'http://localhost:3000/events'

// export const fetchEvents = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_EVENTS'})
//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//           dispatch({ type: 'LOAD_EVENTS', events: data })
//         })
//     }
// }

// export const createEvent = (history, event) => {
//     return (dispatch) => {
//         const configObj = {
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json", 
//                 "Accepts": "application/json"
//             }, 
//             body: JSON.stringify(event)
//         }
//         fetch(url, configObj)
//         .then(res => res.json())
//         .then(data => {
//             dispatch({ type: 'ADD_EVENT', event: data })
//             history.push('/')
//         })
//     }
// }