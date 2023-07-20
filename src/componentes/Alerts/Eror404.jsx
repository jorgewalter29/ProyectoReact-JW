import React from 'react';
import Swal from 'sweetalert2';

const Error404 = () => {
    const handleGoBack = () => {
        window.location.href = '/'; // Redirecciona a la página de inicio
    };

    // Mostrar la alerta de error cuando el componente se monte
    React.useEffect(() => {
        Swal.fire({
            title: 'Error!',
            text: 'Página No Encontrada',
            icon: 'error',
            confirmButtonText: 'Volver',
            allowOutsideClick: false, // Evita que el usuario cierre la alerta haciendo clic fuera de ella
            allowEscapeKey: false, // Evita que el usuario cierre la alerta presionando la tecla 'Esc'
            allowEnterKey: false, // Evita que el usuario cierre la alerta presionando la tecla 'Enter'
            showCancelButton: false, // Oculta el botón "Cancelar" en la alerta
        }).then(handleGoBack); // Redirige al usuario al presionar "Volver"
    }, []);

    return null; // El componente no muestra nada en pantalla, solo redirecciona
};

export default Error404;
