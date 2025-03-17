import { Client } from "pg";
const client = new Client({
    connectionString:"postgresql://neondb_owner:v9zXOpCZkYI0@ep-plain-shape-a5plgi8x-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
client.connect();

async function CreateTableuser(){
    try{
        await client.query(`
            CREATE TABLE "user"(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(50),
            password VARCHAR(50))
            `);
        console.log("Table created successfully");
    }catch(err){
        console.log(err);
    }
}
// CreateTableuser();
async function InsertData(){
    try{
        const InsertQuery = `INSERT INTO "user"(name,email,password) VALUES('neon','neon@gmail.com','neon123')`;
        const res = await client.query(InsertQuery);
        console.log("Data inserted successfully",res);        
    }catch(err){
        console.log(err);     
    }finally{ 
        client.end();
    }
}
// InsertData();

async function getuser(name:string){
    try{
        const query = `SELECT * FROM "user" where name  = $1`;//$1 is a placeholder why? because we are using parameterized query?explain more?
        // const query = `SELECT * FROM "user" where name  = 'neon'`;
        // const query = `SELECT * FROM "user" where name  = $1`;
        // why not $2 or $3? because we are using only one parameter
        // use 2 parameter with example
        // const query = `SELECT * FROM "user" where name  = $1 and email = $2`;
        const values = [name];
        const res = await client.query(query,values);
        console.log(res.rows);

    }catch(err){
        console.log(err);
    }finally{
        client.end();
    }
}
getuser("arp");