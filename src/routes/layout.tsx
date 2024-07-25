import { Slot, component$ } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const onGet: RequestHandler = async ({ cacheControl }) => {
    cacheControl({
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        maxAge: 5,
    })
}

export default component$(() => {
    return (
        <>
            <Header />
            <main>
                <Slot />
            </main>
            <Footer />
        </>
    )
})
