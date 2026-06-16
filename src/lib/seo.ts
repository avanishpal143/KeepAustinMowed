import { useEffect, useState } from 'react'

/**
 * Custom hook to dynamically manage Title and Meta Description tags for SEO
 */
export const useSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = title
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)
  }, [title, description])
}

/**
 * Trigger path change in custom router
 */
export const navigateTo = (path: string) => {
  // Check if it's an internal path
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('sms:')) {
    window.location.href = path
    return
  }
  
  window.history.pushState(null, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

/**
 * React hook to listen to custom client routing popstate events
 */
export const useLocation = () => {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname)
      // Scroll to top on navigation to make it feel like a new page
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
    window.addEventListener('popstate', handlePopState)
    
    // Listen for custom push state triggers too
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return path
}
