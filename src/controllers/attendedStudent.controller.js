import { AttendedStudent } from '../db/models';



class attendedStudentController {
    static async register(req, res) {
        try {
            const { regNumber,
                studentNames,
                moduleName,
                location,
                lecturer} = req.body;

            const attendedStudentExist = await AttendedStudent.findOne({ where: { regNumber } });
            if (attendedStudentExist) {
                return res.status(409).json({
                    status: 409,
                    error: 'this registration number already attended'
                });
            }

            const newStudent = {
                regNumber,
                studentNames,
                moduleName,
                location,
                lecturer
            }

            const student = await AttendedStudent.create(newStudent);

            return res.status(201).json({
                status: 201,
                message: 'A new student have been attended',
                student
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };

    static async getAllStudents(req, res) {
        try{
            
            const allAttendedStudents = await AttendedStudent.findAll();
            return res.status(200).json({
                status: 200,
                message: 'All attended students were retrieved successfull',
                data: allAttendedStudents
            });
        } catch(error){
            return res.status(500).json({
                status: 500,
                erro: error.message
            })
        }
    }
}

export default attendedStudentController;
