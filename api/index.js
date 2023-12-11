const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:Mhmr3NNYIOmqSJAU@cluster0.tb81blt.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc =  await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        })
        res.json (userDoc);
    } catch(e){
        res.status(400).json(e);
    }
});

app.get('/test', (req, res) => {
    res.json('test ok dawg');
});

app.listen(4000);
//mongodb+srv://blog:<Mhmr3NNYIOmqSJAU>@cluster0.tb81blt.mongodb.net/?retryWrites=true&w=majority
//Mhmr3NNYIOmqSJAU

