export class Issue {
  id?: number;
  title: string;
  slug: string;
  description: string;
  project_id: number;
  reporter: number;
  assignee: number;
  type: string;
  status: string;
  priority: string;
  created_at?: string;
  updated_at?: string;
}
