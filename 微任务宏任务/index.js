// 微任务宏任务概念只在浏览器端
/**
 * 微任务  promise MutationObserver  事件注册addEventListener
 * 宏任务  settimeout
 */


// v-if  ---> input
// 显示的时候 聚焦

//  同步任务 > 微任务 > 宏任务 

//  同步任务等于系统执行的第一个宏任务，
// 在执行过程碰到promise 将他推到微任务队列等待执行，执行到settimout推到宏任务队列
//  一个宏任务执行完毕之后，会判断系统中是否存在微任务，如果存在直接执行

//  微任务 -- > 更新页面 -- > 宏任务

// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// },0)

// Promise.resolve().then(()=>{
//     console.log(3)
// })

// 1
document.body.style.background='red'
// 渲染
setTimeout(()=>{
    // 2
    document.body.style.background='green'
    // 渲染
},0)



// 微任务

// 1
document.body.style.background='red'
Promise.resolve().then(()=>{
    // 2
    document.body.style.background='blue'
    // 渲染
})


// nodejs 事件循环