(function (window) {

    var taskList = window.data.taskList;

   
    function writeInnerHtml(document,text) {
        document.innerHTML = text;
    }
    function clearItem() {
        var element = document.getElementById('showTask');
        writeInnerHtml(element, "");
    }
    function makeEditHtml(index) {
        var htmlCode = '<label for="title">Title :</label><input type="text" id="editTitle"value="' + taskList[index].title + '" class="input-title" /><br/>';
        htmlCode += '<label for="discription">Discription :</label><input type="text" id="editDiscription" value="' + taskList[index].discription + '"class="input-discription"/>';
        htmlCode += '<button class="button-edit" onclick="saveEditedDoc(' + index + ')">Save</button>';
        return htmlCode;
    }

    function createDiv() {
        var div = document.createElement("div");
        return div;
    }
    function assignElementProperty(element, propertyName, value) {
        element[propertyName] = value;
    }
    function makeItemInnerHtml(index) {
        var innerHtml = "<h2>" + taskList[index].title + "</h2> <p>" + taskList[index].discription + "</p>";
        innerHtml += '<button class="button-edit-item" onclick="editDoc(' + index + ') ">Edit</button><button class="button-delete-item"  onclick="deleteDoc(' + index + ')">Delete</button>';
        if (taskList[index].status)
            innerHtml += '<input type="checkbox" name="Status" value=' + taskList[index].status + ' onclick="editStatus(' + index + ',this)" checked>Done<br>';
        else
            innerHtml += '<input type="checkbox" name="Status" value=' + taskList[index].status + ' onclick="editStatus(' + index + ',this)">Done<br>';
        return innerHtml;
    }
    function makeItemDiv(index) {
        var div = createDiv();
        assignElementProperty(div, 'className', "item-div");
        assignElementProperty(div, 'id', taskList[index].title + index);
        writeInnerHtml(div,makeItemInnerHtml(index));
        return div;
    }

    function makeItemRow(index) {
        var div=makeItemDiv(index);
        document.getElementById('showTask').appendChild(div);
    }

    function showAddOption() {
        document.getElementById('addTask').style.display = "block";
    }

    function hideAddOption() {
        document.getElementById('addTask').style.display = "none";
    }

    window.view = {
        writeInnerHtml:writeInnerHtml,
        clearItem: clearItem,
        makeEditHtml: makeEditHtml,
        makeItemRow: makeItemRow,
        showAddOption: showAddOption,
        hideAddOption:hideAddOption

};

})(window);
