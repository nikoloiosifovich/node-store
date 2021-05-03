import sendgrid from '@sendgrid/mail'

try {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
} catch (error) {
  console.log(error)
}

const emailService = () => ({
  sendMail: async (to, subject, name) => {
    return sendgrid.send({
      to,
      from: 'vieiraneto88@gmail.com',
      templateId: process.env.TMPL_ID,
      dynamicTemplateData: {
        subject,
        username: name,
        company: 'NodeStore'
      }
    })
  }
})

export default emailService()
