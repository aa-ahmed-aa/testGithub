import request from 'supertest';
import { app } from '../app';

declare global {
    namespace NodeJS {
        interface Global {
            signin(): Promise<string[]>;
        }
    }
}

let mongo: any;

beforeAll(async () => {
    /**
     * Pre-tests configuration dummy database connection and tokens setups
     */
});

beforeEach(async () => {
    /**
     * Before each test flush the database if required
     */
});

afterAll(async () => {
    /**
     * After all the tests stop the database
     */
});