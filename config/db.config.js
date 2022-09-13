module.exports = {
    HOST: 'clinica.cdxys06ieqcd.sa-east-1.rds.amazonaws.com',
    USER: 'admin',
    PASSWORD: 'M1j4nub3',
    DB: 'clinica',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

/*module.exports = {
    HOST: 'localhost',
    PORT: '3308',
    USER: 'root',
    PASSWORD: '',
    DB: 'clinica',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
*/

