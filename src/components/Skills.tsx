import pythonLogo from '../assets/logos/python-logo.png';
import htmlLogo from '../assets/logos/html-logo.png';
import cssLogo from '../assets/logos/css3.png';
import jsLogo from '../assets/logos/js-logo.png';
import tsLogo from '../assets/logos/ts-logo.png';
import tailwindLogo from '../assets/logos/tailwind-logo.webp';
import './styles.scss'

const Skills = () => {
    return (
        <>
            <h1 className="title text-center bg-transparent">Skills</h1>
        <section className="grid grid-cols-4 md:grid-cols-6">
            <div className="bg-sky-700 skill-box  text-center p-5 lg:p-12">
                <img src={pythonLogo} className='object-scale-down skill-logo' />
                
            </div>
            <div className="bg-orange-600 skill-box text-center p-5 lg:p-12">
            <img src={htmlLogo} className='skill-logo' />
                
            </div>
            <div className="bg-blue-700 skill-box text-center p-5 lg:p-12">
            <img src={cssLogo} className='skill-logo' />
                
            </div>
            <div className="bg-yellow-400 skill-box text-center p-5 lg:p-12">
                <img src={jsLogo} className='skill-logo' />
                
            </div>
            <div className="bg-blue-500 skill-box text-center p-5 lg:p-12">
            <img src={tsLogo} className='skill-logo' />
                
            </div>
            <div className="bg-sky-300 skill-box text-center p-5 lg:p-12">
            <img src={tailwindLogo} className='skill-logo' />
                
            </div>
            <div className="bg-sky-700 skill-box text-center p-5 lg:p-12">
                <img src={pythonLogo} className='skill-logo' />
                
            </div>
            <div className="bg-orange-600 skill-box text-center p-5 lg:p-12">
            <img src={htmlLogo} className='skill-logo' />
                
            </div>
            <div className="bg-blue-700 skill-box text-center p-5 lg:p-12">
            <img src={cssLogo} className='skill-logo' />
                
            </div>
            <div className="bg-yellow-400 skill-box text-center p-5 lg:p-12">
                <img src={jsLogo} className='skill-logo' />
                
            </div>
            <div className="bg-blue-500 skill-box text-center p-5 lg:p-12">
            <img src={tsLogo} className='skill-logo' />
                
            </div>
            <div className="bg-sky-300 skill-box text-center p-5 lg:p-12">
            <img src={tailwindLogo} className='skill-logo' />
                
            </div>
        </section>
        </>
    )
}

export default Skills;