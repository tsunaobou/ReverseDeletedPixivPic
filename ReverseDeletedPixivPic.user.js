// ==UserScript==
// @name         ReverseDeletedPixivPic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  if deleted pixiv source detected, automatically jump to danbooru search page.
// @author       tsunaobou
// @match        https://www.pixiv.net/artworks/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('DOMContentLoaded', function() { //ロード時に実行
    //まずステータスを確認する
    var errorText = document.getElementsByClassName("error-title")[0].textContent;
    if (errorText == "エラーが発生しました") {
        let re = new RegExp('[0-9]{1,10}'); //pixivの画像IDを正規表現パターンとする　数値は最長一致
        const match = re.exec(location.href.toString()); //正規表現でマッチするものを取得
        if (match != null) { //マッチしてnullが返らなければ
            var link = "https://danbooru.donmai.us/posts?tags=pixiv%3A" + match[0]
            window.open(link); //リンクを新しいタブで開く
        } else {}
    } else {}
})