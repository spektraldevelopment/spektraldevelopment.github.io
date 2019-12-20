export default {
    setProjects(state, projects) {
        state.projects = projects;
        state.allProjects = projects;
    },
    filterProjects(state, searchTerm) {
        const filtered = state.allProjects.filter((project) => {
            return project.title.indexOf(searchTerm) === 0;
        });
        state.projects = filtered;
    },
    setProjectsLoaded(state, loaded) {
        state.projectsLoaded = loaded;
    },
    addProject(state, project) {
        state.projects.unshift(project);
        state.allProjects.unshift(project);
    },
    editProject(state, editedProject) {
        const projectIndex = state.projects.findIndex(project => project.id === editedProject.id);
        state.projects[projectIndex] = editedProject;
        state.allProjects[projectIndex] = editedProject;
    },
    deleteProject(state, projectID) {
        const updatedProjects = state.projects.filter(project => project.id !== projectID);
        state.projects = updatedProjects;
        state.allProjects = updatedProjects;
    }
}