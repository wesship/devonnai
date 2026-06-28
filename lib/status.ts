export type ServiceState = "operational" | "configured" | "planned" | "degraded";

export type ServiceStatus = {
  name: string;
  provider: string;
  state: ServiceState;
  detail?: string;
};

async function checkUrl(url: string | undefined, fallback: ServiceStatus): Promise<ServiceStatus> {
  if (!url) return fallback;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(url, { method: "GET", signal: controller.signal });
    return {
      ...fallback,
      state: response.ok ? "operational" : "degraded",
      detail: response.ok ? `Health check passed: ${response.status}` : `Health check failed: ${response.status}`,
    };
  } catch {
    return {
      ...fallback,
      state: "degraded",
      detail: "Health check request failed or timed out",
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function getServiceStatuses(): Promise<ServiceStatus[]> {
  const frontend: ServiceStatus = { name: "Frontend", provider: "Vercel", state: "operational", detail: "Public Next.js frontend" };
  const api: ServiceStatus = { name: "API", provider: "Railway / Next API", state: "operational", detail: "Public status endpoint available" };

  const database = checkUrl(process.env.SUPABASE_HEALTH_URL, {
    name: "Database",
    provider: "Supabase",
    state: "configured",
    detail: "Ready for health check integration",
  });

  const vector = checkUrl(process.env.PINECONE_HEALTH_URL, {
    name: "Vector Memory",
    provider: "Pinecone",
    state: "configured",
    detail: "Ready for index health integration",
  });

  const orchestrator = checkUrl(process.env.HERMES_HEARTBEAT_URL, {
    name: "Orchestrator",
    provider: "Hermes",
    state: "configured",
    detail: "Ready for orchestrator heartbeat integration",
  });

  const railway = checkUrl(process.env.RAILWAY_STATUS_URL, {
    name: "Backend Runtime",
    provider: "Railway",
    state: "configured",
    detail: "Ready for backend runtime health integration",
  });

  return [
    frontend,
    api,
    await railway,
    await database,
    await vector,
    await orchestrator,
    { name: "CI/CD", provider: "GitHub Actions", state: "configured", detail: "Verify workflow committed" },
  ];
}
