import axios from "axios";

const url = (infoEndPoint) => `https://users-crud1.herokuapp.com/${infoEndPoint}`


export const get = (infoEndPoint) => new Promise((resolve, reject) => {
  axios.get(url(infoEndPoint))
    .then((res) => resolve(res))
    .catch((error) => reject(error))
})

export const post = (infoEndPoint, data) => new Promise((resolve, reject) => {
  axios.post(url(infoEndPoint), data)
    .then((res) => resolve(res))
    .catch((error) => reject(error))
})

export const remove = (infoEndPoint) => new Promise ((resolve, reject) => {
  axios.delete(url(infoEndPoint))
    .then((res) => resolve(res))
    .catch((error) => reject(error))
})

export const put = (infoEndPoint, data) => new Promise((resolve, reject) => {
  axios.put(url(infoEndPoint), data)
    .then((res) => resolve(res))
    .catch((error) => reject(error))
})