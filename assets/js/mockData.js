// AMORA Mock Database & SVG Avatar Generator

// 1. Vector Profile Image Generators (Stunning SVGs)
function getProfileSVG(id) {
  const avatars = {
    1: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%" class="rounded-3xl object-cover">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF9AA2" />
            <stop offset="100%" stop-color="#FF6B81" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
        <!-- Body / Torso -->
        <path d="M20 120 C20 100, 30 85, 50 85 C70 85, 80 100, 80 120 Z" fill="#FBBF24" />
        <!-- Neck -->
        <rect x="44" y="70" width="12" height="18" fill="#FDBA74" rx="4" />
        <!-- Face -->
        <circle cx="50" cy="52" r="22" fill="#FED7AA" />
        <!-- Hair (Sofia - Long, Wavy Pinkish-Brown) -->
        <path d="M25 45 C20 30, 35 15, 50 15 C65 15, 80 30, 75 45 C73 55, 78 70, 74 85 C66 90, 60 70, 50 72 C40 70, 34 90, 26 85 C22 70, 27 55, 25 45 Z" fill="#78350F" />
        <path d="M35 30 C42 22, 58 22, 65 30" stroke="#9A3412" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Eyes -->
        <circle cx="43" cy="50" r="2" fill="#1F2937" />
        <circle cx="57" cy="50" r="2" fill="#1F2937" />
        <path d="M40 46 C42 45, 45 45, 46 47" stroke="#1F2937" stroke-width="1.5" fill="none" />
        <path d="M60 46 C58 45, 55 45, 54 47" stroke="#1F2937" stroke-width="1.5" fill="none" />
        <!-- Blushing -->
        <circle cx="39" cy="55" r="3" fill="#F87171" opacity="0.6" />
        <circle cx="61" cy="55" r="3" fill="#F87171" opacity="0.6" />
        <!-- Smile -->
        <path d="M46 60 Q50 64 54 60" stroke="#BE123C" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <!-- Accessories (Flower in hair) -->
        <circle cx="70" cy="35" r="5" fill="#EF4444" />
        <circle cx="67" cy="32" r="4" fill="#FCD34D" />
      </svg>
    `,
    2: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="100%" stop-color="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g2)" />
        <!-- Torso -->
        <path d="M20 120 C20 98, 32 88, 50 88 C68 88, 80 98, 80 120 Z" fill="#34D399" />
        <!-- Neck -->
        <rect x="45" y="72" width="10" height="18" fill="#FDBA74" />
        <!-- Face -->
        <rect x="30" y="38" width="40" height="38" rx="14" fill="#FED7AA" />
        <!-- Beard -->
        <path d="M30 52 C30 72, 40 82, 50 82 C60 82, 70 72, 70 52 C70 52, 68 76, 50 76 C32 76, 30 52, 30 52 Z" fill="#1E2937" />
        <!-- Hair (Mateo - Cool Pompadour) -->
        <path d="M26 38 C28 20, 48 10, 68 18 C72 20, 75 30, 72 38 C70 34, 62 30, 50 30 C38 30, 30 34, 26 38 Z" fill="#1E2937" />
        <!-- Glasses -->
        <rect x="34" y="47" width="12" height="10" rx="3" fill="none" stroke="#F59E0B" stroke-width="2.5" />
        <rect x="54" y="47" width="12" height="10" rx="3" fill="none" stroke="#F59E0B" stroke-width="2.5" />
        <line x1="46" y1="52" x2="54" y2="52" stroke="#F59E0B" stroke-width="2.5" />
        <!-- Nose -->
        <path d="M49 53 L51 53 L50 58 Z" fill="#F3A27C" />
        <!-- Mouth -->
        <path d="M46 68 Q50 71 54 68" stroke="#1F2937" stroke-width="2" fill="none" stroke-linecap="round" />
      </svg>
    `,
    3: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10B981" />
            <stop offset="100%" stop-color="#047857" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g3)" />
        <!-- Torso -->
        <path d="M20 120 C20 102, 30 88, 50 88 C70 88, 80 102, 80 120 Z" fill="#8B5CF6" />
        <!-- Neck -->
        <rect x="44" y="70" width="12" height="20" fill="#EA580C" rx="3" />
        <!-- Face -->
        <circle cx="50" cy="50" r="22" fill="#F59E0B" />
        <!-- Hair (Valentina - Dark Curly Afro) -->
        <circle cx="34" cy="36" r="14" fill="#111827" />
        <circle cx="66" cy="36" r="14" fill="#111827" />
        <circle cx="50" cy="28" r="16" fill="#111827" />
        <circle cx="30" cy="50" r="11" fill="#111827" />
        <circle cx="70" cy="50" r="11" fill="#111827" />
        <circle cx="40" cy="40" r="15" fill="#111827" />
        <circle cx="60" cy="40" r="15" fill="#111827" />
        <!-- Eyes -->
        <ellipse cx="42" cy="48" rx="2" ry="3" fill="#FFFFFF" />
        <ellipse cx="58" cy="48" rx="2" ry="3" fill="#FFFFFF" />
        <circle cx="42" cy="48" r="1" fill="#111827" />
        <circle cx="58" cy="48" r="1" fill="#111827" />
        <!-- Blushing -->
        <circle cx="38" cy="56" r="4" fill="#EF4444" opacity="0.4" />
        <circle cx="62" cy="56" r="4" fill="#EF4444" opacity="0.4" />
        <!-- Smile -->
        <path d="M44 58 C44 58, 48 66, 56 58" stroke="#111827" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Golden Hoop Earrings -->
        <circle cx="28" cy="55" r="6" fill="none" stroke="#FBBF24" stroke-width="2.5" />
        <circle cx="72" cy="55" r="6" fill="none" stroke="#FBBF24" stroke-width="2.5" />
      </svg>
    `,
    4: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F59E0B" />
            <stop offset="100%" stop-color="#D97706" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g4)" />
        <!-- Torso -->
        <path d="M20 120 C20 100, 30 86, 50 86 C70 86, 80 100, 80 120 Z" fill="#EF4444" />
        <!-- Neck -->
        <rect x="44" y="70" width="12" height="18" fill="#FFD8A8" rx="2" />
        <!-- Face -->
        <rect x="32" y="38" width="36" height="38" rx="10" fill="#FFE3C4" />
        <!-- Hair (Alejandro - Messy Spiky Blonde) -->
        <path d="M28 40 L34 26 L42 22 L50 25 L58 20 L66 28 L72 38 L68 36 L58 32 L50 34 L38 32 L28 40" fill="#FCD34D" />
        <path d="M36 38 L40 28 L48 30 L52 26 L60 30" fill="#F59E0B" />
        <!-- Eyes -->
        <line x1="41" y1="50" x2="45" y2="49" stroke="#1F2937" stroke-width="2" stroke-linecap="round" />
        <line x1="55" y1="49" x2="59" y2="50" stroke="#1F2937" stroke-width="2" stroke-linecap="round" />
        <!-- Nose -->
        <path d="M50 51 L48 56 L52 56 Z" fill="#F5C09B" />
        <!-- Smile -->
        <path d="M44 63 Q50 67 56 63" stroke="#1F2937" stroke-width="2" fill="none" stroke-linecap="round" />
      </svg>
    `,
    5: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8B5CF6" />
            <stop offset="100%" stop-color="#EC4899" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g5)" />
        <!-- Torso -->
        <path d="M20 120 C20 102, 30 88, 50 88 C70 88, 80 102, 80 120 Z" fill="#3B82F6" />
        <!-- Neck -->
        <rect x="44" y="70" width="12" height="18" fill="#FDBA74" rx="4" />
        <!-- Face -->
        <circle cx="50" cy="52" r="21" fill="#FED7AA" />
        <!-- Hair (Camila - Sleek Black Bob with Bangs) -->
        <path d="M26 50 C24 30, 32 18, 50 18 C68 18, 76 30, 74 50 C74 65, 78 68, 76 75 C70 70, 71 52, 70 48 C70 45, 68 40, 50 40 C32 40, 30 45, 30 48 C29 52, 30 70, 24 75 C22 68, 26 65, 26 50 Z" fill="#111827" />
        <path d="M28 40 C34 32, 66 32, 72 40" fill="#111827" />
        <!-- Eyes -->
        <path d="M40 49 Q43 51 46 49" stroke="#111827" stroke-width="2" fill="none" />
        <path d="M54 49 Q57 51 60 49" stroke="#111827" stroke-width="2" fill="none" />
        <!-- Glasses (Stylish Circle Frame) -->
        <circle cx="43" cy="51" r="7" fill="none" stroke="#FFFFFF" stroke-width="2" />
        <circle cx="57" cy="51" r="7" fill="none" stroke="#FFFFFF" stroke-width="2" />
        <line x1="50" y1="51" x2="50" y2="51" stroke="#FFFFFF" stroke-width="2" />
        <!-- Smile -->
        <path d="M45 61 Q50 65 55 61" stroke="#BE123C" stroke-width="2.5" fill="none" stroke-linecap="round" />
      </svg>
    `,
    6: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10B981" />
            <stop offset="100%" stop-color="#3B82F6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g6)" />
        <!-- Torso -->
        <path d="M20 120 C20 98, 32 86, 50 86 C68 86, 80 98, 80 120 Z" fill="#EF4444" />
        <!-- Neck -->
        <rect x="44" y="70" width="12" height="18" fill="#F5C09B" />
        <!-- Face -->
        <rect x="32" y="38" width="36" height="38" rx="8" fill="#FFE0C8" />
        <!-- Hair (Lucas - Brown Beach Waves & Stubble) -->
        <path d="M28 40 C28 24, 38 18, 50 18 C62 18, 72 24, 72 40 C75 45, 75 52, 70 54 C66 40, 34 40, 30 54 C25 52, 25 45, 28 40 Z" fill="#78350F" />
        <!-- Eyes -->
        <circle cx="43" cy="50" r="2.5" fill="#1F2937" />
        <circle cx="57" cy="50" r="2.5" fill="#1F2937" />
        <!-- Nose -->
        <path d="M50 51 L48 56 L52 56 Z" fill="#EEA374" />
        <!-- Smile -->
        <path d="M44 61 Q50 67 56 61" stroke="#1F2937" stroke-width="2" fill="none" stroke-linecap="round" />
        <!-- Stubble -->
        <circle cx="40" cy="68" r="1" fill="#78350F" opacity="0.4" />
        <circle cx="45" cy="70" r="1" fill="#78350F" opacity="0.4" />
        <circle cx="50" cy="71" r="1" fill="#78350F" opacity="0.4" />
        <circle cx="55" cy="70" r="1" fill="#78350F" opacity="0.4" />
        <circle cx="60" cy="68" r="1" fill="#78350F" opacity="0.4" />
      </svg>
    `,
    7: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F472B6" />
            <stop offset="100%" stop-color="#DB2777" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g7)" />
        <!-- Torso -->
        <path d="M20 120 C20 102, 30 88, 50 88 C70 88, 80 102, 80 120 Z" fill="#10B981" />
        <!-- Neck -->
        <rect x="44" y="70" width="12" height="18" fill="#FED7AA" />
        <!-- Face -->
        <circle cx="50" cy="52" r="22" fill="#FFE3C4" />
        <!-- Hair (Isabella - Red Bun) -->
        <circle cx="50" cy="18" r="12" fill="#D97706" />
        <path d="M26 48 C24 32, 34 22, 50 22 C66 22, 76 32, 74 48 C72 52, 74 62, 72 65 C68 55, 62 48, 50 48 C38 48, 32 55, 28 65 C26 62, 28 52, 26 48 Z" fill="#D97706" />
        <!-- Eyes -->
        <path d="M40 49 C41 47, 43 47, 44 49" stroke="#1F2937" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M56 49 C57 47, 59 47, 60 49" stroke="#1F2937" stroke-width="2" fill="none" stroke-linecap="round" />
        <!-- Blush -->
        <circle cx="39" cy="55" r="3.5" fill="#EF4444" opacity="0.5" />
        <circle cx="61" cy="55" r="3.5" fill="#EF4444" opacity="0.5" />
        <!-- Mouth -->
        <path d="M47 61 Q50 63 53 61" stroke="#BE123C" stroke-width="2.5" fill="none" stroke-linecap="round" />
      </svg>
    `,
    8: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="g8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4B5563" />
            <stop offset="100%" stop-color="#1F2937" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g8)" />
        <!-- Torso -->
        <path d="M20 120 C20 98, 32 86, 50 86 C68 86, 80 98, 80 120 Z" fill="#D97706" />
        <!-- Neck -->
        <rect x="44" y="70" width="12" height="18" fill="#E0AC82" />
        <!-- Face -->
        <rect x="32" y="38" width="36" height="38" rx="8" fill="#F0C29E" />
        <!-- Hair (Diego - Short Spiky Gray/Black) -->
        <path d="M28 40 L32 30 L40 24 L50 26 L60 24 L68 30 L72 40 L64 36 L50 32 L36 36 L28 40" fill="#4B5563" />
        <!-- Eyes -->
        <ellipse cx="43" cy="50" rx="1.5" ry="2.5" fill="#1F2937" />
        <ellipse cx="57" cy="50" rx="1.5" ry="2.5" fill="#1F2937" />
        <!-- Nose -->
        <path d="M50 51 L48 56 L52 56 Z" fill="#D2996E" />
        <!-- Smile -->
        <path d="M44 62 Q50 65 56 62" stroke="#1F2937" stroke-width="2" fill="none" stroke-linecap="round" />
        <!-- Beard stubble -->
        <path d="M32 58 C32 68, 40 76, 50 76 C60 76, 68 68, 68 58" fill="none" stroke="#4B5563" stroke-width="2.5" stroke-dasharray="2 1.5" />
      </svg>
    `
  };
  return avatars[id] || avatars[1];
}

// 2. Simulated Profiles Database
const mockProfiles = [
  {
    id: 1,
    name: "Sofía",
    age: 24,
    city: "Madrid",
    description: "Apasionada del arte, el café de especialidad y los perritos. Busco a alguien para recorrer museos y comer pizza los domingos. 🍕✨",
    image: getProfileSVG(1)
  },
  {
    id: 2,
    name: "Mateo",
    age: 27,
    city: "Barcelona",
    description: "Diseñador de día, ciclista de fin de semana. Fanático del buen vino y las conversaciones profundas. ¿Hacemos una ruta por la montaña? ⛰️🍷",
    image: getProfileSVG(2)
  },
  {
    id: 3,
    name: "Valentina",
    age: 26,
    city: "Sevilla",
    description: "Bailarina y amante de la naturaleza. Viajar es mi terapia. Busco conectar de forma auténtica, bailar salsa y reír mucho. 💃🌴",
    image: getProfileSVG(3)
  },
  {
    id: 4,
    name: "Alejandro",
    age: 29,
    city: "Valencia",
    description: "Cocinero amateur, melómano y geek de la tecnología. Si te gusta la música en vivo, tocar guitarra y el sushi, ya tenemos medio match ganado. 🎸🍣",
    image: getProfileSVG(4)
  },
  {
    id: 5,
    name: "Camila",
    age: 25,
    city: "Bilbao",
    description: "Ingeniera de software y escaladora. Busco aventuras al aire libre y debates intensos sobre series de ciencia ficción y videojuegos. 💻🧗‍♀️",
    image: getProfileSVG(5)
  },
  {
    id: 6,
    name: "Lucas",
    age: 28,
    city: "Málaga",
    description: "Fotógrafo y surfista. Siempre con una cámara en la mano y la mente en el mar. Busco sonrisas sinceras, buenas vibras y atardeceres. 📸🌊",
    image: getProfileSVG(6)
  },
  {
    id: 7,
    name: "Isabella",
    age: 23,
    city: "Granada",
    description: "Estudiante de literatura y amante de los gatos. Escribo poesía, colecciono plantas y disfruto de tardes de lluvia con té caliente. 📚🐱☕",
    image: getProfileSVG(7)
  },
  {
    id: 8,
    name: "Diego",
    age: 30,
    city: "Zaragoza",
    description: "Amante del fitness, el senderismo y el cine de autor. Busco a alguien activa con quien compartir metas de gimnasio, viajes y palomitas. 🍿💪",
    image: getProfileSVG(8)
  }
];

// 3. Simulated Chats Database
const mockChats = [
  {
    id: 1,
    profileId: 1,
    name: "Sofía",
    avatar: getProfileSVG(1),
    lastMessage: "¡Hola! Me encantó tu foto en la montaña. ¿Dónde es?",
    time: "10:24 AM",
    unread: true,
    messages: [
      { sender: "them", text: "¡Hola! ¿Cómo estás?", time: "10:20 AM" },
      { sender: "me", text: "¡Hola, Sofía! Todo genial, ¿y tú? Me gustó mucho tu descripción sobre la pizza.", time: "10:22 AM" },
      { sender: "them", text: "¡Hola! Me encantó tu foto en la montaña. ¿Dónde es?", time: "10:24 AM" }
    ],
    responses: [
      "¡Qué guay! A mí también me encanta ese sitio. Deberíamos ir alguna vez.",
      "Jajaja totalmente. ¿Y qué tipo de pizza es tu favorita?",
      "¡Eso suena genial! Oye, ¿te gustaría tomar un café de especialidad esta semana? Conozco un lugar hermoso."
    ]
  },
  {
    id: 3,
    profileId: 3,
    name: "Valentina",
    avatar: getProfileSVG(3),
    lastMessage: "Jajaja, ¡deberíamos planear una salida pronto!",
    time: "Ayer",
    unread: false,
    messages: [
      { sender: "them", text: "¡Hey! ¿Te gusta bailar?", time: "Ayer" },
      { sender: "me", text: "¡Hola Valentina! La verdad me gusta mucho pero soy un poco torpe, ¿me enseñas?", time: "Ayer" },
      { sender: "them", text: "Jajaja, ¡deberíamos planear una salida pronto!", time: "Ayer" }
    ],
    responses: [
      "¡Trato hecho! Pero con la condición de que después me invites un helado.",
      "¡Claro! La bachata y la salsa son súper fáciles si te dejas llevar por el ritmo.",
      "¿Este viernes te viene bien? Hay un local de baile social increíble."
    ]
  },
  {
    id: 5,
    profileId: 5,
    name: "Camila",
    avatar: getProfileSVG(5),
    lastMessage: "Sí, uso VS Code mayormente. ¿Y tú?",
    time: "2 días",
    unread: false,
    messages: [
      { sender: "me", text: "Hola Camila! Qué bueno encontrar otra programadora por aquí. ¿Tabuladores o espacios?", time: "2 días" },
      { sender: "them", text: "¡Hola! Definitivamente espacios, 4 espacios por favor 😂", time: "2 días" },
      { sender: "me", text: "Jaja aceptable. ¿Qué editor usas?", time: "2 días" },
      { sender: "them", text: "Sí, uso VS Code mayormente. ¿Y tú?", time: "2 días" }
    ],
    responses: [
      "¡Genial! VS Code es el rey de los editores. ¿Qué lenguajes programas?",
      "Vaya, tendríamos que debatir eso con un café de por medio... 😉",
      "¡Oye! ¿Qué te parece si este fin de semana salimos a escalar un poco y descansamos de la pantalla?"
    ]
  }
];

// 4. Simulated Notifications Database
const mockNotifications = [
  {
    id: 1,
    type: "match",
    title: "¡Nuevo Match con Valentina!",
    body: "A Valentina también le gustas. ¡Escríbele algo divertido ahora!",
    time: "Hace 5 min",
    read: false,
    avatar: getProfileSVG(3)
  },
  {
    id: 2,
    type: "like",
    title: "A alguien le gustas",
    body: "¡Alguien te ha dado Like en Explore! Sigue deslizando para descubrir quién es.",
    time: "Hace 1 hora",
    read: false,
    avatar: getProfileSVG(7)
  },
  {
    id: 3,
    type: "system",
    title: "¡Bienvenido a AMORA!",
    body: "Completa tu perfil para obtener un 80% más de matches en tu zona.",
    time: "Hace 1 día",
    read: true,
    avatar: getProfileSVG(8)
  }
];

// 5. Current User Session Simulation
const currentUser = {
  name: "Tú",
  age: 26,
  city: "Madrid",
  description: "Buscando conectar con gente interesante, amante de los viajes, el café y la música en directo. 🚀☕",
  avatar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
      <defs>
        <linearGradient id="user-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF3B5C" />
          <stop offset="100%" stop-color="#FF9AA2" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#user-grad)" />
      <circle cx="50" cy="40" r="18" fill="#FFFFFF" />
      <path d="M50 63 C32 63 20 73 20 85 H80 C80 73 68 63 50 63 Z" fill="#FFFFFF" />
    </svg>
  `,
  photos: [
    `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#FF3B5C" />
        <text x="50%" y="50%" fill="#FFFFFF" font-size="12" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="bold">FOTO 1</text>
      </svg>
    `,
    `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#FF6B81" />
        <text x="50%" y="50%" fill="#FFFFFF" font-size="12" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="bold">FOTO 2</text>
      </svg>
    `
  ]
};

// Export to window object for access across HTML scripts (since there is no bundler/backend)
window.AMORA_DATA = {
  profiles: mockProfiles,
  chats: mockChats,
  notifications: mockNotifications,
  currentUser: currentUser,
  getProfileSVG: getProfileSVG
};
console.log("AMORA Mock Database Loaded successfully.");
