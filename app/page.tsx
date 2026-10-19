import {
  classroom,
  greeting,
  posts,
  teacher,
  type FeedPost,
  type PostCategory,
} from "@/data/mock";
import AppShell from "@/app/components/app-shell";

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
      <path d="m3 11 18-5v12L3 14v-3zm8.6 5.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#e0654a" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[19px]">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[18px]">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[30px]">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
    </svg>
  );
}

const postCategoryStyles: Record<
  PostCategory,
  { label: string; badge: string; dot: string; text: string }
> = {
  logro: {
    label: "LOGRO",
    badge: "bg-[#cfebd8]",
    dot: "bg-[#3e9b6c]",
    text: "text-[#3e9b6c]",
  },
  actividad: {
    label: "ACTIVIDAD",
    badge: "bg-[#c7e7f1]",
    dot: "bg-[#2e89a6]",
    text: "text-[#2e89a6]",
  },
  anuncio: {
    label: "ANUNCIO",
    badge: "bg-[#ccd8f4]",
    dot: "bg-[#4e72c8]",
    text: "text-[#4e72c8]",
  },
};

function PostCard({ post }: { post: FeedPost }) {
  const categoryStyle = postCategoryStyles[post.category];
  const isAnnouncement = post.category === "anuncio";

  return (
    <article className="rounded-[20px] border border-border bg-surface p-5 shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)] sm:px-[22px]">
      <div className="mb-[14px] flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`flex size-11 flex-none items-center justify-center rounded-full font-display text-[17px] font-semibold ${
            isAnnouncement
              ? "bg-[#ccd8f4] text-[#4e72c8]"
              : "bg-[#a9d9e8] text-[#1f7a93]"
          }`}
        >
          {isAnnouncement ? <MegaphoneIcon /> : post.author.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-[16.5px] font-semibold text-foreground">
            {post.author}
          </p>
          <p className="text-[12.5px] text-[#a89a8b]">
            {post.time} · {post.context}
          </p>
        </div>
        <span
          className={`flex flex-none items-center gap-[7px] rounded-full px-3 py-1.5 ${categoryStyle.badge}`}
        >
          <span className={`size-2 rounded-full ${categoryStyle.dot}`} />
          <span className={`text-xs font-extrabold tracking-[0.5px] ${categoryStyle.text}`}>
            {categoryStyle.label}
          </span>
        </span>
      </div>

      <p className="mb-[10px] text-[12.5px] text-[#a89a8b]">
        Para: {post.recipient}
      </p>
      <p className="m-0 text-[15.5px] leading-[1.55] text-[#4a4038]">
        {post.text}
      </p>

      {post.photoPlaceholder ? (
        <div className="mt-[14px] flex h-[200px] flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dashed border-[#dbcdba] bg-[#f4ece1] text-[#b0a290]">
          <PhotoIcon />
          <span className="text-[13.5px]">{post.photoPlaceholder}</span>
        </div>
      ) : null}

      <div className="mt-4 flex items-center gap-[18px] border-t border-[#f0e6d8] pt-[14px]">
        <span className="flex items-center gap-[7px] text-sm font-bold text-[#e0654a]">
          <HeartIcon />
          <span>
            <span className="sr-only">Me gusta: </span>
            {post.likes}
          </span>
        </span>
        <span className="flex items-center gap-[7px] text-sm font-bold text-muted">
          <MessageIcon />
          <span>
            <span className="sr-only">Comentarios: </span>
            {post.comments}
          </span>
        </span>
        <span className="flex-1" />
        <span className="text-sm font-extrabold text-[#c5503a]">Editar</span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <AppShell activeSection="feed">
        <div className="mx-auto w-full max-w-[760px] px-4 pb-36 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pb-20 lg:pt-[34px]">
          <header className="mb-6">
            <p className="mb-1 text-[12.5px] font-extrabold tracking-[0.8px] text-[#d9583c]">
              GUARDERÍA · SALA {classroom.name.toUpperCase()}
            </p>
            <h1 className="font-display text-[30px] font-semibold text-foreground">
              {greeting}
            </h1>
            <p className="mt-1 text-[14.5px] text-muted">
              {classroom.childCount} niños · {classroom.displayDate}
            </p>
          </header>

          <button
            type="button"
            className="mb-6 flex w-full items-center gap-[14px] rounded-[18px] border border-border bg-surface px-[18px] py-[14px] text-left shadow-[0_4px_14px_-10px_rgba(120,90,60,0.4)]"
          >
            <span className="flex size-10 flex-none items-center justify-center rounded-full bg-[#f2937a] font-display text-base font-semibold text-white">
              {teacher.initials}
            </span>
            <span className="min-w-0 flex-1 truncate text-[15px] text-[#a89a8b]">
              Compartí un momento…
            </span>
            <span className="flex size-[38px] flex-none items-center justify-center rounded-xl bg-accent-soft text-[#e0654a]">
              <CameraIcon />
            </span>
          </button>

          <div className="mb-[14px] flex items-center gap-[14px]">
            <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8a7c6d]">
              PUBLICADO HOY
            </span>
            <span className="h-px flex-1 bg-[#e7dac8]" />
          </div>

          <section aria-label="Publicaciones" className="flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>
        </div>
    </AppShell>
  );
}
