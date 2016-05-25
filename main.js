(function(ext) {
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.do_something = function(str) {
      alert("aaa");
    };

    ext.log = function(str) {
      alert(str);
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            [' ', 'do_Something %s', 'do_something', 'sample text'],
            [' ', 'log %s', 'log', 'sample log']
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('Simple extension', descriptor, ext);
})({});
