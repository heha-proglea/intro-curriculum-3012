'use strict';

// HTTPモジュールの読み込み
const http = require('http');

// モジュールhttpを用いて、サーバーを作成
const server = http.createServer((req, res) => {
    // サーバーにリクエストがあった時に呼び出されるコールバック関数

    // アクセスログを出力
    console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress); // req.cone...ではリクエストが送られたIP情報を取得している

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.write(req.headers['user-agent']); // req.headers['user-agent']にてユーザーエージェントを取得
    res.end();
}).on('error', (e) => { // エラーのハンドリングを行う←「httpサーバーが次のイベントを発行した際に補足するよ」という書き方
    // 'error'という文字列のイベントが発生した時に呼び出されるコールバック関数
    console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
    // 'clientError'という文字列のイベントが発生した時に呼び出されるコールバック関数
    console.error('[' + new Date() + '] Client Error', e);
});

// このHTTPが起動するポートを宣言し、サーバーを起動
const port = 8000;
server.listen(port, () => {
    // サーバーを起動時に実行されるコールバック関数
    // console.log('Listening on ' + port);
    console.info('[' + new Date() + '] Listening on ' + port)
});
