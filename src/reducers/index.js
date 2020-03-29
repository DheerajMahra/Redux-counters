import { INCR_COUNTER, REM_COUNTER, RES_COUNTER } from '../constants/'

const initState = {
    counters: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }
    ]
}

const rootReducer = (state = initState, action) => {
    
    let { counterId } = action

    if(action.type === INCR_COUNTER){
        const counters = state.counters.map(el => {
            if(el.id === counterId){
                el.value++
                return el
            }else{
                return el
            }
        })
        return { counters }
    }

    if(action.type === REM_COUNTER){
        const counters = [...state.counters]
        const index = counters.findIndex(el => el.id === counterId)
        counters.splice(index, 1)
        return { counters }
    }

    if(action.type === RES_COUNTER){
        const counters = state.counters.map(el => {
            el.value = 0;
            return el
        })
        return { counters }
    }

    return state
}

export default rootReducer