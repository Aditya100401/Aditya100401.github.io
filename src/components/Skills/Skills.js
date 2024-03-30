import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.languages.length && !skills.tools.length && !skills.concepts.length)
    return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>My Tech Stack</h2>
      <div className='skills__categories'>
        {/* Languages */}
        {skills.languages.length > 0 && (
          <div className='skills__category'>
            <h3>Languages</h3>
            <ul className='skills__list'>
              {skills.languages.map((language) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  <img src={language.icon} alt={language.name} className="skill-icon" />
                  {language.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ML/Data */}
        {skills.ML_Data.length > 0 && (
          <div className='skills__category'>
            <h3>ML/Data</h3>
            <ul className='skills__list'>
              {skills.ML_Data.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                {skill.name}
              </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Web */}
        {skills.Web.length > 0 && (
          <div className='skills__category'>
            <h3>Web</h3>
            <ul className='skills__list'>
              {skills.Web.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                {skill.name}
              </li>
              ))}
            </ul>
          </div>
        )}

        {/* Other */}
        {skills.Tools.length > 0 && (
          <div className='skills__category'>
            <h3>Tools</h3>
            <ul className='skills__list'>
              {skills.Tools.map((tool) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                <img src={tool.icon} alt={tool.name} className="skill-icon" />
                {tool.name}
              </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills
