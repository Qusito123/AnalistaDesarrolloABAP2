import {Request,Response} from 'express';

import db from '../database';

class TypeController{
    
    public async listar(req: Request, res: Response) {
        await db.query('SELECT * FROM cup_type', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async listarUno(req: Request, res: Response):Promise<any> {
        const {
            id
        } = req.params;
        await db.query('SELECT * FROM cup_type WHERE id_type=?', [id], function (err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).json({
                    message: 'Cup type not found'
                });
            }
        });
    }

    public async crear(req: Request, res: Response): Promise < void > {
        await db.query('INSERT INTO cup_type set ?', [req.body], function(err, resuslt, fields){
            if(err) throw err;
        });
        res.json({
            text: 'Cup type created'
        });
    }

    public async editar(req: Request, res: Response):Promise<void> {
        const {
            id
        } = req.params;
        await db.query('UPDATE cup_type set ? WHERE id_type = ?', [req.body, id], function (err, result, fields) {
            if (err) throw err;
        });

        res.json({
            message: 'Cup type updated ' + id
        });
    }

    public async eliminar(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM cup_type WHERE id_type = ?', [id], function(err, result, fields){
            if (err) throw err;
            res.json({message: 'Cup_type succesfully deleted'});
        });
    }
}

const typeController = new TypeController();
export default typeController;