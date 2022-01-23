import React from 'react';
import tw from 'tailwind-styled-components'
import Phone from '../../public/images/hero.png'

const Hero = () => {
  return (
      <Wrapper>
        <HeroContainer>
            <PhoneContainer src="../../images/hero1.png" />
            <HeroText>
                <h4>MyRide App For Better Commute</h4>
            </HeroText>
        </HeroContainer>
      </Wrapper>
  )
};

export default Hero;

const Wrapper = tw.div`
    
`
const HeroText = tw.div`
    items-center
`
const HeroContainer = tw.div`
    h-screen flex
`
const PhoneContainer = tw.img`
    h-100
`