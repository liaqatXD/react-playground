import { useState,useEffect,useRef } from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
    const [showInput,setShowInput]=useState(false);
    const showInputRef=useRef(showInput);

    useEffect(()=>{
        showInputRef.current=showInput;
    },[showInput])

    useEffect(()=>{
        const handleToggleInput=(e)=>{
           const elementId=(e.target.closest('#search'));
         
           if(elementId!==null && showInputRef.current===false){
            setShowInput(true);
            return;
           }
           if(e.target.tagName==='INPUT')return;
           setShowInput(false);
        }
        document.addEventListener('click',handleToggleInput);
        return () => {
            document.removeEventListener("click", handleToggleInput);
          };
    },[])
  return (
    <div className={`container ${showInput===true?'dark-mode':''}`} >
      {
        showInput? <input type="text" placeholder="Search..." />:
        <span id="search">
            <FaSearch  size={44} style={{cursor:"pointer",padding:5}} />
        </span>
      }
    </div>
  )
}

export default Search
