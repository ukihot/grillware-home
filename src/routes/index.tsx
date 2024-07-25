import { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'
import { WindowComponent } from '~/components/window'

export default component$(() => {
    return (
        <WindowComponent
            title={'Hello'}
            body={'Welcome to Grillware! We are delighted to have you here.'}
        />
    )
})

export const head: DocumentHead = {
    title: 'Grillware',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
