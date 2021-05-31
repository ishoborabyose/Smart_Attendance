import bcrypt from 'bcrypt';
import generator from 'generate-password';
const { Lecture }= require('../db/models')

class lecturesController {
    static async register(req, res){
        try{
            const { names, email, gender, faculty, department, school, college, contact } = req.body;
             const password = generator.generate({
                 length:8,
                 numbers:true
             });
              
             const lectureExist= await Lecture.findOne({where: {email}});
             if(lectureExist){
                return res.status(409).json({
                    status: 409,
                    error: 'this email already used'
                });
             }
             const hash = await bcrypt.hash(password, 8);

             const newLecture ={
                 names,
                 email,
                 gender,
                 faculty,
                 department,
                 school,
                 college,
                 contact,
                 password: hash
             }

             const lecture = await Lecture.create(newLecture);

             return res.status(201).json({
                 status: 201,
                 message:  'A new lecturer have been registered',
                 lecture
             });
        } catch(error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };
}

export default lecturesController