// Servicio de Correo

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const telefono = document.getElementById("inputPhone").value;
    const mensaje = document.getElementById("inputMessage").value;

    const apiKey = "WwgnGAZhLvaIVKfy"; // Reemplaza con tu API Key de Brevo
    const url = "https://api.brevo.com/v3/smtp/email";

    const data = {
      sender: { email: "jolugales@gmail.com", name: "Jose Luis Galvis" },
      to: [{ email: "jolugales@gmail.com", name: "Destinatario" }],
      subject: "Nuevo mensaje de contacto",
      textContent: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Mensaje enviado con éxito");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el mensaje");
      });
  });
