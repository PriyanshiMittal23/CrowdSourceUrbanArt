import React, { useState } from 'react'

function New() {

  const [name, setName] = useState('');
  const [src, setSrc] = useState(null);
  const [desc,setDesc]=useState('')
  const [artist,setArtist]=useState('')

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setSrc(e.target.files[0]);
  };

  const handleDescChange=(e)=>{
    setDesc=(e.target.value[1])
  }

  const handleArtistChange=(e)=>{
    setArtist=(e.target.value[2])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('src', src);
    formData.append('desc', desc);
    formData.append('artist', artist);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful!', response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error uploading the image:', error);
      // Handle error (e.g., show an error message)
    }
  };
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'10%'}}>
      <br></br>
      <form onSubmit={handleSubmit}>
      <fieldset >
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span  className="label-text">Image Title</span>
                </div>
                <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Type Image Title" className="input input-bordered input-success w-full max-w-xs" />
            </label>
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} name="src" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
            <br />
            <label className="form-control">
                <div className="label">
                    <span  className="label-text">Image description</span>
                </div>
                <textarea name="desc"  value={desc} onChange={handleDescChange} className="textarea textarea-success" placeholder="Bio"></textarea>
                </label>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span  className="label-text">Artist </span>
                </div>
                <input name="artist" value={artist} onChange={handleArtistChange} type="text" placeholder="Type Artist Name" className="input input-bordered input-success w-full max-w-xs" />
            </label>
        </fieldset>
        <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    
  )
}

export default New;
