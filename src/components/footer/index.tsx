import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return <footer class="bg-brand flex flex-col justify-center items-center text-center py-8 px-5 gap-2 border border-black">
        <div class="text-sm">
            <strong>All rights Reserved</strong> - 0h Lord Matt Groening - 1989-2023
        </div>
        <small>
            This app was done by <a rel="nofollow noopener" target='_blank' title="Enlace Github" href="https://github.com/ro199">Ronald Alvarado</a>
        </small>
    </footer>
});