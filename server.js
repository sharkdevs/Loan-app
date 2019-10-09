const express = require('express');
const compression = require('compression')
const path = require('path');
const app = express()
app.use(compression());
const port = process.env.PORT || 8080;
const dirName = 'dist'
app.use(express.static(path.resolve(`${dirName}`)));
app.use(
  (req, res) => res.sendFile(
    path.resolve(`${dirName}/loanApp/index.html`)
  )
);
app.listen(port, (e, b) => {
  console.log(`Server has started in port ${port}`);
})