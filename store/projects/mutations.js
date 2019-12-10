export default {
    setProjects(state, projects) {
        state.projects = projects;
        console.log(projects);
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
}