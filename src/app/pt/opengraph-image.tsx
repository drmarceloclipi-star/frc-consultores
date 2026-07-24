import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image"

export const alt = "FRC Consultores — Desenvolvimento de Software Sob Medida"
export const size = socialImageSize
export const contentType = socialImageContentType

export default function OpenGraphImage() {
  return createSocialImage("pt")
}
