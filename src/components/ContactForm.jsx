import { useState } from 'react'
import { useInView } from '../App'

export default function ContactForm() {
  const [ref, isInView] = useInView()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    const mailtoSubject = encodeURIComponent(formData.subject || 'Website Enquiry')
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:Triunedynamicslimited@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
    window.location.href = mailtoLink
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 500)
  }

  return (<section id="contact" className="relative py-24 sm:py-32 overflow-hidden"><div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-triune-blue/5 rounded-full blur-[140px] pointer-events-none" /><div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-triune-accent/4 rounded-full blur-[120px] pointer-events-none" /><div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16"><div className="h-px w-full bg-gradient-to-r from-transparent via-triune-blue/30 to-transparent" /></div><div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6"><div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}><span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-triune-accent uppercase mb-6"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>Get In Touch</span><h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">Let's Build the <span className="gradient-text">Future Together</span></h2><p className="mt-5 max-w-xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">Whether you're an investor, partner, or innovator, we'd love to hear from you.</p></div></div></section>)
}