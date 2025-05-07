const fs=require("fs");

// creating a new file (CREATE)
// fs.writeFileSync("hello.txt","This is a new file!!");

// appending to a file (UPDATE)
// fs.appendFileSync("hello.txt"," This is an appended text!!");

// reading a file (READ)
// const buf_data=fs.readFileSync("hello.txt");
// console.log(buf_data);
// org_data=buf_data.toString();
// console.log(org_data);

// renaming a file (UPDATE)
// fs.renameSync("hello.txt","hello1.txt");

// creating a directory (CREATE)
// fs.mkdirSync("newdir");

// creating a file in the directory (CREATE)
// fs.writeFileSync("newdir/hello.txt","This is a new file in my directory!!");

// deleting file inside directory (DELETE)
// fs.unlinkSync("newdir/hello.txt");
// console.log("File deleted successfully!!");

// deleting a directory (DELETE)
// fs.rmdirSync("newdir");
// console.log("Directory deleted successfully!!");
