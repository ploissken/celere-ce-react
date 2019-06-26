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
      return {
        ...state,
        rawData: [...action.data]
      }
    case 'FILTER_DATA':
      return {
        ...state,
        filteredData: {
          columns: [...action.columns],
          rows: [...action.rows]
        }
      }
    default:
      return state
  }
}
export default dataReducer
