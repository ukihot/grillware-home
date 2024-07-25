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
                <div class="status-bar">
                    <p class="status-bar-field">Press F1 for help</p>
                    <p class="status-bar-field">Slide 1</p>
                    <p class="status-bar-field">CPU Usage: 14%</p>
                </div>
            </div>
        )
    }
)
