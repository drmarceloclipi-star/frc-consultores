import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image"

export const alt = "FRC — Custom Software Development"
export const size = socialImageSize
export const contentType = socialImageContentType

export default function OpenGraphImage() {
  return createSocialImage("en")
}
