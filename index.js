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
  callback(null, null);
};
