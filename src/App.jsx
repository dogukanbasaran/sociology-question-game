import { useState, useRef } from 'react'

import Demo from "./components/Demo";


const App = () => {

  const questions = [

    {
      id: 1,
      description: "suicide kitabının yazarıdır.",
      answers: ["Emile Durkheim", "Michel Foucault", "Karl Marx", "İbn Haldun"],
      trueAnswer: "Emile Durkheim"
    },

    {
      id: 2,
      description: "İşçi sınıfıyla anılır.",
      answers: ["C. Wright Mills", "Pierre Bourdieu", "Karl Marx", "Georg Simmel"],
      trueAnswer: "Karl Marx"
    },
    {
      id: 3,
      description: "Verstehen kavramıyla bilinir.",
      answers: ["Talcott Parsons", "Max Weber", "Emile Durkheim", "Melih Coban"],
      trueAnswer: "Max Weber"
    },


  ]

  const answerButtonRefs = useRef([]);

  const handleAnswerButton = (text) => {

      console.log(text);

    
  }









  return (
    <div className='bg-sky-700 min-h-screen flex justify-center items-center'>

      <div className='border h-[auto] w-[500px] bg-gray-200 rounded-sm shadow-2xl shadow-black'>
          
          {questions.map((question) => (
              <div key={question.id} className='border-black border mb-10'>
                    <div id='question' className='border-[0.5px] border-opacity-20 rounded-sm border-gray-700 m-4'>
                           <p className='p-4 font-semibold'>{question.description}</p>
                    </div>


                    {question.answers.map((answer, index) => (
                    <div key={index} id='answers' className='m-4'>
                            <button key={index} onClick={() => handleAnswerButton(answer)}  ref={(element) => (answerButtonRefs.current[index] = element)}  className={`bg-sky-950 text-gray-200 py-3 rounded-sm hover:opacity-90 w-full`}>
                                {answer}
                            </button>
                    </div>
                    ))}

                    <div className='m-4 flex justify-between items-center'>

                      <span className='text-[20px] bg-red-700 p-2 rounded-sm font-semibold'>
                        00:59
                      </span>

                      <button className={`bg-sky-950 text-gray-200 px-6 py-3 rounded-sm hover:opacity-90`}>
                        Confirm Answer
                      </button>

                    </div>

              </div>
          ))}

         
      </div>

 
      
    </div>
  )
}

export default App
