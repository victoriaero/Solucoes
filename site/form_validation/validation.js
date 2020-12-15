const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: 'victoria.e.ramos.o@gmail.com',
       pass: '171074Ff240798'
    }
});

module.exports = {

    async validation(request, response) {
        const { name, mail, subject, message } = request.body;

        var email = {
            from: "Victoria <victoria.e.ramos.o@gmail.com>" ,
            to: "victoria.e.ramos.o@gmail.com",
            subject: subject ,
            html: "Nome: " + name + "Email: " + mail + "<br> Mensagem: " + message
        }; 
        
        await transporter.sendMail(email).then(message => {
            console.log(message);
        }).catch(err => {
            console.log(err);
        });

        return response.status(202).json({email}).send();
    }

}