import { decode } from '../helpers/jwtoken';
import { Lecture } from '../db/models'

const checkLogin = async (req, res, next) => {
    const Token = req.headers['x-access-token'];
    if(!Token) {
        return res.status(403).json({
            status:403,
            error:'please login'
        });
    }
    const payload = decode(Token);
    const { email } = payload;
    const lecture = await Lecture.findOne({ where: {email}});
    if(!lecture) {
        return res.status(403).json({
            status:403,
            error: 'Lecture with that email is not found'
        });
    }
    req.lecture = lecture;
    next();
}
export default checkLogin;