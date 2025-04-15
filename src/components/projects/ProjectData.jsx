import { Clapperboard,School,Brain,Newspaper } from "lucide-react";
export const ProjectData = [
    {
        id: 1,
        icon:<Brain className="project__icon"/>,
        // image: "https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=",
        title: "Aurora Care",
        description: "A mental health app that detects illnesses and provides self-care routines.",
        github: "https://github.com/mohamedsharafath/Mental_Health"
    },
    {
        id: 2,
        icon:<School className="project__icon"/>,
        title: "My Tutor",
        description: "An AI-based learning assistant that generates quizzes and flashcards from documents.",
        github: "https://github.com/mohamedsharafath/Learning_app"
    },
    {
        id: 3,
        icon:<Clapperboard className="project__icon"/>,
        title: "Movie Review App",
        description: "An app that fetches movie reviews and allows users to comment.",
        github: "https://github.com/mohamedsharafath/movie-project"
    },
    {
        id: 4,
        icon:<Newspaper className="project__icon"/>,
        title: "News App",
        description: "Fetches news from an API with user profile management and CRUD operations.",
        github: "https://github.com/mohamedsharafath/React_News"
    }
];
