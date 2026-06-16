import React from 'react'
import { navigateTo } from '../../lib/seo'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call user's custom click handler if exists
    if (onClick) {
      onClick(e)
    }

    // Ignore if default action prevented, or modifying click
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return
    }

    // Ignore external/action links
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('sms:') ||
      href.startsWith('#')
    ) {
      return
    }

    e.preventDefault()
    navigateTo(href)
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
