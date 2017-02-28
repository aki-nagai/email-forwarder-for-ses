var AWS = require('aws-sdk');  // AWS SDK for nodejs is preinstalled
var s3 = new AWS.S3();
 
var bucketName = process.env.BUCKET_NAME;

// Func: Lambda handler
exports.handler = (event, context, callback) => {
  // Amazon SES passes information to the Lambda function in JSON format
  // This format is described in 
  // http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-notifications-contents.html 
  var sesNotification = event.Records[0].ses;
  console.log("SES Notification:\n", JSON.stringify(sesNotification, null, 2));

  // The sesNotification doesn't contain email raw content
  // So we must store email row content to S3 before run this lambda action
  s3.getObject({
    Bucket: bucketName,
    Key: sesNotification.mail.messageId // S3 objects are named using message id
  }, function(err, data) {
    if (err) {
        console.log(err, err.stack);
        callback(err);
    } else {
        console.log("Raw email:\n" + data.Body);
        callback(null, null);
    }
  });
};
