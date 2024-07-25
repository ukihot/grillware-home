import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { component$, useStore, useTask$ } from '@builder.io/qwik'
import { Content } from '~/components/topics/content'
import { getBlog, Blog } from '~/lib/microcms'

export const useListLoader = routeLoader$(async () => {
    const { contents } = await getBlog()
    return contents
})

export default component$(() => {
    const listLoader = useListLoader()
    const state = useStore<{ data: Blog[] | null }>({ data: null })

    // Update data when listLoader changes
    useTask$(() => {
        state.data = listLoader.value || null
    })

    return (
        <div>
            {state.data ? (
                <div class="topic-panel">
                    {state.data.map((item) => (
                        <Content key={item.id} data={item} />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
