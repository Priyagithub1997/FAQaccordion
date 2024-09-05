import { useEffect, useState } from "react"


function App() {
 const data=[
  

    {
         id: 1,
        question: "React",
        answer: "React is a free open source front end library for buildind user interface"
        
    },
    {
        id: 2,
        question: "Javascript",
        answer: " Javascript is a progaramming languages to build web pages"
    },
    {
        id: 3,
      question: "HTML,CSS",
        answer: "To create and style web pages"
    }
 ]
  
  
  
      
 
 





  return (
    <>
  
     
      <FAQaccordion  data={data} /> 
    </>
  )
}
function FAQaccordion({data}) {
  return (
<>
<div className="faqlists">
{data.map((item)=>
<FAQlist 
  key={item.id}
  question={item.question}
  answer={item.answer}

/>

)}
  </div>


</>

)}
   

function FAQlist({question,answer}){
  const [show,setshow]=useState(false);

  const showanswer=()=>{
   
    setshow(!show);
  }
  return(
    <>
    

    <div className={`faq-content ${show ? "active" : " "}`}>
   <div className="question" onClick={showanswer}>{question}</div>
   <div className="answer">{answer}</div>
   </div>
    </>
  )


} 
export default App
