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
                error: 'something went wrong',
                error
            })
        }
    }
    

}

export default Schools;