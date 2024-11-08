import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/v1/update", (request, response) => {
	setTimeout(() => {
		response.status(200).json(request.body)
	}, 2000)
});

app.listen(port, () => {
	console.log(`My WebServer is running on port ${port}`);
})