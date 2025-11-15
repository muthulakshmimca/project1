const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Dummy credentials
const USER = { username: 'admin', password: '12345' };

// Routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === USER.username && password === USER.password) {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  } else {
    res.send('<h2>Invalid credentials! <a href="/">Try again</a></h2>');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
