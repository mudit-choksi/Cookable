import { Globe, Leaf, X } from 'lucide-react';

export type CuisinePreference =
  | 'Indian' | 'Italian' | 'Mexican' | 'Chinese' | 'Japanese'
  | 'Korean' | 'Thai' | 'Mediterranean' | 'American' | 'Greek'
  | 'Turkish' | 'Lebanese' | 'French' | 'Moroccan';

export type DietaryPreference =
  | 'Vegetarian' | 'Vegan' | 'Pescatarian' | 'High-Protein'
  | 'Low Carb' | 'Keto' | 'Gluten-Free' | 'Dairy-Free' | 'Nut-Free';

const CUISINES: { label: CuisinePreference; flag: string }[] = [
  { label: 'Indian',         flag: '🇮🇳' },
  { label: 'Italian',        flag: '🇮🇹' },
  { label: 'Mexican',        flag: '🇲🇽' },
  { label: 'Chinese',        flag: '🇨🇳' },
  { label: 'Japanese',       flag: '🇯🇵' },
  { label: 'Korean',         flag: '🇰🇷' },
  { label: 'Thai',           flag: '🇹🇭' },
  { label: 'Mediterranean',  flag: '🫒' },
  { label: 'American',       flag: '🇺🇸' },
  { label: 'Greek',          flag: '🇬🇷' },
  { label: 'Turkish',        flag: '🇹🇷' },
  { label: 'Lebanese',       flag: '🇱🇧' },
  { label: 'French',         flag: '🇫🇷' },
  { label: 'Moroccan',       flag: '🇲🇦' },
];

const DIETARY: { label: DietaryPreference; icon: string }[] = [
  { label: 'Vegetarian',   icon: '🥦' },
  { label: 'Vegan',        icon: '🌱' },
  { label: 'Pescatarian',  icon: '🐟' },
  { label: 'High-Protein', icon: '💪' },
  { label: 'Low Carb',     icon: '📉' },
  { label: 'Keto',         icon: '🥑' },
  { label: 'Gluten-Free',  icon: '🌾' },
  { label: 'Dairy-Free',   icon: '🥛' },
  { label: 'Nut-Free',     icon: '🚫' },
];

interface PreferenceSelectorProps {
  selectedCuisines: CuisinePreference[];
  selectedDietary: DietaryPreference[];
  onToggleCuisine: (c: CuisinePreference) => void;
  onToggleDietary: (d: DietaryPreference) => void;
  onClearAll: () => void;
}

export function PreferenceSelector({
  selectedCuisines,
  selectedDietary,
  onToggleCuisine,
  onToggleDietary,
  onClearAll,
}: PreferenceSelectorProps) {
  const totalSelected = selectedCuisines.length + selectedDietary.length;

  return (
    <div className="panel-card">
      {/* Header */}
      <div className="panel-header" style={{ marginBottom: '14px' }}>
        <div className="panel-title-group">
          <div className="panel-badge-icon">
            <Globe size={15} color="var(--brand-terracotta)" />
          </div>
          <div>
            <h2 className="panel-title">Preferences</h2>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {totalSelected === 0
                ? 'All cuisines & diets'
                : `${totalSelected} filter${totalSelected > 1 ? 's' : ''} active`}
            </div>
          </div>
        </div>

        {totalSelected > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--text-muted)',
              padding: '4px 8px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-subtle)',
              transition: 'var(--transition-quick)'
            }}
          >
            <X size={11} /> Clear
          </button>
        )}
      </div>

      {/* Cuisine Toggles */}
      <div style={{ marginBottom: '14px' }}>
        <div className="pref-section-label">
          <Globe size={11} /> Cuisine
        </div>
        <div className="pref-pill-wrap">
          {CUISINES.map(({ label, flag }) => {
            const active = selectedCuisines.includes(label);
            return (
              <button
                key={label}
                type="button"
                onClick={() => onToggleCuisine(label)}
                className={`pref-pill ${active ? 'active' : ''}`}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dietary Toggles */}
      <div>
        <div className="pref-section-label">
          <Leaf size={11} /> Diet
        </div>
        <div className="pref-pill-wrap">
          {DIETARY.map(({ label, icon }) => {
            const active = selectedDietary.includes(label);
            return (
              <button
                key={label}
                type="button"
                onClick={() => onToggleDietary(label)}
                className={`pref-pill ${active ? 'active' : ''}`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
