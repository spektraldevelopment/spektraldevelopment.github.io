export default {

    GET_PROJECTS({
        commit
    }) {
        commit('setProjects', [{
                image: "https://picsum.photos/id/237/1280/720",
                title: "Project 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1025/1280/720",
                title: "Project 2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1018/3914/2935",
                title: "Project 3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1026/1280/720",
                title: "Project 4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1032/1280/720",
                title: "Project 5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1040/1280/720",
                title: "Project 6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1042/1280/720",
                title: "Project 7",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1051/1280/720",
                title: "Project 8",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            },
            {
                image: "https://picsum.photos/id/1024/1280/720",
                title: "Project 9",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus consequatur iste laudantium nemo cupiditate beatae sint modi voluptates vitae corporis accusantium enim, sit at possimus, esse ullam dicta. Quia!"
            }
        ]);
        commit('setProjectsLoaded', true);
    }
}