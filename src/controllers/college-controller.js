import { College } from '../db/models';


class Colleges {
    static async createCollege(req, res) {
        try {
            const { collegeId, collegeName } = req.body;

            const collegeExist = await College.findOne({
                where: { collegeId }, where: {collegeName}
            });
            if (collegeExist) {
                return res.status(409).json({
                    status: 409,
                    error: 'This college is already registered '
                })
            }
            const newCollege = {
                collegeId,
                collegeName
            };

            const college = await College.create(newCollege)
            return res.status(201).json({
                message: 'You successfully register college',
                college
            })
        } catch (error) {
            return res.status(500).json({
                error: 'something went wrong',
                error
            })
        }
    }
}

export default Colleges