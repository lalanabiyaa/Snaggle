import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/database.js';
import sequelizeStore from 'connect-session-sequelize';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import authRoute from './routes/authRoute.js';
import fileUpload from 'express-fileupload';
dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === 'production' || !!process.env.RAILWAY_ENVIRONMENT;
const allowedOrigins = ['http://localhost:3000', process.env.FRONTEND_URL].filter(Boolean);

app.set('trust proxy', 1);

const sessionStore = sequelizeStore(session.Store);

const store = new sessionStore({
   db: db,
});
// (async () => {
//    await db.sync({ alter: true });
// })();

app.use(
   session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: true,
      store: store,
      proxy: true,
      cookie: {
         secure: isProduction,
         sameSite: isProduction ? 'none' : 'lax',
      },
   })
);

app.use(fileUpload());
app.use(express.static('public'));
app.use(
   cors({
      credentials: true,
      origin: (origin, callback) => {
         if (!origin || allowedOrigins.includes(origin) || /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin)) {
            return callback(null, true);
         }
         callback(new Error('Not allowed by CORS'));
      },
   })
);
app.use(express.json());

app.use(userRoute);
app.use(productRoute);
app.use(categoryRoute);
app.use(authRoute);

// store.sync();
app.listen(process.env.PORT || process.env.APP_PORT || 5000, () => console.log('Running App'));
