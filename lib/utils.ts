/**
 * Get the correct image path with basePath prefix for GitHub Pages
 * This function handles the basePath prefix needed for GitHub Pages deployment
 */
export function getImagePath(path: string): string {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Client-side: check the current pathname to determine if we're on GitHub Pages
    const currentPath = window.location.pathname;
    const isGitHubPages = currentPath.startsWith('/ShalabhSinghYadav.github.io');
    
    if (isGitHubPages) {
      // Ensure path starts with / and doesn't already have the basePath
      const cleanPath = path.startsWith('/') ? path : `/${path}`;
      if (!cleanPath.startsWith('/ShalabhSinghYadav.github.io')) {
        return `/ShalabhSinghYadav.github.io${cleanPath}`;
      }
      return cleanPath;
    }
    
    // Development or local build - return path as-is
    return path.startsWith('/') ? path : `/${path}`;
  }
  
  // Server-side: check environment variables
  const isProduction = process.env.NODE_ENV === 'production';
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
  
  if (isProduction || isGitHubActions) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/ShalabhSinghYadav.github.io${cleanPath}`;
  }
  
  // Development - return path as-is
  return path.startsWith('/') ? path : `/${path}`;
}
