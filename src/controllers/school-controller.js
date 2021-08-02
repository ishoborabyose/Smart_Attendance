import { School } from '../db/models';


class Schools{

    static async createSchool(req, res){
        try {
            const { schoolId, schoolName } = req.body;
            const schoolExist = await School.findOne({where: {schoolId}, where: {schoolName}});
            if(schoolExist){
                return res.status(409).json({
                    status: 409,
                    error: 'The school is arleady registered' 
                });
            };

            const newSchool ={
                schoolId,
                schoolName
            }

            const school = await School.create(newSchool);
            return res.status(201).json({
                status:201,
                message:'School created successfully',
                school
            })
        } catch (error) {
            return res.status(500).json({
                status:500,
                error: error.message
                
            })
        }
    };


    static async allSchool(req, res) {
        try {
            const allSchools = await School.findAll();
            return res.status(200).json({
                status: 200,
                message: 'All school were retrieved successful',
                data: allSchools
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };
    
    static async deleteSchool(req, res) {
        try {
            const { query: {schoolId} } = req;
            const found = await School.findOne({
                where: {
                    schoolId
                }
            });
            if(found){
                await School.destroy({
                    where: {
                        schoolId
                    }
                }).then(() => res.status(200).json({
                    status: 200,
                    message: 'School have been deleted'
                }))
            }
         if(!found){
             return res.status(404).json({
                status: 404,
                error: 'School not found'
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

export default Schools;