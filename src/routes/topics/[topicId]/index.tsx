import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { Blog } from '~/lib/microcms'

export const useProductDetails = routeLoader$(async (requestEvent) => {
    const res = await fetch(
        `https://grillware.microcms.io/api/v1/blogs/filters=category[equals]${encodeURIComponent(requestEvent.params.topicId)}`
    )
    const blog = await res.json()
    return blog as Blog
})

export default component$(() => {
    const signal = useProductDetails()
    return <p>Product name: {signal.value.title}</p>
})
