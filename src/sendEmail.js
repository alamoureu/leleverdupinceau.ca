import axios from 'axios';

const sendEmail = async (title, body) => {
  const options = {
    method: 'POST',
    url: 'https://sendmail-ultimate-email-sender.p.rapidapi.com/send-email',
    headers: {
      'x-rapidapi-key': '4bee346de9msh5ed1f6bb9bcc083p1cef0ejsn71c1549fb036',
      'x-rapidapi-host': 'sendmail-ultimate-email-sender.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      sendTo: 'leleverdupinceau@gmail.com',
      replyTo: 'leleverdupinceau@gmail.com',
      isHtml: 'true',
      title: title,
      body: body,
    },
  };
  try {
    await axios.request(options);
  } catch (error) {
    console.error(
      '❌ Error sending email:',
      error.response ? error.response.data : error.message
    );
  }
};

export { sendEmail };
