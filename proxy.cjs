const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/games", async (req, res) => {
    try {
        const response = await axios.get("https://api.rawg.io/api/games", {
            params: {
                key: "71861e9efc4b4470bad7b1d04eb50b24",
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
