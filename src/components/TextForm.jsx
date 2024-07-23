import React, { useState } from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function TextForm(props) {
    const [text, settext] = useState("");

    let handleOnChange = (event) => {
        // console.log("On change");
        // console.log(event);
        // console.log(value)
        settext(event.target.value);

    }

    let handleUpClick = () => {
        // console.log("Uppercase was clicked"+text)
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("converted to upperr case","success")
    }

    let handleLoClick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("converted to lowercase","success")
    }

    let handleclearClick = () => {

        let newtext = "";
        settext(newtext);
        props.showAlert("clear the text","success")
    }

    // let speak = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg)
    // }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak") {
                window.speechSynthesis.cancel()
            }
        }
        props.showAlert("Done","success")
    }

    const handlecopy = () => {
        let text = document.getElementById("mybox");
        // console.log(text.select)
        text.select();
        navigator.clipboard.writeText(text.value)
        
        props.showAlert("copy to clipboard","success")
    }

    const handleExtraSpace = () => {
        let newtext = text.split(/[]+=/);
        settext(newtext.join(" "));   
    
    }

    // const countWords = (str) => {
    //     let words;
    //     if (text == "") {
    
    //       words = 0;
    //     } else {
    //       words = str.trim().split(/\s+/).length;
    //     }
    //     return words;
    //   };

   
    return (

        <div style={{backgroundColor: props.mode==="light"?"white":"gray",color:props.mode==="light"?"black":"white"}}>
            <h1>{props.heading}</h1>

            <div className="mb-3 mt-3 ">
                <textarea className="form-control rounded-5 py-3 px-3" value={text} onChange={handleOnChange} id="mybox" rows="6" style={{backgroundColor: props.mode==="light"?"white":"lightgray",color:props.mode==="light"?"black":"yellow"}}></textarea>
            </div>

            <div className="btn d-inline-flex ">
                <button className="convert mx-2 my-2 border-warning-subtle btn btn-warning" onClick={handleUpClick}>
                    convert to Uppercase
                </button>
                <button className="convert mx-2 my-2 border-warning-subtle btn btn-warning " onClick={handleLoClick}>
                    convert to Lowercase
                </button>
                <button className="convert mx-2 my-2 border-warning-subtle btn btn-warning " onClick={handleclearClick}>
                    Clear
                </button>
                {/* <button className="convert mx-2 my-2 border-warning-subtle btn btn-warning" onClick={speak}>
                    Speak
                </button> */}
                <button  onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">
                    Speak
                </button>
                <button onClick={handlecopy} className="btn btn-warning mx-2 my-2" >
                    Copy Text
                </button>
                <button  onClick={handleExtraSpace} className="btn btn-warning mx-2 my-2" >
                    Remove Extra Spaces
                </button>

                {/* speech */}
                {/* <div className="control ">
                    <button className='border-warning-subtle mx-2'>Copy</button>
                    <button className='border-warning-subtle mx-2'>Start Listning</button>
                    <button className='border-warning-subtle mx-2'>Stop Listning</button>
                </div> */}
            </div>

            <div className="container my-4">
                <h2>Your text summary 🫡</h2>
                {/*word count */}
                {/* <p><b>{text.length === 0? "No word" : text.split(" ").length}</b> words, <b>{text.length}</b>Characters</p> */}
                <p>{text.split(" ").length-1} <b>words and</b>  {text.length} <b>characters</b></p> 
                {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p> */}

                <p>{0.008 * text.split(" ").length}<b> Minutes Read</b></p>
                <h2 id='preview'>Preview</h2>
                <p>{text.length>0?text:"Enter something in the text box above to preview it here .......🤦‍♂️ "}</p>
            </div>
        </div>
    )
}

export default TextForm;
