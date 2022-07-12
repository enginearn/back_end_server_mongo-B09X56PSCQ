# back_end_server_mongo-B09X56PSCQ

<details>
<summary>config file</summary>

``` JavaScript
// mongodb+srv://mongoAtlas:<password>@cluster0.zhqnh7c.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority
exports.mongodb_connect = "mongodb+srv://mongoAtlas:<PASSWD><@cluster0.zhqnh7c.mongodb.net/blogUserDatabase?retryWrites=true&w=majority";
```

``` JavaScript
const config = require('./.config.js')
mongoose.connect(config.mongodb_connect)
```

</details>

---

## References

[Your Profile](https://github.com/settings/profile)

[WindowsのNodejsをアップデートする - suzu6の技術ブログ](https://www.suzu6.net/posts/295-node-update-windows/)

[Releases | Node.js](https://nodejs.org/en/about/releases/)

[WindowsのパッケージマネジメントツールのChocolateyをインストールする - suzu6の技術ブログ](https://www.suzu6.net/posts/297-chocolatey-windows/)

[10 Best Node.js Hot Reload Libraries in 2022 | Openbase](https://openbase.com/categories/js/best-nodejs-hot-reload-libraries)

[localhost:5000/blog/update/62c93fbb4c6cbfe77b42d0ee](http://localhost:5000/blog/update/62c93fbb4c6cbfe77b42d0ee)

[Zenn｜エンジニアのための情報共有コミュニティ](https://zenn.dev/)

[はじめに｜Rust入門](https://zenn.dev/mebiusbox/books/22d4c1ed9b0003/viewer/6d5875)

[tanakh (Hideyuki Tanaka)](https://github.com/tanakh)

[Data | Cloud: MongoDB Cloud](https://cloud.mongodb.com/v2/62c93024aa455314ba21a545#metrics/replicaSet/62c932272fcb213e34385b33/explorer/blogUserDatabase/blogs/find)

[Troubleshoot Connection Issues — MongoDB Atlas](https://www.mongodb.com/docs/atlas/troubleshoot-connection/#special-characters-in-connection-string-password)

[Configure Database Users — MongoDB Atlas](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/#Atlas-admin)

[Expressで「Cannot set headers after they are sent to the client」と怒られた時の対処法 | Casual Developers Note](https://casualdevelopers.com/tech-tips/how-to-fix-the-error-of-cannot-set-headers-after-they-are-sent-to-the-client/)

[[Solved] Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client - Exception Error](https://exerror.com/error-err_http_headers_sent-cannot-set-headers-after-they-are-sent-to-the-client/)

[Data | Cloud: MongoDB Cloud](https://cloud.mongodb.com/v2/62c93024aa455314ba21a545#metrics/replicaSet/62c932272fcb213e34385b33/explorer/blogUserDatabase/blogs/find)

[enginearn (enginearn)](https://github.com/enginearn)

[【Node.js / Express 版】GitHub に公開したくない変数や値を隠して push する方法](https://zenn.dev/noraworld/articles/keep-values-a-secret-on-nodejs)

[EJSを使用してノードアプリケーションをテンプレート化する方法 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-ja)

[No default engine was specified and no extension was providedが発生する](https://trueman-developer.blogspot.com/2020/08/no-default-engine-was-specified-and-no.html)

[Node.js ExpressのテンプレートエンジンでFailed to lookup viewエラーになった時はどうすればいいか？ - Qiita](https://qiita.com/yuta-katayama-23/items/175a09b494d4642d501b)

[yuta-katayama-23 (yuta-katayama-23)](https://github.com/yuta-katayama-23)

[Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html)

[Node.jsでimport・export（ES6の構文）を使えるようにwebpack × Babelの設定をやってみた ｜SHIFT Group 技術ブログ｜note](https://note.com/shift_tech/n/n77562e0926e3)

[Emitted 'error' event on Function instance at: { code: 'ERR_HTTP_HEADERS_SENT' } - Google 検索](https://www.google.com/search?q=Emitted+%27error%27+event+on+Function+instance+at%3A++%7B+code%3A+%27ERR_HTTP_HEADERS_SENT%27+%7D&rlz=1C1QABZ_jaJP895JP895&sxsrf=ALiCzsaD_wcdPskivT4IJj0i-FsXKZTtFQ%3A1657580144315&ei=cKrMYpbnEpeXseMP1-2a2AY&ved=0ahUKEwiW38Cd9_H4AhWXS2wGHde2BmsQ4dUDCA4&uact=5&oq=Emitted+%27error%27+event+on+Function+instance+at%3A++%7B+code%3A+%27ERR_HTTP_HEADERS_SENT%27+%7D&gs_lcp=Cgdnd3Mtd2l6EANKBQg8EgExSgQIQRgBSgQIRhgAUOUhWNpbYJ1oaAFwAHgAgAGIAYgBxRCSAQQ3LjEzmAEAoAEBwAEB&sclient=gws-wiz)

[Node.js HTTP: ERR_HTTP_HEADERS_SENT](https://airbrake.io/blog/nodejs-error-handling/node-js-err_http_headers_sent)

[Document](http://localhost:5000/)

[Amazon.co.jp: はじめてつくるバックエンドサーバー発展編（Node.js & Express & MongoDB） eBook : 三好アキ: 本](https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%A4%E3%81%8F%E3%82%8B%E3%83%90%E3%83%83%E3%82%AF%E3%82%A8%E3%83%B3%E3%83%89%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E7%99%BA%E5%B1%95%E7%B7%A8%EF%BC%88Node-js-Express-MongoDB%EF%BC%89-%E4%B8%89%E5%A5%BD%E3%82%A2%E3%82%AD-ebook/dp/B09X56PSCQ)

[Rust で Web バックエンド開発をはじめる | CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/31110/)

[mod728/node-express-book-advanced: 「はじめてつくるバックエンドサーバー発展編（Node.js & Express & MongoDB）」コード](https://github.com/mod728/node-express-book-advanced)

[女の子 自信を持って 肖像画 - Pixabayの無料画像](https://pixabay.com/ja/illustrations/%e5%a5%b3%e3%81%ae%e5%ad%90-%e8%87%aa%e4%bf%a1%e3%82%92%e6%8c%81%e3%81%a3%e3%81%a6-%e8%82%96%e5%83%8f%e7%94%bb-3316342/)

[Google ニュース](https://news.google.com/topstories?hl=ja&gl=JP&ceid=JP:ja)

[今日の天気 7月12日(火)の天気　東日本や北日本は激しい雨や雷雨に警戒 - ウェザーニュース](https://weathernews.jp/s/topics/202207/120025/)

[Express でのルーティング](https://expressjs.com/ja/guide/routing.html)

[Expressにてエラーが続くとCannot set headers after they are sent to the clientとなる。](https://teratail.com/questions/300566)

