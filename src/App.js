import React,{useState} from 'react'
import Input1 from './Components/Input1';
import TodoItem from './Components/TodoItem';

const App = () => {
    let [Value, setValue] = useState([])

    

 
    
 
    
   
    let ClickHandle = (Input) => {
        setValue(prevValue => {
            return [...prevValue, Input]
        })
    }
    let del = (id) => {
        setValue(prevValue => {
            return prevValue.filter((val, index) => {
             return index!==id
         })
     })


 }
    return (
        <div className="container">
             <div className="heading">
            <h1>To-Do List</h1>
           </div>
            <Input1 Click={ClickHandle}     
            />

 <div>
           
                <ul>
                {Value.map((todo, index) => {
                    return (<TodoItem
                        key={index}
                        id={index}
                        todo={todo}
                        delete={del}
                    />
                  )
                }
                )
                  }
              </ul>
          </div>
        </div>
    )
}

export default App;
