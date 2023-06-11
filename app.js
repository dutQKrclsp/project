const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/css',express.static('./static/css'));
// GET 요청에 대한 핸들러
app.get('/', (req, res) => {
    // HTML 파일을 읽어와서 응답으로 보냄
    fs.readFile('./static/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('서버 에러');
        } else {
            res.send(data);
        }
    });
});

// 서버 시작
app.listen(3000, () => {
    console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
