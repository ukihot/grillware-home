import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export const Header = component$(() => {
    return (
        <header class="header">
            <h1>My Website</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/topics">Topics</Link>
            </nav>
        </header>
    )
})
