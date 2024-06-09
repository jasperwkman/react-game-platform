const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

var platforms = null;

app.use(cors());

app.get("/:func", async (req, res) => {
    try {

        param = {
            key: "71861e9efc4b4470bad7b1d04eb50b24",
        }
        if (req.query.genres) param.genres = req.query.genres
        if (req.query.platform) param.platforms = req.query.platform
        if (req.query.ordering) param.ordering = req.query.ordering
        if (req.query.searchText) param.search = req.query.searchText
        console.log(param);
        const response = await axios.get(`https://api.rawg.io/api/${req.params.func}`, {
            params: param
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});
app.get("/platforms/lists/parents", async (req, res) => {
    if (platforms) {
        res.json(platforms);

    } else {
        try {
            console.log(req.query);
            const response = await axios.get(`https://api.rawg.io/api/platforms/lists/parents`, {
                params: {
                    key: "71861e9efc4b4470bad7b1d04eb50b24"
                }
            });
            platforms = response.data;
            res.json(response.data);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    }
});
app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
