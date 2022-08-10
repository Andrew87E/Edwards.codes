declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_URI: string;
            NODE_ENV: "development" | "production";
            // PORT?: string;
            // PWD: string;
        }
    }
}

export {};
