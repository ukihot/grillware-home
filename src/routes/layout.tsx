import { Slot, component$ } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { css } from '../styled-system/css'

export const onGet: RequestHandler = async ({ cacheControl }) => {
    cacheControl({
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        maxAge: 5,
    })
}

// Apply Flexbox to the layout
const layoutStyles = css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure layout takes full viewport height
})

const mainStyles = css({
    flex: '1', // Take up remaining space
    paddingTop: 'var(--header-height)', // Adjust based on header height
})

export default component$(() => {
    return (
        <div class={layoutStyles}>
            <Header />
            <main class={mainStyles}>
                <Slot />
            </main>
            <Footer />
        </div>
    )
})
