import { component$ } from '@builder.io/qwik'
import { Blog } from '~/lib/microcms'
import { NavLink } from '../navlink'

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
                        <NavLink
                            href={`/topics/${blog.id}`}
                            activeClass="active" // Optional: apply an active class if needed
                        >
                            {blog.publishedAt} - {blog.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        )
    }

    return <div>{buildTree(data)}</div>
})
