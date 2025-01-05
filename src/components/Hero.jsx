import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaDownload, FaSquareXTwitter } from "react-icons/fa6";
import Profile from '../assets/heroImg.png';


function Hero() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-l from-gray-950 to-gray-900 text-white flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 md:py-0">
      <div className="w-full max-w-7xl mx-auto mt-8 md:mt-20">
        <div className="flex flex-col md:flex-row items-center gap-8 xl:gap-16">
          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            
              <motion.h1 
              initial={{opacity:0, x:-100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1, delay:0.2}}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi <span className="inline-block animate-wave"></span>, I'm{" "}
                <span className="text-blue-400 block md:inline">Nure Alam</span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-gray-200"
                initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.4}}
              >
                Full-Stack Developer | MERN Stack Enthusiast
              </motion.p>

            <motion.p
              className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto md:mx-0"
              initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.4, delay:0.5}}
            >
              A passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js), dedicated to building scalable, dynamic web applications and delivering exceptional user experiences.
            </motion.p>
              <motion.button
              onClick={() => window.open("https://drive.google.com/file/d/1zXXXAczNC8n93rio_ziTsY6eBBGrwtPY/view", "_blank")}
              initial={{opacity:0, x:-100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.4, delay:0.5}}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-all duration-300 group shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] border-2 border-blue-400">
                <FaDownload
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
                <span className="text-sm sm:text-base">Download CV</span>
              </motion.button>

            <motion.div
              className="flex gap-4 sm:gap-6 justify-center md:justify-start text-gray-300 pt-4 md:pt-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5 }}
            >
              <FaFacebook
              onClick={() => window.open("https://www.facebook.com/profile.php?id=100019022316999", "_blank")}
              className="hover:text-blue-400 text-xl cursor-pointer" />
              <FaGithub
              onClick={() => window.open("https://github.com/NureAlam68", "_blank")}
              className="hover:text-blue-400 text-xl cursor-pointer" />
              <FaLinkedin
              onClick={() => window.open("https://www.linkedin.com/in/md-nure-alam-444887266/", "_blank")}
              className="hover:text-blue-400 text-xl cursor-pointer" />
              <FaSquareXTwitter className="hover:text-blue-400 text-xl" />
            </motion.div>
          </div>

          {/* Image Side */}
          <div
            className="w-full md:w-1/2"
          >
            <div className="relative max-w-[300px] sm:max-w-[400px] mx-auto">
              <div className="aspect-[3/4] rounded-2xl">
                <motion.img
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:1.4, delay:0}}
                  src={Profile}
                  alt="Nure Alam"
                  className="w-full h-full object-cover rounded-[20px] border border-blue-600 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
