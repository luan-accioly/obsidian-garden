import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>Página oculta</h1>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
