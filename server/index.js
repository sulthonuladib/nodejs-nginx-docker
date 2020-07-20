const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const dummyData = {
    first_name: 'Sulthonul',
    last_name: 'Adib',
    age: 20,
};

app.get('/', (req, res) => {
    res.json(dummyData);
    res.status = 200;
});

app.listen(process.env.PORT || PORT);
console.log(`Server up on ${PORT}`);
