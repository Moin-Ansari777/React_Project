import {create} from 'zustand'

const useMyStore = create(()=>{
    
    return {
        count :1,
        name : 'ok'
    }

    
})

export default useMyStore;