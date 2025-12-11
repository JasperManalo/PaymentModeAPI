const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
const setupSwagger = require('./swagger');
setupSwagger(app);

const paymentModeRoutes = require('./routes/paymentmode.routes');
app.use('/paymentmodes', paymentModeRoutes);




const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;