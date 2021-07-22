import { Access } from '../db/models';

class AccessController{

    static async access(req, res){
        try {
            const { classRoom, lesson } = req.body;
            const accessExist = await Access.findOne({where: { classRoom }})
            if(accessExist){
                return res.status(409).json({
                    status: 409,
                    error: 'This classroom is occupied'
                })
            }

            const newAccess = {
                classRoom,
                lesson
            }

            const accessNow = await Access.create(newAccess)

            return res.status(201).json({
                status: 201,
                message: "You successfully access room",
                accessNow
            })

        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            })
        }
    };

    static async getAll(req, res) {
        try {
            const allAccess = await Access.findAll();
            return res.status(200).json({
                status: 200,
                message: 'All access were retrieved successful',
                data: allAccess
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    }

    
}

export default AccessController