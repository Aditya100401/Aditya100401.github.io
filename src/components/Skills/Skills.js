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
              {skills.languages.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools */}
        {skills.tools.length > 0 && (
          <div className='skills__category'>
            <h3>Tools</h3>
            <ul className='skills__list'>
              {skills.tools.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* concepts */}
        {skills.concepts.length > 0 && (
          <div className='skills__category'>
            <h3>concepts</h3>
            <ul className='skills__list'>
              {skills.concepts.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
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
