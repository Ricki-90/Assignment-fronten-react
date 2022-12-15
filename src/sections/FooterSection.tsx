import React from 'react'
import { ExternalLinkIcon } from '../components/ExternalLinkIcon'

const FooterSection: React.FC = () => {
  return (
    <footer>
      <div className="socialmedia">
        <ExternalLinkIcon link="http://facebook.com" icon="fa-brands fa-facebook-f" />
        <ExternalLinkIcon link="http://instagram.com" icon="fa-brands fa-instagram" />
        <ExternalLinkIcon link="http://twitter.com" icon="fa-brands fa-twitter" />
        <ExternalLinkIcon link="http://google.com" icon="fa-brands fa-google" />
        <ExternalLinkIcon link="http://linkedin.com" icon="fa-brands fa-linkedin" />
      </div>
      <div>@ 2022 Fixxo. All Rights Reserved.</div>
    </footer>
  )
}

export default FooterSection