import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { getDetail } from '~/lib/microcms'

// Load blog details based on topicId
export const useBlogDetails = routeLoader$(async (requestEvent) => {
    const { topicId } = requestEvent.params
    const blog = await getDetail(topicId)
    return blog
})

export default component$(() => {
    const signal = useBlogDetails()

    return (
        <div class="content-item">
            <h1>{signal.value.title}</h1>
            <div dangerouslySetInnerHTML={signal.value.description}></div>
        </div>
    )
})
