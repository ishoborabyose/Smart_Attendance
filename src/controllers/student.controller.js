import { Student } from '../db/models'


class studentController {
    static async register(req, res) {
        try {
            const { cardId,
                registrationN,
                names,
                gender,
                faculty,
                department,
                school,
                college,
                year,
                contact,
                email} = req.body;

            const studentExist = await Student.findOne({ where: { email } });
            if (studentExist) {
                return res.status(409).json({
                    status: 409,
                    error: 'this email already used'
                });
            }

            const newStudent = {
                cardId,
                registrationN,
                names,
                gender,
                faculty,
                department,
                school,
                college,
                year,
                contact,
                email
            }

            const student = await Student.create(newStudent);

            return res.status(201).json({
                status: 201,
                message: 'A new student have been registered',
                student
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };
}

export default studentController

