module.exports = {
    apps: [{
        name: 'webservice_servermac',
        script: './server.js',
        output: './storage/logs/debug.log',
        error: './storage/logs/error.log',
        merge_logs: true,
        env: {
            NODE_ENV: 'production',
            NODE_PORT: 3031,
            MYSQL_HOST: 'http://localhost:3031',
            MYSQL_USERNAME: 'http://localhost:3031',
            MYSQL_PASSWORD: 'http://localhost:3031',
            MYSQL_DATABASE: 'citasang'

        }
    }]
};
