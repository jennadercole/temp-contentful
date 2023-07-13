import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. 
                    Voluptate molestiae rem, impedit
                     quibusdam cum ut iusto quaerat labore suscipit aspernatur pariatur dicta nostrum sunt doloremque. Pariatur eum sunt eius dolorem?</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className="img"/>
            </div>
        </div>
    </section>
  )
}

export default Hero