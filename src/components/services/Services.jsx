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
              <h4>UI/UX Design</h4>
          </div>
            <div className="services__cards">
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Lorem ipsum dolor sit amet consectetur!</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Lorem ipsum dolor sit amet consectetur!</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Lorem ipsum dolor sit amet consectetur!</h5>
              </article>
            </div>
        </div>

        <div className="services__UI">
          <div className="title">
              <h4>UI/UX Design</h4>
          </div>
            <div className="services__cards">
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Lorem ipsum dolor sit amet consectetur!</h5>
              </article>
                <article className="card">
                  <BsCheckLg className='icon_check'/>
                  <h5>Lorem ipsum dolor sit amet consectetur!</h5>
                </article>
                <article className="card">
                  <BsCheckLg className='icon_check'/>
                  <h5>Lorem ipsum dolor sit amet consectetur!</h5>
                </article>
              
            </div>
        </div>

        <div className="services__UI">
          <div className="title">
              <h4>UI/UX Design</h4>
          </div>
            <div className="services__cards">
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Lorem ipsum dolor sit amet consectetur!</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Lorem ipsum dolor sit amet consectetur!</h5>
              </article>
              <article className="card">
                <BsCheckLg className='icon_check'/>
                <h5>Lorem ipsum dolor sit amet consectetur!</h5>
              </article>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Services