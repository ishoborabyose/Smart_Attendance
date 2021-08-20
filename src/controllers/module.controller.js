import { Module } from '../db/models';

class Modules{

    static async createModule(req, res){
        try {
            const { moduleId, moduleName } = req.body;
            const moduleExist = await Module.findOne({where: {moduleId}})
            if(moduleExist){
                return res.status(409).json({
                    status: 409,
                    error: 'The module you entered arleady exist'
                });
            };

            const newModule = {
                moduleId,
                moduleName
            }

            const module = await Module.create(newModule);
            return res.status(201).json({
                status: 201,
                message: 'Module created succesfully',
                module
            })

        } catch (error) {
            return res.status(400).json({
                status: 500,
                error: error.message
            })
        }
    }
}
export default Modules;