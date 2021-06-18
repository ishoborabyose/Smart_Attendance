import bcrypt from 'bcrypt';
import { Lecture } from '../db/models';
import { encode } from '../helpers/jwtoken';

class lecturesController {
    static async register(req, res) {
        try {
            const { names, email, gender, faculty, department, school, college, contact, password } = req.body;

            const lectureExist = await Lecture.findOne({ where: { email } });
            if (lectureExist) {
                return res.status(409).json({
                    status: 409,
                    error: 'this email already used'
                });
            }
            const hash = await bcrypt.hash(password, 8);

            const newLecture = {
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
                message: 'A new lecturer have been registered',
                lecture
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    };

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const registered = await Lecture.findOne({
                where: {
                    email
                }
            });

            if(!registered) {
                return res.status(401).json({
                    status: 401,
                    error: 'incorrect email or password provided'
                });
            }
            const truePassword = await bcrypt.compareSync(password, registered.password);

            if(!truePassword) {
                return res.status(401).json({
                    status: 401,
                    error: 'incorrect email or password provided'
                });
            }

            const token = encode({
                email
            });
            return res.status(200).json({
                status: 200,
                message:'you have been logged in successfully',
                token
            })
        } catch(error){
            return res.status(500).json({
                status:500,
                error: error.message
            });
        }
    }

    
}

export default lecturesController