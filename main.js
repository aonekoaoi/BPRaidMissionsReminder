// BLUE PROTOCOL Raid Missions Reminder
//
// Distribution
// The source code is distributed through GitHub.
// 当ソースコードはGitHubを通じて配布されている。
// GitHub: https://github.com/aonekoaoi/BPRaidMissionsReminder
//
// Description
// See README.md at GitHub.
// GitHubのREADME.mdを参照してください。
// GitHub: https://github.com/aonekoaoi/BPRaidMissionsReminder/blob/main/README.md
//
// Development Environment
// Microsoft Windows 10 Pro version 22H2 (OS build 19045.3208) 64-bit
// Visual Studio Code version 1.81.1 64-bit
// Google Apps Script
//
// Contact Us
// X (Twitter): https://twitter.com/aonekoaoi
//
// License
// Copyright (c) 2023 aonekoaoi
// Licensed under the MIT license.
// MiTライセンスに基づくライセンス。
// en: https://github.com/aonekoaoi/BPRaidMissionsReminder/blob/main/LICENSE.txt
// ja: https://github.com/aonekoaoi/BPRaidMissionsReminder/blob/main/LICENSE_ja.txt

// DiscordのWebhook URLを代入
const discord_webhook = "your discord webhook url";

// 曜日の取得
var week_data = new Date();
week = week_data.getDay();

// 時間の取得
var hour = new Date();
hour = Utilities.formatDate(hour, "Asia/Tokyo", "HH");

// 分の取得
var min = new Date();
min = Utilities.formatDate(min, "Asia/Tokyo", "mm");

// 実行する関数
function time_fun() {
  // タイトルと説明の判定
  if (hour == 01 || hour == 08 || hour == 12 || hour == 14 || hour == 16 || hour == 18 || hour == 20 || hour == 22) {
    var title = "レイドミッション開始";
    var description = "レイドミッション終了予定時刻1時間後";
    var color = parseInt("00FF00", 16); // 緑色
  } else if (min == 00) {
    var title = "レイドミッション開始1時間前";
    var description = "";
    var color = parseInt("0000FF", 16); // 青色
  } else if (min == 50) {
    var title = "レイドミッション開始10分前";
    var description = "";
    var color = parseInt("FFFF00", 16); // 黄色
  } else {
    var title = "エラー";
    var description = "タイトルと説明の判定に問題が発生";
    var color = parseInt("FF0000", 16); // 赤色
  }

  // フィールドの判定
  if (week == 0 || week == 6) {
    // 土曜日～日曜日
    var name1 = "1回目";
    var name2 = "2回目";
    var name3 = "3回目";
    var name4 = "4回目";
    var name5 = "5回目";
    var value1 = "08:00 ~ 09:00";
    var value2 = "12:00 ~ 13:00";
    var value3 = "16:00 ~ 17:00";
    var value4 = "20:00 ~ 21:00";
    var value5 = "25:00 ~ 26:00";
  } else if (week == 1 || week == 2 || week == 3 || week == 4 || week == 5) {
    // 月曜日～金曜日
    var name1 = "1回目";
    var name2 = "2回目";
    var name3 = "3回目";
    var name4 = "";
    var name5 = "";
    var value1 = "14:00 ~ 15:00";
    var value2 = "18:00 ~ 19:00";
    var value3 = "22:00 ~ 23:00";
    var value4 = "";
    var value5 = "";
  } else {
    // システムトラブル
    var name1 = "N/A";
    var name2 = "N/A";
    var name3 = "N/A";
    var name4 = "";
    var name5 = "";
    var value1 = "N/A";
    var value2 = "N/A";
    var value3 = "N/A";
    var value4 = "";
    var value5 = "";
    var color = parseInt("FF0000", 16); // 赤色
  }

  // 投稿の設定
  const message = {
    tss: false,
    embeds: [
      {
        title: title,
        description: description,
        color: color,
        fields: [
          {
            name: name1,
            value: value1,
            inline: true,
          },
          {
            name: name2,
            value: value2,
            inline: true,
          },
          {
            name: name3,
            value: value3,
            inline: true,
          },
          {
            name: name4,
            value: value4,
            inline: true,
          },
          {
            name: name5,
            value: value5,
            inline: true,
          },
        ],
        footer: {
          text: "Copyright (c) 2023 aonekoaoi",
          icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/321px-MIT_logo.svg.png",
        },
      },
    ],
  };
  const param = {
    method: "POST",
    headers: {"Content-type": "application/json"},
    payload: JSON.stringify(message),
  };

  // 投稿の判定
  if (week == 0 || week == 1) {
    // 日曜日と月曜日の例外
    if (hour == 00 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("00:00 SUCCESSFUL");
    } else if (hour == 00 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("00:50 SUCCESSFUL");
    } else if (hour == 01 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("01:00 RAID MISSIONS START");
    }
  }
  if (week == 1 || week == 2 || week == 3 || week == 4 || week == 5) {
    // 月曜日～金曜日
    if (hour == 13 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("13:00 SUCCESSFUL");
    } else if (hour == 13 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("13:50 SUCCESSFUL");
    } else if (hour == 14 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("14:00 RAID MISSIONS START");
    } else if (hour == 17 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("17:00 SUCCESSFUL");
    } else if (hour == 17 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("17:50 SUCCESSFUL");
    } else if (hour == 18 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("18:00 RAID MISSIONS START");
    } else if (hour == 21 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("21:00 SUCCESSFUL");
    } else if (hour == 21 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("21:50 SUCCESSFUL");
    } else if (hour == 22 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("22:00 RAID MISSIONS START");
    }
  }
  if (week == 0 || week == 6) {
    // 土曜日と日曜日
    if (hour == 07 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("07:00 SUCCESSFUL");
    } else if (hour == 07 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("07:50 SUCCESSFUL");
    } else if (hour == 08 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("08:00 RAID MISSIONS START");
    } else if (hour == 11 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("11:00 SUCCESSFUL");
    } else if (hour == 11 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("11:50 SUCCESSFUL");
    } else if (hour == 12 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("12:00 RAID MISSIONS START");
    } else if (hour == 15 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("15:00 SUCCESSFUL");
    } else if (hour == 15 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("15:50 SUCCESSFUL");
    } else if (hour == 16 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("16:00 RAID MISSIONS START");
    } else if (hour == 19 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("19:00 SUCCESSFUL");
    } else if (hour == 19 && min == 50) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("19:50 SUCCESSFUL");
    } else if (hour == 20 && min == 00) {
      UrlFetchApp.fetch(discord_webhook, param);
      console.log("20:00 RAID MISSIONS START");
    }
  }
}
