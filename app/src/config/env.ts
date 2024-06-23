

// type EnvCollection = {
//     DATABASE_URL: string;
//     DATABASE_AUTH_TOKEN: string;
//     NODE_ENV: "development" | "production";
// };


// class Env {
//     DATABASE_URL: string;
//     DATABASE_AUTH_TOKEN: string;
//     NODE_ENV: "development" | "production";

//     constructor() {
//         const env: EnvCollection = this.loadEnv();

//         this.DATABASE_URL = env.DATABASE_URL;
//         this.DATABASE_AUTH_TOKEN = env.DATABASE_AUTH_TOKEN;
//         this.NODE_ENV = env.NODE_ENV;
//     }

//     private loadEnv(): EnvCollection {
//         const { DATABASE_URL, DATABASE_AUTH_TOKEN, NODE_ENV } = process.env;

//         if (!DATABASE_URL) {
//             throw new Error("Missing environment variable: DATABASE_URL");
//         }

//         if (!DATABASE_AUTH_TOKEN) {
//             throw new Error("Missing environment variable: DATABASE_AUTH_TOKEN");
//         }

//         if (NODE_ENV !== "development" && NODE_ENV !== "production") {
//             throw new Error("Invalid or missing environment variable: NODE_ENV");
//         }

//         return {
//             DATABASE_URL,
//             DATABASE_AUTH_TOKEN,
//             NODE_ENV,
//         };
//     }
// }
