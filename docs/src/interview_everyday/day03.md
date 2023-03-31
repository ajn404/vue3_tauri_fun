## flex

flex: 1 等价于
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
不管是否设置宽度，flex-basis的值都是0，所有子项平分全部的父亲空间

而flex: auto 等价于

flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
如果设置了宽度，flex-basis的值是width，所有子项平分取去掉flex-basis的剩余空间
看区别： 代码-饥人谷前端


直观的记忆是，如果设置了flex: 1，所有子项平分父亲，不管子项是否设置了固定宽度