// webconfig.js
const config = {
    app: {
        name: "ZTAT with Seo",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development",
    },
    api: {
        baseUrl: process.env.API_BASE_URL || "https://api.example.com",
    },
    auth: {
        enableAuth: true,
        tokenKey: "authToken",
    },
};

module.exports = config;
