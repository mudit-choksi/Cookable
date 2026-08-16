import type { EquipmentType } from '../types';

export interface EquipmentItem {
  id: EquipmentType;
  name: string;
  shortLabel: string;
  description: string;
  iconName: 'stove' | 'oven' | 'microwave' | 'air_fryer' | 'rice_cooker' | 'pressure_cooker' | 'blender' | 'grill' | 'slow_cooker';
}

export const KITCHEN_EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: 'stovetop',
    name: 'Stovetop / Cooktop',
    shortLabel: 'Stove',
    description: 'Gas, induction, or electric burner',
    iconName: 'stove'
  },
  {
    id: 'oven',
    name: 'Standard Oven',
    shortLabel: 'Oven',
    description: 'Baking & roasting',
    iconName: 'oven'
  },
  {
    id: 'microwave',
    name: 'Microwave',
    shortLabel: 'Microwave',
    description: 'Quick reheating & steaming',
    iconName: 'microwave'
  },
  {
    id: 'air_fryer',
    name: 'Air Fryer',
    shortLabel: 'Air Fryer',
    description: 'High-heat convection crisping',
    iconName: 'air_fryer'
  },
  {
    id: 'rice_cooker',
    name: 'Rice Cooker',
    shortLabel: 'Rice Cooker',
    description: 'Perfect grains & steamed bowls',
    iconName: 'rice_cooker'
  },
  {
    id: 'pressure_cooker',
    name: 'Pressure Cooker / Instant Pot',
    shortLabel: 'Pressure Cooker',
    description: 'Fast stews & tender braises',
    iconName: 'pressure_cooker'
  },
  {
    id: 'blender',
    name: 'Blender / Food Processor',
    shortLabel: 'Blender',
    description: 'Purees, sauces, & smoothies',
    iconName: 'blender'
  },
  {
    id: 'grill',
    name: 'Grill / Griddle',
    shortLabel: 'Grill',
    description: 'Charred cuts & BBQ skewers',
    iconName: 'grill'
  },
  {
    id: 'slow_cooker',
    name: 'Slow Cooker / Crockpot',
    shortLabel: 'Slow Cooker',
    description: 'All-day low simmer',
    iconName: 'slow_cooker'
  }
];
