import { Router} from "express";
import {getComercios,createComercio,deleteComercio,updateComercio,getComercio} from "../controllers/com.controllers.js"

const router = Router();


router.get('/comercios',getComercios)
router.post('/comercio', createComercio) 
router.put('/comercio/:id',updateComercio) 
router.delete('/comercio/:id',deleteComercio)
router.get('/comercio/:id',getComercio)



export default router;