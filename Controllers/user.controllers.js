const { User } = require('../Models/user.model')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const UserRegister = async (req, res) => {

    const { name, gender, password, email } = req.body

    try {
        bcrypt.hash(password, 5, function (err, hash) {
            if (hash) {
                let Registernewuser = new User({ name, email, password: hash, gender })
                Registernewuser.save()
                res.status(200).send({ "msg": "New User is created" })
            } else {
                res.status(200).send({ "msg": "Something went wrong" })
            }

        })

    } catch (error) {
        res.status(400).send(error)

    }

}

const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let Userfind = await User.findOne({ email })
        if (Userfind) {
            bcrypt.compare(password, Userfind.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ UserId: Userfind._id }, 'user');
                    res.status(200).send({ "token": token })
                }else{
                  res.status(400).send("Wrong Credential!")
                }
            });
        }
    } catch (error) {
        res.status(400).send(error)
    }

}

module.exports = {
    UserLogin, UserRegister
}