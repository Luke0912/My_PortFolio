import React, { useState } from 'react'
import './Architecture.css'
import { architectureData } from '../../data/architectureData'
import useReveal from '../../utils/useReveal'

function Architecture() {
  const sectionRef = useReveal()
  const [activeNode, setActiveNode] = useState(null)

  return (
    <section id="architecture" className="section architecture" aria-label="System architecture section">
      <div className="container">
        <div ref={sectionRef}>
          <div className="section-label reveal">Systems Thinking</div>
          <h2 className="section-title reveal reveal-delay-1">
            Architecture Patterns
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle reveal reveal-delay-2">
            {architectureData.description}
          </p>

          {/* Diagram */}
          <div className="arch__diagram reveal reveal-delay-3" role="img" aria-label="System architecture diagram showing layers from client to AI integrations">
            {architectureData.layers.map((layer, layerIdx) => (
              <div key={layer.id} className="arch__layer">
                {/* Layer label */}
                <div className="arch__layer-label">{layer.label}</div>

                {/* Nodes */}
                <div className="arch__nodes">
                  {layer.nodes.map(node => (
                    <button
                      key={node.id}
                      className={`arch__node${activeNode === node.id ? ' arch__node--active' : ''}`}
                      style={{ '--node-color': layer.color }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      onFocus={() => setActiveNode(node.id)}
                      onBlur={() => setActiveNode(null)}
                      aria-label={`${node.label}: ${node.tooltip}`}
                      aria-describedby={activeNode === node.id ? `tooltip-${node.id}` : undefined}
                    >
                      <span className="arch__node-label">{node.label}</span>

                      {/* Tooltip */}
                      <span
                        id={`tooltip-${node.id}`}
                        className={`arch__tooltip${activeNode === node.id ? ' arch__tooltip--visible' : ''}`}
                        role="tooltip"
                      >
                        {node.tooltip}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Connector arrow (not for last layer) */}
                {layerIdx < architectureData.layers.length - 1 && (
                  <div className="arch__connector" aria-hidden="true">
                    <div className="arch__connector-line" />
                    <div className="arch__connector-arrow">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="arch__legend reveal reveal-delay-4">
            <p className="arch__legend-label">Hover any node to learn more</p>
            <div className="arch__legend-items">
              <span className="arch__legend-item arch__legend-item--client">Client / Frontend</span>
              <span className="arch__legend-item arch__legend-item--api">API / Backend</span>
              <span className="arch__legend-item arch__legend-item--data">Data Layer</span>
              <span className="arch__legend-item arch__legend-item--msg">Messaging</span>
              <span className="arch__legend-item arch__legend-item--ai">AI / Integrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
