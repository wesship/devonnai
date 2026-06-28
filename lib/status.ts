export type ServiceState = "operational" | "configured" | "planned" | "degraded";

export type ServiceStatus = {
  name: string;
  provider: string;
  state: ServiceState;
  detail?: string;
};

export async function getServiceStatuses(): Promise<ServiceStatus[]> {
  return [
    { name: "Frontend", provider: "Vercel", state: "operational", detail: "Public Next.js frontend" },
    { name: "API", provider: "Railway / Next API", state: "operational", detail: "Public status endpoint available" },
    { name: "Database", provider: "Supabase", state: "configured", detail: "Ready for health check integration" },
    { name: "Vector Memory", provider: "Pinecone", state: "configured", detail: "Ready for index health integration" },
    { name: "Orchestrator", provider: "Hermes", state: "configured", detail: "Ready for orchestrator heartbeat integration" },
    { name: "CI/CD", provider: "GitHub Actions", state: "configured", detail: "Verify workflow committed" }
  ];
}
