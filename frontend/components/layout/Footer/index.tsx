export default function Footer() {
  return (
    <div className="text-xs py-2 text-center text-zinc-800 dark:text-zinc-200 shadow-inner bg-zinc-50 dark:bg-zinc-900 flex-shrink-0 shadow-inner relative">
      <p>Copyright &copy; {new Date().getFullYear()} Steven Develops. All Rights Reserved.</p>
    </div>
  );
}