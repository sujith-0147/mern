// adminauth.js

const adminauth = (req, res, next) => {
    const name = "Rama";
    if (name === "Rama") {
        next();
    } else {
        res.status(401).send("invalid user");
    }
};

module.exports = adminauth;
