
export const CommonReducer = (...reducers)=>(dataStore, action)=>{
    let length = reducers.length;
    let newStore;
    for (let i =0; i< length; i++){
        newStore = reducers[i](dataStore, action);
        if(newStore !== dataStore) return newStore;
    }
    return dataStore;
}