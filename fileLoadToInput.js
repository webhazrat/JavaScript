function loadURLToInputFiled(url){
      getImgURL(url, (imgBlob)=>{
        // Load img blob to input
        // WIP: UTF8 character error
        let fileName = 'hasFilename.jpg'
        let file = new File([imgBlob], fileName, {type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
        let container = new DataTransfer(); 
        container.items.add(file);
        document.querySelector('#photos').files = container.files;

      })
}
// xmlHTTP return blob respond
function getImgURL(url, callback){
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
          callback(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
}
