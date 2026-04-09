import { registerOTel } from '@vercel/otel'
import { type Instrumentation } from 'next'
import { trace, SpanStatusCode } from '@opentelemetry/api'

export function register() {
  registerOTel({ serviceName: process.env.OTEL_SERVICE_NAME ?? 'soundstay' })
}

export const onRequestError: Instrumentation.onRequestError = (
  err,
  request,
  context
) => {
  const span = trace.getActiveSpan()
  if (span) {
    span.recordException(err as Error)
    span.setStatus({ code: SpanStatusCode.ERROR, message: (err as Error).message })
    span.setAttribute('error', true)
    span.setAttribute('exception.slug', `err-${context.routeType}-unhandled`)
    span.setAttribute('next.route_path', context.routePath)
    span.setAttribute('next.route_type', context.routeType)
    span.setAttribute('next.router_kind', context.routerKind)
  }
}
