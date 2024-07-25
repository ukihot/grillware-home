import { component$ } from '@builder.io/qwik'
import { css } from '../styled-system/css'

const footerStyles = css({
    width: '100%',
    boxSizing: 'border-box',
    padding: '1rem',
    bg: '#333',
    color: '#eee',
    textAlign: 'center',
})

export const Footer = component$(() => {
    return (
        <footer class={footerStyles}>
            <p>
                &copy; {new Date().getFullYear()} Grillware, Inc. All rights
                reserved.
            </p>
        </footer>
    )
})
