import React, { useRef } from 'react'

function StudentMarkSheets() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let englishInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();

    let resultLabelRef = useRef();

  return (
    <div>
        <form>
            <fieldset>
                <legend>Personal Details</legend>
            
            <div>
                <label>Firstname :</label>
                <input type='text' ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Lastname :</label>
                <input type='text' ref={lastNameInputRef}></input>
            </div>
            </fieldset>
            <fieldset>
                <legend>Marks Details</legend>
            <div>
                <label>Telugu :</label>
                <input type='number' ref={teluguInputRef}></input>
            </div>
            <div>
                <label>Hindi :</label>
                <input type='number' ref={hindiInputRef}></input>
            </div>
            <div>
                <label>English :</label>
                <input type='number' ref={englishInputRef}></input>
            </div>
            <div>
                <label>Maths :</label>
                <input type='number' ref={mathsInputRef}></input>
            </div>
            <div>
                <label>Science :</label>
                <input type='number' ref={scienceInputRef}></input>
            </div>
            <div>
                <label>Social :</label>
                <input type='number' ref={socialInputRef}></input>
            </div>
            
            </fieldset>  
            <div>
                <button type="button"
                onClick={
                    ()=>{
                        
                        let firstName = firstNameInputRef.current.value;
                        let LastName = lastNameInputRef.current.value;
                        let teluguMarks= Number(teluguInputRef.current.value);
                        let hindiMarks= Number(hindiInputRef.current.value);
                        let englishMarks= Number(englishInputRef.current.value);
                        let mathsMarks= Number(mathsInputRef.current.value);
                        let scienceMarks= Number(scienceInputRef.current.value);
                        let socialMarks= Number(socialInputRef.current.value);

                        let totalMarks= teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

                        alert(`Total Marks for ${firstName} ${LastName} is ${totalMarks}`);
                        resultLabelRef.current.innerHTML = `Total Marks for ${firstName} ${LastName} is ${totalMarks}`
                        // console.log(totalMarks);

                        // teluguInputRef.current.value=99;
                        // teluguInputRef.current.style.backgroundColor="green";

                        // alert('Hello World!');
                        // console.log('Hello World!');
                    }
                }
                >Calculate Result</button>
            </div>
            <p className='innerLabel' ref={resultLabelRef}>Please enter the your Marks & click on the Calculate Result Button </p> 
        </form>
        
        
    </div>
  )
}

export default StudentMarkSheets
