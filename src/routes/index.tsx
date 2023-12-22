import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen items-center justify-center text-center bg-[var(--color-brand)] p-4">
      <Logo classCustom="w-64 sm:w-[35rem]" />
      <h1 class="text-xl my-1 font-medium">The Simpsons App</h1>
      <div>
        <strong>DISCLAIMER: </strong>This is an unofficial app (even though it looks so cool!)
      </div>
      <Link class="btn my-4" href="/home">
        Enter App
      </Link>
      <div class="flex gap-12">
        <img class="hidden md:block object-contain" src="./img/bart.png" alt="Bart Simpson" />
        <img class="hidden md:block object-contain mt-12" src="./img/homer.png" alt="Homero Simpson" />
        <img class="object-contain mt-20 md:mt-0" src="./img/moe.png" alt="Moe Simpson" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "The Simpsons - Quotes",
  meta: [
    {
      name: "description",
      content: "This is an unofficial APP (even though it looks so cool)!",
    },
    {
      name: "keywords",
      content: "simpsons, app, quotes",
    },
    {
      name: "author",
      content: "manuelsanchezweb",
    },
    {
      name: "og:image",
      content: "https://qwik-simpsons-v1.vercel.app/img/thumbnail.png",
    },
    {
      name: "twitter:image",
      content: "https://qwik-simpsons-v1.vercel.app/img/thumbnail.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Home - The Simpsons - Quotes",
    },
    {
      name: "twitter:description",
      content: "This is an unofficial APP (even though it looks so cool)!",
    },
  ],
};