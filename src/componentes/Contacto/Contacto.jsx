
import Swal from 'sweetalert2'
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes implementar el envío del formulario o mostrar los datos en la consola
        console.log(formData);


        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado con éxito',
            text: 'Te responderemos pronto.',
        });

        // Limpia los campos del formulario después de enviarlo
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='contact__form'>
                <input className='name' type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
                <input className='email' type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
                <input className='subject' type="text" name="subject" placeholder="Asunto" value={formData.subject} onChange={handleChange} required />
                <textarea className='mensaje' name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required />
                <button className='btn__contact' type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
