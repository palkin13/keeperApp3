import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const [ notes , setNotes ] = useState([]);


function addingNote(newNote) {
 // console.log(note);
 setNotes(prevValue => {
  return [ ...prevValue , newNote];
 })
}

function deletingNote(id){
//console.log("Delete was triggered");
setNotes(prevValue => {
  return prevValue.filter(( noteItem , index ) => {
return index !== id;
  });
});
}

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd = {addingNote}/>
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      { notes.map((noteItem , index ) => {
        return <Note 
              key = {index}
              id = {index}
              title = {noteItem.title}
              content = {noteItem.content}
              onDelete = {deletingNote}
          /> 
      })
     }  
      <Footer />
    </div>
  );
}

export default App;
