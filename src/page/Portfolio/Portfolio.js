import { faCircleCheck, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import muzahidul from '../../images/Muzahidul.png'

const Portfolio = () => {

    const skills = [
        { name: "HTML5, CSS3" },
        { name: "Bootstrap, Tailwind CSS" },
        { name: "JavaScript (ES6)" },
        { name: "React" },
        { name: "Firebase Authentication" },
        { name: "MongoDB Database" },
        { name: "Node JS" },
        { name: "Express JS" }
    ];
    const education = [
        {
            _id: 1,
            degree: "Secondary School Certificate",
            schoolCollage: "Gangachara Adarsha High School",
            board: "Dinajpur",
            result: "GPA- 4.68",
            year: "2017",
        },
        {
            _id: 2,
            degree: "Higher Secondary Certificate",
            schoolCollage: "Gangachara Govt Collage	",
            board: "Dinajpur",
            result: "GPA- 4.50",
            year: "2020",
        },
        {
            _id: 3,
            degree: "BA Honours (Bangla)",
            schoolCollage: "National University	",
            board: "National University ",
            result: "1st Year",
            year: "",
        },
    ]

    return (
        <div className='lg:w-3/4 mx-auto px-12'>
            <h2 className='text-center text-3xl mb-10'>Portfolio </h2>
            <div className='flex justify-between mb-10'>
                <div >
                    <div>
                        <h2 className='text-2xl font-bold'>MD: Muzahidul Islam</h2>
                    </div>
                    <div className='my-4 font-bold'>
                        <h2 className='text-xl'>B.A Honours (Bangla) (1st Year)</h2>
                        <h2 className='text-xl'>Junior Front-End Web Developer</h2>
                    </div>
                    <div className='mt-4 font-medium'>
                        <h3 className=''>Contact No	: +88 01750-160697</h3>
                        <h3 className=''>Email : mujahidul.core@gmail.com </h3>
                        <h3 className=''>Address : Gannarpar, Gangachara (5410), Rangpur.  </h3>
                    </div>
                </div>
                <div>
                    <img className='w-[175px]' src={muzahidul} alt="" />
                </div>
            </div>
            <div className='mb-10'>
                <p className='text-lg font-semibold bg-slate-300 pl-2 mb-5'>Educational Background:</p>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Degree</th>
                                <th>School/ College</th>
                                <th>Board</th>
                                <th>Result</th>
                                <th>Passing Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                education.map(eb => <tr key={eb._id}>
                                    <td>{eb.degree}</td>
                                    <td>{eb.schoolCollage}</td>
                                    <td>{eb.board}</td>
                                    <td>{eb.result}</td>
                                    <td>{eb.year}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mb-10'>
                <p className='text-lg font-semibold bg-slate-300 pl-2  mb-5'>Skills :</p>
                <div className='pl-8'>
                    {
                        skills.map((skill, index) => <p key={index} className='font-medium'><FontAwesomeIcon icon={faCircleCheck} className='mr-5' />{skill.name}</p>)
                    }
                </div>
            </div>
            <div className='mb-10 '>
                <p className='text-lg font-semibold bg-slate-300 pl-2  mb-5'>Project Link:</p>
                <div className='pl-8'>
                    <p className='text-blue-600'><FontAwesomeIcon icon={faLink} className='mr-5' /> <Link to={'https://eg-grocery.web.app/'}>https://eg-grocery.web.app/</Link> </p>
                    <p className='text-blue-600'><FontAwesomeIcon icon={faLink} className='mr-5' /> <Link to={'https://baker-tourist-guide.web.app/'}>https://baker-tourist-guide.web.app/</Link> </p>
                    <p className='text-blue-600'><FontAwesomeIcon icon={faLink} className='mr-5' /> <Link to={'https://laptop-reviews-muzahidmd9.netlify.app/'}>https://laptop-reviews-muzahidmd9.netlify.app/</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;