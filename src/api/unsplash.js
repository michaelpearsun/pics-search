import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4_cn8IcOcrOh9FE58278Oym7WjE54277UQB0diwbdx4'
    }
})