const express = require('express');
const path = require('path');
const app = express();
const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
    accessKeyId: 'AccessKeyIdHere',
    secretAccessKey: 'SecrecAccessKeyHeree',
    region: '', // e.g., 'us-east-1'
  });


const s3 = new AWS.S3();

const Polly = new AWS.Polly({
    region: 'us-east-1'
});

const pollyInput = {
    Text: 'Hello Odette, this is Polly',
    OutputFormat: 'mp3',
    VoiceId: 'Joanna'
}

app.get('/',(request, response) => {
    response.sendFile(path.join(__dirname, '/public/index.html'));
});

// app.get('/speak', (request, response) => {
//     Polly.synthesizeSpeech(pollyInput, (err, data) => {
//         if(err){
//             console.log('Error --- ', err);
//             return;
//         }
//         if(data.AudioStream instanceof Buffer){
//             fs.writeFile('Greetings.mp3', data.AudioStream, (fErr) => {
//                 if(fErr){
//                     console.log('File Error ---- ',fErr)
//                     return;
//                 }
//                 console.log('Success --- ')
//             })
//         }
//     })
//     response.send('Running Speech to text')
// })

// app.get('/upload',(request, response) => {
//     s3.putObject({
//         Body: 'Hello2 World',
//         Bucket: '',
//         Key: 'my-file2.txt',
//     }).promise();
// });

app.listen(3002, console.log('App Listening to port 3002'));