var dataList = {};
var isEmpty = function(value) {
    if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true
    } else {
        return false
    }
};
function DelayUpdate(_check, _time) {
    var si = setInterval(() => {
        if (_check()) clearInterval(si);
    }, _time)
}

function DelayCall(_submit, _time) {
    setTimeout(_submit, _time);
}

chrome.runtime.sendMessage({
    msg: "dataList"
}, function(response) {
    if (!response.disabled) {
        dataList = response;
        new Promise(function(resolve, reject) {
            DelayUpdate(function() {
                if (document.readyState === "complete") {
                    resolve();
                    return true;
                }
            }, 100);
        }).then(function() {
            //****************
            // 핫클립 다운로드
            //****************
            if (window.location.href.match("tgd.kr/clips/") != null) {
                DelayUpdate(function() {
                    var his = document.querySelector("#clip-streamer-name > a.btn.btn-default");
                    var parent = document.querySelector("#clip-streamer-name")
                    if(his != null)
                    {
                        var downUrl = document.querySelectorAll("meta[property='og:image']")[0].content.split("-preview")[0] += ".mp4"

                        var cln = his.cloneNode(true);
                        cln.innerText = "영상받기";
                        cln.href = downUrl;
                        cln.style.marginRight = "10px";
                        parent.appendChild(cln);

                        return true;
                    }
                    

                }, 100);
            }

        });
    }
});
