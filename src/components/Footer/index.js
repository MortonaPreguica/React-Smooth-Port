import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItens,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialIconLink,
  SocialLogo,
  SocialMediaWrap,
  SocialIcons,
  WebsiteRights,

  
} from './FooterElements'

import {FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaTelegram} from 'react-icons/fa'
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItens>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                <FooterLink to="signin">Como funciona</FooterLink>
                <FooterLink to="/">Depoimentos</FooterLink>
                <FooterLink to="/">Carreiras</FooterLink>
                <FooterLink to="/">Investidores</FooterLink>
                <FooterLink to="/">Termos de Serviço</FooterLink>
              
            </FooterLinkItens>
            <FooterLinkItens>
              <FooterLinkTitle>Entre em contato conosco</FooterLinkTitle>
                <FooterLink to="/">Contato</FooterLink>
                <FooterLink to="/">Suporte</FooterLink>
                <FooterLink to="/">Destinos</FooterLink>
                <FooterLink to="/">Patrocínios</FooterLink>
            </FooterLinkItens>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItens>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/">Envios-nos Videos</FooterLink>
                <FooterLink to="/">Embaixadores</FooterLink>
                <FooterLink to="/">Agência</FooterLink>
                <FooterLink to="/">Influênciadores</FooterLink>
            </FooterLinkItens>
            <FooterLinkItens>
              <FooterLinkTitle> Midia Social</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">Telegram</FooterLink>
            </FooterLinkItens>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>dolla</SocialLogo>
            <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Yotube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                <FaTelegram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
