const Footer: React.FC = () => {
  return (
    <div className="relative flex-shrink-0 py-2 text-xs text-center shadow-inner text-zinc-800 dark:text-zinc-200 bg-amber-100 dark:bg-zinc-900">
      <p>
        Copyright &copy; {new Date().getFullYear()} Steven Develops. All Rights
        Reserved.
      </p>
    </div>
  )
}

export default Footer
