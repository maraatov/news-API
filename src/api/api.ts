import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0',
})

export const ordersAPI = {
    getSingleNews: (singleNewsId: number) => {
        return instance.get(`/item/${singleNewsId.toString()}.json?print=pretty`).then(res => res.data)
    },
    getNewsID: () => {
        return instance.get('/topstories.json?print=pretty').then(res => res.data)
    }
}

export const commentAPI = {
    getComments: (commentId: number) => {
        return instance.get(`/item/${commentId.toString()}.json?print=pretty`).then(res => res.data)
    }
}
