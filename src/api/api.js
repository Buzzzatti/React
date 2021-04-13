import * as axios from 'axios';

const instance = axios.create({
    withCredantials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "9fa67db0-4818-4d3c-b888-ce37d80cf4f6"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
        .then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getContent(userId) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}
