import api from "./api";

const register = (data) => api.post("api/users", data);

const login = (data) => {
    return api.post("/api/users/login", data);
};

const resetPassword = (data) => {
    return api.post("/api/users/login/reset", data);
};

const createEvent = (token, data) => {
    return api.post("api/festivals", data, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};

const getAllEvents = (token) => {
    return api.get("api/festivals", {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};

const consultUser = (token, nick) => {
    return api.get("api/users/logged", {
        headers: {
            Authorization: "Bearer " + token,
            username: nick,
        },
    });
};

const updateUser = (token, data) => {
    console.log(data);
    console.log("Api");
    return api.post("/api/users/update", data, {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};

export default {
    register,
    login,
    resetPassword,
    createEvent,
    getAllEvents,
    consultUser,
    updateUser,
};
