// implement a set of dummy functions which can mimic the behaiviour of the following functions:
// 1. Download -> This function should mimic downloading of some content from a URL
// 2. writeFile -> This function should mimic writing of some content to a File
// 3. Upload -> This funtion should mimic uploading the fiule to a sever

// Now after you have implemented these functions try to use them in a scenario where we first download a file, then write it to a disk and then upload it to a server 


function download(url, callback){
    console.log("Downloading from", url);
    setTimeout(() => {
        console.log("Download is done");
        let downloadData = "Some data";
        callback ?.(downloadData);
    }, 3000);
}

function writeFile(data, fileName, callback){
    console.log("Writing", data, "to", fileName);
    setTimeout(() => {
        console.log("Writing to file is done");
        let status = "Success";
        callback ?.(status);
    }, 2000);
}

function upload(fileName, url, callback){
    console.log("Uploading file", fileName, "to", url);
    setTimeout(() => {
        console.log("Done uploading");
        let uploadStatus = "Success";
        callback ?.(uploadStatus);
    }, 3000);
}


function process() {
    download("https://www.example.com", function handleDownload(data) {
        writeFile(data, "file.txt", function handleWrite(status) {
            upload("file.txt", "https://www.example1.com", function handleUpload(uploadStatus) {
                console.log("All Done");
            })
        })
    })
}

process();

