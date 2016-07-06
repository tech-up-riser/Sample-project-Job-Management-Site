module.exports = {
    db: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'job_site',
        multipleStatements: true,
        allowedFailedConnectionAttempts: 10,
    },
    server: {
        port: 3000,
        url: "http://localhost:3000"
    }
};

