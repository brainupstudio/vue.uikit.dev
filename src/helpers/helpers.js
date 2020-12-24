import axios from 'axios';
// import {createApp} from 'vue'

// const vm = createApp({});
const baseURL = 'http://localhost:3000/tasks/';

// const handleError = fn => (...params) =>
//     fn(...params).catch(error => {
//         vm.$flashMessage.show({
//             type: 'error',
//             title: `${error.response.status}`,
//             message: `${error.response.statusText}`
//         });
//     });

export const api = {
    gettask: (async id => {
        const res = await axios.get(baseURL + id);
        return res.data;
    }),
    gettasks: (async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    deletetask: (async id => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),
    createtask: (async payload => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),
    updatetask: (async payload => {
        const res = await axios.put(baseURL + payload._id, payload);
        return res.data;
    })
};