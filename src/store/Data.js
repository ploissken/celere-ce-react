const initialSettings = {
  rawData: [],
  filteredData: {
    columns: [],
    rows: []
  }
}

const dataReducer = (state = initialSettings, action) => {
  switch(action.type) {
    case 'DATA_LOADED':
      console.log('dataset data_load')
      return {
        ...state,
        rawData: [...action.data]
      }
    case 'FILTER_DATA':
    console.log('dataset filter_data')
      return {
        ...state,
        filteredData: {
          columns: [...action.columns],
          rows: [...action.rows]
        }
      }
    default:
      console.log('dataset default')
      return state
  }
}
export default dataReducer
