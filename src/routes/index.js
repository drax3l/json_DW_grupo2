import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'inicio' }))
router.get('/about', (req, res) => res.render('about', { title: 'acerca de' }))
router.get('/contact', (req, res) => res.render('contact', { title: 'contacto' }))
router.get('/oferta', (req, res) => res.render('oferta', { title: 'ofertas' }))
router.get('/catalogo', (req, res) => res.render('catalogo', { title: 'ofertas' })) 
router.get('/bot', (req, res) => res.render('bot', { title: 'chatbot' }))

export default router