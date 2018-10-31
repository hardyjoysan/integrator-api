const Admin = require('../models/AdminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    create: function(req, res, next) {
        let newAdmin = new Admin(req.body);

        newAdmin.save((err, result) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(result);
        })
    },
    authenticate: function(req, res, next) {
        Admin.findOne({username:req.body.username}, function(err, admin){
            if (err) {
                next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, admin.password)) {
                    const token = jwt.sign({id: admin._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({status:"success", message: "Logged In Succesfully!", data:{user: admin, token:token}});
                }else{
                    res.json({status:"error", message: "Invalid username/password!!!", data:null});
                }
            }
        });
    },
}