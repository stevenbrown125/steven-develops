const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })

var params = {
    Template: {
        TemplateName: 'Steven_Develops_Contact',
        HtmlPart: `
            <!DOCTYPE html>
            <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <meta name="x-apple-disable-message-reformatting">
                <title></title>
                <!--[if mso]>
                <noscript>
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:PixelsPerInch>96</o:PixelsPerInch>a
                        </o:OfficeDocumentSettings>
                    </xml>
                </noscript>
                <![endif]-->
                <style>
                    table, td, div, h1, p {font-family: Arial, sans-serif;}
                    table, td {border:2px solid #000000 !important;}
                </style>
            </head>
            <body style="margin:0;padding:0;">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                <tr>
                    <th style="padding:0; column-span: all;" colspan="2">
                        <h1 style="margin:0;">Steven Develops Contact Request</h1>
                    </th>
                </tr>
                <tr>
                    <td style="padding:2px;">
                        Name
                    </td>
                    <td style="padding:2px;">{{contact.name}}</td>
                </tr>
                <tr>
                    <td style="padding:2px;">
                        Email
                    </td>
                    <td style="padding:2px;">{{contact.email}}</td>
                </tr>
                    <tr>
                    <td style="padding:2px;">
                        Phone
                    </td>
                    <td style="padding:2px;">{{contact.phone}}</td>
                </tr>
                <tr>
                    <td style="padding:2px;">
                        Message
                    </td>
                    <td style="padding:2px;">{{contact.message}}</td>
                </tr>
            </table>
            </body>
            </html>`,
        SubjectPart: 'Steven Develops Contact Submission',
        TextPart:
            'New Contact Request\r\n\r\nName\t{{contact.name}}\r\nEmail:\t{{contact.email}}\r\nPhone\t{{contact.phone}}\r\nMessage\t{{contact.message}}'
    }
}

// createTemplate to create new template
var templatePromise = new AWS.SES({ apiVersion: '2010-12-01' })
    .createTemplate(params)
    .promise()

// Handle promise's fulfilled/rejected states
templatePromise
    .then(function (data) {
        console.log('Template Updated')
    })
    .catch(function (err) {
        console.error(err, err.stack)
    })
