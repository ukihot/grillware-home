import { component$ } from '@builder.io/qwik'
import { Blog } from '~/lib/microcms'

interface ContentProps {
    data: Blog
}

export const Content = component$(({ data }: ContentProps) => {
    return (
        <div class="content-item">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={data.description}></div>
        </div>
    )
})
