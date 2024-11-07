import NewProject from "./components/NewProject";
import NoprojectSelected from "./components/NoprojectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectDetails, setprojectDetails] = useState(
    {
      projectDetailsId: undefined,
      project: [],
      task: []
    }
  );

  function handleAddTask(enteredTask) {
    setprojectDetails((prevProjectState) => {
      const taskId = Math.random().toString();
      const newTask = {
        id: taskId,
        projectId: prevProjectState.projectDetailsId,
        taskName: enteredTask
      }

      return {
        ...prevProjectState,
        task: [...prevProjectState.task, newTask],
      }
    });
  }

  function handleDeleteTask(taskId) {
    setprojectDetails((prevProjectState) => {
      return {
        ...prevProjectState,
        task: prevProjectState.task.filter(
          task => task.id !== taskId
        )
      }
    });
  }

  function handleSelectProjectId(projectId) {
    setprojectDetails((prevProjectState) => ({
      ...prevProjectState,
      projectDetailsId: projectId,
    }))
  };

  function handleCancel() {
    setprojectDetails((prevprojectState) => ({
      ...prevprojectState, // Spread the previous state to preserve existing values
      projectDetailsId: undefined // Set projectDetailsId to undefined
    }));
  }

  function addProject() {
    setprojectDetails((prevprojectState) => ({
      ...prevprojectState, // Spread the previous state to preserve existing values
      projectDetailsId: null // Set projectDetailsId to null
    }));
  }

  function handleAddProject(projectData) {
    setprojectDetails((prevProjectState) => {
      const newProject = {
        id: Math.random().toString(),
        ...projectData,
      }

      return {
        ...prevProjectState,
        projectDetailsId: undefined, // Reset project selection after adding a new project
        project: [...prevProjectState.project, newProject],
      }
    });

  }

  function handleDeleteProject() {
    setprojectDetails((prevProjectState) => {
      console.log(prevProjectState);
      return {
        ...prevProjectState,
        projectDetailsId: undefined,
        project: prevProjectState.project.filter(
          project => project.id !== prevProjectState.projectDetailsId
        )
      }
    });
  }

  // console.log(projectDetails);

  let content = null;
  if (projectDetails.projectDetailsId === null) {
    content = <NewProject add={handleAddProject} cancel={handleCancel} />;
  } else if (projectDetails.projectDetailsId !== undefined) {
    const selectedProject = projectDetails.project.find(
      proj => proj.id === projectDetails.projectDetailsId
    );
    if (selectedProject) {
      content = <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask} 
        tasks ={projectDetails.task}/>;
    }
  } else {
    content = <NoprojectSelected onSelect={addProject} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8" >
      <ProjectSidebar
        onSelectProjectId={handleSelectProjectId}
        onSelect={addProject} project={projectDetails.project} />
      {content}
    </main >
  );
}

export default App;
