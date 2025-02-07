require('dotenv').config();
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

async function listFiles() {
    try {
        const response = await drive.files.list({
            pageSize: 10,
            fields: 'nextPageToken, files(id, name)',
        });

        const files = response.data.files;
        if (files.length) {
            console.log('Files:');
            files.forEach((file) => {
                console.log(`${file.name} (${file.id})`);
            });
        } else {
            console.log('No files found.');
        }
    } catch (error) {
        console.error('Error listing files:', error);
    }
}

listFiles();