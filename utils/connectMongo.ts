import mongoose from "mongoose";

const { MONGO_URI } = process.env;

const connectMongo = async () => {
    const conn = await mongoose
        .connect(MONGO_URI)
        .catch((err) => console.error(err));
    console.info("Mongodb Connection Established");
    return conn;
};

export default connectMongo;
