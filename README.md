# 💈 BarberApp - Barbería Online

BarberApp es la simulación de una barbería online desarrollada con Angular 20 y Tailwind CSS. Permite a clientes y barberos gestionar turnos, historial y perfiles de usuario en un entorno moderno, responsive y con arquitectura profesional.

Es mi proyecto principal hasta el momento, donde puse en práctica todo lo que aprendí sobre Clean Architecture, Angular moderno (Signals, Zoneless, SSR), Tailwind CSS, Firebase y Cloudinary. Buenas prácticas, diseño responsive, accesibilidad, SEO y rendimiento.

## 🔗 Enlaces directos

- ⭐ **[Sitio Web de BarberApp](https://barber-shop-guy.web.app/)**

## 📚 Índice

- [💈 BarberApp - Barbería Online](#-barberapp---barbería-online)
  - [🔗 Enlaces directos](#-enlaces-directos)
  - [📚 Índice](#-índice)
  - [📖 Historia y Motivos](#-historia-y-motivos)
  - [🛠️ Stack Tecnológico](#️-stack-tecnológico)
  - [📂 Arquitectura](#-arquitectura)
  - [✨ Características](#-características)
  - [📸 Capturas](#-capturas)
  - [🔮 Futuro del proyecto](#-futuro-del-proyecto)
  - [📌 Aclaraciones](#-aclaraciones)


## 📖 Historia y Motivos

La idea principal es crear un sitio completo desde una lógica de negocio sólida hasta una interfaz y experiencia de usuario simple y efectiva. Entre la idea, la creación y la finalización, estuve desde Septiembre hasta Diciembre de 2025 llevándolo a cabo. Fue una linda experiencia y estoy satisfecho con el resultado, por más que hay matices u otras características que podría implementar o mejorar.

## 🛠️ Stack Tecnológico

- Frontend: Angular 20 (standalone, signals, zoneless, control flow syntax, SSR)
- Estilos: Tailwind CSS
- Backend/Hosting: Firebase (auth, db, hosting)
- Media: Cloudinary (media storage)
- Forms: Reactive Forms + Validaciones personalizadas

## 📂 Arquitectura

Implementé una Clean Architecture simplificada, con tres capas principales:

```
app/  
├── core/         👉 Domain (models, enums, interfaces, guards, constants, config)  
├── services/     👉 Adapters (Firebase, Cloudinary)  
├── features/     👉 Use cases + Presentation (facades, components, pages)  
└── shared/          
```

1. Domain 

  Defino la lógica de negocio: entidades, enumerados, contratos y las interfaces que actúan como repositorios.

2. Adapters

  Servicios concretos que implementan las interfaces del Domain. Ejemplo: auth.service.ts en Firebase implementa auth.repository.ts. Hago uso de InjectionTokens para desacoplar totalmente la implementación (Firebase ↔️ otro proveedor).

3. Use Cases + Presentation

  Cada feature tiene sus propios componentes, páginas y fachadas. Estos últimos hacen de intermediarios entre UI y lógica con el fin de simplificar la inyección de servicios.

## ✨ Características

- 🌍 Inicio e información

    - Sección “hero” con carrusel de imágenes, título y descripciones.
    - Contacto directo (Email, WhatsApp, Ubicación).
    - Botón de acceso rápido para “Ingresar al Portal”.
    - Sección de presentación breve.
    - Previsualización de Novedades.
    - Testimonios de clientes y barberos.
    - Páginas individuales para información: Quiénes Somos, Servicios, y más.
    - Página de Centro de Ayuda con FAQ y Contactos.

- 👥 Roles y posibles acciones

  -  Cliente
      - Ver y editar sus propios datos.
      - Revisar y gestionar sus turnos (pendientes, cancelados o completados).
      - Consultar su historial al detalle.
      - Solicitar un nuevo turno en un formulario de 4 pasos.
      - Descargar la información de un turno en formato PDF.
      - Calificar la atención de un turno una vez ya completado.

  - Especialista
      - Ver y editar sus propios datos.
      - Revisar y gestionar sus turnos (pendientes, cancelados o completados).
      - Ver la lista completa de sus clientes ya atendidos.
      - Consultar el historial de cualquier cliente.
      - Determinar un diagnóstico con 2 campos de texto, y modificar datos  del paciente.
      - Descargar la información de un turno en formato PDF.

- 🔑 Autenticación

  - Uso del servicio Authentication de Firebase.
  - Login clásico (email/contraseña).
  - Registro con validaciones personalizadas por rol.

- ⚡ Funcionalidades Generales

  - Gestión completa de turnos (crear, cancelar, completar, calificar, descargar).
  - Modales dinámicos: confirmación, diagnósticos, calificación, cancelación, confirmación.
  - Historia clínica generada automáticamente con los turnos completados.
  - Edición de perfil con foto de perfil en Cloudinary.
  - Centro de ayuda, políticas y términos.
  - Blog con publicaciones sobre el sitio y la salud.

- 🧩 Decisiones y Simplificaciones

  - Desestimación del rol Administrador (no aportaba valor real, podría agregarlo en un futuro).
  - Disponibilidad horaria con presets en vez de manual → más simple y usable.
  - Historia = lista de turnos completados en vez de una entidad separada (para evitar sobreingeniería).
  - SSR: funciona y la app está hecha para usarlo, pero por limitaciones de Firebase Hosting se dejó como SPA clásica.

- 📱 Diseño y Desarrollo

  - Responsive real → funciona y se ve perfecto hasta en 320px (ej: iPhone 5 / Samsung Pocket).
  - Diseño simple, minimalista y moderno. Todos los botones y secciones son autoexplicativos, todo está claro y se realiza en pocos clics.
  - Análisis de Lighthouse/Google PageSpeed Insights:
      - SEO: **100/100** en todas las páginas.
      - Accesibilidad: **100/100** en todas las páginas.
      - Buenas prácticas: **100/100** en todas las páginas.
      - Performance: **95–100** en escritorio, **75–80** en mobile (limitación típica en Angular, pero en uso real va perfecto).

- 🧪 Aprendizajes

  - Programar en inglés.
  - Hacer constantes commits en Git.
  - Mantener y trabajar en un proyecto intermedio-grande. Casi 3 meses sin parar.
  - La reutilización de componentes y tener componentes "Page" o "Layout".
  - La reutilización de estilos (gracias a las clases utilitarias de Tailwind o variables CSS).
  - La importancia de la arquitectura: consistencia en la creación de características, servicios, entidades y demás.
  - La importancia de simplificar conceptos de la lógica de negocios para evitar sobreingeniería.
  - Signals como herramienta clave para la reactividad en Angular 20.
  - Hacer un HTML semántico para mejor Accesibilidad y SEO. Analizar página por página con Lighthouse.
  - Cómo hacer un buen README 😁.

## 📸 Capturas

## 🔮 Futuro del proyecto

- Hacer el deploy con SSR en un hosting más flexible.
- Aplicar Signals en todos los formularios para mayor consistencia.
- Seguir optimizando performance en mobile (aunque ya es bueno).

## 📌 Aclaraciones

- BarberApp NO es una barbería real.
- Ninguna imagen usada en el sitio web es mía, y los datos y fotos de perfil de los usuarios ya creados no son reales. Las saqué de ["This Person Does Not Exist"](https://thispersondoesnotexist.com/).
- Se aceptan propuestas de mejora del sitio o reportes de errores.
