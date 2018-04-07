/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.JVBot = function JVBot (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working


  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};


//https://console.cloud.google.com/storage/browser/jvbot-da75b.appspot.com?project=jvbot-da75b


//gcloud beta functions deploy JVBot --stage-bucket jvbot-da75b.appspot.com --trigger-http

// url: https://us-central1-jvbot-da75b.cloudfunctions.net/JVBot


// sourceArchiveUrl: gs://jvbot-da75b.appspot.com/us-central1-projects/jvbot-da75b/locations/us-central1/functions/JVBot-ylznehogohvf.zip
