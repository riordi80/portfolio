import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function Privacy() {
  return (
    <>
      <Header />
      <section className="content-page">
        <h2>Política de Privacidad</h2>
        <p><em>Última actualización: 28.02.2025</em></p>
        <p>
          En Porfolio estamos comprometidos con la protección de la privacidad de nuestros usuarios.
          Esta Política de Privacidad describe la información que recopilamos, cómo la utilizamos, con quién la compartimos,
          y las medidas que aplicamos para salvaguardar sus datos personales. Al utilizar nuestro sitio web, usted acepta la recopilación y uso
          de la información conforme a esta política.
        </p>
        <h3>1. Información que Recopilamos</h3>
        <ul>
          <li>
            <strong>Datos Personales:</strong> Recopilamos información que usted nos proporciona de forma voluntaria al registrarse, contactarnos o solicitar información,
            como su nombre, correo electrónico, número de teléfono y cualquier otro dato que decida compartir.
          </li>
          <li>
            <strong>Datos de Navegación y Cookies:</strong> Recopilamos automáticamente información sobre cómo interactúa con nuestro sitio, como su dirección IP, tipo de navegador, sistema operativo y las páginas visitadas.
            Utilizamos cookies y tecnologías similares para mejorar la experiencia de usuario, analizar tendencias y gestionar el sitio.
            <ul>
              <li>
                <strong>Cookies:</strong> Las cookies son pequeños archivos de texto que se almacenan en su dispositivo y nos ayudan a recordar sus preferencias y mejorar la usabilidad.
                Puede configurar su navegador para rechazar las cookies, aunque esto podría afectar el funcionamiento del sitio.
              </li>
            </ul>
          </li>
        </ul>
        <h3>2. Uso de la Información</h3>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Ofrecer, personalizar y mejorar nuestros servicios y contenidos.</li>
          <li>Responder a sus consultas y solicitudes de soporte.</li>
          <li>Analizar el uso del sitio para optimizar su rendimiento y diseño.</li>
          <li>Cumplir con obligaciones legales y proteger nuestros derechos.</li>
        </ul>
        <h3>3. Seguridad de los Datos</h3>
        <p>
          Implementamos medidas técnicas y organizativas (como cifrado, cortafuegos y controles de acceso) para proteger su información contra pérdida,
          uso indebido o acceso no autorizado. Aunque nos esforzamos por salvaguardar sus datos, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
        </p>
        <h3>4. Compartir la Información</h3>
        <p>No vendemos, alquilamos ni compartimos sus datos personales con terceros, salvo en las siguientes circunstancias:</p>
        <ul>
          <li>
            Con proveedores de servicios de confianza que nos ayudan a operar el sitio, bajo acuerdos de confidencialidad.
          </li>
          <li>
            Cuando la ley lo requiera o para proteger nuestros derechos, la seguridad de nuestros usuarios o la del público.
          </li>
          <li>
            En caso de fusión, adquisición o venta de activos, en cuyo caso se le notificará el cambio de titularidad de sus datos.
          </li>
        </ul>
        <h3>5. Sus Derechos</h3>
        <p>
          Usted tiene el derecho de acceder, corregir, eliminar o restringir el uso de sus datos personales.
          También puede oponerse a su procesamiento o solicitar la portabilidad de los datos.
          Para ejercer estos derechos, póngase en contacto con nosotros en contacto@ejemplo.com.
        </p>
        <h3>6. Cambios en Esta Política</h3>
        <p>
          Podemos actualizar esta Política de Privacidad en cualquier momento. Los cambios se publicarán en el sitio y se actualizará la fecha de "Última actualización".
          Le recomendamos revisar periódicamente esta política.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Privacy;
