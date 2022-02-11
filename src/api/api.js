import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "3cb7fbf6-2a3c-4161-b9b1-aadf6fee4cdb",
  },
});

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`/auth/login`).then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptchaURL() {
    return instance
      .get("/security/get-captcha-url")
      .then((response) => response.data);
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
  getStatus(userID) {
    return instance
      .get(`profile/status/` + userID)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put("profile/status/", { status })
      .then((response) => response.data);
  },
  updateProfileData(profileData) {
    return instance
      .put("profile/", profileData)
      .then((response) => response.data);
  },
  savePhoto(selectedPhoto) {
    const formData = new FormData();
    formData.append("image", selectedPhoto);
    return instance
      .put("profile/photo/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data);
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
