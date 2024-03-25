import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import { nanoid } from 'nanoid';

let jobs = [
	{ id: nanoid(), company: 'apple', position: 'front' },
	{ id: nanoid(), company: 'apple', position: 'back' },
];

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
	res.send('hello world');
});

app.post('/', (req, res) => {
	console.log(req);
	res.json({ message: 'data received', data: req.body });
});

// EDIT  JOBS
app.patch('/api/v1/jobs/:id', (req, res) => {
	const { company, position } = req.body;
	if (!company || !position) {
		return res
			.status(400)
			.json({ msg: 'please provide company and position' });
	}
	const { id } = req.params;
	const job = jobs.find((job) => job.id === id);
	if (!job) {
		return res.status(404).json({ msg: `no job with id ${id}` });
	}

	job.company = company;
	job.position = position;
	res.status(200).json({ msg: 'job modified', job });
});

// DELETE  JOBS
app.delete('/api/v1/jobs/:id', (req, res) => {
	const { id } = req.params;
	const job = jobs.find((job) => job.id === id);
	if (!job) {
		return res.status(404).json({ msg: `no job with id ${id}` });
	}

	const newJobs = jobs.filter((job) => job.id !== id);
	jobs = newJobs;
	res.status(200).json({ msg: 'job deleted' });
});

// GET SINGLE JOBS
app.get('/api/v1/jobs/:id', (req, res) => {
	const { id } = req.params;
	const job = jobs.find((job) => job.id === id);
	if (!job) {
		return res.status(404).json({ msg: `no job with id ${id}` });
	}
	res.status(200).json({ job });
});

// GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
	res.status(200).json({ jobs });
});

// CREATE JOBS
app.post('/api/v1/jobs', (req, res) => {
	const { company, position } = req.body;
	if (!company || !position) {
		return res
			.status(400)
			.json({ msg: 'please provide company and position' });
	}
	const id = nanoid(10);
	const job = { id, company, position };
	jobs.push(job);
	res.status(200).json({ job });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
	console.log(`server running on PORT ${port}...`);
});
