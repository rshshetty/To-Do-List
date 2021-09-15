
import React,{useState} from 'react'
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const Input1 = (props) => {
let [Input, setInput] = useState("")

    
    let ChangeHandle = (e) => {
        let { value, name } = e.target
        console.log({value,name});
        setInput( value)
     console.log(value);
    }
        return (
            <div>



                 <input onChange={ChangeHandle} 
      type="text" value={Input} />
      <button className="butto" style={{marginLeft:"0.75rem",border:"transparent",margin:"9px",background:"#f1f5f8"}}
        onClick={() => {
          props.Click(Input);
          setInput("");
        }}
      >
        <span ><SaveAltIcon className="but" style={{ fontSize: 15,width:"25px" }} /></span>
      </button>
            
            </div>
        )
    }

    export default Input1;
