<!--
  1. 過去に作成した README.md を基に作成する。
  2. 書き方を統一する。
  3. 英語の文章内に短縮形を使用しない。
  4. カラーコードは小文字英数字を使用する。
  5. GitHub 内の参照方法は相対参照を使用する。
  6. 日本語の文章内に英単語を挿入するときは、半角スペースを英単語の前後に挿入する。またハイパーリンクも同様にする。
  7. 英語および日本語の語順のならびを意識する。しかし使用頻度の高い単語および、流れがおかしくなる単語はこの通りではない。
-->

<div align="center">
  <h1>BLUE PROTOCOL Raid Missions Reminder</h1>
  <p>Google Apps Script を通して Discord 内のサーバに BLUE PROTOCOL のレイドミッションをリマインドするソースコード。</p>
</div>

## 1. Description

### 1. 1. Sign Up for Accounts

以下の2つのアカウントを作成してください。

1. Google アカウントの [作成](https://accounts.google.com/signup/v2/createaccount?theme=glif&flowName=GlifWebSignIn&flowEntry=SignUp)

2. Discord アカウントの [作成](https://discord.com/register)

<details>
  <summary>Google アカウントは必要？</summary>

Google Apps Script（以下、GAS）を通して Discord 内のサーバのチャンネルにお知らせするため必要となります。

しかし JavaScript をデプロイできる環境をお持ちの方は Google アカウントを必要としません。

以降の説明では Google アカウントを作成済みの想定で進みます。

</details>

<details>
  <summary>Discord アカウントは必要？</summary>

Discord 内のサーバのチャンネル設定にある **Webhook** を使用してお知らせを受け取るため必要となります。

しかし Webhook の受け取りを受け入れられるアプリ等をお持ちの方は Discord アカウントを必要としません。

以降の説明では Discord アカウントを作成済みの想定で進みます。

</details>

### 1. 2. Set Up for GAS

1. [main.js](./main.js) の中身をフルコピーして GAS に [ログイン](https://www.google.com/script/start/) してください

2. **Start Scripting** と書かれているところをクリックしてください

3. 右上のアイコンが自分の使用したいアカウントかを確認後、左上の**新しいプロジェクト**をクリックしてください

4. 画面が切り替わり以下のようなソースコードをすべて選択してペーストしてください

```JavaScript
function myFunction() {

}
```

5. main.js の中身に置換し終えたら、左の歯車アイコンから**タイムゾーン**をクリックして **(GMT+09:00) 日本標準時 - 東京**に設定してください

6. 任意の名前に設定してプロジェクトを保存してください。**この段階ではまだ完成していません**

### 1. 3. Set Up for Discord

1. Discord 内のサーバのチャンネル設定にある Webhook を作成するには、**サーバ管理人**、**サーバの管理の権限**または **Webhook** **の管理の権限**が必要となります

2. 権限を有しているサーバのチャンネルにて Webhook を作成して **Webhook URL** をコピーしてください

### 1. 4. Run

1. GAS に戻り保存してあるプロジェクトを開いてください

2. 26行目の `const discord_webhook = "your discord webhook url";` の `your discord webhook url` の部分を選択してペーストしてください

3. Webhook URL の中身に置換し終えたら、左の時計アイコン（以下、トリガーの設定）から右下の**トリガーを追加**をクリックして**時間ベースのトリガーのタイプを選択**を**分ベースのタイマー**に設定してください。設定後、**時間の間隔を設定**（**分**）を**1分おき**にすることで、できるだけお知らせを正確にできます

4. **時間の間隔を設定**（**分**）を保存するとき**承認許可ダイアログ**が表示されます。これを各自で承認許可しなければ実行することができません

5. 実行しているかを確認するには、トリガーの設定の1個下の**実行数**から確認できます

### 1. 5. Issue

レイドミッションの仕様変更により動作しなくなることがありますが、この問題に対して対応しません。

また [1. 6. Raid Mission Times](./#1-6-raid-mission-times) の表よりゲームサーバが閉じた場合でもリマインドしてしまいますが、この問題に対して対応しません。

### 1. 6. Raid Mission Times

以下の表の**1時間前**、**10分前**および**開始時刻**をリマインドします。

|Day|JST (UTC+9)|
|:---:|:---:|
|Mon. - Fri.|14:00 - 15:00, 18:00 - 19:00, 22:00 - 23:00|
|Sat. - Sun.|08:00 - 09:00, 12:00 - 13:00, 16:00 - 17:00, 20:00 - 21:00, 25:00 - 26:00|

## 2. Development Environment

- Microsoft Windows 10 Pro version 22H2 (OS build 19045.3208) 64-bit

- Visual Studio Code version 1.83.0 64-bit

- Google Apps Script

## 3. License

Copyright (c) 2023 aonekoaoi

Licensed under the [MIT](./LICENSE.txt) license.

[MIT](./LICENSE_ja.txt) ライセンスに基づく配布。
