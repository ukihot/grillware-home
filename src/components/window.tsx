import { component$ } from '@builder.io/qwik'

interface WindowComponentProps {
    title: string
    body: string
    width?: string
}

export const WindowComponent = component$<WindowComponentProps>(
    ({ title, body, width = '300px' }) => {
        return (
            <div class="window" style={{ width }}>
                <div class="title-bar">
                    <div class="title-bar-text">{title}</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <p>{body}</p>
                </div>
            </div>
        )
    }
)
