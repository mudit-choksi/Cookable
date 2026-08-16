import { Check, FlameKindling, RotateCcw } from 'lucide-react';
import { KITCHEN_EQUIPMENT_CATALOG } from '../data/equipment';
import { EquipmentIcon } from './EquipmentIcon';
import type { EquipmentType } from '../types';

interface EquipmentSelectorProps {
  selectedEquipment: EquipmentType[];
  onToggleEquipment: (equip: EquipmentType) => void;
  onSelectAll: () => void;
  onResetToDefaults: () => void;
}

export function EquipmentSelector({
  selectedEquipment,
  onToggleEquipment,
  onSelectAll,
  onResetToDefaults
}: EquipmentSelectorProps) {
  const isAllSelected = selectedEquipment.length === KITCHEN_EQUIPMENT_CATALOG.length;

  return (
    <div className="panel-card">
      
      {/* Header */}
      <div className="panel-header" style={{ marginBottom: '12px' }}>
        <div className="panel-title-group">
          <div className="panel-badge-icon">
            <FlameKindling size={16} color="var(--brand-terracotta)" />
          </div>
          <div>
            <h2 className="panel-title">Kitchen Equipment</h2>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {selectedEquipment.length === 0 
                ? 'No equipment selected' 
                : `${selectedEquipment.length} of ${KITCHEN_EQUIPMENT_CATALOG.length} selected`}
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <button
          type="button"
          onClick={isAllSelected ? onResetToDefaults : onSelectAll}
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--brand-terracotta)',
            background: 'var(--brand-terracotta-soft)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'var(--transition-quick)'
          }}
        >
          {isAllSelected ? (
            <>
              <RotateCcw size={11} /> Defaults
            </>
          ) : (
            'Select All'
          )}
        </button>
      </div>

      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.4 }}>
        Only recipes matching your selected appliances will be recommended.
      </p>

      {/* Equipment Grid Cards */}
      <div className="equipment-grid">
        {KITCHEN_EQUIPMENT_CATALOG.map(item => {
          const isSelected = selectedEquipment.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onToggleEquipment(item.id)}
              className={`equipment-item-card ${isSelected ? 'active' : ''}`}
            >
              {/* Selected Checkmark Badge */}
              {isSelected && (
                <span className="equipment-check-badge">
                  <Check size={10} strokeWidth={3} />
                </span>
              )}

              {/* Vector Icon */}
              <div className="equipment-icon-wrap" style={{ marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <EquipmentIcon type={item.id} size={22} isSelected={isSelected} />
              </div>

              {/* Title */}
              <div className="equipment-label">
                {item.shortLabel}
              </div>
            </button>
          );
        })}
      </div>

      {/* Helper Footer */}
      {selectedEquipment.length === 0 && (
        <div style={{
          marginTop: '12px',
          padding: '10px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--match-amber-soft)',
          border: '1px solid var(--match-amber-border)',
          color: 'var(--match-amber)',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <FlameKindling size={16} />
          <span>Please select at least 1 appliance.</span>
        </div>
      )}

    </div>
  );
}
