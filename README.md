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

### Refeences

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

