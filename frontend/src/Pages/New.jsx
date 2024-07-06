import React from 'react'

function New() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'10%'}}>
      <br></br>
      <fieldset >
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Image Title</span>
                </div>
                <input type="text" placeholder="Type Image Title" className="input input-bordered input-success w-full max-w-xs" />
            </label>
            <br />
            <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
            <br />
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Image description</span>
                </div>
                <textarea className="textarea textarea-success" placeholder="Bio"></textarea>
                
                </label>
        </fieldset>
    </div>
    
  )
}

export default New;
