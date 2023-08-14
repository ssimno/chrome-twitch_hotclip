var dataList = {};
var isEmpty = function(value){
   if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
     return true
   }else{
     return false
   }
};
function DelayCall(_time, _submit)
{
  setTimeout(_submit, _time);
}
function DelayUpdate(_check, _time)
{
  var si = setInterval(()=>{
    if(_check()) clearInterval(si);
  }, _time)
}


// 클릭 리스너
chrome.runtime.sendMessage({msg: "dataList"}, function(response) {
   if (!response.disabled)
   {
     dataList = response;

     new Promise(function(resolve, reject){
       DelayUpdate(function(){
         if(document.getElementById('in')!==null)
         {
           resolve();
           return true;
         }
       },100)
     }).then(function(){
       var tgd = document.getElementById('in');
       
       tgd.addEventListener('click', function() {
        chrome.tabs.create({"url":"https://tgd.kr/"});
       });

     });
   }
});

// document.addEventListener('DOMContentLoaded', function() {
//
// });
