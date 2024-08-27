import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For this example, we'll just set the submitted state
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-br from-purple-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.png?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:contact@codepipe.com" className="text-cyan-300 hover:underline">contact@codepipe.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+1234567890" className="text-cyan-300 hover:underline">+265 (99)402-1787</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p>1002, Blantyre, Malawi</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We`ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300"
                    required
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 text-white bg-purple-500 bg-opacity-80 rounded-md hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 flex items-center justify-center transition duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}