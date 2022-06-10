import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "21114df3fbb266",
        pass: "82b3c935fae247"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject,body}: SendMailData){
   
    await  transport.sendMail({
            from : 'Equipe SysQuali <sysquali@sysquali.com.br>',
            to: 'Lucas previato <lucas@sysquali.com.br>',
            subject,
            html: body,
              
        });

   };
}