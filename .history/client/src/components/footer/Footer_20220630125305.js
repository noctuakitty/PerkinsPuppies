import React from 'React';

function Footer() {
  return (
    <div className="footer ">
        href={'https://github.com/imjvdn/DUFinalProject'}
        icon={Github}
        title="Github"
        className="social-icon"
        buttonStyle={{ verticalAlign: 'sub' }}
      />
      <div className="copyright">
        Copyright 2020: Kilea Castillo &copy;
      </div>
    </div>
  )
}

export default Footer;