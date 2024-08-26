import logoImage from '../../assets/logo.svg';

const Logo = () => {
  return (
    <a href="/">
      <img className="h-9" src={logoImage} alt="Weather App" />
    </a>
  );
};

export default Logo;
