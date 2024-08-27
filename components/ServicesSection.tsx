import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Monitor, Palette, Users } from 'lucide-react'

export default function ServicesSection() {
    const services = [
        { 
          title: 'Web Development', 
          description: 'We create responsive, high-performance websites, utilizing the latest technologies to ensure scalability, security, and an outstanding user experience.', 
          icon: Globe 
        },
        { 
          title: 'Mobile Apps', 
          description: 'Our team develops robust native and cross-platform mobile apps for both iOS and Android, ensuring seamless performance and modern design.', 
          icon: Smartphone 
        },
        { 
          title: 'Domain & Web Hosting', 
          description: 'We offer reliable domain registration and secure web hosting services, backed by scalable cloud infrastructure for enhanced uptime and performance.', 
          icon: Server 
        },
        { 
          title: 'Desktop Apps', 
          description: 'From automation to optimization, we develop powerful desktop applications tailored to streamline your business operations and improve efficiency.', 
          icon: Monitor 
        },
        { 
          title: 'UI/UX Design', 
          description: 'Our design experts craft user-centric interfaces, combining aesthetic appeal with intuitive functionality to elevate your digital products.', 
          icon: Palette 
        },
        { 
          title: 'Consulting', 
          description: 'We provide strategic technology consulting, helping businesses navigate digital transformation and implement cutting-edge solutions effectively.', 
          icon: Users 
        }
      ];
      

  return (
    <section id="services" className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-br from-purple-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white border-opacity-20"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 bg-opacity-50 p-3 rounded-full mr-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">{title}</h3>
              </div>
              <p className="text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}