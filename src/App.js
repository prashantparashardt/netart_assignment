import React from 'react'
import './App.css'
import logo from './logo.png';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function App () {
  return (
    <div className='page'>
      <div className='header'>
        <img src={logo} />
      </div>
      <div className='upper'>
        <div className='image1'>
          <img src={image1} />
        </div>
        <div className='image2'>
          <p style={{ fontWeight: 800}}>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{' '}
            </li>
          </ul>
          <img src={image2} />
          <p>
            Government of India has awarded the{' '}
            <span style={{ fontWeight: 800 }}>
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className='upper_heading'>
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
      <div className='image3'>
        <img src={image3} />
      </div>
      <div className='footer_text1'>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{' '}
        </p>
      </div>
      <div>
        <hr
          style={{
            color: '#ec3237',
            backgroundColor: '#ec3237',
            height: 0.5,
            borderColor: '#ec3237'
          }}
        />
      </div>
      <div >
        <p style={{ textAlign: 'center', fontWeight: 800,marginBottom:0 }}>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className='upper_footer'>
          <ul className="menu">
            <li>CHEMICALS & PROCESS</li>
            <li>POWER</li>
            <li> WATER & WASTE WATER</li>
            <li>OILS & GAS</li>
            <li>PHARMA</li>
            <li>SUGARS & DISTILLERIES</li>
            <li>PAPER & PULP</li>
            <li>MARINE & DEFENCE</li>
            <li>METAL & MINING</li>
            <li>FOOD & BEVERAGE</li>
            <li>PETROCHEMICAL & REFINERIES</li>
            <li>SOLAR</li>
            <li>BUILDING</li>
            <li>HVAC</li>
            <li>FIRE FIGHTING</li>
            <li>AGRICULTURE & RESIDENTIAL</li>
          </ul>
        </p>
      </div>

      <div className='footer'>
        <p>
          <span style={{ color: '#ec3237' }}>
            <FontAwesomeIcon className='modifying_icon' icon={faPhoneAlt} />
          </span>
          Toll free 1800 200 1234
        </p>
        <p>
          <span style={{ color: '#ec3237' }}>
            <FontAwesomeIcon className='modifying_icon' icon={faFacebookF} />
          </span>
          www.facebook.com/cripumps
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faGlobe} size='2x' />
          </span>
          www.crigroup.com
        </p>
      </div>
    </div>
  )
}

export default App
