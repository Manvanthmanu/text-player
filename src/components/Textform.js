import React ,{useState} from 'react'

export default function Textform() {
   const [text, settext] = useState('')

   const handleOnchange = (event)=>{
    settext(event.target.value)
   }

   const ToupperCase = ()=>{
    const uppcase = text.toUpperCase()
    settext(uppcase)
   }

   const TolowerCase = ()=>{
    const uppcase = text.toLowerCase()
    settext(uppcase)
   }

   const onclear = ()=>{
    settext('')
   }
   const copyf =()=>{
    navigator.clipboard.writeText(text);
   }

    const filter = ()=>{
      var filteredtext = text.replace(/\s+/g, ' ')
      // replace(/\s+/g, ' ').trim()
      
      settext(filteredtext)
    }

    const capitalize = ()=>{
      const arr = text.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      
        const str2 = arr.join(" ");
        settext(str2)
      }
    }


    const speak = ()=>{
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }

    const stylePreview = {
        'border':'2px solid grey',
        'width':'100%',
        'height':'700px'

      }
    
      const wordCount = (text.split(" ").length) - 1;
      
  return (
    <>
        <div className="mb-3 my-5">
        <h3>Please enter your text here</h3>
        <textarea className="form-control " onChange={handleOnchange} id="exampleFormControlTextarea1" rows="12" value={text}  placeholder='Enter the text '></textarea>
        </div>
        <button type="button" className="btn btn-light " data-bs-toggle="tooltip" data-bs-placement="top" title="Convert into upper case " onClick={ToupperCase}><i className="uil uil-arrow-up" ></i></button>
        <button type="button" className="btn btn-light mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Convert into lower case "  onClick={TolowerCase}><i className="uil uil-arrow-down"></i></button>
        <button type="button" className="btn btn-light mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Clear text " onClick={onclear}><i className="uil uil-trash-alt" ></i></button>
        <button type="button" id='copy' className="btn btn-light mx-2"  data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clip board" onClick={copyf}><i className="uil uil-copy "></i></button>
        <button type="button" className="btn btn-light mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Format text / remove spaces " onClick={filter}><i className="uil uil-filter"></i></button>
        <button type="button" className="btn btn-light mx-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Capitalize" onClick={capitalize}>C</button>
        <button type="button" className="btn btn-light mx-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Speak"><i className="uil uil-volume" onClick={speak}></i></button>
        
        <div className="container my-5">
          <p className='my-3'>{wordCount} words and {text.length} characters</p>
          <p className='my-3'>{0.008*wordCount} Minutes read </p>
          <h3 style={{'textAlign':'center'}}>Preview</h3>
          <p style={stylePreview}>{text}</p>
        </div>
    </>
    
  )
}
