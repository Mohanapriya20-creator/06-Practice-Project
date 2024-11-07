import Button from "./Button";

export default function ProjectSidebar({ onSelect, project, onSelectProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <Button onClick={onSelect}>Create New Project</Button>
            <ul className="mt-8">
                {project.map((project) => (
                    <li key={project.id}>
                        <button
                            onClick={() => onSelectProjectId(project.id)}  // Fix: Use arrow function to call onSelectProjectId
                            className="w-full text-left px-2 py-2 rounded-sm my-1 text-stone-400 hover:text-stone-200"
                        >
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}