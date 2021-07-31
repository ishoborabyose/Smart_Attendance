import { Department } from '../db/models';


class Departments{
    static async createDepartment(req, res){
        try {
            const { departmentId, departmentName } = req.body;
            const departmentExist = await Department.findOne({where: {departmentId}, where: {departmentName}})
            if(departmentExist){
                return res.status(409).json({
                    status: 409,
                    error: 'The department is arleady registered'
                });
            }
            const newDepartment = {
                departmentId,
                departmentName
            }
            
            const department = await Department.create(newDepartment);

            return res.status(201).json({
                status:201,
                message: 'You successfully register department',
                department
            })
        } catch (error) {
            return status(500).json({
                status: 500,
                error: 'something went wrong',
                error
            })
        }
    }
}

export default Departments