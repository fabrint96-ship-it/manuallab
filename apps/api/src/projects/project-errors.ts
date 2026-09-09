export class ProjectNotFoundError extends Error {
  constructor(id: string) {
    super(`Project not found: ${id}`);
    this.name = 'ProjectNotFoundError';
  }
}

export class ProjectSlugConflictError extends Error {
  constructor(slug: string, options?: ErrorOptions) {
    super(`Project slug already exists: ${slug}`, options);
    this.name = 'ProjectSlugConflictError';
  }
}
