import { React, useState } from "react";

export default function TextUtils() {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUPchange = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLCchange = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleClearTextchange = () => {
        setText('');
    }

    const handleCopyText = ()=> {
        navigator.clipboard.writeText(text)
    }

    let words = 0;

    if(text !== ''){
        words = text.split(" ").length
    }

    const handleSentenceCase = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText);
    }

    const handleTCapitalText = () => {
        let newText = ''
        if(text !== ''){
            text.split(" ").forEach(t => {
                newText += t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()+" ";
            })
            setText(newText);
        }
        
    }

    return (
        <>
            <label htmlFor="floatingTextarea">Enter text here</label>
            <div className="form-floating my-3">
                <textarea className="form-control border border-primary-subtle" value={text} onChange={handleOnChange} id="floatingTextarea" />
            </div>

            <button type="button" className="btn btn-primary mx-2" onClick={handleUPchange}>Upper Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLCchange}>Lower Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClearTextchange}>Clear text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopyText}>Copy text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleTCapitalText}>Make First Letter of word Capital</button>

            <div className="container my-3">
                <h2>Preview</h2>
                <p htmlFor="floatingTextarea"> {words} words and {text.length} characters </p>
                <label htmlFor="floatingTextarea">{0.008 * words} Minutes of Read</label>
            </div>

            <div className="container my-3">
                <h2>Your Text</h2>
                <p htmlFor="floatingTextarea"> {text} </p>
            </div>
        </>
    );
}