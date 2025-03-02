import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Contact.css';

function Contact() {

  const position = [28.127658681830628, -15.446657572461495];

  return (
    <>
      <Header />
      <section className="contact-page">
        <h2>Contact</h2>
        <div className="contact-info-top">
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-details">
            <p><strong>Address:</strong> IES El Rincón · LPGC, ESP</p>
            <p><strong>Phone:</strong> +34 928 567 890</p>
            <p><strong>Email:</strong> contacto@ejemplo.com</p>
          </div>
        </div>
        <div className="map-container">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '300px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>We are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
