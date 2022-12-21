export type SizeType = 'small' | 'medium' | 'large';
export interface AlowedSizes {
  small: '256x256';
  medium: '512x512';
  large: '1024x1024';
}
export interface GenerateImageBody { prompt: string; size: SizeType }

export interface GenerateImageResponse {
  success: true;
  data: string;
}