import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

      <div className="services__UI">
          <div className="title">
              <h4>Website Development</h4>
          </div>
            <div className="services__cards">
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Coding with best practices</h5>
              </article>
                <article className="card">
                  <BsCheckLg className='icon_check'/>
                  <h5>Use of new technologies</h5>
                </article>
                <article className="card">
                  <BsCheckLg className='icon_check'/>
                  <h5>Integration with other applications</h5>
                </article>
            </div>
        </div>

        <div className="services__UI">
          <div className="title">
              <h4>UI/UX</h4>
          </div>
            <div className="services__cards">
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Great visual designs</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Development of content production</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Responsive websites and templates</h5>
              </article>
            </div>
        </div>

        <div className="services__UI">
          <div className="title">
              <h4>Website Design</h4>
          </div>
            <div className="services__cards">
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Websites that strengthens your brand</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Quality assurance and ease of use</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Simplicity for your audience</h5>
              </article>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Services