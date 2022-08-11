import mongoose from "mongoose";
import colors from "colors";

const { MONGO_URI } = process.env;

const connectMongo = async () => {
    const conn = await mongoose
        .connect(MONGO_URI)
        .catch((err) => console.error(err.bgRed));
    console.info("Mongood Connection Established".rainbow);
    return conn;
};

export default connectMongo;
