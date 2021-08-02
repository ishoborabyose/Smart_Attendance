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
    };

    static async allDepartment(req, res) {
        try {
            const allDepartments = await Department.findAll();
            return res.status(200).json({
                status: 200,
                message: 'All departments were retrieved successful',
                data: allDepartments
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };
}

export default Departments