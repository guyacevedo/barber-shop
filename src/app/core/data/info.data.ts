import { InfoPage } from "../models/info-page.model";

export const INFO_PAGES_DATA: InfoPage[] = [
  {
    slug: 'quienes-somos',
    title: 'Quiénes Somos',
    subtitle: 'Conoce la historia, la misión y los valores de Barber Shop.',
    imageUrl: '/images/carousel/carousel-1.webp',
    content: `
      <p class="lead mb-4 text-pretty">En Barber Shop, nuestra misión es ofrecer <strong>atención estetica de la más alta calidad, accesible y centrada en el cliente</strong>, combinando la última tecnología con un enfoque profundamente humano y personalizado. Somos más que una barbería; somos un <strong>pilar de confianza en la salud de nuestra comunidad</strong>.</p>
      <p class="mb-4 text-pretty">Fundada en 2015 por un grupo de barberos visionarios, nuestra barbería nació con el propósito de crear un espacio donde la <strong>excelencia estetica y la calidez humana convergieran</strong>. A lo largo de más de una década, hemos crecido y evolucionado, ampliando nuestras instalaciones y especialidades, pero manteniendo siempre intacto nuestro compromiso original: <strong>el bienestar de nuestros clientes</strong>.</p>
      <p class="mb-4 text-pretty">Creemos firmemente en la importancia de una <strong>relación de confianza y respeto mutuo</strong> entre el cliente y el profesional. Por ello, cada miembro de nuestro equipo trabaja incansablemente para fortalecer ese vínculo, garantizando un <strong>ambiente seguro, acogedor y profesional</strong> en cada visita.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Nuestros Valores Fundamentales</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Excelencia estetica:</strong> Nos comprometemos a buscar la perfección en cada diagnóstico, tratamiento y procedimiento. Nuestro equipo se somete a formación continua para estar a la vanguardia de los avances en barbería.</li>
        <li><strong>Empatía y Trato Humano:</strong> Entendemos que detrás de cada cliente hay una historia. Nos esforzamos por escuchar, comprender y ponernos en el lugar de quienes confían en nosotros, ofreciendo un trato cercano y compasivo.</li>
        <li><strong>Innovación y Tecnología:</strong> Invertimos constantemente en la adquisición de nuevas tecnologías diagnósticas y de barbería para ofrecer soluciones más eficaces, seguras y menos invasivas.</li>
        <li><strong>Integridad y Transparencia:</strong> Actuamos con la máxima honestidad y ética profesional. Todas nuestras recomendaciones y decisiones se basan en el mejor interés del cliente, comunicado de forma clara y transparente.</li>
        <li><strong>Compromiso Comunitario:</strong> Somos parte activa de Magangué y nos dedicamos a promover la salud y el bienestar más allá de nuestras puertas, a través de programas de prevención y educación para la salud.</li>
      </ul>
    `,
  },
  {
    slug: 'especialidades-y-servicios',
    title: 'Especialidades y Servicios',
    subtitle: 'Una completa gama de servicios para el cuidado integral de tu cabello, barba y rostro.',
    imageUrl: '/images/carousel/carousel-3.webp',
    content: `
      <p class="mb-4 text-pretty">Ofrecemos una <strong>cobertura de babebería integral</strong> con un extenso y creciente listado de especialidades. Nuestro <strong>enfoque multidisciplinar</strong> nos permite proporcionar un <strong>diagnóstico preciso y un plan de tratamiento efectivo y coordinado</strong> para una gran variedad de diseños, desde los más comunes hasta los más complejas.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Nuestras Especialidades</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Corte:</strong> Corte de cabello sencillo.</li>
        <li><strong>Barba:</strong> Corte de Barba.</li>
        <li><strong>Limpieza Facial:</strong> Limpieza facial sencilla.</li>
        <li><strong>Corte y Barba:</strong> Corte de cabello y barba.</li>
        <li><strong>Cejas:</strong> Perfilado de cejas.</li>
        <li><strong>Corte con diseño:</strong> Corte de cabello con diseño seleccionado por el cliente.</li>
      </ul>
    `,
  },
  {
    slug: 'nuestros-profesionales',
    title: 'Nuestros Profesionales',
    subtitle: 'Un equipo de expertos altamente cualificado y comprometido con tu salud.',
    imageUrl: '/images/carousel/carousel-5.webp',
    content: `
      <p class="mb-4 text-pretty">El mayor activo de Barber Shop es, sin duda, nuestro <strong>capital humano</strong>. El equipo está compuesto por barberos y personal administrativo con una amplia y reconocida trayectoria, pero sobre todo, con una <strong>profunda vocación de servicio y cuidado al cliente</strong>.</p>
      <p class="mb-4 text-pretty">Realizamos un <strong>riguroso proceso de selección</strong> para asegurar que cada profesional no solo posea la <strong>excelencia técnica y académica requerida</strong>, sino que también comparta nuestros valores de empatía, ética y compromiso. Fomentamos un <strong>ambiente de trabajo colaborativo</strong> donde el conocimiento se comparte y los casos se discuten en equipo para encontrar las mejores soluciones para nuestros clientes.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Formación Continua</h3>
      <p class="mb-4 text-pretty">La barbería es un espacio en constante evolución. Por ello, promovemos y apoyamos la <strong>formación continua de nuestro equipo</strong>. Nuestros profesionales participan regularmente en congresos nacionales e internacionales, cursos de especialización y talleres, asegurando que los <strong>tratamientos y técnicas aplicadas en nuestra barbería sean siempre los más actuales y efectivos</strong>.</p>
    `,
  },
  {
    slug: 'politica-de-privacidad',
    title: 'Política de Privacidad',
    subtitle: 'Tu privacidad y la seguridad de tu información son nuestra máxima prioridad.',
    content: `
      <p class="mb-4 text-pretty">En Barber Shop, en cumplimiento con la Ley de Protección de Datos Personales, nos comprometemos a <strong>proteger la privacidad y la confidencialidad de la información</strong> de nuestros clientes. Esta política detalla cómo recopilamos, usamos y protegemos su información.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Recopilación de Información</h3>
      <p class="mb-4 text-pretty">Recopilamos información personal (nombre, DNI, contacto, historial) con el <strong>único y exclusivo fin de proporcionar una atención estetica adecuada</strong>, gestionar sus citas y cumplir con las obligaciones legales y administrativas. Los datos son proporcionados por usted o generados durante el proceso de atención.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Uso y Confidencialidad</h3>
      <p class="mb-4 text-pretty">Su información personal es tratada con la <strong>más estricta confidencialidad</strong>. <strong>No se comparte, vende ni cede a terceros sin su consentimiento explícito</strong>, excepto cuando sea requerido por una orden judicial o una obligación legal. El acceso a su información está <strong>restringido al personal autorizado</strong> que necesita conocerla para desempeñar sus funciones.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Sus Derechos</h3>
      <p class="mb-4 text-pretty">Usted tiene <strong>derecho a acceder, rectificar, actualizar o solicitar la supresión</strong> de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de los canales indicados al final de esta política.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">Seguridad de los Datos</h3>
      <p class="mb-4 text-pretty">Implementamos <strong>robustas medidas de seguridad técnicas, físicas y administrativas</strong> para proteger sus datos contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Nuestros sistemas son monitoreados y actualizados regularmente para garantizar la integridad de su información.</p>
    `,
  },
  {
    slug: 'terminos-y-condiciones',
    title: 'Términos y Condiciones',
    subtitle: 'Información importante sobre el uso de nuestros servicios y plataforma online.',
    content: `
      <p class="mb-4 text-pretty">Al utilizar los servicios de la barbería Barber Shop y su sitio web, usted <strong>acepta y se compromete a cumplir los siguientes términos y condiciones</strong>. Le rogamos que los lea con atención.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Propósito del Sitio Web</h3>
      <p class="mb-4 text-pretty">La información proporcionada en este sitio web tiene un <strong>propósito meramente informativo y educativo</strong>. <strong>No debe ser considerada como un sustituto del consejo, diagnóstico o tratamiento profesional</strong>. Siempre busque el consejo de su barbero u otro proveedor de salud calificado ante cualquier pregunta que pueda tener sobre una condición estetica.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Gestión de Citas</h3>
      <p class="mb-4 text-pretty">Nuestro sistema de turnos online es una herramienta para facilitar el acceso a nuestros servicios. La confirmación de un turno está sujeta a la disponibilidad del profesional. Nos reservamos el derecho de reprogramar o cancelar citas, notificando al cliente con la mayor antelación posible. Solicitamos a los clientes que, en caso de no poder asistir, <strong>cancelen su turno con al menos 24 horas de antelación</strong>.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Responsabilidad del Usuario</h3>
      <p class="mb-4 text-pretty">El usuario se compromete a <strong>proporcionar información veraz y actualizada</strong> al registrarse o solicitar un turno. El uso de la cuenta es personal e intransferible. Es <strong>responsabilidad del usuario mantener la confidencialidad</strong> de sus credenciales de acceso.</p>
      <p class="mb-4 text-pretty">Barber Shop no se hace responsable del uso indebido de la información presentada en el sitio o de las consecuencias de decisiones tomadas sin la supervisión de un profesional. La <strong>responsabilidad final del diagnóstico y tratamiento recae exclusivamente en el profesional</strong> que atiende al cliente.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3">5. Modificaciones</h3>
      <p class="mb-4 text-pretty">Nos <strong>reservamos el derecho de modificar estos términos y condiciones</strong> en cualquier momento y sin previo aviso. Las modificaciones entrarán en vigor a partir de su publicación en este sitio web. Se recomienda revisar esta sección periódicamente.</p>
    `,
  },
];
