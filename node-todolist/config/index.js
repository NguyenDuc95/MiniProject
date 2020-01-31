var configValue = require('./config.json');
module.exports = {
    getDbConnectionString: function () {
        return `mongodb+srv://${configValue.username}:${configValue.password}@cluster0-g88al.mongodb.net/myDatabase?retryWrites=true&w=majority`;
    }
}