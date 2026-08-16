import { 
  Flame, 
  CookingPot, 
  Wind, 
  Zap, 
  Gauge, 
  UtensilsCrossed, 
  Timer, 
  Waves,
  Sparkles
} from 'lucide-react';
import type { EquipmentType } from '../types';

interface EquipmentIconProps {
  type: EquipmentType;
  size?: number;
  isSelected?: boolean;
}

export function EquipmentIcon({ type, size = 22, isSelected = false }: EquipmentIconProps) {
  const primaryColor = isSelected ? 'var(--brand-terracotta)' : 'var(--text-secondary)';

  switch (type) {
    case 'stovetop':
      return <Flame size={size} color={primaryColor} />;
    
    case 'oven':
      return <CookingPot size={size} color={primaryColor} />;
    
    case 'microwave':
      return <Zap size={size} color={primaryColor} />;
    
    case 'air_fryer':
      return <Wind size={size} color={primaryColor} />;
    
    case 'rice_cooker':
      return <Waves size={size} color={primaryColor} />;
    
    case 'pressure_cooker':
      return <Gauge size={size} color={primaryColor} />;
    
    case 'blender':
      return <Sparkles size={size} color={primaryColor} />;
    
    case 'grill':
      return <UtensilsCrossed size={size} color={primaryColor} />;
    
    case 'slow_cooker':
      return <Timer size={size} color={primaryColor} />;
    
    default:
      return <CookingPot size={size} color={primaryColor} />;
  }
}
