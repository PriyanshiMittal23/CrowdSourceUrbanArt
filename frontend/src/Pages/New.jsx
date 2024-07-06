import React from 'react'

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

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('src', src);
    formData.append('desc', desc);
    formData.append('artist', artist);

    try {
      const response = await axios.post('http://localhost:5000/new', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful!', response.data);
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10%' }}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Image Title</span>
            </div>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Type Image Title"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>
          <br />
          <input
            type="file"
            onChange={handleImageChange}
            name="src"
            className="file-input file-input-bordered file-input-success w-full max-w-xs"
          />
          <br />
          <label className="form-control">
            <div className="label">
              <span className="label-text">Image description</span>
            </div>
            <textarea
              value={desc}
              onChange={handleDescChange}
              className="textarea textarea-success"
              placeholder="Bio"
            ></textarea>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Artist</span>
            </div>
            <input
              value={artist}
              onChange={handleArtistChange}
              type="text"
              placeholder="Type Artist Name"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>
        </fieldset>
        <button type="submit" className=' bg-red-500' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default New;
