import React from 'react'
import {useParams} from 'react-router-dom'


const data = [
  {id:'01',content:'你好 台灣'},
  {id:'02',content:'你好 上龜頭'},
  {id:'03',content:'你好 帥哥'}
]
export default function Detail() {
  //接收params参数，使用useParams()
  const {id, title} = useParams();
  const findDetailsData = data.find((item) =>{
    return item.id ===id
  });
  return (
      <ul>
          <li>ID: {id}</li>
          <li>Title:{title}</li>
          <li>Content:{findDetailsData.content}</li>
      </ul>
  )
}



// import React, { Component } from 'react'
// export default class Detail extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <ul>
//           <li>ID:???</li>
//           <li>TITLE:???</li>
//           <li>CONTRNT:???</li>
//       </ul>
//     )
//   }
// }