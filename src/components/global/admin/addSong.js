import React, { useState } from 'react';

function AddSong() {
const [secondaryform,setSecondaryForm] = useState([1]);
const handleNewForm = (event) =>{
    event.preventDefault();
    setSecondaryForm(
         [
             ...secondaryform,
             {
                 songname:'',
                 artistname:'',
                 upload:'',
             }
         ]
     )
}

const handleRemoveForm = (event,ind) =>{
    event.preventDefault();
    console.log(secondaryform.length);
    setSecondaryForm(secondaryform.filter((data,index)=>{
        if(index!==ind){
            return data;
        }else{
             return false;
        }
     }));
} 
 const specificationForm =    secondaryform.map((data,index)=>{
        let songname = 'songname'+index,
        artistname = 'artistname'+index,
        upload = 'upload'+index

        return    <div className="songsList" key={index}>
        <label htmlFor="songname">Song title</label>
        <input type="text" id={songname} name="songname" placeholder="Enter song name..." />

        <label htmlFor="artistname">Artist Name</label>
        <input type="text" id={artistname} name="artistname" placeholder="Enter Artist name..." />

        <label htmlFor="upload">upload song</label>
        <input type="file" id={upload} name="upload"  /><button onClick={handleNewForm}>Add new</button><button onClick={(event)=>handleRemoveForm(event,index)}>Remove new</button>
        </div>
    }) 

    

    const handleSubmit = () => {

    }
    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="atitle">Album title</label>
                <input type="text" id="atitle" name="album_title" placeholder="Enter album title..." />

                <label htmlFor="description">Description</label>
                <textarea name="description" rows={5} placeholder="Enter description..."></textarea>

                <label htmlFor="category">Category</label>
                <select id="category" name="category">
                    <option value="australia">Album</option>
                    <option value="canada">Movie</option>
                    <option value="usa">Bhazan</option>
                </select>

                <label htmlFor="type_name">Movie Name/Album name</label>
                <input type="text" id="type_name" name="type_name" placeholder="Enter Movie Name/Album name..." />
     
               {specificationForm}
                <input type="submit" value="Submit" />
                <br />
                <br />
                <br />
            </form>
        </div>
    )
}

export default AddSong;