import { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Clock, 
  ChefHat, 
  Flame, 
  Bookmark,
  CheckCircle2,
  AlertCircle,
  Utensils,
  BookOpen,
  X
} from 'lucide-react';
import { MOCK_RECIPES } from './data/mockData';
import { PantryInput } from './components/PantryInput';
import { EquipmentSelector } from './components/EquipmentSelector';
import { PreferenceSelector } from './components/PreferenceSelector';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Recipe, EquipmentType, UserPantryItem } from './types';
import type { CuisinePreference, DietaryPreference } from './components/PreferenceSelector';

const DEFAULT_PANTRY: UserPantryItem[] = [
  { id: '1', name: 'Eggs', amount: '6', unit: 'items', category: 'protein' },
  { id: '2', name: 'Garlic', amount: '4', unit: 'cloves', category: 'produce' },
  { id: '3', name: 'Yellow Onion', amount: '1', unit: 'whole', category: 'produce' },
  { id: '4', name: 'Chicken Breast', amount: '1', unit: 'lbs', category: 'protein' },
  { id: '5', name: 'Extra Virgin Olive Oil', category: 'oils' },
  { id: '6', name: 'Spaghetti / Pasta', amount: '250', unit: 'grams', category: 'grains' },
  { id: '7', name: 'Parmesan Cheese', amount: '1/2', unit: 'cups grated', category: 'dairy' },
];

const DEFAULT_EQUIPMENT: EquipmentType[] = ['stovetop', 'oven', 'microwave', 'air_fryer'];

export function App() {
  const [pantryItems, setPantryItems] = useLocalStorage<UserPantryItem[]>('cookable_pantry_v1', DEFAULT_PANTRY);
  const [selectedEquipment, setSelectedEquipment] = useLocalStorage<EquipmentType[]>('cookable_equipment_v1', DEFAULT_EQUIPMENT);
  const [selectedCuisines, setSelectedCuisines] = useLocalStorage<CuisinePreference[]>('cookable_cuisines_v1', []);
  const [selectedDietary, setSelectedDietary] = useLocalStorage<DietaryPreference[]>('cookable_dietary_v1', []);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [mobileTab, setMobileTab] = useState<'pantry' | 'recipes'>('pantry');

  // ── Pantry handlers ─────────────────────
  const handleAddItem = (item: { name: string; amount?: string; unit?: string; category?: any; ingredientId?: string }) => {
    const newItem: UserPantryItem = {
      id: 'pantry-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      name: item.name,
      amount: item.amount,
      unit: item.unit,
      category: item.category,
      ingredientId: item.ingredientId
    };
    setPantryItems(prev => [...prev, newItem]);
  };
  const handleRemoveItem = (id: string) => setPantryItems(prev => prev.filter(i => i.id !== id));
  const handleUpdateItem = (id: string, updates: Partial<UserPantryItem>) =>
    setPantryItems(prev => prev.map(i => i.id === id ? { ...i, ...updates } : i));
  const handleClearAll = () => setPantryItems([]);

  // ── Equipment handlers ───────────────────
  const handleToggleEquipment = (equip: EquipmentType) =>
    setSelectedEquipment(prev =>
      prev.includes(equip) ? prev.filter(e => e !== equip) : [...prev, equip]
    );
  const handleSelectAllEquipment = () =>
    setSelectedEquipment(['stovetop','oven','microwave','air_fryer','rice_cooker','pressure_cooker','blender','grill','slow_cooker']);
  const handleResetEquipment = () => setSelectedEquipment(DEFAULT_EQUIPMENT);

  // ── Preference handlers ──────────────────
  const handleToggleCuisine = (c: CuisinePreference) =>
    setSelectedCuisines(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    );
  const handleToggleDietary = (d: DietaryPreference) =>
    setSelectedDietary(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    );
  const handleClearPreferences = () => {
    setSelectedCuisines([]);
    setSelectedDietary([]);
  };

  // ── Recipe filtering ─────────────────────
  const filteredRecipes = useMemo(() => {
    return MOCK_RECIPES.filter(recipe => {
      // Cuisine filter — if none selected, show all
      if (selectedCuisines.length > 0 && !selectedCuisines.includes(recipe.cuisine as CuisinePreference)) {
        return false;
      }
      // Dietary filter — recipe must include ALL selected dietary tags
      if (selectedDietary.length > 0) {
        const matches = selectedDietary.every(d => recipe.dietaryTags.includes(d));
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedCuisines, selectedDietary]);

  const readyCount = filteredRecipes.filter(r => r.matchStatus === 'ready').length;
  const almostCount = filteredRecipes.filter(r => r.matchStatus === 'missing-few').length;

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <header className="navbar">
        <div className="nav-content">
          <div className="logo-group">
            <div className="logo-badge">🍳</div>
            <div>
              <div className="logo-text">Cookable</div>
              <div className="logo-tagline">What's in your kitchen?</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="var(--brand-terracotta)" />
              <strong>{filteredRecipes.length}</strong> <span className="hide-mobile">Recipes</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="app-container">
        {/* Hero Welcome Banner */}
        <div className="hero-banner">
          <div style={{ maxWidth: '600px' }}>
            <span style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'var(--brand-terracotta-soft)', color: 'var(--brand-terracotta)',
              padding: '4px 12px', borderRadius: 'var(--radius-pill)',
              fontSize: '12px', fontWeight: '700', marginBottom: '10px'
            }}>
              <Sparkles size={14} /> Smart Recipe Matcher
            </span>
            <h1 style={{ fontSize: '28px', lineHeight: 1.2, marginBottom: '8px' }}>
              Tell us what you have. We'll show you what to cook.
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Add your ingredients, appliances, and taste preferences — we'll find your perfect match.
            </p>
          </div>

          <div className="hero-stats-pill">
            <div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--match-green)' }}>{readyCount} Ready</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>0 items to buy</div>
            </div>
            <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
            <div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--match-amber)' }}>{almostCount} Almost</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1–2 missing items</div>
            </div>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="mobile-view-tabs">
          <button type="button" onClick={() => setMobileTab('pantry')}
            className={`mobile-view-tab ${mobileTab === 'pantry' ? 'active' : ''}`}>
            <Utensils size={15} />
            <span>My Kitchen ({pantryItems.length})</span>
          </button>
          <button type="button" onClick={() => setMobileTab('recipes')}
            className={`mobile-view-tab ${mobileTab === 'recipes' ? 'active' : ''}`}>
            <BookOpen size={15} />
            <span>Recipes ({filteredRecipes.length})</span>
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className={`main-layout mobile-tab-${mobileTab}`}>

          {/* Left: Pantry + Equipment + Preferences */}
          <aside className="pantry-sidebar">
            <PantryInput
              pantryItems={pantryItems}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              onUpdateItem={handleUpdateItem}
              onClearAll={handleClearAll}
            />
            <EquipmentSelector
              selectedEquipment={selectedEquipment}
              onToggleEquipment={handleToggleEquipment}
              onSelectAll={handleSelectAllEquipment}
              onResetToDefaults={handleResetEquipment}
            />
            <PreferenceSelector
              selectedCuisines={selectedCuisines}
              selectedDietary={selectedDietary}
              onToggleCuisine={handleToggleCuisine}
              onToggleDietary={handleToggleDietary}
              onClearAll={handleClearPreferences}
            />
            {/* Mobile CTA */}
            <div className="show-mobile-only" style={{ marginTop: '8px' }}>
              <button
                type="button"
                onClick={() => { setMobileTab('recipes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                <Sparkles size={16} /> View {filteredRecipes.length} Matching Recipes
              </button>
            </div>
          </aside>

          {/* Right: Recipe Feed */}
          <section className="recipe-section-col">
            {/* Active Preference Pills strip */}
            {(selectedCuisines.length > 0 || selectedDietary.length > 0) && (
              <div className="active-pref-strip">
                {selectedCuisines.map(c => (
                  <button key={c} type="button" className="active-pref-chip" onClick={() => handleToggleCuisine(c)}>
                    {c} <X size={10} />
                  </button>
                ))}
                {selectedDietary.map(d => (
                  <button key={d} type="button" className="active-pref-chip diet" onClick={() => handleToggleDietary(d)}>
                    {d} <X size={10} />
                  </button>
                ))}
              </div>
            )}

            {/* Results Header */}
            <div className="results-header">
              <div>
                <h2 className="results-headline">
                  {selectedCuisines.length === 0 && selectedDietary.length === 0
                    ? 'Recommended For You'
                    : 'Filtered Results'}
                </h2>
                <p className="results-subtitle">
                  Matching {pantryItems.length} ingredients · {selectedEquipment.length} appliances
                  {selectedCuisines.length > 0 && ` · ${selectedCuisines.length} cuisine${selectedCuisines.length > 1 ? 's' : ''}`}
                  {selectedDietary.length > 0 && ` · ${selectedDietary.length} diet pref${selectedDietary.length > 1 ? 's' : ''}`}
                </p>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Empty state when filters return nothing */}
            {filteredRecipes.length === 0 ? (
              <div className="empty-state-card">
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🍽️</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>No matches found</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '260px', textAlign: 'center' }}>
                  Try removing a cuisine or dietary filter to see more recipes.
                </p>
                <button
                  type="button"
                  onClick={handleClearPreferences}
                  className="btn-primary"
                  style={{ marginTop: '16px', padding: '10px 20px', fontSize: '13px' }}
                >
                  Clear Preferences
                </button>
              </div>
            ) : (
              <div className="recipes-grid">
                {filteredRecipes.map(recipe => {
                  const isReady = recipe.matchStatus === 'ready';
                  return (
                    <article key={recipe.id} className="recipe-card" onClick={() => setSelectedRecipe(recipe)}>
                      <div className="card-image-wrap">
                        <img src={recipe.imageUrl} alt={recipe.title} className="card-image" loading="lazy" />
                        <div className={`match-badge ${isReady ? 'ready' : 'missing-few'}`}>
                          {isReady
                            ? <><CheckCircle2 size={13} /><span>Ready to Cook</span></>
                            : <><AlertCircle size={13} /><span>Missing {recipe.missingIngredients.length}</span></>}
                        </div>
                        <button type="button" className="card-bookmark-btn" onClick={e => e.stopPropagation()} title="Save recipe">
                          <Bookmark size={16} />
                        </button>
                      </div>

                      <div className="card-body">
                        <span className="card-cuisine">{recipe.cuisine} · {recipe.dietaryTags[0]}</span>
                        <h3 className="card-title">{recipe.title}</h3>
                        <div className="card-meta">
                          <span className="meta-item"><Clock size={13} color="var(--text-muted)" />{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
                          <span className="meta-item"><Flame size={13} color="var(--text-muted)" />{recipe.difficulty}</span>
                          <span className="meta-item"><ChefHat size={13} color="var(--text-muted)" />{recipe.caloriesPerServing} kcal</span>
                        </div>
                        <div className="missing-indicator">
                          {isReady
                            ? <span className="ready-highlight">✨ All ingredients in pantry</span>
                            : <span>Need: <span className="missing-highlight">{recipe.missingIngredients.join(', ')}</span></span>}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button type="button" className="modal-close-btn" onClick={() => setSelectedRecipe(null)} title="Close">
              <X size={18} />
            </button>
            <img src={selectedRecipe.imageUrl} alt={selectedRecipe.title} className="modal-hero-img" />
            <div className="modal-body">
              <div className="modal-tags">
                <span className="pill-tag" style={{ background: 'var(--brand-terracotta-soft)', color: 'var(--brand-terracotta)' }}>
                  {selectedRecipe.cuisine}
                </span>
                {selectedRecipe.dietaryTags.map(tag => (
                  <span key={tag} className="pill-tag">{tag}</span>
                ))}
              </div>
              <h2 className="modal-title">{selectedRecipe.title}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedRecipe.description}
              </p>

              {/* Stats banner */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--bg-app)', borderRadius: 'var(--radius-md)', padding: '14px 10px', textAlign: 'center', marginBottom: '24px', border: '1px solid var(--border-subtle)' }}>
                {[
                  { label: 'Prep', value: `${selectedRecipe.prepTimeMinutes}m` },
                  { label: 'Cook', value: `${selectedRecipe.cookTimeMinutes}m` },
                  { label: 'Serves', value: selectedRecipe.servings },
                  { label: 'Kcal', value: selectedRecipe.caloriesPerServing },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>{s.label}</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, marginTop: '2px' }}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Ingredients */}
              <h3 className="section-heading">Ingredients ({selectedRecipe.requiredIngredients.length})</h3>
              <div style={{ marginBottom: '24px' }}>
                {selectedRecipe.requiredIngredients.map(ing => {
                  const isMissing = selectedRecipe.missingIngredients.includes(ing);
                  return (
                    <div key={ing} className={`checklist-item ${isMissing ? 'missing' : ''}`}>
                      <span style={{ fontWeight: 500 }}>{ing}</span>
                      <span className={`status-badge-inline ${isMissing ? 'missing' : 'have'}`}>
                        {isMissing ? 'Missing' : 'In Pantry'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Instructions */}
              <h3 className="section-heading">Instructions</h3>
              <div style={{ marginBottom: '28px' }}>
                {selectedRecipe.instructions.map(step => (
                  <div key={step.stepNumber} className="step-item">
                    <span className="step-num">{step.stepNumber}</span>
                    <p className="step-text">{step.instruction}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
                <button type="button" onClick={() => setSelectedRecipe(null)}
                  style={{ padding: '12px 18px', borderRadius: 'var(--radius-pill)', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '14px' }}>
                  Close
                </button>
                <button type="button" className="btn-primary" style={{ flex: 1 }}>
                  <ChefHat size={16} /> Start Guided Cooking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
