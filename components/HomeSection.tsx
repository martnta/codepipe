import { motion } from 'framer-motion'
import { ChevronDown, Code, Zap, Globe, Monitor } from 'lucide-react'
import Link from 'next/link'


export default function HomeSection() {
  const services = [
    { icon: Code, title: 'Web Development' },
    { icon: Zap, title: 'Mobile Apps' },
    { icon: Globe, title: 'Consultation & IT Solutions' },
    {icon: Monitor, title: 'Desktop Apps'}
  ]

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center snap-start bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Welcome to <span className="text-purple-400">CodePipe</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl mb-8"
            >
              Transforming ideas into digital reality
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg mb-8"
            >
              At CodePipe, we specialize in crafting cutting-edge software solutions that drive innovation and propel businesses forward. Our team of expert developers and designers are passionate about turning your vision into a powerful digital presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link href="#contact" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105">
                Book now
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.2, duration: 0.8 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-center mt-12"
      >
        <Link href="#about" className="inline-block" aria-label="Scroll to About section">
          <ChevronDown className="w-10 h-10 text-cyan-400 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}