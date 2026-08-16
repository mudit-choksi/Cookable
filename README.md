# 🍳 Cookable

> **Turn what you have into what you crave.**

Cookable is a smart recipe discovery and cooking assistant that helps you figure out **what you can cook with the ingredients, equipment, and preferences you already have**.

Instead of searching through endless recipes, Cookable works backwards from your kitchen:

**Ingredients → Equipment → Preferences → Recipes → Cook**

---

## ✨ What Cookable Does

Tell Cookable what you have in your kitchen and what you're in the mood for.

### 🥕 Ingredients

Add the ingredients you currently have, optionally including quantities.

### 🔧 Cooking Equipment

Select the equipment available to you, such as:

* Stove
* Oven
* Air fryer
* Microwave
* Rice cooker
* Pressure cooker
* Blender
* Grill
* Slow cooker

Recipes requiring equipment you don't have can be filtered out.

### 🌎 Cuisines

Explore recipes across cuisines including:

* 🇮🇳 Indian
* 🇮🇹 Italian
* 🇲🇽 Mexican
* 🇯🇵 Japanese
* 🇰🇷 Korean
* 🇨🇳 Chinese
* 🇹🇭 Thai
* 🇬🇷 Greek
* 🇹🇷 Turkish
* 🇱🇧 Lebanese
* 🇫🇷 French
* 🇲🇦 Moroccan
* 🇺🇸 American
* Mediterranean

### 🥗 Dietary Preferences

Support for preferences such as:

* Vegetarian
* Vegan
* Pescatarian
* High Protein
* Low Carb
* Keto
* Gluten Free
* Dairy Free
* Nut Free

### ⏱️ Cooking Constraints

Users can optionally specify:

* Maximum cooking time
* Difficulty
* Number of servings
* Calorie preferences
* Whether they are willing to buy additional ingredients

---

## 🎯 Recipe Matching

Cookable doesn't simply search for recipes.

It ranks recipes based on how well they fit the user's current situation.

For example:

> **Chicken Tikka Rice Bowl**
>
> 🟢 **96% Match**
>
> ✓ Chicken
> ✓ Rice
> ✓ Onion
> ✓ Yogurt
> ✓ Garlic
> ⚠️ Missing: Cilantro
>
> 🇮🇳 Indian · ⏱️ 35 min · 💪 High Protein

Recipes are grouped into:

* 🟢 **Can make now** — everything required is available
* 🟡 **Almost there** — only a few ingredients are missing
* 🔴 **Needs more ingredients** — useful for future inspiration

The goal is to answer:

> **"What can I make right now?"**

rather than:

> "Here are 10,000 recipes. Good luck."

---

## 👨‍🍳 Cooking Mode

Once a recipe is selected, Cookable can transition into a focused cooking experience.

Instead of scrolling through a long recipe, users see one step at a time:

```text
STEP 3 OF 8

Add the marinated chicken to the pan.

Cook for 5–7 minutes until golden brown.

[ Start 5:00 Timer ]

        ← BACK       NEXT →
```

Cooking Mode is designed to be:

* Easy to follow while cooking
* Mobile-friendly
* Large and readable
* Timer-aware
* Focused on the current step

---

## 🎥 Video Assistance

Recipes can include relevant YouTube cooking tutorials.

Users can access:

* Full recipe demonstrations
* Technique tutorials
* Step-specific assistance
* Helpful cooking videos

For example:

> **Having trouble with this step?**
>
> ▶️ Watch: *How to properly cook basmati rice*

The goal is to help users **finish the dish**, not just discover it.

---

## 🤖 AI-Powered Recipe Discovery

Eventually, Cookable will support natural-language requests such as:

> "I have chicken, rice, eggs and onions. I want something spicy, Indian-inspired, high protein and under 30 minutes."

Cookable can translate the request into structured preferences and use the existing recipe matching engine to find suitable dishes.

AI is intended to make the interface more natural without replacing the deterministic recipe-matching logic.

---
## 🏗️ Product Philosophy

Cookable is being built around a few principles:

### 1. Start with what the user has

The kitchen comes first. Recipes come second.

### 2. Minimize unnecessary shopping

If someone is missing one ingredient, prioritize recipes that only require that one additional purchase.

### 3. Explain recommendations

Users should understand **why** a recipe was recommended.

### 4. Keep AI assistive

AI should interpret intent and personalize the experience, while core recipe matching remains predictable and explainable.

### 5. Optimize for real cooking

The experience should be useful while someone is actually standing in their kitchen.

### 6. Mobile first

Cookable should work especially well on a phone sitting on a kitchen counter.

---

## 🛠️ Technology

The technology stack is intentionally kept simple during the MVP and will evolve as the application grows.

Potential technologies include:

* **Frontend:** React
* **Language:** TypeScript
* **Styling:** Modern CSS / Tailwind CSS
* **Build Tool:** Vite
* **Backend:** To be determined as external services are introduced
* **Database:** To be determined
* **AI:** To be determined
* **Video:** YouTube Data API
* **Recipe Data:** Recipe API / structured recipe database

The project prioritizes maintainability and simplicity over unnecessary infrastructure.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/cookable.git
cd cookable
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.
---

## 🧪 Development Approach

Cookable is being developed incrementally.

The development philosophy is:

```text
Idea
 ↓
Small feature
 ↓
Build
 ↓
Run
 ↓
Test
 ↓
Improve
 ↓
Commit
 ↓
Repeat
```

Large features should be broken into small, independently testable pieces.

---

## 🤝 Contributing

Cookable is currently an experimental project.

As the project matures, contribution guidelines will be added covering:

* Development workflow
* Branch naming
* Commit conventions
* Pull requests
* Testing
* Code style

---
## 🍽️ The Vision

Cookable isn't trying to be another giant recipe database.

The vision is simple:

> **Open your fridge. Tell Cookable what you have. Let Cookable figure out dinner.**

From **"What can I make?"** to **"Help, I'm stuck on step 4"**, Cookable aims to be a cooking companion from the moment you start deciding what to eat until the moment you sit down to enjoy it.

**Cookable — Turn what you have into what you crave.**
