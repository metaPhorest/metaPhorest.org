---
layout: doc
outline: deep
---



# メタフォレスト・ウェブサイトへの貢献方法

::: danger TL;DR
1. **GitHubアカウント](https://github.com)を作成し、チャットでユーザー名を共有してください。** _その後、metaPhorest Github組織への招待を受け取ります。あなたのメンバーページも作成します。
2. 2. **コンテンツの更新/変更.** メンバーページには、あなた自身についての情報や作品、リンクを追加することができます。GitHub 上で直接編集するか、GitHub Desktop を使ってウェブサイトのローカルコピーを作成し、そこで変更を加えてください。
:::
## GitHubについて

### GitHub、GitHub Pages、そしてVitePress。

[GitHub](https://github.com)はバージョン管理システムで、あらゆるテキストの変更を保存し追跡します。

[GitHub Pages](https://pages.github.com)は静的なウェブサイトをホストするシンプルな方法です。静的とは、サーバー上でデータベースやスクリプトを実行する必要がないことを意味します。そのため、高速で安全です。

このウェブサイトは、静的ウェブサイトを生成するために[VitePress](https://vitepress.dev)を使用しています - SSG (Static Site Generator)とも呼ばれています。

### マークダウン

[Markdown](https://github.github.com/gfm/)はテキストをフォーマットする簡単な方法である。

---
```markdown
これは_italic_です。
これは**太字**です。
これは***bolditalic***です。
```
これは _italic_ です。  
これは **bold** です。  
これは ***bolditalic*** です。 

---

```markdown
- リスト項目1
- リスト項目2
- リスト項目3
```
- リスト項目1
- リスト項目 2
- リスト項目 3

---

```markdown
これは[外部リンク](https://metaphorest.org)です。
これは[内部リンク](/about)です。
```

これは[外部リンク](https://metaphorest.org)です。
これは[内部リンク](/about)です。

---

画像はこのように含める：
```markdown
![画像のaltテキスト](/images/metaphorest-logo.png)
```
![画像のaltテキスト](/images/metaphorest-logo.png)

画像を最大幅1000pxにリサイズしてください。

---

マークダウンのショートコードについては、[Markdown Documentation Page](https://github.github.com/gfm/)をご覧ください。また、[既存のページ](http://github.com/metaPhorest/metaPhorest.org)をご覧になり、そこでどのようにマークダウンされているかをご確認ください。

## よくある質問

#### GitHubやMarkdownの使い方がわからないのですが、ウェブサイトを更新してもらえますか？
はい、可能です。チャットでコンテンツへのリンクを共有してください。画像は最大1000pxまで縮小してご用意ください。[Goolge Docs](https://support.google.com/docs/answer/12014036?hl=en)と[Notion](https://www.notion.so)はMarkdownでコンテンツをエクスポートできます。

#### なぜコンテンツを GitHub にコミットしなければならないのですか？
commit`とは_保存するという意味ですが、コンテンツを上書きするのではなく、変更履歴を保存します。これはバックアップにもなります。

#### 自分のページにカスタム HTML を追加できますか？
はい。

#### 自分のページにYouTubeやVimeoを埋め込むことはできますか？
はい。YouTubeやVimeoの埋め込みコードをコピーするだけです。

#### サイトの開発を手伝うことはできますか？
はい！詳しくはリポジトリのREADME.mdをご覧ください。

#### 常にコンテンツを変更してもらえますか？
いいえ。最初のうちはお手伝いしますが、ある程度時間が経てば自分でできるようになるはずです。複雑なことではありません。
