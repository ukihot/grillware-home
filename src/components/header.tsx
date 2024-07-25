import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { wrap } from '~/styled-system/patterns/wrap'
import { center } from '~/styled-system/patterns'

const headerStyles = center({
    width: '100%',
    bg: '#333',
    color: '#eee',
    justifyContent: 'space-around',
})

export const Header = component$(() => {
    return (
        <header class={headerStyles}>
            <h2>Grillware</h2>
            <nav class={wrap({ gap: '6' })}>
                <Link href="/">Home</Link>
                <Link href="/topics">Topics</Link>
            </nav>
        </header>
    )
})
