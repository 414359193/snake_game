// export  const obj = {name:'cxn'}
// const obj = {name:'cxn'}
// const obj2 = {age:18}

// export {obj2 as abc}
// export default obj

// export {c as vbn} from './c.js'

// module.exports = {}
// exports===module.exports

// module.exports = {fgds:'gfd'}


// 这个方法可以让我们在cmjs 里面引入esm 模块
// import()

const add = (a, b) => a + b;

// 这是cmjs 的默认导出
module.exports = {
  add,
};

// 命名导出
// exports.fgds ='gfd'
// console.log(module);
