export const architectureData = {
  description: 'A representation of the types of system architectures I design and work across — from client interfaces through APIs, backend services, data persistence, messaging, and AI integrations.',
  layers: [
    {
      id: 'client',
      label: 'Client Layer',
      nodes: [
        { id: 'react', label: 'React / Next.js', tooltip: 'Frontend applications and server-rendered web interfaces' },
      ],
      color: '#6b7280',
    },
    {
      id: 'api',
      label: 'API Layer',
      nodes: [
        { id: 'graphql', label: 'GraphQL', tooltip: 'Flexible API layer for structured data queries and mutations' },
        { id: 'rest', label: 'REST APIs', tooltip: 'RESTful HTTP APIs for standard resource-based communication' },
        { id: 'sse', label: 'SSE / WebSockets', tooltip: 'Real-time bidirectional and server-push communication channels' },
      ],
      color: '#00d4b4',
    },
    {
      id: 'backend',
      label: 'Backend Services',
      nodes: [
        { id: 'nodejs', label: 'Node.js', tooltip: 'Primary backend runtime for API services and business logic' },
        { id: 'python', label: 'Python', tooltip: 'AI pipelines, automation scripts, and data processing services' },
      ],
      color: '#00d4b4',
    },
    {
      id: 'data',
      label: 'Data Layer',
      nodes: [
        { id: 'postgresql', label: 'PostgreSQL', tooltip: 'Primary relational database for structured, transactional data' },
        { id: 'redis', label: 'Redis', tooltip: 'In-memory caching and fast-access data for performance-critical paths' },
        { id: 'mongodb', label: 'MongoDB', tooltip: 'Document store for flexible, schema-variable data structures' },
      ],
      color: '#6b7280',
    },
    {
      id: 'messaging',
      label: 'Messaging & Async',
      nodes: [
        { id: 'rabbitmq', label: 'RabbitMQ', tooltip: 'Asynchronous event-driven processing and inter-service messaging' },
        { id: 'bullmq', label: 'BullMQ', tooltip: 'Redis-backed job queues for background task processing' },
      ],
      color: '#f59e0b',
    },
    {
      id: 'integrations',
      label: 'AI & Integrations',
      nodes: [
        { id: 'ai', label: 'AI / LLM', tooltip: 'Gemini, conversational AI, and intelligent workflow automation' },
        { id: 'voice', label: 'Voice / Telephony', tooltip: 'Twilio, Exotel, TCL — AI voice agents and live transcription' },
        { id: 'crm', label: 'CRM / External', tooltip: 'Microsoft Dynamics 365 and third-party business integrations' },
      ],
      color: '#8b5cf6',
    },
  ],
}
