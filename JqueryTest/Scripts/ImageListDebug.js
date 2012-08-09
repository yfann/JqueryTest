//var imgs = [];
//var images = [];
//$("img").each(function (index) {
//    imgs.push(this);
//});
//$(imgs).each(function (index) {
//    images.push(this.src);
//});

//var images_container = document.getElementById('image_downloader_images_container');
//if (!images_container) {
//    images_container = document.createElement('div');
//    images_container.id = 'image_downloader_images_container';
//    images_container.style.display = 'none';
//}
//document.body.appendChild(images_container);

//        for (var i in images) {
//            var anchor = document.createElement('a');
//            anchor.href = images[i];
//            anchor.download = '';
//            images_container.appendChild(anchor);
//            anchor.click();
//        }

function download(imgurl) {
    var images_container = document.getElementById('image_downloader_images_container');
    if (!images_container) {
        images_container = document.createElement('div');
        images_container.id = 'image_downloader_images_container';
        images_container.style.display = 'none';
    }
    document.body.appendChild(images_container);

    var anchor = document.createElement('a');
    anchor.href = imgurl;
    anchor.download = '';
    images_container.appendChild(anchor);
    anchor.click();
}