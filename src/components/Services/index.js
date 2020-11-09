import React from 'react'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-5.svg'
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Serviços </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduz despesas</ServicesH2>
          <ServicesP> Ajudamos a reduzir suas taxas e aumentar sua receita global </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Escritórios Virtuais</ServicesH2>
          <ServicesP>Você pode acessar nossa plataforma online em qualquer lugar do mundo. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Benefícios Premium</ServicesH2>
          <ServicesP> Desbloqueie nosso cartão de sócio especial que devolve 5% de dinheiro de volta. </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
