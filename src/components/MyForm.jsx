import "../Styles/MyForm.css";

const MyForm = () => {
  return (
    <div className="form-container">
      <h2>Solicitar una demostración</h2>
      <p>
        Rellene el siguiente formulario y nuestro equipo de ventas se pondrá en
        contacto con usted en breve.
      </p>

      <form>
        <label>Nombre</label>
        <input type="text" />

        <label>Empresa</label>
        <input type="text" />

        <label>Correo de la empresa</label>
        <input type="email" />

        <label>¿Qué servicio te interesa?</label>
        <select>
          <option>Seleccionar</option>
          <option>Servicio 1</option>
          <option>Servicio 2</option>
        </select>

        <label>¿Algo que necesites contarnos?</label>
        <textarea placeholder="Escribe aquí tus comentarios"></textarea>

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default MyForm;
