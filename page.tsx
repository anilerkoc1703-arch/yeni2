import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { AiChatAgent } from "@/components/ai-chat-agent"
import { Team } from "@/components/team"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <AiChatAgent />
        <FAQ />
        <Testimonials />
        <Contact />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
