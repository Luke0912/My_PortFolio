import React from 'react'
import './AIVoice.css'
import { aiData } from '../../data/aiData'
import useReveal from '../../utils/useReveal'

const CATEGORY_COLORS = {
  'LLM':             '#8b5cf6',
  'Protocol':        '#00d4b4',
  'Speech-to-Text':  '#3b82f6',
  'Text-to-Speech':  '#ec4899',
  'Speech AI':       '#f59e0b',
  'Vision':          '#10b981',
}

function AIVoice() {
  const sectionRef = useReveal()

  return (
    <section id="ai-voice" className="section aivoice" aria-label="AI and Voice Engineering section">
      <div className="container">
        <div ref={sectionRef}>
          <div className="section-label reveal">AI & Voice Engineering</div>
          <h2 className="section-title reveal reveal-delay-1">
            Conversational AI & Voice Systems
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle reveal reveal-delay-2">
            {aiData.description}
          </p>

          {/* Tools grid */}
          <div className="aivoice__tools reveal reveal-delay-3">
            {aiData.tools.map(tool => (
              <div key={tool.id} className="aivoice__tool">
                <div className="aivoice__tool-header">
                  <span
                    className="aivoice__tool-category"
                    style={{ '--cat-color': CATEGORY_COLORS[tool.category] || '#6b7280' }}
                  >
                    {tool.category}
                  </span>
                  <h3 className="aivoice__tool-name">{tool.name}</h3>
                </div>
                <p className="aivoice__tool-desc">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="aivoice__caps reveal reveal-delay-4">
            <h3 className="aivoice__caps-title">What I build with AI</h3>
            <div className="aivoice__caps-grid">
              {aiData.capabilities.map((cap, i) => (
                <div key={i} className="aivoice__cap">
                  <div className="aivoice__cap-accent" aria-hidden="true" />
                  <h4 className="aivoice__cap-title">{cap.title}</h4>
                  <p className="aivoice__cap-desc">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIVoice
