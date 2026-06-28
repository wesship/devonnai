import type { NextApiRequest, NextApiResponse } from "next";

type StatusResponse = {
  status: "operational";
  checkedAt: string;
  services: Array<{
    name: string;
    provider: string;
    state: "operational" | "configured" | "planned";
  }>;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<StatusResponse>) {
  res.status(200).json({
    status: "operational",
    checkedAt: new Date().toISOString(),
    services: [
      { name: "Frontend", provider: "Vercel", state: "operational" },
      { name: "API", provider: "Railway / Next API", state: "operational" },
      { name: "Database", provider: "Supabase", state: "configured" },
      { name: "Vector Memory", provider: "Pinecone", state: "configured" },
      { name: "Orchestrator", provider: "Hermes", state: "configured" },
      { name: "CI/CD", provider: "GitHub Actions", state: "configured" }
    ]
  });
}
