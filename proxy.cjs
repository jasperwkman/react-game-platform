const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

var platforms = null;
var genres = null;

const RAWG_API_KEY = process.env.RAWG_API_KEY;
app.use(cors());

app.get("/:func", async (req, res) => {
    try {
        if (req.params.func == 'genres' && genres != null) {
            res.json(genres)
            return
        }
        param = {
            key: RAWG_API_KEY,
        }
        if (req.query.genres) param.genres = req.query.genres
        if (req.query.platform) param.platforms = req.query.platform
        if (req.query.ordering) param.ordering = req.query.ordering
        if (req.query.searchText) param.search = req.query.searchText
        console.log(param);
        const response = await axios.get(`https://api.rawg.io/api/${req.params.func}`, {
            params: param
        });
        if (req.params.func == 'genres' && genres == null) {
            genres = response.data
        }
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});
app.get("/platforms/lists/parents", async (req, res) => {
    if (platforms != null) {
        console.log("Return cache platforms");
        res.json(platforms);
        return
    }
    try {
        const response = await axios.get(`https://api.rawg.io/api/platforms/lists/parents`, {
            params: {
                key: RAWG_API_KEY
            }
        });
        platforms = response.data;
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});
app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
