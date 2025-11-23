const recipes = [
    {
        id: "1",
        title: "Rainbow Quinoa Bowl",
        category: "Hidangan Utama",
        image: "images/quinoa-bowl.jpg",
        prepTime: "35 menit",
        servings: "2 porsi",
        difficulty: "Sedang",
        description: "Bowl bergizi tinggi dengan quinoa, sayuran panggang, dan saus tahini yang creamy. Sempurna untuk makan siang yang mengenyangkan dan sehat.",
        ingredients: [
            "1 cangkir quinoa tiga warna",
            "1 kaleng chickpeas (400g), tiriskan",
            "1 buah paprika merah, potong dadu",
            "1 buah zucchini, potong dadu",
            "200g brokoli, potong kuntum kecil",
            "1 buah avocado matang, iris",
            "2 sdm minyak zaitun",
            "1 sdt paprika powder",
            "Garam dan merica secukupnya",
            "Microgreens untuk hiasan",
            "Untuk saus tahini:",
            "3 sdm tahini paste",
            "Jus 1 buah lemon",
            "1 siung bawang putih, cincang",
            "2-3 sdm air"
        ],
        instructions: [
            "Bilas quinoa dan masak sesuai petunjuk kemasan (sekitar 15 menit). Sisihkan.",
            "Panaskan oven hingga 200°C. Olesi chickpeas dengan 1 sdm minyak zaitun dan paprika powder.",
            "Tata chickpeas dan sayuran di loyang, olesi dengan minyak zaitun, garam, dan merica.",
            "Panggang selama 25-30 menit hingga sayuran empuk dan chickpeas renyah.",
            "Untuk saus tahini: campurkan tahini, jus lemon, bawang putih, dan air hingga konsistensi yang diinginkan.",
            "Susun quinoa di bowl sebagai base, tata sayuran panggang dan chickpeas di atasnya.",
            "Tambahkan irisan avocado segar.",
            "Siram dengan saus tahini dan taburkan microgreens.",
            "Sajikan hangat atau suhu ruang."
        ]
    },
    {
        id: "2",
        title: "Tropical Fruit Salad",
        category: "Buah",
        image: "images/fruit-salad.jpg",
        prepTime: "15 menit",
        servings: "4 porsi",
        difficulty: "Mudah",
        description: "Salad buah segar yang menyegarkan dengan berbagai buah tropis dan hint mint. Sempurna untuk sarapan atau dessert sehat.",
        ingredients: [
            "2 cangkir semangka, potong kubus",
            "1 cangkir mangga, potong kubus",
            "1 cangkir kiwi, kupas dan iris",
            "1 cangkir strawberry, belah dua",
            "1/2 cangkir blueberry",
            "1/2 cangkir blackberry",
            "Jus 1 buah jeruk nipis",
            "1 sdm madu (opsional)",
            "Daun mint segar untuk hiasan"
        ],
        instructions: [
            "Cuci bersih semua buah dengan air mengalir.",
            "Potong semangka, mangga, dan kiwi menjadi potongan yang mudah dimakan.",
            "Belah strawberry menjadi dua bagian.",
            "Masukkan semua buah ke dalam mangkuk besar.",
            "Dalam mangkuk kecil, campur jus jeruk nipis dengan madu, aduk hingga larut.",
            "Tuang campuran jus jeruk nipis ke atas buah.",
            "Aduk perlahan agar semua buah terbalut dressing tanpa hancur.",
            "Diamkan di kulkas selama 10-15 menit agar lebih segar.",
            "Sebelum disajikan, hias dengan daun mint segar.",
            "Sajikan segera dan nikmati kesegaran alaminya."
        ]
    },
    {
        id: "3",
        title: "Avocado Toast Deluxe",
        category: "Hidangan Utama",
        image: "images/avocado-toast.jpg",
        prepTime: "10 menit",
        servings: "2 porsi",
        difficulty: "Mudah",
        description: "Toast klasik dengan avocado yang creamy, tomat cherry manis, dan microgreens. Sarapan cepat yang kaya nutrisi dan Instagram-worthy.",
        ingredients: [
            "2 lembar roti gandum utuh",
            "1 buah avocado matang",
            "6-8 buah tomat cherry, belah dua",
            "Microgreens atau baby arugula",
            "1 sdm biji wijen atau biji bunga matahari",
            "1 sdm minyak zaitun extra virgin",
            "Jus 1/2 lemon",
            "Garam laut dan merica hitam",
            "Red chili flakes (opsional)",
            "1 siung bawang putih (opsional)"
        ],
        instructions: [
            "Panggang roti hingga kecokelatan dan renyah. Jika suka, gosok dengan setengah siung bawang putih.",
            "Belah avocado, buang bijinya, dan kerok daging buahnya ke dalam mangkuk.",
            "Haluskan avocado dengan garpu, tambahkan jus lemon, garam, dan merica. Aduk rata.",
            "Oleskan avocado yang sudah dihaluskan secara merata di atas roti panggang.",
            "Tata tomat cherry yang sudah dibelah di atas avocado.",
            "Taburkan microgreens atau baby arugula untuk tekstur dan kesegaran.",
            "Tambahkan biji wijen atau biji bunga matahari untuk crunch.",
            "Siram dengan sedikit minyak zaitun extra virgin.",
            "Tambahkan red chili flakes jika suka pedas.",
            "Sajikan segera selagi roti masih hangat."
        ]
    },
    {
        id: "4",
        title: "Green Goddess Smoothie Bowl",
        category: "Sarapan Sehat",
        image: "images/smoothie-bowl.jpg",
        prepTime: "10 menit",
        servings: "1 porsi",
        difficulty: "Mudah",
        description: "Smoothie bowl hijau yang creamy dan penuh antioksidan. Dipadukan dengan topping buah segar dan granola untuk energi pagi yang optimal.",
        ingredients: [
            "2 buah pisang beku",
            "1 cangkir bayam segar",
            "1/2 avocado",
            "1/2 cangkir susu almond",
            "1 sdm chia seeds",
            "1 sdt spirulina atau matcha powder",
            "1 sdt madu atau maple syrup",
            "Topping:",
            "Irisan pisang segar",
            "Strawberry",
            "Blueberry",
            "Granola",
            "Chia seeds"
        ],
        instructions: [
            "Potong pisang dan bekukan semalaman atau minimal 2 jam sebelumnya.",
            "Masukkan pisang beku, bayam, avocado, susu almond, dan chia seeds ke dalam blender.",
            "Tambahkan spirulina atau matcha powder dan pemanis pilihan.",
            "Blend dengan kecepatan tinggi hingga sangat halus dan creamy (sekitar 1-2 menit).",
            "Jika terlalu kental, tambahkan sedikit susu. Jika terlalu encer, tambahkan es atau pisang beku.",
            "Tuang smoothie ke dalam bowl.",
            "Susun topping dengan cantik: buat baris pisang, strawberry, dan blueberry.",
            "Taburkan granola di satu sisi dan chia seeds di sisi lain.",
            "Tambahkan topping favorit lainnya seperti coconut flakes atau biji-bijian.",
            "Makan segera dengan sendok dan nikmati!"
        ]
    },
    {
        id: "5",
        title: "Vietnamese Spring Rolls",
        category: "Hidangan Utama",
        image: "images/spring-rolls.jpg",
        prepTime: "30 menit",
        servings: "6 rolls",
        difficulty: "Sedang",
        description: "Spring rolls segar dengan sayuran renyah dan rice noodles. Disajikan dengan saus kacang pedas yang addictive.",
        ingredients: [
            "6 lembar rice paper",
            "100g rice vermicelli noodles",
            "1 wortel, julienne",
            "1 mentimun, julienne",
            "1 paprika merah, iris tipis",
            "1/2 kol ungu, iris halus",
            "Daun selada",
            "Daun mint segar",
            "Daun ketumbar",
            "Untuk saus kacang:",
            "3 sdm selai kacang",
            "2 sdm kecap asin",
            "1 sdm cuka beras",
            "1 sdt sriracha",
            "Air hangat secukupnya"
        ],
        instructions: [
            "Masak rice noodles sesuai petunjuk kemasan, tiriskan dan bilas dengan air dingin.",
            "Siapkan semua sayuran dan herbs, potong sesuai ukuran yang diinginkan.",
            "Untuk saus: campur semua bahan saus dalam mangkuk, tambahkan air hangat hingga konsistensi yang diinginkan.",
            "Isi mangkuk dangkal dengan air hangat untuk merendam rice paper.",
            "Celupkan rice paper ke dalam air selama 10-15 detik hingga sedikit lembut.",
            "Letakkan rice paper di atas talenan atau piring datar.",
            "Tata selada, noodles, dan sayuran di bagian bawah tengah rice paper.",
            "Lipat bagian bawah rice paper ke atas, lalu lipat kedua sisi ke tengah.",
            "Gulung dengan kencang hingga membentuk spring roll.",
            "Ulangi hingga semua bahan habis.",
            "Sajikan dengan saus kacang untuk dipping."
        ]
    },
    {
        id: "6",
        title: "Mediterranean Chickpea Salad",
        category: "Salad",
        image: "images/chickpea-salad.jpg",
        prepTime: "15 menit",
        servings: "4 porsi",
        difficulty: "Mudah",
        description: "Salad Mediterania yang segar dan mengenyangkan dengan chickpeas, sayuran renyah, dan keju feta. Sempurna untuk meal prep.",
        ingredients: [
            "2 kaleng chickpeas (800g), tiriskan dan bilas",
            "1 mentimun, potong dadu",
            "200g tomat cherry, belah dua",
            "1/2 bawang merah, iris tipis",
            "100g keju feta, potong dadu",
            "1/2 cangkir olive hitam, tanpa biji",
            "2 sdm peterseli segar, cincang",
            "Untuk dressing:",
            "4 sdm minyak zaitun extra virgin",
            "2 sdm cuka anggur merah",
            "1 sdt oregano kering",
            "1 siung bawang putih, cincang halus",
            "Garam dan merica secukupnya"
        ],
        instructions: [
            "Bilas chickpeas dengan air dingin dan tiriskan dengan baik.",
            "Potong mentimun, tomat cherry, bawang merah, dan keju feta.",
            "Masukkan chickpeas, mentimun, tomat, bawang merah, feta, dan olive ke dalam mangkuk besar.",
            "Dalam jar kecil, campurkan semua bahan dressing.",
            "Tutup jar dan kocok kuat hingga dressing emulsi dan tercampur sempurna.",
            "Tuang dressing ke atas salad.",
            "Aduk perlahan hingga semua bahan terbalut dressing dengan rata.",
            "Taburkan peterseli cincang di atasnya.",
            "Diamkan di kulkas selama 15-30 menit agar rasa meresap.",
            "Sajikan dingin atau suhu ruang. Salad ini bisa bertahan 3-4 hari di kulkas dalam wadah tertutup."
        ]
    }
];

// State
let currentCategory = "Semua";
let currentRecipe = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderRecipes();
    initializeFilters();
});

// Render Recipes
function renderRecipes() {
    const grid = document.getElementById('recipesGrid');
    const filteredRecipes = currentCategory === "Semua" 
        ? recipes 
        : recipes.filter(recipe => recipe.category === currentCategory);
    
    if (filteredRecipes.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--muted-text);">Tidak ada resep dalam kategori ini.</p>';
        return;
    }
    
    grid.innerHTML = filteredRecipes.map((recipe, index) => `
        <div class="recipe-card" onclick="openRecipeModal('${recipe.id}')" style="animation-delay: ${index * 0.1}s">
            <div class="recipe-card-image-wrapper">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card-image">
                <div class="recipe-card-overlay"></div>
                <div class="recipe-card-content">
                    <span class="recipe-category">${recipe.category}</span>
                    <h3 class="recipe-title">${recipe.title}</h3>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Filter Buttons
function initializeFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderRecipes();
        });
    });
}

// Open Recipe Modal
function openRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    currentRecipe = recipe;
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header-image">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="modal-header-overlay"></div>
            <div class="modal-header-content">
                <span class="recipe-category">${recipe.category}</span>
                <h2 class="modal-recipe-title">${recipe.title}</h2>
                <div class="modal-recipe-info">
                    <div class="info-item">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>${recipe.prepTime}</span>
                    </div>
                    <div class="info-item">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>${recipe.servings}</span>
                    </div>
                    <div class="info-item">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v6"></path>
                            <path d="M12 18v6"></path>
                            <path d="m4.93 4.93 4.24 4.24"></path>
                            <path d="m14.83 14.83 4.24 4.24"></path>
                            <path d="M2 12h6"></path>
                            <path d="M18 12h6"></path>
                            <path d="m4.93 19.07 4.24-4.24"></path>
                            <path d="m14.83 9.17 4.24-4.24"></path>
                        </svg>
                        <span>${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal-recipe-content">
            <p class="modal-description">${recipe.description}</p>
            
            <div class="content-section">
                <h3>Bahan-Bahan</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `
                        <li>
                            <span class="ingredient-bullet"></span>
                            <span>${ingredient}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="content-section">
                <h3>Langkah-Langkah</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(instruction => `
                        <li>${instruction}</li>
                    `).join('')}
                </ol>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentRecipe = null;
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
