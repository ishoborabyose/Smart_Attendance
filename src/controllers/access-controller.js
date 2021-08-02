import { Accesses } from '../db/models';
import { Lecture } from '../db/models';
import { decode } from '../helpers/jwtoken';



class AccessController{

    static async access(req, res){
        try {
            const { body: {classRoom, moduleName, device}, lecture: {email}} = req;
            const newAccess = {
                moduleName,
                classRoom,
                device,
                createdby: email
            }

            const accessNow = await Accesses.create(newAccess)

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
            const allAccess = await Accesses.findAll();
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
            const { id } = req.query;
            const { body: { classRoom, moduleName, device }} = req;
            const found = await Accesses.findOne({where:{ id }});
            if(found){
         const updatedAccess =  await Accesses.update({
                classRoom,
                 moduleName,
                 device
                },{
                    where: {
                       id
                    },
                    returning: true,
                    plain: true
                });

                return res.status(200).json({
                    status:200,
                    message: 'access was updated successfully',
                   data: updatedAccess
                });
            }
            if(!found){
            return res.status(404).json({
                status: 404,
                error: 'access not found'
            })
        };

        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    }

    static async delete(req, res) {
        try {
            const { query: {id} } = req;
            const found = await Accesses.findOne({
                where: {
                    id,
                }
            });
            if(found){
                await Accesses.destroy({
                    where: {
                        id
                    }
                }).then(() => res.status(200).json({
                    status: 200,
                    message: 'access have been deleted'
                }))
            }
            if(!found){

            return res.status(404).json({
                status: 404,
                error: 'access not found'
            })
        };
        } catch (error) {
            return res.status(500).json({
                status:500,
                error: error.message
            })
        }
    }
}

export default AccessController