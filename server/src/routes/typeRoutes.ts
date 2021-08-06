import {Router} from 'express';

import typeController from '../controllers/typeController';

class TypeRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', typeController.listar);
        this.router.get('/:id', typeController.listarUno);
        this.router.post('/', typeController.crear);
        this.router.put('/:id', typeController.editar);
        this.router.delete('/:id', typeController.eliminar);
    }
}

const typeRoutes = new TypeRoutes();
export default typeRoutes.router;