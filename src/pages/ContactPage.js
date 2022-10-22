import Background from "../components/Background"
import road from "../../src/images/road.jpg"

const ContactPage = () => {

  return (
    <div className="contact-container">
      
      <div className="heading-container">
        <Background image={road} headText={"Kontakta oss och boka här"}/>
      </div>
      <p>Vid frågor eller synpunkter, skicka ett mail till:</p>
      <p>mailmail@mail.com:</p>
      <p>För att boka boende i Lassiebyn genom Branäs, klicka på länken nedan och leta upp Lassiebyn G25-28:</p>
      <a href='https://www.branas.se/bokning/#/boenden/info/lassiebyn-25g-laegenhet-i-tva-plan?flow=boenden' target="_blank" rel="noreferrer">Boka 25G</a>
      <a href='https://www.branas.se/bokning/#/boenden/info/lassiebyn-26g-markplan-djurtillaten?flow=boenden' target="_blank" rel="noreferrer">Boka 26G</a>
      <a href='https://www.branas.se/bokning/#/boenden/info/lassiebyn-28g-oevre-plan?flow=boenden' target="_blank" rel="noreferrer">Boka 28G</a>
    </div>
  )
}

export default ContactPage