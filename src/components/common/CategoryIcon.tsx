import React from "react";
import {
  Car,
  Baby,
  Gamepad2,
  Milk,
  Sparkles,
  SunMedium,
  Calendar,
  GraduationCap,
  Radio,
  Bike,
  Armchair,
  Music,
  Shield,
  HeartHandshake,
  Smile,
  Package,
  Layers,
  LucideIcon
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Car,
  Baby,
  Gamepad2,
  Milk,
  Sparkles,
  SunMedium,
  Calendar,
  GraduationCap,
  Radio,
  Bike,
  Armchair,
  Music,
  Shield,
  HeartHandshake,
  Smile,
  Package,
  Layers
};

interface CategoryIconProps {
  name: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = "w-5 h-5" }) => {
  const IconComponent = ICON_MAP[name] || Package;
  return <IconComponent className={className} />;
};
