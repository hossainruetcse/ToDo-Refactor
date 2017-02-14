(function (window) {
    init();
    function init() {
        initializWindow();
        makeTaskList();
    };

    function initializWindow() {
        window.data = {};
    }
    function makeTaskList() {
        var taskList = [{ "title": "task 1", "discription": "this is the first tast", "status": false }, { "title": "task 2", "discription": "this is the 2nd tast", "status": false }];
        window.data.taskList = taskList;
    }

})(window)