import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com/maxus.plevnutskyi/'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/plevnytskyi/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://github.com/Berfeks'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/maksym-plevnytskyi-10266b161/'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
