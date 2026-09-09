import { type ProjectRow } from '@manuallab/database';

/** SDK table metadata reuses the persistence contract rather than redefining it. */
export interface ProjectDatabase {
  public: {
    Tables: {
      projects: {
        Row: ProjectRow;
        Insert: ProjectRow;
        Update: Partial<ProjectRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
