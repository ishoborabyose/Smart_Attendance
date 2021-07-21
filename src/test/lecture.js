import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

chai.use(chaiHttp);
describe('Lecture signup', () => {
    it('it should signup lecture if all data are given', (done) => {
        chai
            .request(app)
            .post('/api/register')
            .send({

                names: "aline karamaga",
                email: "alinekaramaga1@gmail.com",
                gender: "female",
                faculty: "epi",
                department: "electrical and electronic",
                school: "school of engineering",
                college: "college of science and technology",
                contact: "0780619784",
                password: "Karamaga1!"
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('lecture');
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.deep.equal('A new lecturer have been registered');
                done();
            });
    });

    it('it shouldn\'t signup lecture if all data aren\'t given', (done) => {
        chai
            .request(app)
            .post('/api/register')
            .send({

                names: "aline karamaga",
                email: "alinekaramaga1@gmail.com",
                gender: "female",
                faculty: "epi",
                department: "electrical and electronic",
                school: "school of engineering",
                college: "college of science and technology",
                password: "Karamaga1!"
            })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            })
    })

    it('it shouldn\'t signup lecture if use the used credintials', (done) => {
        chai
            .request(app)
            .post('/api/register')
            .send({

                names: "aline karamaga",
                email: "alinekaramaga1@gmail.com",
                gender: "female",
                faculty: "epi",
                department: "electrical and electronic",
                school: "school of engineering",
                college: "college of science and technology",
                contact: "0780619784",
                password: "Karamaga1!"
            })
            .end((err, res) => {
                expect(res.status).to.equal(409);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                expect(res.body.error).to.deep.equal('this email already used');
                done();
            });
    })
});


describe('signin in tests lecture', () => {
    it('it should login lecture succesfully', (done) => {
        chai
            .request(app)
            .post('/api/login')
            .send({
                email: 'karamaga@gmail.com',
                password: 'Karamaga1!'
            })
            .end((err, res) => {
                expect(res.body.status).to.be.equal(200);
                expect(res.body).to.have.keys('status', 'message', 'data');
                expect(res.body.data).to.be.an('object');
                expect(res.body.message).to.be.equal('You have been loged in successfully');
                expect(res.body.data.token).to.be.a('string');
                expect(res);
                done();
            });
    });

    it('It should show an error if the email is missing', (done) =>{
        chai
            .request(app)
            .post('/api/login')
            .send({ })
            .end((err, res) => {
                expect(res.body).to.have.keys('status', 'error');
                expect(res.body.status).to.be.equal(400);
                expect(res.body.error).to.be.equal(' email  is required');
                expect(res.body.error).to.be.a('string');
                expect(res);
                done();
            });
    });

    it('It should show an error if the lecture tries to sign in with invalid credintials', (done) =>{
        chai
            .request(app)
            .post('/api/login')
            .send({
                email:'someone@gmail.com'
            })
            .end((err, res) =>{
                expect(res.body).to.have.keys('status', 'error');
                expect(res.body.status).to.be.equal(400);
                expect(res.body.error).to.be.equal(' password  is required');
                expect(res.body.error).to.be.a('string');
                expect(res);
                done();
            });
    });
    
    it('It should show an error if the auth tries to sign in with invalid credintials', (done)=>{
        chai
            .request(app)
            .post('/api/login')
            .send({
                email: 'someone@gmail.com',
                password: 'wrong'
            })
            .end((err, res) =>{
                expect(res.body).to.have.keys('status', 'error');
                expect(res.body.status).to.be.equal(400);
                expect(res.body.error).to.be.equal(' password  with value  wrong  fails to match the required pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$/');
                expect(res.body.error).to.be.a('string');
                expect(res);
                done();
            })
    })
})

