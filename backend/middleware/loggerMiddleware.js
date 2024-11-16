const morgan = require('morgan');
module.exports = morgan('dev');
// Custom logging middleware
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

module.exports = { logger };
