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
        selectedCategory: null,
        blogs: null,
    })

    const fetchBlogs = $(async (category: Category) => {
        const { contents } = await getBlog({
            filters: `category[equals]${category.id}`,
        })
        return contents
    })

    // 初回レンダリング時にselectedCategoryを設定し、ブログを取得
    useTask$(async () => {
        if (state.categories && state.categories.length > 0) {
            state.selectedCategory = state.categories[0]
            state.blogs = await fetchBlogs(state.selectedCategory)
        }
    })

    // タブ切り替え時の即時UI更新と非同期データ取得
    const handleTabClick = $(async (category: Category) => {
        state.selectedCategory = category
        state.blogs = await fetchBlogs(category)
    })

    return (
        <>
            <menu role="tablist">
                {state.categories?.map((category) => (
                    <li
                        key={category.name}
                        role="tab"
                        aria-selected={
                            state.selectedCategory?.name === category.name
                        }
                        onClick$={() => handleTabClick(category)}
                    >
                        <a href="#tabs">{category.name}</a>
                    </li>
                ))}
            </menu>
            <div class="window" role="tabpanel">
                <div class="window-body">
                    <TreeView data={state.blogs} />
                </div>
            </div>
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
