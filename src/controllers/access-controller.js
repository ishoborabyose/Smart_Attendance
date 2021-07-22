import { Access } from '../db/models';

class AccessController{

    static async access(req, res){
        try {
           
            const { classRoom, lesson } = req.body;
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

    static async update(req, res) {
        try {
            
            const { body: { classRoom, lesson }} = req;
            const found = await Access.findOne({where:{ classRoom }});
            if(found){
         const updatedAccess =  await Access.update({
                    classRoom,
                    lesson
                },{
                    where: {
                       classRoom
                    },
                    returning: true,
                    plain: true
                });

                return res.status(200).json({
                    status:200,
                    message: 'access was updated successfully',
                    updatedAccess
                });
            }
            return res.status(404).json({
                status: 404,
                error: 'access not found'
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