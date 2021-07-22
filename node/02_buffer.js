let str = "hello node";
let buf = Buffer.from(str);
// console.log(Buffer.from("徐珂").length);
console.log(buf, "buffer"); //<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65> 'buffer'

console.log(str.length); //10，字符串长度
console.log(buf.length); //10，占 用内存大小


//创建一个10个字节的buffer
let buf2 = Buffer.alloc(10);
//通过索引来操作buf2中的元素
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa; //0x代表16进制——16进制aa
buf2[10] = 10;
console.log(buf2, "buf2");

let buf3 = Buffer.allocUnsafe(10); //创建一个指定大小的buffer,但其中可能含有敏感数据
console.log(buf3, 'buf3'); // 之前内存中的数据不会清0
console.log(buf.toString()); //将缓冲区中的数据转换为字符串：hello code