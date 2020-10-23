import React , {useState} from "react";

function CreateArea(props) {
 
  const [ note , setNote ] = useState({
    title : "",
    content : ""
  });

  function handleChange(event){
   
  const { value , name } = event.target;

  setNote( prevValue => {
  return {
    ...prevValue,
    [name] : value
  };
  });

  }

  function handleClick(event) {
    props.onAdd(note);
    event.preventDefault();
   setNote({
    title : "",
    content : ""
  })
  }

  
  return (
    <div>
      <form>
        <input name="title" onChange = {handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange = {handleChange} value = {note.content} placeholder="Take a note..." rows="3" />
        <button onClick = {handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
