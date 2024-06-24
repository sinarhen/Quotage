import { Client, createClient } from "@libsql/client";
import { Quote } from "./types";



class BaseEntity<T> {
    protected client: Client;
    protected tableName: string;

    constructor(client: Client, tableName: string) {
        this.client = client;
        this.tableName = tableName;
    }
    
    async create(item: T): Promise<boolean> {
        // // Implementation for creating an item
        // const transaction = await this.client.transaction("write")
        // const res = await transaction.execute(`INSERT INTO ${this.tableName} VALUES (${item})`);
        // transaction.commit();
        // return true;        
        throw new Error("NOT IMPLEMENTED")

    }

    async read(id: string): Promise<T | null> {
        // Implementation for reading an item by ID
        const result = await this.client.execute(`SELECT * FROM ${this.tableName} WHERE id = '${id}'`);
        return result.toJSON()[0] || null;
    }

    async update(id: string, item: T): Promise<void> {
        // // Implementation for updating an item by ID
        // const res = await this.client.execute(`UPDATE ${this.tableName} SET ? WHERE id = '${id}'`, [item]);
        throw new Error("NOT IMPLEMENTED")
    }

    async delete(id: string): Promise<void> {
        // // Implementation for deleting an item by ID
        // await this.client.execute(`DELETE FROM ${this.tableName} WHERE id = '${id}'`);
        throw new Error("NOT IMPLEMENTED")
    
    }
}
class QuoteEntity extends BaseEntity<Quote> {
    constructor(client: Client) {
        super(client, 'quotes');
    }

    // Additional methods specific to Quote entity can be added here
}




class DbContextConfigurator {
    protected client: Client;

    constructor() {
        if (!process.env.DATABASE_URL) {
            throw new Error("No DATABASE_URL variable found in environment");
        }
        const config = {
            url: process.env.DATABASE_URL,
            encryptionKey: process.env.DATABASE_AUTH_TOKEN,
        };
        this.client = createClient(config);
    }
}

class DbContext extends DbContextConfigurator {
    public quote: QuoteEntity;

    constructor() {
        super();
        this.quote = new QuoteEntity(this.client);
    }
}

