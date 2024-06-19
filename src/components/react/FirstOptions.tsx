const options = [
  { value: "add", label: "Add" },
  { value: "commit", label: "Commit" },
  { value: "revert", label: "Revert/reset" },
  { value: "initialize", label: "Initialize" },
  { value: "modify", label: "Modify" },
  { value: "show", label: "Show/view" },
  { value: "delete", label: "Delete/remove" },
  { value: "compareCommits", label: "Compare two commits" },
  { value: "configure", label: "Configure" },
  { value: "clone", label: "Clone" },
  { value: "ignore", label: "Ignore" },
  { value: "rename", label: "Rename" },
  { value: "merge", label: "Merge" },
  { value: "squash", label: "Squash" },
  { value: "stash", label: "Stash" },
  { value: "debug", label: "Debug" },
  { value: "recover", label: "Recover" },
  { value: "synchronize", label: "Synchronize" },
  { value: "rebase", label: "Rebase" },
  { value: "cherrypick", label: "Cherry-pick" },
];

export default function FirstOptions() {
  return (
    <ul className="custon-scroll hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[15rem] pb-10 px-2 overflow-y-auto">
      {options.map((option) => (
        <li key={option.value} className="hover:bg-slate-300 py-2 px-3 rounded-md">{option.label}</li>
      ))}
    </ul>
  );
}
