import React, {useState} from "react";

function BandInput({onBandSubmit}) {

  const [name, setName]=useState("")

  function handleChange(e){
    setName(e.target.value);
   }

  function handleSubmit(e){
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            name
            <input type="text" onChange={handleChange} value={name} />
          </label>
        </p>
        <input type="submit" value={"add band"} />
      </form>
    </div>
  );
}

export default BandInput;
