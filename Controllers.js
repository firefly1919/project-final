const usersSchema = require("./usermodel");
const bcrypt = require("bcrypt");
const sendEmail = require("./sendEmail");

exports.Register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const found = await usersSchema.findOne({ email });
        if (found) {
            res.status(400).send({ errors: [{ msg: "user already exists" }] });
        } else {
            const user = new usersSchema(req.body);
            const salt = 10;
            const hashpassword = bcrypt.hashSync(password, salt);
            user.password = hashpassword;
            const email = user.email;
            const subject = 'Welcome to my app';
            const text = `Dear ${name}, thank you for registering to my app!`;
            await sendEmail(email, subject, text);
            await user.save();
            res.status(200).send({ msg: "user added", user });
        }
    } catch (error) {
        res.status(500).send("couldn't add user");
    }
};
