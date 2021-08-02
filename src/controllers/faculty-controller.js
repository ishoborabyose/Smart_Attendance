import { Faculty } from "../db/models";

class Faculties{

    static async createFaculty(req, res){
        try {
            const { facultyId, facultyName } = req.body;
            const facultyExist = await Faculty.findOne({where: {facultyId}, where: {facultyName}});
            if(facultyExist){
                return res.status(409).json({
                    status: 409,
                    error: 'The faculty is arleady registered' 
                });
            };

            const newFaculty ={
                facultyId,
                facultyName
            }

            const faculty = await Faculty.create(newFaculty);
            return res.status(201).json({
                status:201,
                message:'Faculty created successfully',
                faculty
            })
        } catch (error) {
            return res.status(500).json({
                status:500,
                error: error.message
                
            })
        }
    };

    static async allFaculty(req, res) {
        try {
            const allFaculties = await Faculty.findAll();
            return res.status(200).json({
                status: 200,
                message: 'All faculties were retrieved successful',
                data: allFaculties
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };


    static async deleteFaculty(req, res) {
        try {
            const { query: {facultyId} } = req;
            const found = await Faculty.findOne({
                where: {
                    facultyId
                }
            });
            if(found){
                await Faculty.destroy({
                    where: {
                        facultyId
                    }
                }).then(() => res.status(200).json({
                    status: 200,
                    message: 'Faculty have been deleted'
                }))
            }
         if(!found){
             return res.status(404).json({
                status: 404,
                error: 'Faculty not found'
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

export default Faculties;