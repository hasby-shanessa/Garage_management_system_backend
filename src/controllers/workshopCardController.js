const WorkshopCard = require('../models/WorkshopCard');

exports.createWorkshopCard = async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    const newCard = new WorkshopCard(req.body);
    const savedCard = await newCard.save();
    console.log('Saved card:', savedCard);
    res.status(201).json(savedCard);
  } catch (error) {
    console.error('Error in createWorkshopCard:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.getAllWorkshopCards = async (req, res) => {
  try {
    const cards = await WorkshopCard.find().sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkshopCardById = async (req, res) => {
  try {
    const card = await WorkshopCard.findById(req.params.id);
    if (!card) return res.status(404).json({ message: 'Workshop card not found' });
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateWorkshopCardStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updatedCard = await WorkshopCard.findByIdAndUpdate(
      id,
      { 
        status,
        ...(status === 'repaired' && { repairedAt: new Date() }),
        ...(status === 'tested' && { testedAt: new Date() }),
        ...(status === 'closed' && { closedAt: new Date() }),
      },
      { new: true }
    );

    if (!updatedCard) return res.status(404).json({ message: 'Workshop card not found' });
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

//   // Delete a workshop card by its ID
// exports.deleteWorkshopCard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedCard = await WorkshopCard.findByIdAndDelete(id);

//     if (!deletedCard) return res.status(404).json({ message: 'Workshop card not found' });
//     res.status(200).json({ message: 'Workshop card deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

};