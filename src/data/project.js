import movie_1 from '../assets/movie-1.png'
import movie_2 from '../assets/movie-2.png'
import recipe_1 from '../assets/recipe-1.png'
import recipe_2 from '../assets/recipe-2.png'
import ai_1 from '../assets/ai-1.png'
import ai_2 from '../assets/ai-2.png'
import news_1 from '../assets/news-1.png'
import news_2 from '../assets/news-2.png'
export const projects = [
    {id: 1,
        title: "Movies App",
        description: "Using TMDB Api i was able to get a list of all movies curent or old ",
        link: 'https://movie-tammy.netlify.app/',
        tags: ["React", "API", "CSS"],
        img: [
            movie_1,
            movie_2,
        ],

    },
    {id: 2,
        title: "Study Buddy",
        description: "Using Llamma Api i was able to build a working AI study assistant ",
        link: 'https://study-buddy-tammy.netlify.app/',
        tags: ["React", "Groq", "CSS"],
        img: [
            ai_1,
            ai_2,
        ],

    },
    {id: 3,
        title: "Recipe App",
        description: "Using TMDB Api i was able to get a list of all movies curent or old ",
        link: 'https://recipe-tammy.netlify.app/',
        tags: ["React", "TMDB", "CSS"],
        img: [
            recipe_1,
            recipe_2,
        ],

    },
    {id: 4,
        title: "Tammy News",
        description: "Using a News API i was able to get news on different countries and stuff but its not deployment ready yet",
        link: 'https://tammy-news.pxxl.click/',
        tags: ["React", "NEWSAPI", "CSS"],
        img: [
            news_1,
            news_2,
        ],

    },

]