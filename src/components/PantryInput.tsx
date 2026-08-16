import { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Plus, 
  X, 
  Trash2, 
  Sparkles, 
  Edit3, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { INGREDIENT_CATALOG, CATEGORY_LABELS } from '../data/ingredients';
import type { AvailableIngredient, UserPantryItem, IngredientCategory } from '../types';

interface PantryInputProps {
  pantryItems: UserPantryItem[];
  onAddItem: (item: { name: string; amount?: string; unit?: string; category?: IngredientCategory; ingredientId?: string }) => void;
  onRemoveItem: (id: string) => void;
  onUpdateItem: (id: string, updates: Partial<UserPantryItem>) => void;
  onClearAll: () => void;
}

export function PantryInput({
  pantryItems,
  onAddItem,
  onRemoveItem,
  onUpdateItem,
  onClearAll
}: PantryInputProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  // Optional quantity configuration state
  const [quantityTarget, setQuantityTarget] = useState<UserPantryItem | null>(null);
  const [editAmount, setEditAmount] = useState('');
  const [editUnit, setEditUnit] = useState('');

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter catalog based on search text
  const searchFiltered = INGREDIENT_CATALOG.filter(ing => {
    const matchesSearch = ing.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesSearch;
  });

  // Filter catalog for quick-add pills based on category tab
  const categoryPills = INGREDIENT_CATALOG.filter(ing => {
    if (selectedCategory === 'all') return true;
    return ing.category === selectedCategory;
  }).slice(0, 16);

  const isAlreadyInPantry = (name: string) => {
    return pantryItems.some(item => item.name.toLowerCase() === name.toLowerCase());
  };

  const handleSelectCatalogItem = (ing: AvailableIngredient) => {
    if (!isAlreadyInPantry(ing.name)) {
      onAddItem({
        name: ing.name,
        category: ing.category,
        ingredientId: ing.id,
        unit: ing.defaultUnit
      });
    }
    setSearchQuery('');
    setIsDropdownOpen(false);
    setActiveSuggestionIndex(-1);
  };

  const handleCustomSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    // If an active suggestion is highlighted via arrow keys
    if (activeSuggestionIndex >= 0 && searchFiltered[activeSuggestionIndex]) {
      handleSelectCatalogItem(searchFiltered[activeSuggestionIndex]);
      return;
    }

    // Check if exact match exists in catalog
    const exactCatalogMatch = INGREDIENT_CATALOG.find(
      ing => ing.name.toLowerCase() === trimmed.toLowerCase()
    );

    if (exactCatalogMatch) {
      handleSelectCatalogItem(exactCatalogMatch);
    } else if (!isAlreadyInPantry(trimmed)) {
      onAddItem({
        name: trimmed.charAt(0).toUpperCase() + trimmed.slice(1),
        category: 'pantry'
      });
      setSearchQuery('');
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownOpen && searchQuery.trim()) {
      setIsDropdownOpen(true);
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => 
        prev < searchFiltered.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleCustomSubmit();
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  const startEditQuantity = (item: UserPantryItem) => {
    setQuantityTarget(item);
    setEditAmount(item.amount || '');
    setEditUnit(item.unit || '');
  };

  const saveQuantity = () => {
    if (quantityTarget) {
      onUpdateItem(quantityTarget.id, {
        amount: editAmount.trim() || undefined,
        unit: editUnit.trim() || undefined
      });
      setQuantityTarget(null);
    }
  };

  return (
    <div className="panel-card">
      
      {/* Header Bar */}
      <div className="panel-header">
        <div className="panel-title-group">
          <div className="panel-badge-icon">
            🥑
          </div>
          <div>
            <h2 className="panel-title">My Kitchen Pantry</h2>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {pantryItems.length === 0 ? 'No ingredients yet' : `${pantryItems.length} ingredient${pantryItems.length === 1 ? '' : 's'} added`}
            </div>
          </div>
        </div>

        {pantryItems.length > 0 && (
          <button 
            type="button"
            onClick={onClearAll}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              color: 'var(--text-muted)',
              padding: '4px 8px',
              borderRadius: 'var(--radius-xs)',
              transition: 'var(--transition-quick)'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#DC2626'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            title="Clear all ingredients"
          >
            <Trash2 size={13} />
            <span>Clear</span>
          </button>
        )}
      </div>

      {/* Autocomplete Search & Add Form */}
      <div ref={searchContainerRef} style={{ position: 'relative', marginBottom: '14px', width: '100%' }}>
        <form onSubmit={handleCustomSubmit} className="input-wrapper">
          <Search size={17} className="input-icon" />
          <input 
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsDropdownOpen(true);
              setActiveSuggestionIndex(-1);
            }}
            onFocus={() => {
              if (searchQuery.trim() || searchFiltered.length > 0) {
                setIsDropdownOpen(true);
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type ingredient (e.g. Avocado, Garlic)..."
            className="custom-input"
            autoComplete="off"
          />
          {searchQuery && (
            <button 
              type="button" 
              onClick={() => {
                setSearchQuery('');
                setIsDropdownOpen(false);
              }}
              style={{
                position: 'absolute',
                right: '44px',
                color: 'var(--text-muted)',
                padding: '4px'
              }}
            >
              <X size={14} />
            </button>
          )}
          <button 
            type="submit" 
            className="input-add-btn" 
            title="Add to pantry"
          >
            <Plus size={16} />
          </button>
        </form>

        {/* Live Suggestions Dropdown */}
        {isDropdownOpen && searchQuery.trim() && (
          <div className="search-dropdown-menu">
            {searchFiltered.length > 0 ? (
              searchFiltered.slice(0, 8).map((item, idx) => {
                const added = isAlreadyInPantry(item.name);
                const isFocused = idx === activeSuggestionIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectCatalogItem(item)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      cursor: added ? 'default' : 'pointer',
                      backgroundColor: isFocused ? 'var(--brand-terracotta-soft)' : added ? 'var(--bg-app)' : 'transparent',
                      borderBottom: '1px solid var(--border-subtle)',
                      transition: 'var(--transition-quick)'
                    }}
                    onMouseEnter={() => setActiveSuggestionIndex(idx)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '18px' }}>{item.icon || '🥣'}</span>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '11px', textTransform: 'capitalize', color: 'var(--text-muted)' }}>
                          {item.category} {item.defaultUnit ? `• default: ${item.defaultUnit}` : ''}
                        </div>
                      </div>
                    </div>
                    {added ? (
                      <span style={{ 
                        fontSize: '11px', 
                        color: 'var(--match-green)', 
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px'
                      }}>
                        <Check size={13} /> In Pantry
                      </span>
                    ) : (
                      <span style={{ 
                        fontSize: '12px', 
                        color: 'var(--brand-terracotta)', 
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px'
                      }}>
                        + Add <ChevronRight size={13} />
                      </span>
                    )}
                  </div>
                );
              })
            ) : (
              <div
                onClick={() => handleCustomSubmit()}
                style={{
                  padding: '14px',
                  cursor: 'pointer',
                  backgroundColor: 'var(--brand-terracotta-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--brand-terracotta)',
                  fontWeight: 600,
                  fontSize: '13px'
                }}
              >
                <Plus size={16} /> Add custom ingredient "{searchQuery.trim()}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Selected Pantry Items Chips (with Optional Quantities) */}
      <div style={{ marginBottom: '16px', width: '100%' }}>
        {pantryItems.length === 0 ? (
          <div style={{
            background: 'var(--bg-app)',
            border: '1.5px dashed var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            textAlign: 'center',
            color: 'var(--text-muted)'
          }}>
            <Sparkles size={18} color="var(--brand-terracotta)" style={{ margin: '0 auto 6px auto' }} />
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Your pantry is empty
            </div>
            <div style={{ fontSize: '11px', marginTop: '2px' }}>
              Search above or tap staples below
            </div>
          </div>
        ) : (
          <div className="active-tags-container">
            {pantryItems.map(item => (
              <div key={item.id} className="ingredient-chip">
                <span>{item.name}</span>
                
                {/* Optional Quantity Badge */}
                {item.amount && (
                  <span 
                    onClick={() => startEditQuantity(item)}
                    style={{
                      background: 'rgba(235, 94, 40, 0.15)',
                      padding: '1px 6px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                    title="Click to edit quantity"
                  >
                    {item.amount} {item.unit || ''}
                  </span>
                )}

                {/* Edit quantity trigger if no amount */}
                {!item.amount && (
                  <button
                    type="button"
                    onClick={() => startEditQuantity(item)}
                    style={{
                      opacity: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '2px',
                      color: 'var(--brand-terracotta)'
                    }}
                    title="Add quantity"
                  >
                    <Edit3 size={11} />
                  </button>
                )}

                {/* Remove item button */}
                <button 
                  type="button" 
                  onClick={() => onRemoveItem(item.id)}
                  className="remove-chip-btn"
                  title={`Remove ${item.name}`}
                >
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Add Tray with Category Tabs */}
      <div className="quick-add-section">
        <div className="quick-add-title">Quick Add Staples</div>

        {/* Horizontal Category Scroll Tabs */}
        <div className="category-scroll-tray">
          {Object.entries(CATEGORY_LABELS).map(([catKey, info]) => {
            const isTabActive = selectedCategory === catKey;
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setSelectedCategory(catKey)}
                className={`category-tab-btn ${isTabActive ? 'active' : ''}`}
              >
                {info.icon} {info.label}
              </button>
            );
          })}
        </div>

        {/* Quick Add Pills */}
        <div className="quick-add-pills">
          {categoryPills.map(ing => {
            const isSelected = isAlreadyInPantry(ing.name);
            return (
              <button
                key={ing.id}
                type="button"
                onClick={() => {
                  if (isSelected) {
                    const found = pantryItems.find(p => p.name.toLowerCase() === ing.name.toLowerCase());
                    if (found) onRemoveItem(found.id);
                  } else {
                    handleSelectCatalogItem(ing);
                  }
                }}
                className={`quick-pill ${isSelected ? 'selected' : ''}`}
              >
                <span>{ing.icon || '•'}</span>
                <span>{ing.name}</span>
                <span style={{ opacity: 0.7, fontSize: '10px' }}>
                  {isSelected ? '✓' : '+'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional Quantity Editor Popover / Drawer */}
      {quantityTarget && (
        <div className="quantity-popover-overlay">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--brand-terracotta)', fontWeight: 700 }}>
                Set Quantity (Optional)
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 600 }}>{quantityTarget.name}</h3>
            </div>
            <button 
              type="button" 
              onClick={() => setQuantityTarget(null)}
              style={{ color: 'var(--text-muted)', padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '8px', marginBottom: '14px' }}>
            <div>
              <label style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                Amount
              </label>
              <input 
                type="text"
                value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
                placeholder="e.g. 2, 500"
                className="custom-input"
                style={{ height: '40px', padding: '0 10px' }}
                autoFocus
              />
            </div>
            <div>
              <label style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                Unit / Measure
              </label>
              <input 
                type="text"
                value={editUnit}
                onChange={(e) => setEditUnit(e.target.value)}
                placeholder="e.g. cups, tbsp"
                className="custom-input"
                style={{ height: '40px', padding: '0 10px' }}
              />
            </div>
          </div>

          {/* Quick Unit Presets */}
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {['cups', 'tbsp', 'grams', 'oz', 'items', 'cloves'].map(u => (
              <button
                key={u}
                type="button"
                onClick={() => setEditUnit(u)}
                style={{
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '11px',
                  background: editUnit === u ? 'var(--brand-terracotta-soft)' : 'var(--bg-muted)',
                  color: editUnit === u ? 'var(--brand-terracotta)' : 'var(--text-secondary)',
                  fontWeight: 600
                }}
              >
                {u}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              onClick={() => {
                setEditAmount('');
                setEditUnit('');
                onUpdateItem(quantityTarget.id, { amount: undefined, unit: undefined });
                setQuantityTarget(null);
              }}
              style={{
                flex: 1,
                padding: '9px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-secondary)'
              }}
            >
              Clear
            </button>
            <button
              type="button"
              onClick={saveQuantity}
              className="btn-primary"
              style={{ flex: 1.5, padding: '9px', fontSize: '13px' }}
            >
              Save Details
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
