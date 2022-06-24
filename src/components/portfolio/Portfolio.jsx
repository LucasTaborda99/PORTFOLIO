import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project_backtrack.png'
import IMG2 from '../../assets/project_cadastro_de_funcionarios.png'
import IMG3 from '../../assets/project_my_weather.png'
import IMG4 from '../../assets/project_pizza_shop.png'
import IMG5 from '../../assets/project_starbucks.png'
import IMG6 from '../../assets/project_my_calculator.png'
import IMG7 from '../../assets/project_my_budget.png'
import IMG8 from '../../assets/project_medicenter.png'
import IMG9 from '../../assets/project_consumo_sustentavel.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Backtrack',
    github: 'https://github.com/LucasTaborda99/backtrack_aep2_front_end_template',
    demo: 'https://backtrack-ads-aep.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Cadastro de Funcionários',
    github: 'https://github.com/LucasTaborda99/cadastro_de_funcionarios_js',
    demo: 'https://cadastro-de-funcionarios.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'My Weather',
    github: 'https://github.com/LucasTaborda99/MyWeather',
    demo: 'https://lucastaborda99.github.io/MyWeather/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pizza Shop',
    github: 'https://github.com/LucasTaborda99/PIZZA-SHOP',
    demo: 'https://lucastaborda99.github.io/PIZZA-SHOP/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Starbucks',
    github: 'https://github.com/LucasTaborda99/STARBUCKS',
    demo: 'https://lucastaborda99.github.io/STARBUCKS/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'My Calculator',
    github: 'https://github.com/LucasTaborda99/MyCalculator',
    demo: 'https://lucastaborda99.github.io/MyCalculator/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'My Budget',
    github: 'https://github.com/LucasTaborda99/MyBudget',
    demo: 'https://lucastaborda99.github.io/MyBudget/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Medicenter',
    github: 'https://github.com/LucasTaborda99/TEMPLATE',
    demo: 'https://lucastaborda99.github.io/TEMPLATE/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Consumo Sustentável',
    github: 'https://github.com/LucasTaborda99/AEP-1',
    demo: 'https://lucastaborda99.github.io/AEP1/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="cards">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article className="card__portfolio">
              <a href={demo} target='_blank'><img src={image} height='150px' alt={title} /></a>
              <h5>{title}</h5>
              <div className="buttons__portfolio">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Site</a>
              </div>
            </article>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Portfolio