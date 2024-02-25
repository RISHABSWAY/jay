import React, {useState} from 'react'

const Category = () => {
  const [isShow,setShow] = useState(false);
  const hide = ()=> {
    if(isShow === true){
      setShow(false)
    }else {
      setShow(true)
    }
  }

  return (
    <>
    <button onClick={hide}>Hide</button>
    {
        isShow && (<h1>Hello Rishab</h1>)
    }
    </>
  )
}


export default Category