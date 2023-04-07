import React, { useEffect, useState } from 'react'
import Product from './Product';
import axios from 'axios';
import scrollreveal from "scrollreveal"
import { LinearProgress } from '@material-ui/core';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Quiz = () => {
  const [phones, setPhones] = useState([])
  const [over, setover] = useState(false)
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [Loading, setLoading] = useState(false)
  const [apicall, setapicall] = useState({
    "Camera" :false,
    "Storage" : false,
    "Usage":true,
    "Game":false,
    "Display":true,
    "Protection":true
  })


  const [Questionbank, setQuestionbank] = useState(
    [
      {
      Question: "Is a good Camera a priority for you?",
      AnswerText:
      [
        {Option: "Yes", type: "Camera"},
        {Option: "No", type: "Camera"}
      ],
      Answer: false
      },
      {
      Question: "Do you usually store a lot of pictures and videos on your phone ?",
      AnswerText:
      [
        {Option: "Yes", type: "Storage"},
        {Option: "No", type: "Storage"}
      ],
      Answer: false
      },
      {
        Question: "Do you spend more than 5 hours on your phone daily?",
        AnswerText:
        [
          {Option: "Yes", type: "Usage"},
          {Option: "No", type: "Usage"}
        ],
        Answer: false
      },
      {
        Question: "Do you play games often?",
        AnswerText:
        [
          {Option: "Yes", type: "Game"},
          {Option: "No", type: "Game"}
        ],
        Answer: false
      },
      {
        Question: "Do you binge watch on your phone a lot?",
        AnswerText:
        [
          {Option: "Yes", type: "Display"},
          {Option: "No", type: "Display"}
        ],
        Answer: false
      },
      {
        Question: "Do you drop phones more often than not?",
        AnswerText:
        [
          {Option: "Yes", type: "Protection"},
          {Option: "No", type: "Protection"}
        ],
        Answer: false
      }
    ]  
  )  

const handleAnswer = async(A) => {
  
  if(A.Option==="Yes")
  {
    setQuestionbank(Questionbank,Questionbank[currentQuestion].Answer=true)
  }
  const nextQuestion = currentQuestion +1
  if(nextQuestion<Questionbank.length){
    setcurrentQuestion(nextQuestion) 
  }
  else {
    Questionbank.map((question) => (
      setapicall(apicall,
          apicall[question.AnswerText[0].type]=question.Answer
      )
    )) 
    setLoading(true)
    console.log(apicall)
    await fetchPhones() 
    setLoading(false)
    setover(true)
    

    }
  }

  // const sleep = ms => new Promise(
  //   resolve => setTimeout(resolve, ms)
  // );

  const fetchPhones = async () =>{
    try{
      // await sleep(5000)
      await axios.post("http://3.108.53.240/phone/Phone/",apicall).then((response)=>{
        const res = response.data
        setPhones(res);
      })
    }catch(err){
      console.error(err);
    }
  }
  

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        .container-box,
        .questions,
        .options
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);


  return (
    <>
    { Loading ? <LinearProgress/> :
        
        over ? (<Product phones={phones}/>) :  (
  <Container className='container-box' maxWidth="sm">
    <Box>
    <div className="services-container mx-3 py-3">
    <div className="qno">
        <h1>{currentQuestion+1} / {Questionbank.length}</h1>
      </div>
      <div className="question">
      <h4>{Questionbank[currentQuestion].Question}</h4>
      </div>
      {Questionbank[currentQuestion].AnswerText.map((Ans) =>{
              return(
      <div className="options" onClick={()=>{handleAnswer(Ans)}} key={Ans.Option}>
        <div className="content">
          <h4>{Ans.Option}</h4>
        </div>
      </div>
          )
                  })}
  </div>
  </Box>
  </Container>


    )
      }
  </>
  )
}

export default Quiz