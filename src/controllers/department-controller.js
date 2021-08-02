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


    static async deleteDepartment(req, res) {
        try {
            const { query: {departmentId} } = req;
            const found = await Department.findOne({
                where: {
                    departmentId
                }
            });
            if(found){
                await Department.destroy({
                    where: {
                        departmentId
                    }
                }).then(() => res.status(200).json({
                    status: 200,
                    message: 'Department have been deleted'
                }))
            }
         if(!found){
             return res.status(404).json({
                status: 404,
                error: 'Department not found'
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

export default Departments