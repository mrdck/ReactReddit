const express = require('express');
const app = express();
const chalk = require('chalk')
const port = process.env.PORT || 5000

app.use(express.static('dist'));

app.listen(port , () => {
    console.log(chalk.green(`Server has started on port ${port}`));
})