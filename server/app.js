const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Define routes for the portfolio
app.get('/projects', (req, res) => {
  res.json([
    // Populate with your project details
    { title: 'Algo Game', description: 'An educational game on recursion', link: 'https://github.com/comp-229/algogame' },
    { title: 'Car Data Analysis', description: 'Analysis of car prices using Python', link: 'https://github.com/AbbasHussainSyed/PythonProjects/tree/main/CAR%20DATA%20ANALYSIS' },
    { title: 'Cybersecurity Capstone', description: 'Secured a VM using Nmap', link: 'https://github.com/AbbasHussainSyed/Cybersecurity-Capstone-Project' }
  ]);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});