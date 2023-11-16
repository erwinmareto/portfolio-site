import Portrait from "../assets/france.webp";
import Skills from "./Skills";
import Carousel from "./Carousel";
import "./styles.scss";

const Projects = () => {
  return (
    <section className="projects mx-auto py-10">
      <div className="container">
        <h1 className="title title-bg text-6xl md:text-8xl">Projects</h1>

        <div className="flex flex-col mt-10">
          <div className="grid">
            <img
              src={Portrait}
              alt="portrait"
              width={500}
              height={250}
              className="project-img justify-self-center cool-border"
            />
          </div>
          <article className="flex-col text-center m-5">
            <p className="text-5xl mt-10">Lorem ipsum</p>
            <ul className="badge-list">
              <li className="badge">React</li>
              <li className="badge">React</li>
              <li className="badge">React</li>
            </ul>
            <p className="text-2xl mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              sit incidunt earum asasaas
            </p>
          </article>
        </div>
        
        <div className="flex flex-col mt-10 md:flex-row">
          <div className="flex-col text-center m-10">
            <p className="text-3xl mt-10">Lorem ipsum</p>
            <p className="text-xl mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              sit incidunt earum asasaas
            </p>
          </div>
          <img src={Portrait} alt="portrait" width={500} height={250} />
        </div>
        <Carousel />
      </div>
      <Skills />
    </section>
  );
};

export default Projects;
