import nodemailer from 'nodemailer';

const user = import.meta.env.VITE_APP_NAME;
const pass = import.meta.env.VITE_APP_PASS;
const transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  // port: 587, // 587 or 465
  // secure: false, // true for port 465, false for other ports
  // auth: {
  //   user: 'maddison53@ethereal.email',
  //   pass: 'jn7jnAPss4f63QBp6D',
  // },
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: user, // 登录邮箱(这个必须跟from中的地址一致)
    pass: pass, // 登录密码
  },
});

/**
 * url: /email/send
 * method: post
 */
export default defineEventHandler(async (event) => {
  // console.log('nodemailer :>> ', nodemailer);

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Maddison Foo Koch 👻" <${user}>`, // 这个地址必须跟 auth.user 一致
      to: 'tangganxiao@gmail.com,tangganxiao@makeblock.com', // 单个或列表用逗号分隔
      subject: 'Hello ✔', // Subject line
      // text: 'Hello world?', // plain text body
      html: '<b>Hello world? 反反复复反反复复反反复复反反复复方法</b>', // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  try {
    const res = await main();
    console.log('res :>> ', res);
    return {
      code: 200,
      data: {},
      message: '发送成功！',
    };
  } catch (err) {
    console.error(err);
    return {
      code: 500,
      data: {
        err: err,
      },
      message: '发送失败！',
    };
  }
});
