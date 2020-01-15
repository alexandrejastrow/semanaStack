const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    let auxDev = await Dev.findOne({ github_username });

    if (auxDev) {
      return res.status(400).json({ erro: "usuario existe" });
    }
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    techsArray = parseStringAsArray(techs);
    const { name = login, avatar_url, bio } = response.data;
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };
    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      techs: techsArray,
      location
    });
    console.log(dev);
    return res.json(dev);
  },

  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  }
};
