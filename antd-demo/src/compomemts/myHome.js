import React, { Component } from 'react'; // 在组件头部引用

class Home extends Component { // 创建类
 
render(){ // 将页面通过return返回给调用者  必须有一个根节点包裹 同vue的使用
    return(
        <div>
         <h3>组件中的节点要被一个根节点包裹起来</h3>
        </div>
    )
}

}
export  default Home