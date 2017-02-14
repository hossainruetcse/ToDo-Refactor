(function(window) {
    var taskList = window.data.taskList;
    var selectedType = "All";
    init();
    function init() {
        show();
    };

    function compare(a,b) {  
        var titleA = a.title.toUpperCase();
        var titleB = b.title.toUpperCase();
        if (titleA < titleB) {
                return -1;
            }
        if (titleA > titleB) {
                return 1;
            }
        return 0;
    }

    function show() {
        taskList.sort(compare);
        window.view.clearItem();
        taskList.forEach(function (element,index) {
            window.view.makeItemRow(index);
        });
        
    }

    function addTask() {
        document.getElementById('title').value="";
        document.getElementById('discription').value="";
        window.view.showAddOption();
    }
    function addItem() {
        
        var newTask = {};
        newTask.title = document.getElementById('title').value;
        newTask.discription = document.getElementById('discription').value;
        newTask.status = false;
        taskList.push(newTask);
        window.view.hideAddOption();
        show();
    }
    function deleteDoc(index) {
        delete taskList[index];
        show();
    }

    function getEditElement(index) {
        var id = taskList[index].title + index;
        return  document.getElementById(id);
    }

    function saveEditedDoc(index) {
        var title = document.getElementById('editTitle').value;
        var discription = document.getElementById('editDiscription').value;
        taskList[index].title = title;
        taskList[index].discription = discription;
        show();
    }
    function editDoc(index) {
        var editElement = getEditElement(index);
        var editHtml = window.view.makeEditHtml(index);
        window.view.writeInnerHtml(editElement,editHtml);
    }

    function cancel() {
        window.view.hideAddOption();
    }
    window.saveEditedDoc = saveEditedDoc;
    window.deleteDoc = deleteDoc;
    window.editDoc = editDoc;
    window.addItem = addItem;
    window.addTask = addTask;
    window.cancel = cancel;
})(window);