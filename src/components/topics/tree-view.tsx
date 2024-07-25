import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Blog } from '~/lib/microcms'

export const TreeView = component$(({ data }: { data: Blog[] | null }) => {
    const buildTree = (blogs: Blog[] | null) => {
        if (!blogs) {
            return <p>Loading...</p>
        }
        if (blogs.length === 0) {
            return <p>No blogs available</p>
        }

        return (
            <ul class="tree-view">
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link
                            href={`/topics/${blog.id}`}
                        >
                            {blog.publishedAt} - {blog.title}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    return <div>{buildTree(data)}</div>
})
