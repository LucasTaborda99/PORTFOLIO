import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiece = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__cards">
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>HTML</h5>
              </div>
              <small>Advanced</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>CSS</h5>
              </div>
              <small>Intermediate</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>BOOTSTRAP</h5>
              </div>
              <small>Basic</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>JAVASCRIPT</h5>
              </div>
              <small>Intermediate</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>REACT</h5>
              </div>
              <small>Basic</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>UX/UI</h5>
              </div>
              <small>Advanced</small>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__cards">
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>JAVA</h5>
              </div>
              <small>Intermediate</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>PHP</h5>
              </div>
              <small>Basic</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>C</h5>
              </div>
              <small>Basic</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>C++</h5>
              </div>
              <small>Intermediate</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>SQL</h5>
              </div>
              <small>Intermediate</small>
            </article>
            <article className="experience__card">
              <div className="experience__icon_description">
                <BsPatchCheckFill className="experience__icon" />
                <h5>GIT</h5>
              </div>
              <small>Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiece;
