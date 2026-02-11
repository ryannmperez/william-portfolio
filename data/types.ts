export interface Performance {
  id: string
  title: string
  description: string
  role?: string
  company?: string
  image?: string
  placeholder?: boolean
}

export interface DesignProject {
  id: string
  title: string
  description: string
  date: string
  heroImage?: string
  galleryImages?: string[]
  placeholder?: boolean
}

export interface Visual {
  id: string
  title: string
  description: string
  image?: string
  placeholder?: boolean
}

export interface SiteConfig {
  name: string
  subtitle: string
  aboutText: string
  instagram?: string
  facebook?: string
  linkedin?: string
  twitter?: string
  youtube?: string
  tiktok?: string
  email: string
}
