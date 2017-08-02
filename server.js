const express = require('express');
const app = express();
const chalk = require('chalk')
const port = process.env.PORT || 3000

app.use(express.static('dist'));

app.listen(3000 , () => {
    console.log(chalk.green(`Server has started on port ${port}`));
})