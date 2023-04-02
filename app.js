// モジュールの読み込み
const express = require('express');
const app = express();
const port = 3007;

app.use(express.urlencoded({ extended: true }));

// EJSをテンプレートエンジンとして使用する
app.set('view engine', 'ejs');

// 静的ファイルをpublicディレクトリから読み込む
app.use(express.static('public'));

// ダミーデータの作成
const items = [
    { id: 1, title: 'item 1' },
    { id: 2, title: 'item 2' },
    { id: 3, title: 'item 3' },
    { id: 4, title: 'item 4' },
    { id: 5, title: 'item 5' }
];

// トップページの表示
app.get('/', (req, res) => {
    res.render('index', { items: items });
});

// アイテムの追加
app.post('/', (req, res) => {
    // リクエストボディからアイテムを取得する
    const item = req.body.item;

    // アイテムのidを決定する
    const id = items.length + 1;

    // アイテムを追加する
    items.push({ id: id, title: item });

    // トップページにリダイレクトする
    res.redirect('/');
});

// サーバーの起動
app.listen(port, () => {
    console.log(`Access the app at http://localhost:${port}`);
});
