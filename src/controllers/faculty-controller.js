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
                error: 'something went wrong',
                error
            })
        }
    }
    

}

export default Faculties;