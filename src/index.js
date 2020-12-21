import x from "./v.js"
import imgSrc from "./assets/1.JPG" // file-loader 把文件变成文件路径
console.log("x 表示 => ", x)
console.log("hi")

console.log("图片路径=> ", imgSrc)


const div = document.getElementById("app")
// const imgEle = document.createElement("img")
// imgEle.src = imgSrc
// div.appendChild(imgEle)
// div.innerHTML += `<img src="${imgSrc}">`


const button = document.createElement("button")
button.innerText = "懒加载"
button.onclick = () => {
  const promise = import("./lazy") // 加载文件是异步的，直接赋值给变量是拿不到的结果的，得到其实是一个 promise（延迟对象）
  console.log("promise => ", promise)
  // 监听 promise：加载成功，就执行第一个函数。失败，就执行第二个函数
  // 加载成功，会接收到参数
  promise.then((module) => {
    console.log("module => ", module) // 接收到一个模块
    // module.default() // 模块的默认值，就是导出的函数 lazy，执行这个函数
    const fn = module.default
    fn()
  }, () => {
    console.log("模块加载错误")
  })
}
div.appendChild(button)
