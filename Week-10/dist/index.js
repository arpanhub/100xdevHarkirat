"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:v9zXOpCZkYI0@ep-plain-shape-a5plgi8x-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
client.connect();
function CreateTableuser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.query(`
            CREATE TABLE "user"(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(50),
            password VARCHAR(50))
            `);
            console.log("Table created successfully");
        }
        catch (err) {
            console.log(err);
        }
    });
}
// CreateTableuser();
function InsertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const InsertQuery = `INSERT INTO "user"(name,email,password) VALUES('neon','neon@gmail.com','neon123')`;
            const res = yield client.query(InsertQuery);
            console.log("Data inserted successfully", res);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client.end();
        }
    });
}
// InsertData();
function getuser(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `SELECT * FROM "user" where name  = $1`;
            const values = [name];
            const res = yield client.query(query, values);
            console.log(res.rows);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client.end();
        }
    });
}
getuser("arp");
