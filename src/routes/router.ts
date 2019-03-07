
import{ Router, Request, Response } from 'express';

const router = Router();

router.get('/message', (req: Request, res: Response)=>{
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!'
    });
});

router.post('/message/:id', (req: Request, res: Response)=>{
    const cuerpo = req.body.cuerpo;
    const valor = req.body.valor;
    const id = req.params.id;
    
    res.json({
        id,
        ok: true,
        cuerpo,
        valor
    });
});

// usamos el default cuando no se van a exportar mas
export default router;
