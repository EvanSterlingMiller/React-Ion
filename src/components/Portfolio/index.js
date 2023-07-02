import React from 'react'
import GigGuide from '../../assets/images/GigGuide'
import HealthHive from '../../assets/images/HealthHive'
import CodeQuiz from '../../assets/images/CodeQuiz'
import WeatherDashboard from '../../assets/images/WeatherDashboard'

function Portfolio() {
    return(
        <section class='portfolio'>
            <div class='row row-cols1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4'>
                <div class='col'>
                    <div class='card'>
                        <img src={GigGuide} alt='lookUp' class='card-img-top' />
                        <div class='card-body'>
                            <a href='https://evansterlingmiller.github.io/Gig_Guide/' target='_blank' rel='noreferrer'>
                                <button>GigGuide Website</button>
                            </a>
                            <a href='https://github.com/EvanSterlingMiller/Gig_Guide' target='_blank' rel='noreferrer'>
                                <button>github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='row row-cols1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4'>
                <div class='col'>
                    <div class='card'>
                        <img src={HealthHive} alt='lookUp' class='card-img-top' />
                        <div class='card-body'>
                            <a href='https://healthhivemedical.herokuapp.com/welcome' target='_blank' rel='noreferrer'>
                                <button>HealthHive Website</button>
                            </a>
                            <a href='https://github.com/Basil-NB/HealthHive' target='_blank' rel='noreferrer'>
                                <button>github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row row-cols1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4'>
                <div class='col'>
                    <div class='card'>
                        <img src={WeatherDashboard} alt='lookUp' class='card-img-top' />
                        <div class='card-body'>
                            <a href='https://evansterlingmiller.github.io/Weather_Dashboard/' target='_blank' rel='noreferrer'>
                                <button>Weather Dashboard Website</button>
                            </a>
                            <a href='https://github.com/EvanSterlingMiller/Weather_Dashboard' target='_blank' rel='noreferrer'>
                                <button>github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row row-cols1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4'>
                <div class='col'>
                    <div class='card'>
                        <img src={CodeQuiz} alt='lookUp' class='card-img-top' />
                        <div class='card-body'>
                            <a href='https://evansterlingmiller.github.io/code_quiz/' target='_blank' rel='noreferrer'>
                                <button>Code Quiz Website</button>
                            </a>
                            <a href='https://github.com/EvanSterlingMiller/code_quiz' target='_blank' rel='noreferrer'>
                                <button>github</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Portfolio