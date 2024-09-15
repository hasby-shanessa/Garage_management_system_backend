const express = require('express');
const router = express.Router();
   const path = require('path');
const { createWorkshopCard, getAllWorkshopCards, getWorkshopCardById, updateWorkshopCardStatus } = require('../controllers/workshopCardController');
   const workshopCardController = require(path.join(__dirname, '..', 'controllers', 'workshopCardController'));

   // GET all workshop cards
   // router.get('/', (req, res)=>{workshopCardController.getAllWorkshopCards});
   router.get('/', getAllWorkshopCards);

   // POST a new workshop card
   // router.post('/', (req, res)=>{workshopCardController.createWorkshopCard} );
   // router.post('/',workshopCardController.createWorkshopCard);
   router.post('/',createWorkshopCard);

   // GET a specific workshop card
   // router.get('/:id', (req, res)=>{workshopCardController.getWorkshopCard} );
   router.get('/:id', getWorkshopCardById)

   // UPDATE a workshop card status
   // router.put('/:id/status', (req, res)=>{workshopCardController.updateWorkshopCardStatus} );
   router.put('/:id/status', updateWorkshopCardStatus)

   module.exports = router;