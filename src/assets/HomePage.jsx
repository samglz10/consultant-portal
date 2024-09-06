import NavBar from "./Navbar"
import WorkOrderForm from "./WorkForm"
import { FcSelfServiceKiosk, FcAbout } from "react-icons/fc";


const Home = ()=>{
    return (
        <>
    <NavBar style={{ position: 'sticky'}}/>
    <header id="home">
        <div className="container">
                <h1>NovusPaths LLC</h1>
                <h2>Providing Consultation Solutions for you</h2>
                <p>Helping you achieve your goals with technology and expertise.</p>
        </div>
    </header>
    <section id="about" className="container">
        <h2> <FcAbout/> About Me</h2>
        <div className="box">
            <p> With a robust background in providing support to various US. government agencies, including the FBI, DOS, and DOJ, I am a highly skilled Management Analyst and Management Program Analyst. 
                My career has been defined by my ability to perform in-depth analysis and managementof complex case reviews and data entry tasks.
            </p>
            <p>
                My current role requires a deep understanding of application procedures, 
                the ability to interpret complex laws, and the flexibility to handle inquiries from various stakeholders, including foreign diplomatic missions and US. government agencies. 
                I have provided full-service support, conducted research, and mentored new hires. 
            </p>
            <p>
                My experience also includes roles in fraud investigation, background checks, and customer support in security system integration.
                I hold a Bachelor’s degree in Criminal Justice with a minor in Spanish, and I have further enhanced my technical skills through a Software Development Professional Program at American University. 
                I am proficient in multiple software platforms, including Microsoft Office, Power Bi, Power Automate, Adobe Illustrator, and various web development technologies. 
                I am also fluent in Spanish, I bring a versatile skill set and a commitment to excellence in all my professional endeavors.
            </p>
        </div>
    </section>
    <section id="services" className="container">
        <h2><FcSelfServiceKiosk/> Services</h2>
        <div className="box">
            <h3>IT Consulting</h3>
            <p>Providing expert advice on technology solutions that fit your small business needs.</p>
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