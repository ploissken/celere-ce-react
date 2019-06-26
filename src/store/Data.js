const initialSettings = {
  fullData: [],
  filteredData: []
}

const dataReducer = (state = initialSettings, action) => {
  switch(action.type) {
    case 'DATA_LOADED':
      console.log('dataset data_load')
      return {
        ...state,
        fullData: [...action.data],
        filteredData: [...action.data]
      }
    case 'FILTER_DATA':
    console.log('dataset filter_data')
      return {
        ...state
      }
    default:
      console.log('dataset default')
      return state
  }
}
export default dataReducer
