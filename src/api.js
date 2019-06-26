const API_URL = 'https://newsapi.org/v2/everything?q=BBC&apiKey=97b03df9436940f3a8d4668af22e5314'

export class NewsAPI {
  constructor (url) {
    this.url = url
  }

  getAPI() {
    return API_URL
  }

  getUrl () {
    if (this.url) {
      return new URL(this.url, API_URL).toString()
    } else {
      return new URL(API_URL).toString()
    }
  }

  get () {
    return this.request('get')
  }

  post (data = {}) {
    return this.request('post', data)
  }

  put (data = {}) {
    return this.request('put', data)
  }

  delete () {
    return this.request('delete')
  }

  request (method, data = {}, otherOptions = {}) {
    return new Promise(async (resolve, reject) => {
      fetch(this.getUrl(), {
        method: method,
        ...data,
        ...otherOptions
      }).then(res => {
        res.json().then(data => {
          if(res.status === 200) {
            resolve(data)
          } else {
            console.log('status !200', data)
            reject(data)
          }
        })
      }).catch(err => {
        console.log('fetch error!', err)
        reject(err)
      })
    })
  }
}
export default function (url) {
  return new NewsAPI(url)
}
