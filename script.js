// קובע את הקבועים לחישובים (ניתן לשנות אותם בהתאם לצורך)
const DRINKER_PERCENTAGE = 0.65; // 65% מהאורחים שותים אלכוהול
const DRINKS_PER_PERSON = 3.5;  // 3.5 משקאות לאדם בממוצע

// יחס המרה מבקבוק ליטר למשקה
const SHOTS_PER_LITER = 20; // בקבוק 1 ליטר = כ-20 מנות
const WINE_SERVINGS_PER_LITER = 6; // בקבוק יין 1 ליטר = כ-6 כוסות
const BEER_SERVINGS_PER_LITER = 2; // בקבוק בירה 1 ליטר (שלישיה) = כ-2 כוסות

function calculateBottles() {
    const guestsInput = document.getElementById('guests');
    const resultsDiv = document.getElementById('results');
    const numberOfGuests = parseInt(guestsInput.value);

    // ודא שהקלט הוא מספר חוקי
    if (isNaN(numberOfGuests) || numberOfGuests <= 0) {
        resultsDiv.innerHTML = '<p style="color: red;">אנא הזינו מספר אורחים חוקי.</p>';
        return;
    }

    // חישוב מספר האורחים ששותים
    const numberOfDrinkers = Math.round(numberOfGuests * DRINKER_PERCENTAGE);
    
    // חישוב סך המשקאות הכולל
    const totalDrinks = numberOfDrinkers * DRINKS_PER_PERSON;

    // חלוקת המשקאות לסוגים (הערכה גסה)
    const spiritDrinks = totalDrinks * 0.4; // 40% משקאות חריפים
    const wineDrinks = totalDrinks * 0.3;   // 30% יין
    const beerDrinks = totalDrinks * 0.3;   // 30% בירה

    // חישוב כמות הבקבוקים הנדרשת
    const spiritsBottles = Math.ceil(spiritDrinks / SHOTS_PER_LITER);
    const wineBottles = Math.ceil(wineDrinks / WINE_SERVINGS_PER_LITER);
    const beerBottles = Math.ceil(beerDrinks / BEER_SERVINGS_PER_LITER);

    // יצירת פלט התוצאות
    resultsDiv.innerHTML = `
        <h3>הערכה לכמות הבקבוקים הדרושה:</h3>
        <p><strong>יין (ליטר):</strong> ${wineBottles} בקבוקים</p>
        <p><strong>בירה (ליטר):</strong> ${beerBottles} בקבוקים</p>
        <p><strong>משקאות חריפים (ליטר):</strong> ${spiritsBottles} בקבוקים</p>
        <hr>
        <p><strong>סה"כ משקאות לאדם:</strong> ${DRINKS_PER_PERSON} (בהנחה ש-${DRINKER_PERCENTAGE*100}% מהאורחים שותים).</p>
    `;
}
