import { component$ } from '@builder.io/qwik'
import { Blog } from '~/lib/microcms'

export const TreeView = component$(({ data }: { data: Blog[] }) => {
    // Convert the blog data into a nested list structure.
    // This example assumes a flat structure; adjust based on actual data.
    const buildTree = (blogs: Blog[]) => {
        if (blogs.length === 0) {
            return <p>No blogs available</p>
        }

        // Assuming a flat structure; adjust if nested data is used
        return (
            <ul class="tree-view">
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        {blog.publishedAt}
                        {blog.title}
                    </li>
                ))}
            </ul>
        )
    }

    return <div>{buildTree(data)}</div>
})
