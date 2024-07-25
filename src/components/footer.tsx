import { component$ } from '@builder.io/qwik'

export const Footer = component$(() => {
    return (
        <footer class="footer">
            <p>
                &copy; {new Date().getFullYear()} Grillware, Inc. All rights
                reserved.
            </p>
        </footer>
    )
})
