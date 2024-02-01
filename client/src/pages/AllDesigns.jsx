import React from 'react'
import Navbar from '../components/Navbar'
import { FaRegEye } from "react-icons/fa";

// images import
// profiles
import person1 from "../images/person1.jpg"
import person2 from "../images/person2.jpg"
import person3 from "../images/person3.jpg"
import person4 from "../images/person4.jpg"
import person5 from "../images/person5.jpg"
import person6 from "../images/person6.jpg"
// posts
import design1 from "../images/design1.jpg"
import design2 from "../images/design2.jpg"
import design3 from "../images/design3.jpg"
import design4 from "../images/design4.jpg"
import design5 from "../images/design5.jpg"
import design6 from "../images/design6.jpg"
import design7 from "../images/design7.jpg"
import design8 from "../images/design8.jpg"
import design9 from "../images/design9.jpg"
import design10 from "../images/design10.jpg"
import design11 from "../images/design11.jpg"
import design12 from "../images/design12.jpg"
import design13 from "../images/design13.jpg"
import design14 from "../images/design14.jpg"
import design15 from "../images/design15.jpg"
import design16 from "../images/design16.jpg"
import design17 from "../images/design17.jpg"

import { motion } from "framer-motion"


function AllDesigns() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Navbar />
      <div className='page-header'>
        <h1>All Designs</h1>
      </div>
      <div className="gallery">

        <div className="gallery-item">
          <img className='post' src={design6} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 3.2M</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design1} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 392K</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design2} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 2k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design4} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 32k</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design5} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 97K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design3} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 231</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design7} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 424k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design8} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 6k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design9} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 1k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design15} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 4k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design16} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design10} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design11} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 9K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design12} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 393k</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design13} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 73k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design14} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 289</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design17} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 249</span></h1>
              <p>1 days ago</p>
            </div>
          </div>
        </div>













        <div className="gallery-item">
          <img className='post' src={design6} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 3.2M</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design1} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 392K</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design2} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 2k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design4} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 32k</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design5} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 97K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design3} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 231</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design7} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 424k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design8} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 6k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design9} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 1k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design15} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 4k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design16} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design10} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design11} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 9K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design12} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 393k</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design13} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 73k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design14} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 289</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design17} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 249</span></h1>
              <p>1 days ago</p>
            </div>
          </div>
        </div>













        <div className="gallery-item">
          <img className='post' src={design6} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 3.2M</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design1} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 392K</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design2} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 2k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design4} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 32k</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design5} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 97K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design3} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 231</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design7} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 424k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design8} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 6k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design9} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 1k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design15} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 4k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design16} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design10} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design11} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 9K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design12} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 393k</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design13} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 73k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design14} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 289</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design17} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 249</span></h1>
              <p>1 days ago</p>
            </div>
          </div>
        </div>


















        <div className="gallery-item">
          <img className='post' src={design6} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 3.2M</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design1} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 392K</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design2} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 2k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design4} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 32k</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design5} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 97K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design3} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 231</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design7} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 424k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design8} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 6k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design9} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 1k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design15} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 4k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design16} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design10} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design11} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 9K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design12} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 393k</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design13} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 73k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design14} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 289</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design17} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 249</span></h1>
              <p>1 days ago</p>
            </div>
          </div>
        </div>





        <div className="gallery-item">
          <img className='post' src={design6} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 3.2M</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design1} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 392K</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design2} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 2k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design4} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 32k</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design5} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 97K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design3} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 231</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design7} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 424k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design8} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span><span><FaRegEye /> 6k</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design9} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 1k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design15} />
          <div className='owner'>
            <img className='profile' src={person3} />
            <div className='op-details'>
              <h1><span>Sophia</span><span><FaRegEye /> 4k</span></h1>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design16} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design10} />
          <div className='owner'>
            <img className='profile' src={person4} />
            <div className='op-details'>
              <h1><span>Christopher</span><span><FaRegEye /> 23K</span></h1>
              <p>3 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design11} />
          <div className='owner'>
            <img className='profile' src={person5} />
            <div className='op-details'>
              <h1><span>Benjamin</span><span><FaRegEye /> 9K</span></h1>
              <p>6 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design12} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Olivia</span><span><FaRegEye /> 393k</span></h1>
              <p>a month ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design13} />
          <div className='owner'>
            <img className='profile' src={person1} />
            <div className='op-details'>
              <h1><span>Alexander</span><span><FaRegEye /> 73k</span></h1>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design14} />
          <div className='owner'>
            <img className='profile' src={person2} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 289</span></h1>
              <p>5 days ago</p>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img className='post' src={design17} />
          <div className='owner'>
            <img className='profile' src={person6} />
            <div className='op-details'>
              <h1><span>Emily</span> <span><FaRegEye /> 249</span></h1>
              <p>1 days ago</p>
            </div>
          </div>
        </div>

      </div>
      </motion.div>
  )
}

export default AllDesigns