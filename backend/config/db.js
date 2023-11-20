import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://samuel888:Nigger321zz@ecommerceproject.onx7vup.mongodb.net/?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //   useCreateIndex: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.underline.cyan);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       //   useCreateIndex: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.underline.cyan);
//   } catch (err) {
//     console.error(`Error: ${err.message}`.red.underline.bold);
//     process.exit(1);
//   }
// };

export default connectDB;
