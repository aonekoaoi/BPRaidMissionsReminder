# BLUE PROTOCOL Raid Missions Reminder

## About Me

こんにちは、青猫あおいと申します。

C, Java, Pythonを趣味程度で嗜んでいます。

## Overview

Google Apps Script（以下、GAS）を利用してDiscord内のサーバ（ギルド）のWebhookからブループロトコルのレイドミッションをリマインドするソースコード。

## Description

### STEP1 Sign up

Googleアカウントを持っている場合は作成不要。

Googleアカウントの[作成](https://accounts.google.com/signup/v2/createaccount?theme=glif&flowName=GlifWebSignIn&flowEntry=SignUp)。

> Googleアカウントの作成はGASを利用するため必要。

Discordアカウントを持っている場合は作成不要。

Discordアカウントの[作成](https://discord.com/register)。

> Discordアカウントの作成はDiscordのWebhookを利用するため必要。
>> DiscordのWebhookを利用**しなければ**Discordアカウントの作成は不要。

### STEP2 Setting up GAS

[main.js](https://github.com/aonekoaoi/BPRaidMissionsReminder/blob/main/main.js)の中身をフルコピーしてGASに[ログイン](https://script.google.com/u/0/home)。

左上の**新しいプロジェクト**から*無題のプロジェクト*を作成。

```js
function myFunction() {

}
```

以上のようなソースコードをすべて選択して`main.js`の中身をペースト。

左の歯車アイコン（以下、プロジェクトの設定）から**タイムゾーン**内の`(GMT+09:00) 日本標準時 - 東京`をクリック。

> プロジェクトの設定をしなくとも動作すると思うが念のため設定。

任意の名前に変更してプロジェクトを保存。

> この段階では完成していない。

### STEP3 Setting up Discord

DiscordのWebhookを作成するには**サーバ管理人**か**サーバ管理の権限**または**Webhookの管理の権限**が必要。

以上の権限を持っているサーバ（ギルド）内の**チャンネル**にてWebhookを作成してWebhook URLをコピー。

### STEP4 Setting up GAS

再びGASに戻り保存してあるプロジェクトを開く。

29行目の`const discord_webhook = "your discord webhook url";`の`your discord webhook url`の部分を選択してWebhook URLをペースト。

左の時計アイコン（以下、トリガー）から右下の**トリガーを追加**をクリック。

**時間ベースのトリガーのタイプを選択**内の`分ベースのタイマー`をクリック。

**時間の間隔を選択**（**分**）内の`1分おき`をクリックして保存。

> GASでは新しいプロジェクトを実行するとき必ず**承認許可ダイアログ**が表示。各自で承認許可。

### Issue

以下の表のためゲーム内サーバが閉じていた場合でもリマインドしてしまう。

そのためゲーム内サーバが閉じた判定を**プログラムする**か実行ファイルを**一度停止する**必要がある。

以下の表の**1時間前**と**10分前**、**開始時刻**をリマインドする。

|Day|Time (UTC+9)|
|:---:|:---:|
|Mon. - Fri.|14:00 - 15:00, 18:00 - 19:00, 22:00 - 23:00|
|Sat. - Sun.|08:00 - 09:00, 12:00 - 13:00, 16:00 - 17:00, 20:00 - 21:00, 25:00 - 26:00|

### Operation check

トリガーアイコンの1個下の**実行数**から動作しているか確認できる。

### Raid Mission Times

[Issue](###Issue)の表を参照。

## Development Environment

Microsoft Windows 10 Pro version 22H2 (OS build 19045.3208) 64-bit

Visual Studio Code version 1.81.1 64-bit

Google Apps Script

## Contact Us

[X (Twitter)](https://twitter.com/aonekoaoi)

## License

Copyright (c) 2023 aonekoaoi

Licensed under the [MIT](https://github.com/aonekoaoi/BPRaidMissionsReminder/blob/main/LICENSE.txt) license.

[MIT](https://github.com/aonekoaoi/BPRaidMissionsReminder/blob/main/LICENSE_ja.txt)ライセンスに基づくライセンス。
