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
