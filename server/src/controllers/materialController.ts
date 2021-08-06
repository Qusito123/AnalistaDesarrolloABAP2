import {Request,Response} from 'express';

import db from '../database';

class MaterialController{
    
    public async listar(req: Request, res: Response) {
        await db.query('SELECT * FROM material', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async listarUno(req: Request, res: Response):Promise<any> {
        const {
            id
        } = req.params;
        await db.query('SELECT * FROM color WHERE id_material=?', [id], function (err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).json({
                    message: 'Material not found'
                });
            }
        });
    }
}

const materialController = new MaterialController();
export default materialController;