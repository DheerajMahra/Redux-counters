import { INCR_COUNTER, REM_COUNTER, RES_COUNTER } from '../constants/'

export function incrementCounter(counterId){
    return { type: INCR_COUNTER, counterId }
}

export function removeCounter(counterId){
    return { type: REM_COUNTER, counterId }
}

export function resetCounters(){
    return { type: RES_COUNTER }
}