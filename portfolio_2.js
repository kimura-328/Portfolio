$(window).scroll(function () {//スクロールされるたびに関数を実行
    $(".profile-content,.self-pr, .vision").each(function () {
        /*.profile-content、.self-pr、.visionの各クラスを持つ要素に対して、指定した関数を実行。
        .each()は、選択した各要素に対して関数を実行。
        .each()を使用しないと、jQueryは最初の一つの要素（.profile-content、.self-pr、.visionクラスを持つ最初の要素）だけに操作を行うようになる。
        すべての要素に対して操作を行いたい場合は、.each()を使用する*/
        var elemPos = $(this).offset().top,
        /*現在の処理中の要素（.profile-content、.self-pr、.visionクラスを持つ要素）
        の上端の位置をウィンドウの上からの距離として取得。
        それをelemPosという変数に格納する。
        .offset().topは要素の上端の位置を取得するメソッド。
        また、以下のscrollとwindowHeightを同様に「var」で宣言するために「,」がつけられる。*/
        scroll = $(window).scrollTop(),
        /*現在のスクロール位置をウィンドウの上からの距離として取得。
        それをscrollという変数に格納。
        ユーザがどれだけページをスクロールしたかを求める。*/
        windowHeight = $(window).height();
        /*ブラウザの表示領域の高さを取得。
        windowHeightという変数に格納。*/
        if (scroll > elemPos - windowHeight + 200){
            /*現在のスクロール位置が特定の要素の上端の位置からウィンドウの高さと
            200ピクセルを引いた値よりも大きいかどうかを判定している。
            この式が真になるとき、特定の要素の上端がウィンドウの下端から200ピクセル
            上に来たとき、ということを意味する。*/
            $(this).addClass('scrollin');
            /*現在の要素（$(this)）にscrollinというクラスを追加する。*/
}
});
});