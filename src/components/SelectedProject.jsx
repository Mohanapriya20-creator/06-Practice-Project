import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask,tasks }) {
    const [day, month, year] = project.dueDate.split("-");
    const formattedDate = new Date(`${year}-${month}-${day}`).toLocaleDateString();
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button
                        onClick={onDelete}
                        className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600">{project.description}</p>
            </header>
            <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}></Tasks>
        </div>
    );
}