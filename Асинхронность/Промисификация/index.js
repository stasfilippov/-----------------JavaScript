'use strict'

// let image = document.createElement('img');
// image.src = src;

// image.addEventListener('load', function () {
//     document.body.appendChild(image);
// })
// image.addEventListener('error', function () {
//     console.log('image load error')
// }) 

//промисифицируем
function loadImage (path) {
    return new Promise (function (resolve, reject) {
        let image = document.createElement('img');
        image.src = path;

        image.addEventListener('load', function () {
            resolve(image);
        })

        image.addEventListener('error', function () {
            reject('error');
        })
    })
}

loadImage(src).then(function (image) {
    document.body.appendChild(image)
}).catch (function (error) {
    console.log(error)
})
