import express from "express";
import projectRoutes from './routes/user.routes.js'
import comRoutes from './routes/comercio.routes.js'
import cors  from "cors";
import walletRoutes  from "./routes/wallet.routes.js";
import cuponRoutes  from "./routes/cupon.routes.js";
import catRoutes  from "./routes/category.routes.js";
import descuentoRoutes  from "./routes/descuento.routes.js";
import { loginUser } from "./auth/authController.js";

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
    res.send('Hola Mundo')
})

app.post('/login', loginUser);
app.use(projectRoutes);
app.use(comRoutes);
app.use(walletRoutes);
app.use(cuponRoutes);
app.use(catRoutes);
app.use(descuentoRoutes);
export default app;