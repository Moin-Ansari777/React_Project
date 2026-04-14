// import { useState } from "react"

// export const useCounter = (intialState) => {
//     const [data, setData] = useState(intialState);
//     const alpha = () => {
//         setData(prev => (
//             //prev = prev.charAt(0).toUpperCase() + prev.slice(1)
//             prev.split('').toString()
//         ))
//     }
//     const Increment = () => {
//         setData(data + 1)
//     }
//     const Decrement = () => {
//         setData(data + 1)
//     }
//     const setValue = () => {
//         setData(data + 1)
//     }
//     return { Increment, Decrement, setValue, data, alpha }
// }

// const mySlice = createSlice({
//     name: 'hello',
//     intialState,
//     reducer: {
//         append(state) {
//             state.alpha = useActionState.payload
//         }
//     }
// })
