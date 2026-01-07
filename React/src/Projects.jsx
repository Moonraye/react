import {useState} from 'react'
import Card from './Card.jsx'
import Carousel from './Carousel.jsx';
import projectsData from './data/projects-data.json';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
    <section id= 'projects' className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="relative overflow-hidden m-6">
            <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <div className="flex transition-transform duration-500 ease-in-out" style={window.innerWidth < 768 ? {transform: `translateX(-${currentIndex * (100/1)}%)`} : {transform: `translateX(-${currentIndex * (100/3)}%)`}}>
                {projectsData.map((project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </div>  
    </section>
    )
}