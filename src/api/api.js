import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "15e0ed99-25e5-4249-9204-5298127b8b98",
  },
});

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const usersAPI = {
  getUsers(pageSize = 5, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/` + userID).then((response) => response.data);
  },
};

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};
