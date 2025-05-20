const express = require('express');
const multer = require('multer');
const app = express();
const port = 3001;
app.get('/', (req, res) => res.send('message'));

//File Uplaod
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '_' + file.originalname;
        cb(null, fileName)
    }
})
const upload = multer({ storage: storage })


app.get('/upload', (req, res) => res.status(200).sendFile(__dirname + '/./uploadFile.html'));
app.post('/upload', upload.single("sadiq"), (req, res) => res.send('File Uploaded'));

app.listen(port, () => console.log('working'));