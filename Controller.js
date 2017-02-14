(function(window) {
    var taskList = window.data.taskList;
    var selectedType = "All";
    var searchKey = "";
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

    function filterForAllTask(index) {
        return taskList[index].title.includes(searchKey);
    }

    function filterForDoneTask(index) {
        return taskList[index].status;
    }
    function filterForPendingTask(index) {
        return !taskList[index].status;
    }
    function filter(index) {
        if (selectedType === "All")
            return filterForAllTask(index);
        else if (selectedType === "Done")
            return (filterForDoneTask(index) && filterForAllTask(index));
        else
            return (filterForPendingTask(index) && filterForAllTask(index));
    }

    function setSelectedType(value) {
        selectedType = value;
        show();
    }

    function show() {
        taskList.sort(compare);
        window.view.clearItem();
        taskList.forEach(function (element, index) {
            if (filter(index))
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

    function editStatus(index) {
        taskList[index].status = !taskList[index].status;
        show();
    }

    function search(key) {
        searchKey = key;
        show();
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
    window.setSelectedType = setSelectedType;
    window.editStatus = editStatus;
    window.search = search;

})(window);