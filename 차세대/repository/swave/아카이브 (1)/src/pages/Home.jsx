import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Hero from '../components/Hero'
import black from '../assets/black.jpg'
import word from '../assets/word.png'
import { navbarItemState, navbarSelectedState } from '../contexts/selector'
import { HomeItems } from '../constants/MenuItems'


export default function Second(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const setNavItem = useSetRecoilState(navbarItemState);
  const setSelected = useSetRecoilState(navbarSelectedState);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    setNavItem(HomeItems);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [setNavItem]);

  useEffect(() => {
    const middle = props.scrollRef.current[1].getBoundingClientRect().top;
    const bottom = props.scrollRef.current[2].getBoundingClientRect().top;
    if (middle - 1 <= 0 && bottom - 1 <= 0) setSelected(2);
    else if (middle - 1 <= 0) setSelected(1);
    else setSelected(0);
  }, [scrollPosition, props.scrollRef,setSelected]);

  return (
    <>

      <div ref={element => (props.scrollRef.current[0] = element)}>
        <Hero
          cName="hero"
          heroImg={black}
          title="WAVE FORM"
          text="당신의 설문을 만들어 보세요"
          buttonText="시작하기"
          url="/survey"
          btnClass="show" />
      </div>

      <div ref={element => (props.scrollRef.current[1] = element)}>
        <Hero
          cName="hero"
          heroImg={black}
          title="설문 꿀팁 방출"
          text="#다양한 설문 #알고리즘 #자동 저장"
          buttonText="시작하기"
          url="/survey"
          btnClass="show" />
      </div>

      <div ref={element => (props.scrollRef.current[2] = element)}>
        <Hero
          cName="hero"
          heroImg={word}
          title="머신러닝 분석 리포트"
          text="#키워드를 #한눈에"
          buttonText="시작하기"
          url="/survey"
          btnClass="show" />
      </div>


    </>
  )
}
