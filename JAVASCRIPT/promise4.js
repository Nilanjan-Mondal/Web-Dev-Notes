function download(url) {
    return new Promise(function exec(res, rej) {
        console.log("Started downloading data from", url)
        setTimeout(() => {
            let data = "Some data from" + url;
            console.log("Downloaded data from", url);
            res(data);
        }, 3000);
    });
}

function writeFile(data, filename) {
    return new Promise(function exec(res, rej) {
        console.log("Writing", data, "to file");
        setTimeout(() => {
            let status = "Success";
            console.log("Writing to file", filename, "is done");
            res(status);
        }, 3000);
    });
}

function upload(filename, url) {
    return new Promise(function exec(res, rej) {
        console.log("Uploading file", filename, "to url", url);
        setTimeout(() => {
            let uploadStatus = "Success";
            console.log("upload is done");
            res(uploadStatus);
        }, 3000);
    });
}

// const p1 = download("https://www.example.com");

// const p2 = p1.then(function f(val) {
//     console.log("Downloading data is", val);
//     return writeFile(val, "myFile.txt");
// });

// const p3 = p2.then(function g(val) {
//     console.log("File written", val);
//     return upload("File.txt", "https://www.ok.com");
// });

// p3.then(function h(val) {
//     console.log("File Uploaded", val);
// });

// another way of doing this is . chaining
download("https://www.example.com")
.then(function f(val) {
    console.log("Downloading data is", val);
    return writeFile(val, "myFile.txt");
})
.then(function g(val) {
    console.log("File written", val);
    return upload("File.txt", "https://www.ok.com");
})
.then(function h(val) {
    console.log("File Uploaded", val);
});
