import { Router } from "express"
import {consultarproductos} from '../services/conexion.js'
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'inicio' }))
router.get('/about', (req, res) => res.render('about', { title: 'acerca de' }))
router.get('/contact', (req, res) => res.render('contact', { title: 'contacto' }))
router.get('/oferta', (req, res) => res.render('oferta', { title: 'ofertas' }))
router.get('/catalogo', (req, res) => res.render('catalogo', { title: 'ofertas' })) 
router.get('/bot', (req, res) => res.render('bot', { title: 'chatbot' }))

router.get('/api/get-productos', async (req, res) => {
    const productos = await consultarproductos();
    res.status(200).json(productos);
})

export default router