module.exports = (req, res, next) => {
    let spawn = require('child_process').spawn();
    const process = spawn("python", ["-c", "import ../scrapping/web-scrapping.py; web-scrapping.insert_to_database()"])
    process.stdout.on('data', function(data) {
        console.log(data.toString());
    
        res.send(data.toString());
    });
    next();
}

