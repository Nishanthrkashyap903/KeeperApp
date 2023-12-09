import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//Normal Way
/*
function createNote(note){
  console.log(note)
  return <Note key={note.key} title={note.title} content={note.content}/>
}
*/

function App() {
  
  const [note,setNote]=useState({title:"",content:""})
  const [notes,setNotes]=useState([])
  const [isEdited,setIsEdited]=useState(false);
  const [editId,setEditId]=useState(null);
  
  function handleChange(event){
    console.log("Changed",event)
    const {value,name}=event.target;
    setNote((prevNote)=>{
      console.log(prevNote)
      return {...prevNote,[name]:value}
    })
    if(isEdited)
    {

    }
  }

  function addNote(){
    console.log('add')
    setNotes((prevNotes)=>{
      return [...prevNotes,note];
    })
    // setNote(()=>{
    //   return {title:"",content:""};
    // })  
    //or
    setNote({title:"",content:""})

  }

  function deleteNote(id){
    console.log('delete');
    setNotes(prevNotes=>{return prevNotes.filter((note,index)=>{
      return id!==index;
    })})
  }
  
  function editContent(id,tit,cont){
    //todo
    // console.log(tit)
    // console.log(cont)
    setIsEdited(true)
    setEditId(id);
    setNote(()=>{
      return {content:cont,title:tit};
    })

  }

  return (
    <>
      <Header />
      {/* {Normal Way} */}
      {/* {notes.map(createNote)} */}

      {/* {Arrow functions} */}
      {/* {notes.map((note)=>{return <Note key={note.key} title={note.title} content={note.content}/>})} */}

      {/* {Simplified form} */}
      {/* {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))} */}

      <CreateArea handleChange={handleChange} addNote={addNote} note={note} setNote={setNote} isEdited={isEdited} setIsEdited={setIsEdited}  notes={notes} setNotes={setNotes} editId={editId} setEditId={setEditId}/>
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map((note,index)=><Note id={index} key={index} title={note.title} content={note.content} deleteNote={deleteNote} editContent={editContent} />)}
      <Footer />
    </>
  );
}

export default App;