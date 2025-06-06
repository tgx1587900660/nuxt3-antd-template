import nodemailer from 'nodemailer';

const user = import.meta.env.VITE_APP_USER;
const pass = import.meta.env.VITE_APP_PASS;
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587, // 587 or 465
  secure: false, // true for port 465, false for other ports
  auth: {
    user: user,
    pass: pass,
  },
  // host: 'smtp.qq.com',
  // port: 465,
  // secure: true,
  // auth: {
  //   user: user, // qq邮箱
  //   pass: pass, // 授权码
  // },
});

/**
 * url: /email/send
 * method: post
 */
export default defineEventHandler(async (event) => {
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Maddison Foo Koch 👻" <${user}>`, // from 必须跟 auth.user 一致
      to: 'tangganxiao@gmail.com', // 单个或列表用逗号分隔, eg: '123@qq.com,456@qq.com'
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
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
