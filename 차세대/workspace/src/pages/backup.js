import React from 'react'
import {FullPage,Slide} from 'react-full-page';
import Hero from '../components/Hero'
import black from '../assets/black.jpg'
import word from '../assets/word.png'


export default function Second() {
  return (
    <>
    <FullPage duration='1000'>
    <Slide>
    <Hero
        cName="hero"
        heroImg={black}
        title="WAVE FORM"
        text="당신의 설문을 만들어 보세요"
        buttonText="시작하기"
        url="/survey"
        btnClass="show"/>

    </Slide>
    <Slide>
    <div id="middle">
    <Hero
        cName="hero"
        heroImg={black}
        title="설문 꿀팁 방출"
        text="#다양한 설문 #알고리즘 #자동 저장"
        buttonText="시작하기"
        url="/survey"
        btnClass="show"/>
    </div>
    </Slide>

    <Slide>
    <div id="under">
    <Hero
    cName="hero"
    heroImg={word}
    title="머신러닝 분석 리포트"
    text="#키워드를 #한눈에"
    buttonText="시작하기"
    url="/survey"
    btnClass="show"/>
    </div>
    </Slide>
    </FullPage>

</>
  )
}
