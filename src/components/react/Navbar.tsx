export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
        <div className="relative flex items-center justify-between">
          <p>Guia de git</p>
          <ul>
            <li>limpiar</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
