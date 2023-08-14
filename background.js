var dataList = {
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg == "dataList") {
            sendResponse(dataList);
            return true;
        }

    }
);

function DelayCall(_submit, _time) {
    setTimeout(_submit, _time);
}

function DelayUpdate(_dataList, _check, _time) {
    var si = setInterval(function() {
        if (_check(_dataList)) clearInterval(si);
    }, _time);
}
var isEmpty = function(value) {
    if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
};

function Init() {
    
}

Init();
