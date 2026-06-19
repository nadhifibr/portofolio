"use client";

export default function Contact() {
  return (
    <section id="contact" className="w-full pt-16 pb-8 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Column: Text & Info */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-foreground/90">
              Have a project in mind?<br/>Let's work together.
            </h3>
            <p className="text-foreground/70 text-lg max-w-md">
              Feel free to reach out for collaborations, freelance projects, or just a friendly chat. I'm always open to discussing new opportunities.
            </p>
            
            <div className="flex flex-col space-y-4 pt-4">
              <a href="mailto:mnadhifibr@gmail.com" className="flex items-center space-x-4 p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors w-fit group">
                <div className="p-3 bg-foreground text-background rounded-xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="font-medium">mnadhifibr@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors w-fit group cursor-default">
                <div className="p-3 bg-foreground text-background rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-medium">South Tangerang, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full bg-foreground/5 p-8 rounded-3xl border border-foreground/10 shadow-sm">
            <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full p-4 rounded-2xl bg-background/50 border border-foreground/10 focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full p-4 rounded-2xl bg-background/50 border border-foreground/10 focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full p-4 rounded-2xl bg-background/50 border border-foreground/10 focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 mt-2 rounded-2xl bg-foreground text-background font-semibold text-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer inside the section */}
        <div className="w-full border-t border-foreground/10 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Nadhif Ibrahim. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with ❤️ </p>
        </div>
      </div>
    </section>
  );
}
