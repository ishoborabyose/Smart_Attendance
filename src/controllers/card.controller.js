import { Card }from '../db/models';


class cardController {
    static async register(req, res) {
        try {
            const { cardId,} = req.body;

            const cardExist = await Card.findOne({ where: { cardId } });
            if (cardExist) {
                return res.status(409).json({
                    status: 409,
                    error: 'This card  already taken'
                });
            }

            const newCard = {
                cardId,
            }

            const card = await Card.create(newCard);

            return res.status(201).json({
                status: 201,
                message: 'A new card have been registered',
                card
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };

    static async getAll(req, res) {
        try{
            
            const AllCards = await Card.findAll();
            return res.status(200).json({
                status: 200,
                message: 'Add cards were retrieved successfull',
                data: AllCards
            });
        } catch(error){
            return res.status(500).json({
                status: 500,
                erro: error.message
            })
        }
    }
}

export default cardController

