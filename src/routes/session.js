import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    return res.send(req.context.models.users[req.context.med.id])
})

export default router