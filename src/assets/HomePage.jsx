import NavBar from "./Navbar"
import WorkOrderForm from "./WorkForm"

const Home = ()=>{
    return (
        <>
    <NavBar style={{ position: 'sticky'}}/>
    <header id="home">
        <div className="container">
                <h1>Freelance Consultant</h1>
                <h2>Providing Consultation Solutions for you</h2>
                <p>Helping you achieve your goals with technology and expertise.</p>
        </div>
    </header>
    <section id="about" className="container">
        <h2>About Me</h2>
        <div className="box">
            <p>As a freelance consultant, I specialize in helping businesses streamline their operations through effective use of technology. I offer a range of services designed to meet your unique needs.</p>
        </div>
    </section>
    <section id="services" className="container">
        <h2>Services</h2>
        <div className="box">
            <h3>IT Consulting</h3>
            <p>Providing expert advice on technology solutions that fit your business.</p>
        </div>
        <div className="box">
            <h3>Network Solutions</h3>
            <p>Designing and implementing secure and efficient network infrastructure.</p>
        </div>
        <div className="box">
            <h3>Software Development</h3>
            <p>Creating custom software solutions to meet your specific business needs.</p>
        </div>
        <h2></h2>
    </section>
    <section id="contact" className="container">
        <h2>Contact</h2>
        <div className="box">
            <p>As a freelance consultant, I specialize in helping businesses streamline their operations through effective use of technology. 
                I offer a range of services designed to meet your unique needs. Simply submit the form below.
            </p>
        </div>
        <WorkOrderForm/>
    </section>
    </>
    )
}

export default Home