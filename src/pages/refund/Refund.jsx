import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function Refund() {
  return (
    <>
      <Header />
      <section className="content-page">
        <h2>Política de Devoluciones</h2>
        <p><em>Última actualización: 28.02.2025</em></p>
        <p>
          Esta Política de Devoluciones establece los términos bajo los cuales se pueden solicitar reembolsos o cambios para productos o servicios adquiridos a través de Porfolio.
          Aunque este es un prototipo y no se realizan transacciones reales, esta política sirve como ejemplo para fines educativos.
        </p>
        <h3>1. Alcance</h3>
        <p>
          Esta política se aplica a todas las transacciones realizadas a través del sitio web Porfolio.
        </p>
        <h3>2. Solicitud de Reembolso o Cambio</h3>
        <p>
          Las solicitudes de reembolso o cambio deben realizarse dentro de los 15 días posteriores a la compra.
          Para iniciar el proceso, por favor contacte a nuestro equipo de soporte a través del correo contacto@ejemplo.com o nuestro formulario de contacto.
          En el caso de productos digitales, se considerará el reembolso solo si el servicio no ha sido iniciado.
        </p>
        <h3>3. Condiciones</h3>
        <p>
          Los productos deben encontrarse en su estado original, sin usar y sin modificaciones.
          Los servicios deben solicitarse antes de su inicio.
        </p>
        <h3>4. Proceso y Plazos</h3>
        <p>
          Una vez recibida y evaluada la solicitud, si es aprobada, el reembolso o cambio se procesará en un plazo de 15 días hábiles.
          Los reembolsos se emitirán utilizando el mismo método de pago que se utilizó en la compra original.
        </p>
        <h3>5. Cambios y Cancelaciones</h3>
        <p>
          Si desea modificar o cancelar su pedido, por favor notifíquenos lo antes posible.
          La posibilidad de cambio o cancelación dependerá del estado del pedido y de los términos específicos del producto o servicio.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Refund;
