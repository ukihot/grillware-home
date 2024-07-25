import { $, component$, useStore, useTask$ } from '@builder.io/qwik'
import { routeLoader$, DocumentHead } from '@builder.io/qwik-city'
import { TreeView } from '~/components/topics/tree-view'
import { getCategories, getBlog, Category, Blog } from '~/lib/microcms'

export const useCategoryLoader = routeLoader$(async () => {
    const { contents } = await getCategories()
    return contents
})

export default component$(() => {
    const categoriesSignal = useCategoryLoader()
    const state = useStore<{
        categories: Category[] | null
        selectedCategory: Category | null
        blogs: Blog[] | null
    }>({
        categories: categoriesSignal.value,
        selectedCategory: categoriesSignal.value[0],
        blogs: null,
    })

    const fetchBlogs = $(async (category: Category) => {
        const { contents } = await getBlog({
            filters: `category[equals]${category.id}`,
        })
        return contents
    })

    // 初回レンダリング時にブログを取得
    useTask$(async () => {
        if (state.selectedCategory) {
            await fetchBlogs(state.selectedCategory).then(async (blogs) => {
                state.blogs = blogs
            })
        }
    })

    // タブ切り替え時にブログを取得
    useTask$(async({ track }) => {
        track(() => state.selectedCategory)

        if (state.selectedCategory) {
            await fetchBlogs(state.selectedCategory).then(async (blogs) => {
                state.blogs = blogs
            })
        }
    })

    return (
        <>
            {state.categories ? (
                <>
                    <menu role="tablist">
                        {state.categories.map((category) => (
                            <li
                                key={category.name}
                                role="tab"
                                aria-selected={
                                    state.selectedCategory?.name ===
                                    category.name
                                }
                                onClick$={() => {
                                    state.selectedCategory = category
                                }}
                            >
                                <a href="#tabs">{category.name}</a>
                            </li>
                        ))}
                    </menu>
                    <div class="window" role="tabpanel">
                        <div class="window-body">
                            {state.blogs && <TreeView data={state.blogs} />}
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
})

export const head: DocumentHead = {
    title: 'Topics',
    meta: [
        {
            name: 'topics',
            content: 'hoge',
        },
    ],
}
