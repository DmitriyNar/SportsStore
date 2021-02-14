import { ActionTypes } from './Types.js'
import { data as phData} from './placeholderdata.js'

export const loadData =(dataType)=>(
    {
        type: ActionTypes.DATA_LOAD,
        payload:{
            dataType: dataType,
            data: phData[dataType]
        }
    }
)

