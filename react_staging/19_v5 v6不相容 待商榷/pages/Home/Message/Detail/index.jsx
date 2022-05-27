import React from 'react'
// import qs from 'query-string'
import {useParams} from 'react-router-dom'



const data = [
  {id:'01',content:'你好 台灣'},
  {id:'02',content:'你好 上龜頭'},
  {id:'03',content:'你好 帥哥'}
]
export default function Detail() {
  
  //接收params参数，使用useParams()
  const {id,title} =useParams();

  //接收search参数，使用useLocation()，log一下接收到的形式是?id=01&title=message1，要把？去掉
  // const {search} = useLocation();
  // const{id,title} =qs.parse(search.slice(1))

  // const{state} =useLocation();
  // console.log(state)
  // const{id,title}=state

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

