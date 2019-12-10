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
}