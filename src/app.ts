
import { db } from './models/index'
import morgan from 'morgan';
import taskRoutes from './routes/tasks';
import parentRoutes from './routes/parent';
import childRoutes from './routes/children';
import householdRoutes from './routes/household';
import rewardRoutes from './routes/rewards';
import express, { NextFunction, Request, Response } from 'express'

const cors = require("cors");
const corsOptions = {
    origin: [ 'http://localhost:3000', 'http://localhost:3001' ]
};

const app = express();

app.use(cors(corsOptions));

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/tasks', taskRoutes)
app.use('/parents', parentRoutes)
app.use('/children', childRoutes)
app.use('/household', householdRoutes)
app.use('./rewards', rewardRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

db.sync({ alter: true }).then(() => {
    console.log("connected to database")
})



app.listen(3000);