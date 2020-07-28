import express, { Application } from 'express';

const app: Application = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./routes/posts'));

app.listen(PORT, () => console.log(`Making CodeOmelet on ${PORT}`));