import express from 'express';
import bodyParser from 'body-parser';
import { assignments as assignmentsFromFile } from './data/assignments.js';
import { comments as commentsFromFile } from './data/comments.js';
import accountRouter from './routes/Accounts.mjs';
import commentsRouter from './routes/comments.mjs';
import assignmentsRouter from './routes/assignments.mjs';

// let assignments = [...assignmentsFromFile];
// let comments = [...commentsFromFile];

const app = express();
const port = 4000;

app.use(express.json());
app.use('/accounts', accountRouter);
app.use('/comments', commentsRouter);
app.use('/assignments', assignmentsRouter);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.send('Hello Teacher!!');
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
