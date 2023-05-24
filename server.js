const express = require('express')
const app = express()
app.use(express.json())


const mongoose = require('mongoose');
const Project = require('./models/ProjectModel');


app.get('/',  (req, res) =>{
    res.send('Base endpoint')
})

app.get('/projects', async (req, res) => {
    try{
        const projects = await Project.find({});
        res.status(200).json(projects);
    }catch(error) {
        res.status(500).json({message: error.message});
        console.log(error);    }
})

app.post('/projects', async (req, res) => {
    try{
        const project = await Project.create(req.body);
        res.status(200).json(project);
        }catch(error) {
            res.status(500).json({message: error.message});
            console.log(error);
        }
    })
    
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://admin:admin@firstnodeproject.7ttmc3t.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {

        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        })
        console.log('Connection to database completed!')
    }).catch((error) => {
        console.log(error)
    });