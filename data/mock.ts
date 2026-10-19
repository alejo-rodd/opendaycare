export type PostCategory = "logro" | "actividad" | "anuncio";

export interface TeacherProfile {
  name: string;
  role: string;
  roomName: string;
  initials: string;
}

export interface Classroom {
  name: string;
  childCount: number;
  displayDate: string;
}

export interface FeedPost {
  id: string;
  category: PostCategory;
  time: string;
  author: string;
  context: string;
  recipient: string;
  text: string;
  likes: number;
  comments: number;
  photoPlaceholder?: string;
}

export interface ChildProfile {
  slug: string;
  name: string;
  ageLabel: string;
  roomName: string;
  initials: string;
  avatarBackground: string;
  avatarForeground: string;
  birthDate: string;
  enrollmentDate: string;
  notes: string;
  badge?: { label: string; type: "allergy" | "link" };
  parents: Array<{
    name: string;
    role: string;
    status: "active" | "pending";
  }>;
}

export const teacher: TeacherProfile = {
  name: "Caro Giménez",
  role: "Maestra",
  roomName: "Soles",
  initials: "C",
};

export const classroom: Classroom = {
  name: "Soles",
  childCount: 12,
  displayDate: "martes 17 jun",
};

export const greeting = "Buenas, Caro";

export const posts: FeedPost[] = [
  {
    id: "mateo-logro",
    category: "logro",
    time: "14:20",
    author: "Mateo",
    context: "publicado por vos",
    recipient: "familia de Mateo",
    text: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.",
    likes: 3,
    comments: 1,
  },
  {
    id: "mateo-actividad",
    category: "actividad",
    time: "09:40",
    author: "Mateo",
    context: "publicado por vos",
    recipient: "familia de Mateo",
    text: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.",
    likes: 5,
    comments: 2,
    photoPlaceholder: "Foto · pintando con témperas",
  },
  {
    id: "anuncio-parque",
    category: "anuncio",
    time: "07:50",
    author: "Anuncio general",
    context: "publicado por vos",
    recipient: "toda la sala",
    text: "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.",
    likes: 8,
    comments: 0,
  },
];

export const childProfiles: ChildProfile[] = [
  {
    slug: "mateo-fernandez",
    name: "Mateo Fernández",
    ageLabel: "3 años",
    roomName: "Soles",
    initials: "M",
    avatarBackground: "#A9D9E8",
    avatarForeground: "#1F7A93",
    birthDate: "2023-04-12",
    enrollmentDate: "2024-03-04",
    notes: "Alergia al maní. Evitar alimentos que lo contengan y revisar las etiquetas.",
    badge: { label: "MANÍ", type: "allergy" },
    parents: [
      { name: "Lucía Fernández", role: "Madre", status: "active" },
      { name: "Diego Fernández", role: "Padre", status: "active" },
    ],
  },
  {
    slug: "sofia-mendez",
    name: "Sofía Méndez",
    ageLabel: "2 años",
    roomName: "Soles",
    initials: "S",
    avatarBackground: "#F4B8CC",
    avatarForeground: "#C44A7A",
    birthDate: "2024-02-21",
    enrollmentDate: "2025-03-03",
    notes: "Disfruta especialmente de los cuentos y las actividades con música.",
    parents: [{ name: "Camila Méndez", role: "Madre", status: "active" }],
  },
  {
    slug: "benjamin-ruiz",
    name: "Benjamín Ruiz",
    ageLabel: "3 años",
    roomName: "Soles",
    initials: "B",
    avatarBackground: "#B9DEC4",
    avatarForeground: "#3E8B62",
    birthDate: "2023-08-05",
    enrollmentDate: "2024-08-12",
    notes: "Le gusta construir con bloques y compartir juegos al aire libre.",
    parents: [
      { name: "Paula Ruiz", role: "Madre", status: "active" },
      { name: "Andrés Ruiz", role: "Padre", status: "pending" },
    ],
  },
  {
    slug: "valentina-soto",
    name: "Valentina Soto",
    ageLabel: "2 años",
    roomName: "Soles",
    initials: "V",
    avatarBackground: "#F4DC8E",
    avatarForeground: "#9A7B1E",
    birthDate: "2024-06-17",
    enrollmentDate: "2025-08-04",
    notes: "Todavía no hay padres vinculados a su perfil.",
    badge: { label: "VINCULAR", type: "link" },
    parents: [],
  },
  {
    slug: "tomas-diaz",
    name: "Tomás Díaz",
    ageLabel: "3 años",
    roomName: "Soles",
    initials: "T",
    avatarBackground: "#C9B6E8",
    avatarForeground: "#7B5FC0",
    birthDate: "2023-01-29",
    enrollmentDate: "2024-02-05",
    notes: "Intolerancia a la lactosa. Ofrecer alternativas sin lácteos.",
    badge: { label: "LACTOSA", type: "allergy" },
    parents: [{ name: "Mariana Díaz", role: "Madre", status: "active" }],
  },
  {
    slug: "emma-castro",
    name: "Emma Castro",
    ageLabel: "2 años",
    roomName: "Soles",
    initials: "E",
    avatarBackground: "#F4B8CC",
    avatarForeground: "#C44A7A",
    birthDate: "2024-09-10",
    enrollmentDate: "2025-09-01",
    notes: "Se adapta bien a las rutinas y disfruta de pintar y dibujar.",
    parents: [{ name: "Javier Castro", role: "Padre", status: "active" }],
  },
  {
    slug: "lucas-romero",
    name: "Lucas Romero",
    ageLabel: "3 años",
    roomName: "Soles",
    initials: "L",
    avatarBackground: "#A9D9E8",
    avatarForeground: "#1F7A93",
    birthDate: "2023-05-22",
    enrollmentDate: "2024-04-01",
    notes: "Le entusiasman los juegos de movimiento y las canciones grupales.",
    parents: [{ name: "Florencia Romero", role: "Madre", status: "active" }],
  },
  {
    slug: "olivia-vega",
    name: "Olivia Vega",
    ageLabel: "2 años",
    roomName: "Soles",
    initials: "O",
    avatarBackground: "#B9DEC4",
    avatarForeground: "#3E8B62",
    birthDate: "2024-03-15",
    enrollmentDate: "2025-04-07",
    notes: "Le gustan los rompecabezas y explorar libros ilustrados.",
    parents: [{ name: "Nicolás Vega", role: "Padre", status: "active" }],
  },
];
