export default {
    setProjects(state, projects) {
        state.projects = projects;
    },
    setProjectsLoaded(state, loaded) {
        state.projectsLoaded = loaded;
    },
    addProject(state, project) {
        state.projects.unshift(project);
    },
    editProject(state, editedProject) {
        const projectIndex = state.projects.findIndex(project => project.id === editedProject.id);
        state.projects[projectIndex] = editedProject;
    },
    deleteProject(state, projectID) {
        const updatedProjects = state.projects.filter(project => project.id !== projectID);
        state.projects = updatedProjects;
    }
}