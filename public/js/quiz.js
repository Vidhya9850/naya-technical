
const quizDB=[
    {
        question: "Q1:who is the owner of naya studio and year when it founded?",
        a: "raj patel, 2020",
        b: "vivek khurana, 2018",
        c: "yashmen thakur, 2016",
        d: "Yashmen mehta, 2019",
        ans: "ans4"
    } ,
    {
        question: "Q2:who are the co-founders of naya studio?",
        a: "vivek H V and Saad Rajan",
        b: "Vinod H V and Saad Rajan",
        c: "vivek H V and Sahil Khan",
        d: "vikas pandey and Saad Rajan",
        ans: "ans1"
    },
    {
        question: "Q3:location where naya studio founded?",
        a: "Russia",
        b: "austriallia",
        c: "Cambridge,United States",
        d: "california, United States",
        ans: "ans3"
    },
    {
        question: "Q4:what is naya studio?",
        a: "online market place platform for made-to-order furniture",
        b: "market place for clothing",
        c: "online market place for electrical gadgets",
        d: "market place for beauty products",
        ans: "ans1"
    },
   
    
    ];
    
    const question= document.querySelector('.question');
    const option1=document.querySelector('#option1');
    const option2=document.querySelector('#option2');
    const option3=document.querySelector('#option3');
    const option4=document.querySelector('#option4');
    const submit=document.querySelector('#submit');


    const answers=document.querySelectorAll('.answer');
    const showscore=document.querySelector('#showscore');

    let questionCount=0;
    let score=0;
    const loadQuestion=() =>{
        const questionList=quizDB[questionCount];
       // console.log(quizDB[0]);
      // document.getElementById("questions").innerHTML=questionList.question;
        question.innerText= questionList.question;
        option1.innerHTML=questionList.a;
        option2.innerHTML=questionList.b;
        option3.innerHTML=questionList.c;
        option4.innerHTML=questionList.d;
    }
    loadQuestion();
    const getCheckAnswer=()=>{
        let answer;
        answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked){
                answer=curAnsElem.id;
            }
         
        });
        return answer;
    }

    const deselectAll=()=>{
        answers.forEach((curAnsElem) => curAnsElem.checked=false);

    }
    

    submit.addEventListener('click', ()=>{
        const checkedAnswer=getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer===quizDB[questionCount].ans)
        {
            score++;
        }

        questionCount++;
        deselectAll();
        if(questionCount<quizDB.length)
        {
            loadQuestion();
        }else{
            showscore.innerHTML= `
            <h3>you scored ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">play again</button>
            `;
            showscore.classList.remove('scoreArea');
        }


    });