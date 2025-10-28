import { useEffect } from 'react'

const useSEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update meta description
    if (description) {
      updateMetaTag('name', 'description', description)
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords)
    }

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', image)
    updateMetaTag('property', 'og:url', url)
    updateMetaTag('property', 'og:type', type)

    // Update Twitter Card tags
    updateMetaTag('property', 'twitter:title', title)
    updateMetaTag('property', 'twitter:description', description)
    updateMetaTag('property', 'twitter:image', image)

    // Update canonical URL
    if (url) {
      updateCanonicalUrl(url)
    }
  }, [title, description, keywords, image, url, type])
}

const updateMetaTag = (attribute, value, content) => {
  if (!content) return

  let metaTag = document.querySelector(`meta[${attribute}="${value}"]`)
  
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(attribute, value)
    document.head.appendChild(metaTag)
  }
  
  metaTag.setAttribute('content', content)
}

const updateCanonicalUrl = (url) => {
  let canonicalTag = document.querySelector('link[rel="canonical"]')
  
  if (!canonicalTag) {
    canonicalTag = document.createElement('link')
    canonicalTag.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalTag)
  }
  
  canonicalTag.setAttribute('href', url)
}

export default useSEO
