import { app } from './app';

const start = async () => {
    try {
        /**  
            Any project pre-configuration setups
            like Database connection test and healthcheck endpoints
        */
    } catch (err) {
        console.log(err);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!');
    });

};

start();