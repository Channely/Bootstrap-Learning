var send_signal_by_testing_result_of = {
    '引入样式库': function () {
        send_result_by(index_1())
    },
    '容器': function () {
        send_result_by(index_2_1())
    },
    '背景区块': function () {
        send_result_by(index_2_2())
    },
    '栅格系统': function () {
        send_result_by(index_2_3())
    }
}

function index_1() {
    var links = document.getElementsByTagName('link');
    var scripts = document.getElementsByTagName('script');
    var length = scripts.length

    var r1 = links.length >= 2
    var r2 = links[0].getAttribute('href') != links[1].getAttribute('href')
    var r3 = links[0].getAttribute('href') == "css/bootstrap.min.css" || links[0].getAttribute('href') == "css/bootstrap-theme.min.css";
    var r4 = links[1].getAttribute('href') == "css/bootstrap.min.css" || links[1].getAttribute('href') == "css/bootstrap-theme.min.css";
    var r5 = scripts[length - 4].getAttribute('src') != scripts[length - 3].getAttribute('src')
    var r6 = scripts[length - 4].getAttribute('src') == "js/jquery.min.js"
    var r7 = scripts[length - 3].getAttribute('src') == "js/bootstrap.min.js"
    var r8 = scripts[length - 2].getAttribute('src') == "../specs/spec.js"
    var r9 = scripts[length - 1].getAttribute('src') == "../specs/starter.js"

    console.log(r1 + ' ' + r2 + ' ' + r3 + ' ' + r4 + ' ' + r5 + ' ' + r6 + ' ' + r7 + ' ' + r8 + ' ' + r9)
    console.log(r1 && r2 && r3 && r4 && r5 && r6 && r7 && r8 && r9);
    return r1 && r2 && r3 && r4 && r5 && r6 && r7 && r8 && r9;
}
function index_2_1() {
    var div = document.getElementsByTagName('div');
    var body = document.body;
    var styles = get_object_struct_from_string(div[0].getAttribute('style'));

    var v1 = body.childNodes[1] == div[0];
    var v2 = div[0].getAttribute('class') == 'container'
    var v3 = get_json_length(styles) == 2;
    var v4 = styles.height == '600px';
    var v5 = styles["background-color"] == '#cccccc';

    console.log(v1 + ' ' + v2 + ' ' + v3 + ' ' + v4 + ' ' + v5)
    console.log(v1 && v2 && v3 && v4 && v5);
    return v1 && v2 && v3 && v4 && v5 && index_1();
}
function index_2_2() {
    var body = document.body;
    var container = document.getElementsByClassName('container')[0];
    var jumbotron = document.getElementsByClassName('jumbotron')[0];
    var v1 = body.childNodes[1] == container;
    var v2 = body.childNodes[3].nodeName == 'SCRIPT';
    var v3 = container.childNodes[1] == jumbotron;
    var v4 = container.getAttribute('style') == undefined;
    var v5 = container.getAttribute('class') == 'container';
    var v6 = jumbotron.getAttribute('class') == 'jumbotron';
    var v7 = jumbotron.childNodes.length >= 13;
    var v8 = jumbotron.childNodes[1].childNodes[0].nodeType == 3;

    console.log(v1 + ' ' + v2 + ' ' + v3 + ' ' + v4 + ' ' + v5 + ' ' + v6 + ' ' + v7 + ' ' + v8)
    console.log(v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8);
    return v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8;
}
function index_2_3() {
    var body = document.body;
    var container = document.getElementsByClassName('container')[1];
    var jumbotron = document.getElementsByClassName('jumbotron')[0];
    var v1 = body.childNodes[3] == container;
    var v2 = body.childNodes[5].nodeName == 'SCRIPT';
    var v3 = container.childNodes[1] == jumbotron;
    var v4 = container.getAttribute('style') == undefined;
    var v5 = container.getAttribute('class') == 'container';
    var v6 = jumbotron.getAttribute('class') == 'jumbotron';
    var v7 = jumbotron.childNodes.length == 3;
    var v8 = jumbotron.childNodes[1].childNodes[0].nodeType == 3;
    var row_1 = jumbotron.childNodes[1];
    var col_1_1 = row_1.childNodes[1];
    var col_1_2 = row_1.childNodes[3];
    var row_2_1 = col_1_2.childNodes[1];
    var row_2_2 = col_1_2.childNodes[3];
    var col_2_1 = row_2_2.childNodes[1];
    var col_2_2 = row_2_2.childNodes[3];
    var col_2_3 = row_2_2.childNodes[5];
    var v9 = row_1.getAttribute('class') == 'row';
    var v10 = col_1_1.getAttribute('class') == 'col-md-2';
    var v11 = col_1_2.getAttribute('class') == 'col-md-10';
    var v12 = row_2_1.getAttribute('class') == 'row';
    var v13 = row_2_2.getAttribute('class') == 'row';
    var v14 = col_2_1.getAttribute('class') == 'col-md-4';
    var v15 = col_2_2.getAttribute('class') == 'col-md-4';
    var v16 = col_2_3.getAttribute('class') == 'col-md-4';

    console.log(v1 + ' ' + v2 + ' ' + v3 + ' ' + v4 + ' ' + v5 + ' ' + v6 + ' ' + v7 + ' ' + v8 + ' ' + v9 + ' ' + v10 + ' ' + v11 + ' ' + v12 + ' ' + v13 + ' ' + v14 + ' ' + v15 + ' ' + v16)
    console.log(v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v11 && v12 && v13 && v14 && v15 && v16);

    return v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v11 && v12 && v13 && v14 && v15 && v16 && index_1()
}


//================helper method======================
function get_object_struct_from_string(string) {
    return JSON.parse('{"' + (string.replace(/\s/g, '') + '"}').replace(/:/g, '":"').replace(/;/g, '","'))
}
function get_json_length(json_obj) {
    var jsonLength = 0;
    for (var item in json_obj) {
        jsonLength++;
    }
    return jsonLength;
}
//================logic method=======================
function pass_game() {
    source.postMessage(true, "http://" + window.location.host)
}
function unpass_game() {
    source.postMessage(false, "http://" + window.location.host)
}
function send_result_by(result) {
    result ? pass_game() : unpass_game();
}
